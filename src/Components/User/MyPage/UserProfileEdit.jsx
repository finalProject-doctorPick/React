// 회원정보수정
import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../../img/back-arrow-icon.png';

import Input from '../../Layout/Input';

const UserProfileEdit = () => {
  const navigate = useNavigate();
  return (
    <div className='listWrapper'>
      <div className='listTitle'>
        <img
          className='backIcon'
          src={back}
          onClick={() => {
            navigate(-1);
          }}
          alt='back'
        />
        <h2>회원정보수정</h2>
      </div>
      <div id='signUpInputForm' className='signUpInputForm'>
        <table id='signUpTable' className='signUpTable'>
          <tr>
            <td colSpan={2}>
              <Input
                id='name'
                className='member_name'
                label='이름'
                type='text'
                style={{ width: '500px' }}
                disabled='disabled'
                // value={selectedName.trim()}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Input
                id='birth'
                className='member_birth'
                label='생년월일'
                type='text'
                style={{ width: '500px' }}
                minLength={8}
                maxLength={8}
                disabled='disabled'
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Input
                id='email'
                className='member_email'
                label='아이디'
                type='text'
                style={{ width: '500px' }}
                disabled='disabled'
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <Input
                id='tel'
                className='member_tel'
                label='전화번호'
                type='text'
                style={{ width: '500px' }}
                placeholder="　'-' 없이 입력하세요"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Input
                id='pwd'
                className='member_pwd'
                label='비밀번호'
                type='password'
                style={{ width: '500px' }}
                placeholder='　영어,숫자,특수문자를 포함한 8~20자 '
                minLength={8}
                maxLength={20}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Input
                id='ckpwd'
                className='member_ckpwd'
                label='비밀번호확인'
                type='password'
                style={{ width: '500px', fontSize: '12px' }}
                minLength={8}
                maxLength={20}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                id='addr_main'
                className='member_addr_main'
                type='text'
                label='주소'
                placeholder='　주소를 입력해주세요'
              />
            </td>
            <td>
              <button id='addrBtn'>주소검색</button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Input
                id='addr_detail'
                className='member_addr_detail'
                type='text'
                label='상세주소'
                style={{ width: '500px', fontSize: '11px' }}
                placeholder='　나머지 주소를 입력해주세요'
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <button className='signUpBtn'>수정</button>
              <button className='signUpBtn' style={{ background: '#AECCC8' }}>
                취소
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserProfileEdit;
