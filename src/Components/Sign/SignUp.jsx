import React, { useState } from 'react';
import '../../css/UserStyle.css';
import '../../css/Style.css';

import axios from 'axios';

const SignUp = () => {
  const getElementValue = (id) => document.getElementById(id).value;
  const getCheckedValue = (className) =>
    document.querySelector(`.${className}:checked`).value;

  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedName, setSelectedName] = useState('');

  // 파일 업로드 핸들러
  const handleFileInputChange = (event) => {
    const fileInput = event.target;
    const newFiles = Array.from(fileInput.files).map((file) => ({
      name: file.name,
      id: Date.now(),
    }));
    const totalFiles = selectedFileName.length + newFiles.length;

    if (totalFiles > 3) {
      alert('파일은 3개까지 올릴 수 있습니다.');
      return;
    }

    setSelectedFileName((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // 업로드 파일 삭제 핸들러
  const handleDeleteFile = (id) => {
    setSelectedFileName((prevFiles) =>
      prevFiles.filter((file) => file.id !== id),
    );
  };

  // 업로드 버튼 핸들러
  const handleFileBtnClick = () => {
    document.getElementById('selectedFile').click();
  };

  // 파일다중선택 return
  const renderFileList = () => {
    // selectedFileName이 배열인지 확인
    if (!Array.isArray(selectedFileName)) {
      console.error('selectedFileName is not an array.');
      return null; // 또는 다른 적절한 처리를 추가하세요.
    }

    return selectedFileName.map((file) => (
      <p className='uploadFileList' key={file.id}>
        <span style={{ marginRight: '5px' }}>{file.name}</span>
        <p onClick={() => handleDeleteFile(file.id)}>X</p>
      </p>
    ));
  };
  // submit
  const submitBtnClick = (event) => {
    // 폼의 기본 동작 방지 (페이지 새로고침 방지)
    event.preventDefault();

    const email = document.getElementById('email').value;
    const domain = document.getElementById('email_domain').value;
    // 이메일과 도메인을 조합한 회원 이메일 생성
    const memberEmail = domain === '' ? email : email + domain;
    const name = getElementValue('name');
    const birth = getElementValue('birth');
    const sex = getCheckedValue('sex');
    const tel = getElementValue('tel');
    const pwd = getElementValue('pwd');
    const addrMain = getElementValue('addr_main');
    const addrDetail = getElementValue('addr_detail');
    const auth = getCheckedValue('auth');

    // Null Check
    if (
      [
        name,
        birth,
        sex,
        email,
        domain,
        tel,
        pwd,
        addrMain,
        addrDetail,
        auth,
      ].some((value) => !value)
    ) {
      console.error('하나 이상의 요소를 찾을 수 없습니다.');
      return;
    }

    // FormData 객체 생성
    const formData = new FormData();

    // 회원 정보를 FormData에 직접 추가
    formData.append('userEmail', memberEmail);
    formData.append('userPwd', pwd);
    formData.append('userName', name);
    formData.append('userBirth', birth);
    formData.append('userSex', sex);
    formData.append('userTel', tel);
    formData.append('userAddrMain', addrMain);
    formData.append('userAddrDetail', addrDetail);
    formData.append('userAuth', auth);

    // 선택된 파일이 있으면 FormData에 추가
    const selectedFileInput = document.getElementById('selectedFile');
    if (selectedFileInput && selectedFileInput.files.length > 0) {
      Array.from(selectedFileInput.files).forEach((file) => {
        formData.append('fileList', file);
      });
    }
    // 회원가입 요청을 서버에 전송
    axios
      .post('http://localhost:8080/users/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 이 부분이 중요합니다.
        },
      })
      .then((res) => {
        // 성공적으로 응답 받았을 때의 처리
        console.log(res.data);
      })
      .catch((e) => {
        // 오류 발생 시의 처리
        console.error('회원가입 에러: ' + e.message);
      });
    for (var pair of formData.entries()) {
      console.log('폼데이터', pair[0] + ', ' + pair[1]);
    }
  };
  // ... (handleFileBtnClick 등의 함수는 그대로 유지)

  return (
    <div className='mainContainer'>
      <div id='signUpForm' className='signUpForm'>
        <div id='signUpWrapper' className='signUpWrapper'>
          <h4>
            회원가입<span>회원가입</span>
          </h4>
          <div id='signUpInputForm' className='signUpInputForm'>
            <table id='signUpTable' className='signUpTable'>
              <tr>
                <td colSpan={2}>
                  <span>
                    <input
                      type='text'
                      className='member_name'
                      id='name'
                      placeholder='　이름을 입력하세요'
                      style={{ width: '500px' }}
                      minLength={2}
                      max={15}
                      value={selectedName.trim()}
                      onChange={(e) => {
                        setSelectedName(e.target.value);
                      }}
                    />
                    <label>이름</label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <input
                      type='text'
                      className='member_birth'
                      id='birth'
                      placeholder='　생년월일 8자리를 입력해주세요 ( 년도/월/일 )'
                      minLength={8}
                      maxLength={8}
                    />
                    <label>생년월일</label>
                  </span>
                </td>
                <td>
                  <input
                    type='radio'
                    className='sex'
                    id='sexM'
                    value='M'
                    name='sex'
                    defaultChecked
                  />
                  남자
                  <input
                    type='radio'
                    className='sex'
                    id='sexF'
                    value='F'
                    name='sex'
                  />
                  여자
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <input
                      type='text'
                      className='member_email'
                      id='email'
                      placeholder='　이메일형식'
                    />
                    <label>아이디</label>
                  </span>
                </td>
                <td>
                  <select className='member_email_domain' id='email_domain'>
                    <option value='@naver.com'> @naver.com </option>
                    <option value='@daum.net'> @daum.net </option>
                    <option value='@google.com'> @google.com </option>
                    <option value=''>직접입력</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <input
                      type='text'
                      className=''
                      placeholder='　인증번호를 입력하세요'
                    />
                    <label>인증번호</label>
                  </span>
                </td>
                <td>
                  <button id='emailBtn'>인증받기</button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span>
                    <input
                      type='text'
                      className='member_tel'
                      id='tel'
                      placeholder="　'-' 없이 입력하세요"
                      style={{ width: '500px' }}
                    />
                    <label>전화번호</label>
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span>
                    <input
                      type='password'
                      className='member_pwd'
                      id='pwd'
                      style={{ width: '500px' }}
                      placeholder='　영어,숫자,특수문자를 포함한 8~20자 '
                      minLength={8}
                      maxLength={20}
                    />
                    <label>비밀번호</label>
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span>
                    <input
                      type='password'
                      className='member_ckpwd'
                      style={{ width: '500px' }}
                      minLength={8}
                      maxLength={20}
                    />
                    <label style={{ fontSize: '12px' }}>비밀번호확인</label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <input
                      type='text'
                      className='member_addr_main'
                      id='addr_main'
                      placeholder='　주소를 입력해주세요'
                    />
                    <label>주소</label>
                  </span>
                </td>
                <td>
                  <button id='addrBtn'>주소검색</button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span>
                    <input
                      type='text'
                      className='member_addr_detail'
                      id='addr_detail'
                      style={{ width: '500px' }}
                      placeholder='　나머지 주소를 입력해주세요'
                    />
                    <label style={{ fontSize: '11px' }}>상세주소</label>
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span id='partnerShipSpan'>
                    <label id='partnerShip'>회원유형</label>
                  </span>
                  <input
                    type='radio'
                    className='auth'
                    id='authN'
                    value='N'
                    name='auth'
                    defaultChecked
                  />
                  일반
                  <input
                    type='radio'
                    className='auth'
                    id='authD'
                    value='D'
                    name='auth'
                  />
                  의사
                  <input
                    type='radio'
                    className='auth'
                    id='authS'
                    value='S'
                    name='auth'
                  />
                  약국
                </td>
              </tr>
              <tr>
                <td className='uploadFileListTd'>
                  <span id='partnerShipSpan'>
                    <label id='partnerShip'>증명파일</label>
                  </span>
                  <div className='uploadFileListContainer'>
                    {renderFileList()}
                  </div>
                </td>

                <td>
                  <input
                    type='button'
                    id='fileBtn'
                    onClick={handleFileBtnClick}
                    value='파일업로드'
                  />
                  <input
                    type='file'
                    id='selectedFile'
                    style={{ display: 'none' }}
                    accept='image/*'
                    onChange={handleFileInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button className='signUpBtn' onClick={submitBtnClick}>
                    확인
                  </button>
                  <button className='signUpBtn'>취소</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
