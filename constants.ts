import { GuideTopic } from './types';

// Updated with bold colors inspired by the reference images
// The image URLs are now less critical as we use custom SVG art, 
// but we keep them for fallback or texture if needed later.

export const GUIDE_TOPICS: GuideTopic[] = [
  {
    id: 'notion',
    title: '노션 학급운영',
    subtitle: '스마트한 학급 관리',
    description: '주간학습안내, 행사 일정, 업무 분장을 한눈에 정리하는 노션 기초 사용법입니다.',
    imageUrl: '',
    slideUrl: 'https://docs.google.com/presentation/d/1vpcIRcbVcCwWxF4NC_BBYW_iK2mqslZlq-bWHoJT_2Y/embed?start=false&loop=false&delayms=3000',
    downloadUrl: '#',
    tag: '업무 효율',
    themeColor: '#FFFFFF', // White/Grey
    textColor: '#1a1a1a'
  },
  {
    id: 'drive',
    title: '구글 드라이브',
    subtitle: '동학년 협업의 중심',
    description: '공동 문서 작업과 자료 공유를 위한 구글 드라이브 기초 및 심화 활용법 가이드입니다.',
    imageUrl: '', // Handled by custom renderer
    slideUrl: 'https://docs.google.com/presentation/d/1FkPIS_9W24Z_J0B-wBs79ByEvYMbIWluGitngIGh01k/embed?start=false&loop=false&delayms=3000',
    downloadUrl: '#',
    tag: '협업 도구',
    themeColor: '#FFD057', // Yellow Accent
    textColor: '#1a1a1a'
  },
  {
    id: 'substitute',
    title: '보결 규정',
    subtitle: '복무 규정 가이드',
    description: '복잡한 보결 규정과 나이스 상신 방법, 보강 계획서 작성법을 상세히 안내합니다.',
    imageUrl: '',
    slideUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vR6y20y3j3y2931213123/embed',
    downloadUrl: '#',
    tag: '행정 업무',
    themeColor: '#4ADE80', // Green
    textColor: '#064e3b'
  },
  {
    id: 'mteacher',
    title: '엠티처 AI',
    subtitle: '미래엔 AI 클래스',
    description: 'AI 코스웨어 활용 수업과 학생 데이터 분석을 위한 엠티처 AI 클래스 매뉴얼입니다.',
    imageUrl: '',
    slideUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vR6y20y3j3y2931213123/embed',
    downloadUrl: '#',
    tag: '에듀테크',
    themeColor: '#3B82F6', // Blue
    textColor: '#ffffff'
  },
  {
    id: 'desktop',
    title: '바탕화면 세팅',
    subtitle: '업무 최적화 환경',
    description: '학기 초 빠른 업무 처리를 위한 선생님용 윈도우 바탕화면 및 폴더 구조 세팅법입니다.',
    imageUrl: '',
    slideUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vR6y20y3j3y2931213123/embed',
    downloadUrl: '#',
    tag: '환경 설정',
    themeColor: '#0ea5e9', // Sky Blue
    textColor: '#ffffff'
  }
];