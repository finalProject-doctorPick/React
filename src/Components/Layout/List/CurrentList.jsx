import React, { useEffect, useState } from 'react';
import GenerateButtons from '../Button/GenerateButtons';
import SearchBar from '../SearchBar';
import Button from '../Button';
import { useModalContext } from '../../Context/ModalContext';
import InquiryModal from '../../ModalComponent/InquiryModal';
import Pagination from './Pagination';
import MemberProfileEditModal from '../../ModalComponent/Admin/MemberProfileEditModal';
import DoctorProfileEditModal from '../../ModalComponent/Admin/DoctorProfileEditModal';
import HospitalEditModal from '../../ModalComponent/Admin/HospitalEditModal';
import DrugstoreEditModal from '../../ModalComponent/Admin/DrugstoreEditModal';
import DoctorRequestModal from '../../ModalComponent/Admin/DoctorRequestModal';

const CurrentList = ({
  headers,
  items: originalItems,
  selectable = false,
  style,
  searchBarStyle,
  type,
  buttonType,
  buttonName,
  listbutton,
  listType,
  handleSearch,
  filteredDateItems,
  onDeleteReviews,
  onReviewSelect,
  selectedReviews,
}) => {
  // filteredDateItems 값이 존재하면 해당 값을 items로 사용, 그렇지 않으면 originalItems 사용
  const items = filteredDateItems ? filteredDateItems : originalItems;

  const { openModal } = useModalContext();

  const handleButtonClick = (item, listbutton) => {
    if (buttonName === '작성') {
      openModal(<InquiryModal item={item} />, '1:1문의');
    } else if (listbutton === '수정' && listType === 'user') {
      openModal(<MemberProfileEditModal item={item} />, '회원정보수정');
    } else if (listbutton === '수정' && listType === 'doctor') {
      openModal(<DoctorProfileEditModal item={item} />, '의사정보수정');
    } else if (listbutton === '수정' && listType === 'hospital') {
      openModal(
        <HospitalEditModal item={item} type={'modify'} />,
        '병원정보수정',
      );
    } else if (listbutton === '수정' && listType === 'drugstore') {
      openModal(
        <DrugstoreEditModal item={item} type={'modify'} />,
        '약국정보수정',
      );
    } else if (buttonName === '추가') {
      openModal(<InquiryModal item={item} />, '추가');
    } else if (listbutton === '상세보기') {
      openModal(<DoctorRequestModal item={item} />, '추가');
    } else if (buttonName === '삭제' && buttonType === 'Y') {
      console.log('리뷰삭제 실행');
      console.log(selectedReviews);
      onDeleteReviews(selectedReviews);
    }
  };

  /* 페이징 */
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;

  // 검색 결과가 변경될 때마다 페이지 번호 초기화
  useEffect(() => {
    setPageNumber(0);
  }, [items]);

  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems =
    items && items.length > 0
      ? items.slice(pagesVisited, pagesVisited + itemsPerPage)
      : [];

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const headerKey = headers.map((header) => header.value);

  return (
    <div>
      <table
        className={`listTable ${selectable ? 'checklistTable' : ''}`}
        style={style}
      >
        <thead>
          <tr>
            {selectable && (
              <th style={{ width: '200px' }}>
                <input type='checkbox' />
              </th>
            )}
            {headers.map((header) => (
              <th key={header.key}>{header.text}</th>
            ))}
            {listbutton && <th></th>}
          </tr>
        </thead>
        <tbody>
          {displayItems && displayItems.length > 0 ? (
            displayItems.map((item, index) => (
              <tr key={index}>
                {selectable && (
                  <td style={{ width: '200px' }}>
                    <input
                      type='checkbox'
                      onClick={() => {
                        console.log(item.reviewId, '클릭');
                        onReviewSelect(item.reviewId);
                      }}
                    />
                  </td>
                )}
                {headerKey.map((key) => (
                  <td key={key + index}>
                    {key === 'status' ? (
                      <GenerateButtons status={item[key]} item={item} />
                    ) : (
                      item[key]
                    )}
                  </td>
                ))}
                {listbutton && (
                  <td>
                    <button
                      onClick={() => {
                        handleButtonClick(item, listbutton);
                      }}
                    >
                      {listbutton}
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={
                  headerKey.length + (selectable ? 1 : 0) + (listbutton ? 1 : 0)
                }
              >
                조회된 데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>

        <tfoot>
          <div className='tfootWrapper'>
            {type === 'Date' && buttonType === 'Y' && (
              <div className='tfootSearchWrapper'>
                <Button
                  buttonName={buttonName}
                  buttonType={buttonType}
                  handleButtonClick={handleButtonClick}
                  className={'date-list'}
                />
              </div>
            )}

            {type !== 'Date' && type !== 'Lite' && (
              <div className='tfootSearchWrapper'>
                <Button
                  buttonName={buttonName}
                  buttonType={buttonType}
                  handleButtonClick={handleButtonClick}
                  className={'current-list'}
                />
                {filteredDateItems ? null : (
                  <SearchBar
                    searchBarStyle={searchBarStyle}
                    onSearch={handleSearch}
                  />
                )}
              </div>
            )}
            <div className='tfootPaginationWrapper'>
              <Pagination
                pageCount={items ? Math.ceil(items.length / itemsPerPage) : 0}
                onPageChange={changePage}
              />
            </div>
          </div>
        </tfoot>
      </table>
    </div>
  );
};

export default CurrentList;
