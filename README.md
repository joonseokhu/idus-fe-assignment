# idus 프론트엔드 과제

![결과물 스크린샷](https://user-images.githubusercontent.com/19492260/82863719-d86cb800-9f5d-11ea-80d1-38f3cf1888a7.png)


## 실행방법

1. 해당 레포지토리를 클론합니다.

```bash
git clone https://github.com/joonseokhu/idus-fe-assignment.git
```

2. npm 패키지를 설치합니다.

```bash
npm install
```

3. 개발서버를 실행시킵니다.

```bash
npm start
```

## 프로젝트 설명

과제로 주어진 UI 는 리액트의 컴포넌트로 작성되었습니다. 각각 `Card` `TextArea` 라는 이름으로 export 되어있습니다.

### Card

| name | type | 설명 | 기본값 |
|--------|--------|-------|--------|
| style | obj | 최상위 태그에 넣을 인라인 스타일 | {} |
| className | str | 최상위 태그에 넣을 클래스명 | '' |
| horizontal | boolean | 가로형인지 여부 | false |
| label | str | 리뷰 근처의 텍스트 | null |
| title | str | 제목 | null |
| img | str (url) | 썸네일의 url | null |
| rate | num (1 ~ 5) | 평점 값 | null |
| message | str | 내용에 해당하는 텍스트 | null |
| size | str (css) |썸네일의 한쪽 길이 | 200px(세로형)| 160px(가로형) |
| highlight | str | 빨간색 텍스트 | '' |
| crossout | str | 선으로 그어진 텍스트 | '' |


### TextArea

| name | type | 설명 | 기본값 |
|--------|--------|-------|--------|
| style | obj | 최상위 태그에 넣을 인라인 스타일 | {} |
| className | str | 최상위 태그에 넣을 클래스명 | '' |
| placeholder | str | placeholder 속성 값 | '내용을 입력하세요.' |
| value | str |  | '' |
| disabled | bool | disabled 속성 값 | false |
| readonly | bool | readonly 속성 값 | false |
| onSubmit | func | save 버튼 누를때 콜백 |  |
| max | num | 최대 글자수 |  |
