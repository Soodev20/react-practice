# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# How to install & start project
- Before you start, please make a new .env file at root folder.
- You can check what type of strings need for start this project at example.env file.
- Or you can freely add more info at example.env file and change its name to .env.

```
npm install
npm run start
```

### 사용자 스토리
- [x] 사용자는 검색어를 입력할 수 있습니다.
- [x] 사용자는 검색에 도움이 되는 필터를 설정할 수 있습니다.
- [x] 사용자는 페이지에 나타나는 상품 목록을 볼 수 있습니다.
- [x] 사용자는 상품 목록에서 상품을 클릭 시 상품 상세 페이지를 볼 수 있습니다.

### 요구사항
- [ ] Infinite Scroll을 구현해서 목록 페이징이 가능해야 합니다.
- [x] 검색어 / 필터 정보는 URL 형태로 동기화가 되어야 합니다.
- [x] react, typescript, emotion 을 사용해서 구현합니다.

### 아쉬운 부분
1. 서버에서의 에러처리
  - 구현을 위해 200이 아닐 경우 mockData를 내려주도록 조취함. globalErrorStatus를 만들어서 에러 코드에 따른 처리가 진행되었어야함.
2. infinite scroll의 구현
  - intersectionObserver를 이용해서 구현하다가 ref 타입이 맞지 않아 이를 해결하는데에 시간이 오래 걸렸음. (미해결 상태)
3. 필터의 다양성
  - 가격 및 요일에 대해서도 선택할 수 있도록 필터를 추가해야함. (현재 장소와 유형만 필터 가능)
