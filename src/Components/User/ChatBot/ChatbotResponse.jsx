export const site = [
  {
    textTypes: [
      '비대면 채팅',
      '비대',
      '채팅',
      '온라인 상담',
      '원격 채팅',
      '가상 상담',
      '비대면 진료',
      '비대면 상담',
      '온라인 진료',
      '원격 상담',
      '가상 진료',
    ],
    text: '비대면 진료로 이동',
    site: '/clinic',
    linkText: '진료 바로가기',
  },
  {
    textTypes: [
      '약 이미지 검색',
      '약 이미지',
      '약',
      '이미지',
      '검색',
      '약 정보 조회',
      '의약품 사진 검색',
      '의약품 이미지 찾기',
    ],
    text: '약 이미지 검색을 지원합니다.',
    site: '/imageSearch',
    linkText: '이미지 검색하기',
  },
  {
    textTypes: [
      '병원 찾기',
      '병원',
      '병원 검색',
      '의원 찾기',
      '진료장소 찾기',
      '의료기관 검색',
      '병원 위치 조회',
    ],
    text: '병원을 찾아드릴게요.',
    site: '/searchHospital',
    linkText: '병원 찾기',
  },
  {
    textTypes: [
      '약국 찾기',
      '약국',
      '약국 검색',
      '약국 위치',
      '약 지점 찾기',
      '약점 찾기',
      '약국 위치 조회',
    ],
    text: '가까운 약국을 찾아드릴게요.',
    site: '/searchDrugStore',
    linkText: '약국 찾기',
  },
  {
    textTypes: [
      '마이페이지',
      '마이',
      '페이지',
      '개인 정보',
      '내 정보',
      '계정 설정',
      '프로필 보기',
      '사용자 정보',
      '사용자 설정',
    ],
    text: '마이페이지 기능을 사용하실 수 있습니다.',
    site: '/user',
    linkText: '마이페이지로 이동',
  },
  {
    textTypes: [
      '정보수정',
      '정보',
      '수정',
      '개인 정보 수정',
      '프로필 편집',
      '계정 정보 변경',
      '사용자 정보 수정',
    ],
    text: '정보수정 기능을 이용해주세요.',
    site: '/user/profileEdit',
    linkText: '정보수정하러 가기',
  },
  {
    textTypes: [
      '결제수단',
      '결제',
      '수단',
      '결제 설정',
      '지불 방법',
      '결제 방식',
      '결제 정보 변경',
    ],
    text: '결제수단을 설정할 수 있습니다.',
    site: '/user/payment',
    linkText: '결제수단 설정하기',
  },
  {
    textTypes: [
      '진료내역조회',
      '진료',
      '내역',
      '조회',
      '진료 기록 조회',
      '진료 내역 확인',
      '의료 기록 검색',
    ],
    text: '진료내역을 조회할 수 있습니다.',
    site: '/user/manager',
    linkText: '진료내역 보러가기',
    state: 'history',
  },
  {
    textTypes: [
      '1:1 문의',
      '1:1',
      '문의',
      '고객 문의',
      '질문',
      '문제 해결',
      '고객 지원',
    ],
    text: '1:1 문의내역을 조회할 수 있습니다.',
    site: '/user/manager',
    linkText: '1:1문의 보러가기',
    state: 'inquiry',
  },
  {
    textTypes: [
      '리뷰관리',
      '리뷰',
      '평가',
      '후기',
      '고객 리뷰',
      '제품 평가',
      '서비스 평가',
    ],
    text: '결제수단관리를 조회할 수 있습니다.',
    site: '/user/manager',
    linkText: '리뷰 보러가기',
    state: 'review',
  },
];

export const department = [
  {
    textTypes: [
      '가정의학과',
      '가정의학',
      '가정의학 전문의',
      '가정의학과 진료',
      '가정',
      '가',
      '가정의',
      '가전',
      '가정의학과 진료소',
      '가정의학과 진료 예약',
    ],
    text: '가정의학과 정보를 보여드릴게요.',
    site: '/clinic/doctor',
    linkText: '가정의학과 바로가기',
    state: '가정의학과',
  },
  {
    textTypes: [
      '내과',
      '내과 전문의',
      '내과 진료',
      '내',
      '내과 상담',
      '내과 예약',
      '내과 진료소',
      '내과 진료 예약',
    ],
    text: '내과 정보를 보여드릴게요.',
    site: '/clinic/doctor',
    linkText: '내과 바로가기',
    state: '내과',
  },
  {
    textTypes: ['산부인과', '산부인과 전문의', '산부인과 진료'],
    text: '산부인과 정보를 보여드릴게요.',
    site: '/clinic/doctor',
    linkText: '산부인과 바로가기',
    state: '산부인과',
  },
  {
    textTypes: [
      '산부인과',
      '산부인과 전문의',
      '산부인과 진료',
      '산',
      '산부인과 상담',
      '산부인과 예약',
      '산부인과 진료소',
      '산부인과 진료 예약',
    ],
    text: '성형외과 정보를 보여드릴게요.',
    site: '/clinic/doctor',
    linkText: '성형외과 바로가기',
    state: '성형외과',
  },
  {
    textTypes: [
      '신경과',
      '신경',
      '신경과 전문의',
      '신경과 진료',
      '신경 상담',
      '신경 예약',
      '신경과 진료소',
      '신경과 진료 예약',
    ],
    text: '신경과 정보를 보여드릴게요.',
    site: '/clinic/doctor',
    linkText: '신경과 바로가기',
    state: '신경과',
  },
  {
    textTypes: [
      '안과',
      '안',
      '안과 전문의',
      '안과 진료',
      '안과 상담',
      '안과 예약',
      '안과 진료소',
      '안과 진료 예약',
    ],
    text: '안과 정보를 보여드릴게요.',
    site: '/clinic/doctor',
    linkText: '안과 바로가기',
    state: '안과',
  },
  {
    textTypes: [
      '치과',
      '치',
      '치과 전문의',
      '치과 진료',
      '치과 상담',
      '치과 예약',
      '치과 진료소',
      '치과 진료 예약',
    ],
    text: '치과 정보를 보여드릴게요.',
    site: '/clinic/doctor',
    linkText: '치과 바로가기',
    state: '치과',
  },
  {
    textTypes: [
      '이비인후과',
      '이비인',
      '이비인후과 전문의',
      '이비인후과 진료',
      '이비인후과 상담',
      '이비인후과 예약',
      '이비인후과 진료소',
      '이비인후과 진료 예약',
    ],
    text: '이비인후과 정보를 보여드릴게요.',
    site: '/clinic/doctor',
    linkText: '이비인후과 바로가기',
    state: '이비인후과',
  },
  {
    textTypes: [
      '소아과',
      '소아',
      '소아과 전문의',
      '소아과 진료',
      '소아과 상담',
      '소아과 예약',
      '소아과 진료소',
      '소아과 진료 예약',
    ],
    text: '소아과 정보를 보여드릴게요.',
    site: '/clinic/doctor',
    linkText: '소아과 바로가기',
    state: '소아과',
  },
];

export const symptoms = [
  {
    textTypes: [
      '배',
      '소화',
      '복통',
      '속쓰림',
      '구토',
      '설사',
      '변비',
      '위염',
      '식욕부진',
      '소화불량',
      '복부팽만',
      '가스',
      '토',
      '혹진',
      '소화물',
      '식욕저하',
      '감기',
      '호흡',
      '가슴',
      '손목',
      '근육',
      '배변',
      '피부',
      '발진',
      '두부',
      '통증',
      '감기',
      '검사',
      '검사 및 검진',
      '건강 검진',
      '검진 예약',
      '건강 상태 확인',
      '체크업',
    ],
    text: '해당 증상은 내과에서 진료 받을 수 있습니다.',
    site: '/clinic/doctor',
    linkText: '내과 바로가기',
    state: '내과',
  },
  {
    textTypes: [
      '임신',
      '생리',
      '유방통',
      '산후우울증',
      '출산',
      '태아',
      '태교',
      '임신 검사',
      '임신 초기 증상',
      '임산부 돌봄',
      '생리 불순',
      '생리통',
      '유방 종양',
      '유방 감소',
      '산후 우울',
      '산모관리',
      '임신 가이드',
      '산모',
      '자궁',
      '폐경',
      '자궁',
      '생식기',
      '성병',
      '검사',
      '검사 및 검진',
      '건강 검진',
      '검진 예약',
      '건강 상태 확인',
      '체크업',
    ],
    text: '여성 관련된 증상은 산부인과에서 진료 받을 수 있습니다.',
    site: '/clinic/doctor',
    linkText: '산부인과 바로가기',
    state: '산부인과',
  },
  {
    textTypes: [
      '성형',
      '성형외과',
      '보톡스',
      '주름',
      '레이저',
      '지방흡입',
      '윤곽',
      '윤곽수술',
      '코수술',
      '유방 재건',
      '지방 이식',
      '얼굴 리프팅',
      '안면 윤곽',
      '지방 제거',
      '미용 수술',
      '바디 컨투링',
      '리프팅',
      '미간',
      '주름',
      '입술',
      '턱수술',
      '복부성형술',
      '지방',
      '이동',
      '안면',
      '봉합',
      '안면',
      '미용',
      '여드룸',
      '형터',
      '이식',
      '눈썹',
      '검사',
      '검사 및 검진',
      '건강 검진',
      '검진 예약',
      '건강 상태 확인',
      '체크업',
    ],
    text: '성형 관련된 증상은 성형외과에서 진료 받을 수 있습니다.',
    site: '/clinic/doctor',
    linkText: '성형외과 바로가기',
    state: '성형외과',
  },
  {
    textTypes: [
      '두통',
      '뇌',
      '뇌졸증',
      '두근거림',
      '두통 치료',
      '뇌질환',
      '뇌졸증 증상',
      '두근거림 원인',
      '두통 종류',
      '신경 질환',
      '뇌종양',
      '뇌출혈',
      '뇌졸증 치료',
      '두근거림 치료',
      '두통 약',
      '뇌졸증 예방',
      '신경계',
      '신경',
      '운동',
      '운동 신경계',
      '운동 기능',
      '운동 장애',
      '검사',
      '검사 및 검진',
      '건강 검진',
      '검진 예약',
      '건강 상태 확인',
      '체크업',
    ],
    text: '신경 관련된 증상은 신경과에서 진료 받을 수 있습니다.',
    site: '/clinic/doctor',
    linkText: '신경과 바로가기',
    state: '신경과',
  },
  {
    textTypes: [
      '안과',
      '시력',
      '안과 진료',
      '안과 상담',
      '안과 예약',
      '안과 진료소',
      '안과 진료 예약',
      '안과 특화',
      '안구 건강',
      '안구 질환',
      '망막',
      '망막 질환',
      '황반변성',
      '안내',
      '카라',
      '선글라스',
      '안과용품',
      '콘택트렌즈',
      '렌즈',
      '눈건강',
      '눈',
      '눈물',
      '눈시림',
      '눈가려움',
      '눈건조증',
      '눈곱슬',
      '눈눈',
      '눈물과립',
      '눈물증',
      '눈물도',
      '눈부심',
      '눈눈감기',
      '눈동자',
      '눈건강식품',
      '눈광',
      '눈눈물증',
      '눈눈섭취',
      '눈시력',
      '눈물질환',
      '눈눈수면',
      '눈보호',
      '눈속바람',
      '눈수',
      '눈썹',
      '눈안',
      '눈안검사',
      '눈안건강',
      '눈안노화',
      '눈안도',
      '눈안물',
      '눈안병증',
      '눈안색소',
      '눈안식품',
      '눈안영양',
      '눈안질환',
      '눈안처치',
      '눈안치료',
      '눈안환경',
      '눈안활동',
      '눈앓이',
      '눈앓이방법',
      '눈앓이치료',
      '눈자세',
      '눈종류',
      '눈피로',
      '눈피로증상',
      '눈피로증후',
      '눈피로증후조절',
      '눈피로치료',
      '눈피로환경',
      '눈화',
      '눈화물',
      '눈화식품',
      '눈화환경',
      '안과검사',
      '안과렌즈',
      '안과망막',
      '안과부작용',
      '안과수면',
      '안과용품',
      '안과진료',
      '안과처치',
      '안과치료',
      '안과환경',
      '눈광과립',
      '눈눈과립',
      '눈보호과립',
      '눈물과립',
      '눈물질환과립',
      '눈눈수면과립',
      '눈자세과립',
      '눈피로과립',
      '눈화과립',
      '안과검사과립',
      '안과렌즈과립',
      '안과망막과립',
      '안과부작용과립',
      '안과수면과립',
      '안과용품과립',
      '안과진료과립',
      '안과처치과립',
      '안과치료과립',
      '안과환경과립',
    ],
    text: '눈과 관련된 증상은 안과에서 진료 받을 수 있습니다.',
    site: '/clinic/doctor',
    linkText: '안과 바로가기',
    state: '안과',
  },
  {
    textTypes: [
      '치과',
      '치과 진료',
      '치과 상담',
      '치과 예약',
      '치과 진료소',
      '치과 진료 예약',
      '치과 특화',
      '입냄새',
      '치주질환',
      '치아교정',
      '보철',
      '치아미백',
      '충치',
      '치아',
      '면역',
      '치아발치',
      '치아예방',
      '치아전문',
      '치아진료',
      '치아질환',
      '치아치료',
      '치아환경',
      '치과검사',
      '치과렌즈',
      '치과망막',
      '치과부작용',
      '치과수면',
      '치과용품',
      '치과진료',
      '치과처치',
      '치과치료',
      '치과환경',
      '치주질환',
      '치아교정',
      '치아미백',
      '치아발치',
      '치아예방',
      '치아전문',
      '치아진료',
      '치아질환',
      '치아치료',
      '치아환경',
      '치과검사',
      '치과렌즈',
      '치과망막',
      '치과부작용',
      '치과수면',
      '치과용품',
      '치과진료',
      '치과처치',
      '치과치료',
      '치과환경',
      '치주질환',
      '치아교정',
      '치아미백',
      '치아발치',
      '치아예방',
      '치아전문',
      '치아진료',
      '치아질환',
      '치아치료',
      '치아환경',
      '치과검사',
      '치과렌즈',
      '치과망막',
      '치과부작용',
      '치과수면',
      '치과용품',
      '치과진료',
      '치과처치',
      '치과치료',
      '치과환경',
      '치주질환',
      '치아교정',
      '치아미백',
      '치아발치',
      '치아예방',
      '치아전문',
      '치아진료',
      '치아질환',
      '치아치료',
      '치아환경',
      '치과검사',
      '치과렌즈',
      '치과망막',
      '치과부작용',
      '치과수면',
      '치과용품',
      '치과진료',
      '치과처치',
      '치과치료',
      '치과환경',
      '치주질환',
      '치아교정',
      '치아미백',
      '치아발치',
      '치아예방',
      '치아전문',
      '치아진료',
      '치아질환',
      '치아치료',
      '치아환경',
      '치과검사',
      '치과렌즈',
      '치과망막',
      '치과부작용',
      '치과수면',
      '치과용품',
      '치과진료',
      '치과처치',
      '치과치료',
      '치과환경',
      '치주질환',
      '치아교정',
      '치아미백',
      '치아발치',
      '치아예방',
      '치아전문',
      '치아진료',
      '치아질환',
      '치아치료',
      '치아환경',
      '치과검사',
      '치과렌즈',
      '치과망막',
      '치과부작용',
      '치과수면',
      '치과용품',
      '치과진료',
      '치과처치',
      '치과치료',
      '치과환경',
    ],
    text: '치아와 입안 관련된 증상은 치과에서 진료 받을 수 있습니다.',
    site: '/clinic/doctor',
    linkText: '치과 바로가기',
    state: '치과',
  },
  {
    textTypes: [
      '코막힘 증상',
      '코피부 질환',
      '코중격',
      '코 이물질',
      '비강 질환',
      '인후염',
      '이명',
      '귀마비',
      '코 피부염',
      '이비인후과 검사',
      '이비인후과 의사',
      '귀 찌릿거림',
      '편도염',
      '코',
      '귀',
      '목',
      '이염',
      '인두염',
      '중이염',
      '후두',
      '청력',
    ],
    text: '눈과 관련된 증상은 이비인후과에서 진료 받을 수 있습니다.',
    site: '/clinic/doctor',
    linkText: '이비인후과 바로가기',
    state: '이비인후과',
  },
  {
    textTypes: ['어린이', '아이', '영양'],
    text: '소아 관련된 증상은 소아과에서 진료 받을 수 있습니다.',
    site: '/clinic/doctor',
    linkText: '소아과 바로가기',
    state: '소아과',
  },
  {
    textTypes: [
      '가정의학과',
      '가정의학',
      '가정의학 전문의',
      '가정의학과 진료',
      '가정',
      '가',
      '가정의',
      '가전',
      '가정의학과 진료소',
      '가정의학과 진료 예약',
    ],
    text: '가정의학과 정보를 보여드릴게요.',
    site: '/clinic/doctor',
    linkText: '가정의학과 바로가기',
    state: '가정의학과',
  },
];

export function handleTags(input, intent, setStateCallback) {
  let doctorItem = null;
  let tagsToCheck;

  switch (intent) {
    case 'site':
      tagsToCheck = site;
      break;
    case 'department':
      tagsToCheck = department;
      break;
    case 'symptoms':
      tagsToCheck = symptoms;
      break;
    default:
      return {
        text: '다시 입력 부탁드립니다.',
        site: '',
        linkText: '',
        state: '',
      };
  }

  for (const tagItem of tagsToCheck) {
    if (tagItem.textTypes.some((type) => input.includes(type))) {
      doctorItem = { ...tagItem }; // Create a copy of the matching item
      if (doctorItem.state) {
        if (setStateCallback && typeof setStateCallback === 'function') {
          setStateCallback(doctorItem.state);
        }
      }
      break;
    }
  }

  if (doctorItem) {
    return {
      text: doctorItem.text + ': ',
      site: doctorItem.site,
      linkText: doctorItem.linkText,
      state: doctorItem.state,
    };
  } else {
    return {
      text: '죄송합니다. 메시지를 이해하지 못했습니다. 다시 말씀해주세요.',
      site: '',
      linkText: '',
      state: '',
    };
  }
}

export function handleDefaultResponse() {
  return {
    text: '죄송합니다. 메시지를 이해하지 못했습니다. 다시 말씀해주세요.',
    site: '',
    linkText: '',
    state: '',
  };
}
