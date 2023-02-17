interface academyType {
  title: string;
  end: number[];
  url: string;
  pre: boolean;
  alarm: boolean;
}
export const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const MONTH_ACADEMY = [
  true,
  true,
  false,
  false,
  true,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
];
export const MONTH_CREW = [
  true,
  true,
  true,
  false,
  true,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
];
export const ACADEMY_LIST: academyType[] = [
  {
    title: '네이버부스트캠프(AI Tech)',
    end: [1],
    url: 'https://boostcamp.connect.or.kr/',
    pre: false,
    alarm: false,
  },
  {
    title: 'sw사관학교 정글',
    end: [1],
    url: 'https://swjungle.net/',
    pre: true,
    alarm: false,
  },
  {
    title: '크래프톤 정글',
    end: [1],
    url: 'https://jungle.krafton.com/',
    pre: true,
    alarm: false,
  },
  {
    title: 'SW마에스트로',
    end: [2],
    url: 'https://www.swmaestro.org/sw/main/main.do',
    pre: false,
    alarm: false,
  },
  {
    title: 'SK쉴더스 루키즈',
    end: [2],
    url: 'https://sslc.kr/',
    pre: false,
    alarm: false,
  },
  {
    title: '우아한테크캠프',
    end: [5],
    url: 'https://techblog.woowahan.com/8154/?utm_source=boottent&utm_medium=referral',
    pre: false,
    alarm: false,
  },
  {
    title: '42서울',
    end: [6],
    url: 'https://42seoul.kr/seoul42/main/view',
    pre: false,
    alarm: false,
  },
  {
    title: '삼성SDS',
    end: [6],
    url: '',
    pre: false,
    alarm: false,
  },
  {
    title: '네이버부스트캠프',
    end: [6],
    url: 'https://boostcamp.connect.or.kr/',
    pre: false,
    alarm: false,
  },
  {
    title: '우아한테크코스',
    end: [10],
    url: 'https://woowacourse.github.io/',
    pre: true,
    alarm: false,
  },
  {
    title: '스마일게이트',
    end: [10],
    url: 'https://careers.smilegate.com/student/development-camp?utm_source=boottent&utm_medium=referral',
    pre: false,
    alarm: false,
  },
  {
    title: '현대자동차그룹',
    end: [10],
    url: 'https://softeerbootcamp.com/',
    pre: false,
    alarm: false,
  },
  {
    title: 'SK하이닉스',
    end: [10],
    url: 'https://sharing.skhynix.com/',
    pre: false,
    alarm: false,
  },
  {
    title: 'SSAFY(싸피)',
    end: [11],
    url: 'https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp',
    pre: false,
    alarm: false,
  },
  {
    title: 'Apple',
    end: [11],
    url: 'https://developeracademy.postech.ac.kr/',
    pre: false,
    alarm: false,
  },
  {
    title: 'KT 에이블스쿨',
    end: [12],
    url: 'https://aivle.kt.co.kr/home/main/indexMain',
    pre: false,
    alarm: false,
  },
];

export const CREW_LIST: academyType[] = [
  {
    title: 'Mash-up',
    end: [1],
    url: 'https://mash-up.kr/',
    pre: false,
    alarm: false,
  },
  {
    title: 'SOPT',
    end: [3],
    url: 'https://sopt.org/',
    pre: false,
    alarm: false,
  },
  {
    title: 'NEXTERS',
    end: [11],
    url: 'https://teamnexters.com/',
    pre: false,
    alarm: false,
  },
  {
    title: 'DEPROMEET',
    end: [2],
    url: 'https://www.depromeet.com/',
    pre: false,
    alarm: true,
  },
  {
    title: 'AUSG',
    end: [6],
    url: 'https://ausg.me/',
    pre: false,
    alarm: false,
  },
  {
    title: 'YAPP',
    end: [3, 9],
    url: 'https://www.yapp.co.kr/',
    pre: false,
    alarm: false,
  },
  {
    title: 'DDD',
    end: [3, 10],
    url: 'https://www.facebook.com/dddstudy',
    pre: false,
    alarm: false,
  },
  {
    title: 'DnD',
    end: [5, 12],
    url: 'https://www.facebook.com/dddstudy',
    pre: false,
    alarm: true,
  },
];

export const YEAR = 2023;
export const EXPLAIN = '대략적인 월단위 표시이기 때문에 꼭 확인하셔야 합니다.';
export const CREW_LABEL = '동아리';
export const ACADEMY_LABEL = '부트캠프';
export const PRE_LABEL = '프리 온보딩';
export const ALARM_LABEL = '사전 알림 신청';
export const YEAR_LABEL = '년';
export const MONTH_LABEL = '월';
