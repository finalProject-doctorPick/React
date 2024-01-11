// buttonHelpers.js

const generateButtons = (status, handleButtonClick) => {
  switch (status) {
    case 'UN':
      return (
        <button
          className='listBtn-mid'
          onClick={() => handleButtonClick('진료실입장하기')}
        >
          진료실입장하기
        </button>
      );
    case 'UY':
      return (
        <div>
          <button
            className='listBtn-short'
            onClick={() => handleButtonClick('진단서')}
          >
            진단서
          </button>
          <button
            className='listBtn-short'
            style={{ background: '#AECCC8' }}
            onClick={() => handleButtonClick('처방전')}
          >
            처방전
          </button>
        </div>
      );
    case 'IN':
      return (
        <button className='clinicSubBtn-mid' style={{ background: '#11c2ad' }}>
          답변대기
        </button>
      );
    case 'IY':
      return <button className='clinicSubBtn-mid'>답변완료</button>;
    case 'RN':
      return (
        <button className='listBtn-short' style={{ background: '#11c2ad' }}>
          작성전
        </button>
      );
    case 'RY':
      return (
        <button className='listBtn-short' style={{ background: '#11c2ad' }}>
          수정
        </button>
      );
    default:
      return null;
  }
};

export default generateButtons;
