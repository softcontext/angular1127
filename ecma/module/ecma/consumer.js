'use strict';

var _provider = require('./provider');

console.log(_provider.a); // ECMA이 제정한 표준 모듈 기술
// 컴파일 작업은 노드가 수행하는데
// 노드는 표준 모듈 기술을 지원하지 않는다.
// 표준 문법으로 작성하고
// 노드의 문법으로 바꾼 다음에 실행해야 한다.
// 1. 콘솔 > 명령어 > Babel: 수동으로 처리
// 2. 에디터 > 패키지(language-babel): 부분적으로 일괄처리
// 3. 앵귤러가 제공하는 CLI 도구를 이용: 일괄처리

// const provider = require('./provider');

(0, _provider.say)();
//# sourceMappingURL=consumer.js.map
