1. language-babel 설치

2. language-babel 환경설정

3. .babelrc 작성

4. package.json 파일 생성
$ npm init -y

5. 트랜스파일링 라이브러리 설치
$ npm install --save-dev babel-preset-latest

6. 환경설정을 완비하고 테스트
.babelrc
```
{
  "only": ["*.es6"],
  "presets": ["latest"],
  "plugins": [],
  "ignore": []
}
```

7. 확장자 변경 후 저장
- provider.es6
- consumer.es6

8. 생성된 .js 파일을 실행
