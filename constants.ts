import { GuideTopic } from './types';

// Updated with bold colors inspired by the reference images
// The image URLs are now less critical as we use custom SVG art, 
// but we keep them for fallback or texture if needed later.

export const GUIDE_TOPICS: GuideTopic[] = [
  {
    id: 'manual',
    title: '2026 부장 사용 설명서',
    subtitle: '나 사용법 & 다짐',
    description: '스스로 생각해 본 객관화와 올해의 다짐',
    imageUrl: '',
    slideUrl: 'https://docs.google.com/presentation/d/1H8RldsUR7_-euwZPs5rwb_AjDOSfXg1VYuyHsnHtRjA/embed?start=false&loop=false&delayms=3000',
    downloadUrl: '#',
    tag: '마인드셋',
    themeColor: '#FB923C', // Orange
    textColor: '#ffffff'
  },
  {
    id: 'notion',
    title: '노션 동학년 연구소',
    subtitle: '스마트한 학급 관리',
    description: '효율적인 동학년 업무 진행을 위한 노션 기초 사용법입니다.',
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
    description: '자료 공유를 위한 구글 드라이브 기초 활용 가이드입니다.',
    imageUrl: '', // Handled by custom renderer
    slideUrl: 'https://docs.google.com/presentation/d/1FkPIS_9W24Z_J0B-wBs79ByEvYMbIWluGitngIGh01k/embed?start=false&loop=false&delayms=3000',
    downloadUrl: '#',
    tag: '협업 도구',
    themeColor: '#FFD057', // Yellow Accent
    textColor: '#1a1a1a'
  },
  {
    id: 'substitute',
    title: '보결 도우미',
    subtitle: '보결 업무 자동화',
    description: '서로의 마음이 편안한 보결 업무 자동화 시스템을 준비했습니다.',
    imageUrl: '',
    slideUrl: 'https://docs.google.com/presentation/d/1xYBXRVaH7Y83ZdlLjyZdwgDkvzVxU2RH0uoPAF7nr4Y/embed',
    downloadUrl: '#',
    tag: '행정 업무',
    themeColor: '#4ADE80', // Green
    textColor: '#064e3b'
  },
  {
    id: 'mteacher',
    title: '엠티처 AI',
    subtitle: '미래엔 AI 클래스',
    description: '종이 출력X, 수작업 채점X, AI가 문제내고 결과도 한번에 알수 있는 평가시스템',
    imageUrl: '',
    slideUrl: 'https://docs.google.com/presentation/d/1PbuFJGcxWxiS1UB5kfoBZpbj-dW7Bl0Ah6PsFvK5U98/embed',
    downloadUrl: '#',
    tag: '에듀테크',
    themeColor: '#3B82F6', // Blue
    textColor: '#ffffff'
  },
  {
    id: 'desktop',
    title: '바탕화면 세팅',
    subtitle: '업무 최적화 환경',
    description: '한번만 세팅하면 일년 수천번의 클릭을 아낄 수 있습니다.',
    imageUrl: '',
    slideUrl: 'https://docs.google.com/presentation/d/18Rir_KoYNBeXs_RKjKiVoA2MpnZbCecDDRKu1eMFTzM/embed',
    downloadUrl: '#',
    tag: '환경 설정',
    themeColor: '#0ea5e9', // Sky Blue
    textColor: '#ffffff'
  },
  {
    id: 'facility',
    title: '형식적인 시설물점검표 자동화',
    subtitle: '시설물 점검',
    description: '매월 형식적으로 내던 시설물점검표 이제 신경쓰지 마세요. 제가 처리하겠습니다.',
    imageUrl: '',
    slideUrl: 'https://docs.google.com/presentation/d/15ju9nyjezsTRI2V3HAKnfLuaUAxD3gOGkN54qOfZxwM/embed',
    downloadUrl: '#',
    tag: '업무 자동화',
    themeColor: '#8B5CF6', // Violet
    textColor: '#ffffff'
  }
];