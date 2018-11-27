var a = 'John Doe';
var b = "Killer";
var c = `
  <div>
    <h1>${a}</h1>
    <p>${b}</p>
  </div>
`;

console.log(c);
// template string 문법으로 작성한 문자열은 들여쓰기, 줄바꾸기 등이
// 그대로 유지됩니다. HTML <pre></pre> 태그와 비슷합니다.
