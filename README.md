# 요한일서 성경통독 챗봇

모바일 친화적인 요한일서 성경통독 웹 애플리케이션입니다.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📖 프로젝트 소개

요한일서 전체(1-5장)를 쉽고 편하게 읽을 수 있는 모바일 최적화 성경통독 앱입니다. 개역개정판 성경 본문과 바이블 프로젝트 설명 영상, 그리고 개인 묵상 기능을 제공합니다.

## ✨ 주요 기능

### 📚 요한일서 1-5장
- 개역개정판 성경 본문 제공
- 절 번호별로 구분된 가독성 높은 레이아웃
- 맑은 고딕 11pt 폰트로 편안한 독서 경험

### 🎥 요한일서 설명 영상
- 바이블 프로젝트의 요한일서 개요 영상
- 한글 자막 지원
- 반응형 비디오 플레이어

### ✍️ 나의 묵상
- 개인 묵상 작성 및 편집
- 로컬 스토리지 자동 저장
- 30초마다 자동 저장 기능

## 🚀 사용 방법

### 방법 1: 모바일에서 바로 실행 (권장)
1. `index-mobile.html` 파일을 모바일 브라우저에서 엽니다
2. 모든 코드가 단일 파일에 포함되어 있어 별도 설정 없이 바로 작동합니다

### 방법 2: 웹 서버 사용
1. 프로젝트 폴더를 웹 서버에 업로드합니다
2. `index.html` 파일에 접속합니다

### 방법 3: GitHub Pages로 호스팅
1. 이 저장소를 Fork 합니다
2. Settings > Pages에서 GitHub Pages를 활성화합니다
3. 배포된 URL로 접속합니다

## 📁 파일 구조

```
bible-chatbot/
│
├── index.html              # 메인 HTML 파일 (웹 서버용)
├── index-mobile.html       # 모바일 단일 파일 버전 (권장)
├── style.css               # CSS 스타일시트
├── script.js               # JavaScript 기능
├── data.js                 # 요한일서 성경 본문 데이터
└── README.md               # 프로젝트 설명서
```

## 🎨 디자인 특징

- **모바일 최적화**: 스마트폰에서 최적화된 반응형 디자인
- **터치 친화적**: 큰 버튼과 카드 기반 UI
- **직관적 네비게이션**: 뒤로가기 버튼과 채널 방식의 메뉴 구조
- **부드러운 애니메이션**: 페이지 전환 시 자연스러운 효과
- **모던한 디자인**: 그라데이션 보라색 테마

## 💻 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, 그라데이션, 애니메이션
- **Vanilla JavaScript**: 프레임워크 없는 순수 자바스크립트
- **LocalStorage API**: 브라우저 로컬 저장소

## 📱 지원 브라우저

- Chrome (Android/iOS)
- Safari (iOS)
- Samsung Internet
- Firefox Mobile
- 기타 모던 모바일 브라우저

## 📖 성경 본문 출처

- **번역본**: 개역개정판
- **출처**: [대한성서공회](https://www.bskorea.or.kr)

## 🎬 영상 출처

- **제작**: The Bible Project
- **채널**: [BibleProject Korean](https://bibleproject.com/korean/)
- **영상**: 요한일서 개요

## 🛠️ 로컬 개발

```bash
# 저장소 클론
git clone https://github.com/your-username/bible-chatbot.git

# 디렉토리 이동
cd bible-chatbot

# 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 브라우저에서 접속
# http://localhost:8000
```

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🙏 감사의 말

- [대한성서공회](https://www.bskorea.or.kr) - 개역개정 성경 본문 제공
- [The Bible Project](https://bibleproject.com) - 요한일서 설명 영상 제공

## 📧 문의

프로젝트에 대한 문의사항이나 개선 제안이 있으시면 Issue를 생성해주세요.

---

**Made with ❤️ for Bible Reading**
