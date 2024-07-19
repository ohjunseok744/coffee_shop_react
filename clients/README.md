# 커피숍 React 애플리케이션

이 프로젝트는 React와 Vite를 사용한 프론트엔드와 Node.js를 사용한 백엔드로 구성된 커피숍 웹 애플리케이션입니다. 이 설정은 핫 모듈 교체(HMR)와 최신 JavaScript 도구 체인을 통해 빠르고 효율적인 개발 환경을 제공합니다.

## 주요 기능

- Vite와 React를 통한 빠른 새로고침
- Babel 또는 SWC를 사용한 최신 JavaScript 구문
- ESLint를 통한 코드 린팅
- API 요청 처리를 위한 Node.js 백엔드

## 시작하기

### 필수 조건

다음 소프트웨어가 설치되어 있는지 확인하세요:

- [Node.js](https://nodejs.org/) (버전 14 이상)
- [npm](https://www.npmjs.com/) 또는 [Yarn](https://yarnpkg.com/)

### 설치 및 실행

1. 레포지토리를 클론합니다:
    ```sh
    git clone https://github.com/your-username/coffee_shop_react.git
    cd coffee_shop_react
    ```

2. 프론트엔드 의존성을 설치합니다:
    ```sh
    cd frontend
    npm install
    # 또는
    yarn install
    ```

3. 백엔드 의존성을 설치합니다:
    ```sh
    cd ../backend
    npm install
    # 또는
    yarn install
    ```

4. 개발 서버를 실행합니다:

    프론트엔드:
    ```sh
    cd frontend
    npm run dev
    # 또는
    yarn dev
    ```

    백엔드:
    ```sh
    cd ../backend
    npm run start
    # 또는
    yarn start
    ```

## 디렉토리 구조

```
coffee_shop_react/
├── backend/        # Node.js 백엔드 코드
├── frontend/       # React 프론트엔드 코드
├── README.md       # 프로젝트 설명 파일
```

## 사용된 기술 스택

- **프론트엔드**: React, Vite, Babel/SWC, ESLint
- **백엔드**: Node.js, Express

## 기여 방법

기여를 원하시면 다음 단계를 따라 주세요:

1. 레포지토리를 포크합니다.
2. 새로운 브랜치를 생성합니다: `git checkout -b feature/my-new-feature`
3. 변경 사항을 커밋합니다: `git commit -am 'Add some feature'`
4. 브랜치에 푸시합니다: `git push origin feature/my-new-feature`
5. 풀 리퀘스트를 생성합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 문의

프로젝트에 대한 문의 사항이 있으시면 [이메일 주소](mailto:your-email@example.com)로 연락해 주세요.

---

이 문서가 커피숍 웹 애플리케이션 프로젝트를 시작하고 관리하는 데 도움이 되길 바랍니다. 즐거운 코딩 되세요!