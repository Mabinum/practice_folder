// querySelector ('CSS 선택자')
// HTML에서 해당 요소를 검색하여 찾은 첫 번째 요소 하나만 반환
// 요소를 찾지 못하면 null로 반환
const boxEl = document.querySelector('.box');
console.log(boxEl);

// boxEl.addEventListener('click',function(){
//   console.log('Click');
//   boxEl.classList.add(`order-${에그타이어}`);
// });

const spanEl = document.querySelectorAll('span');
spanEl.forEach(function(spanEl,index){
  console.log(index.spanEl);
  spanEl.classList.add(`active`);
});

const boxEl = document.querySelector('.box');
