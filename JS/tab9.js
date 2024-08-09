var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

// 더보기 버튼 누르면 상품 3개 가져와서 출력하기 - 쌩자바스크립트로 구현하기
// document.querySelectorAll('.btn-danger')[0].addEventListener('click', function(){
// fetch('https://codingapple1.github.io/js/more1.json')
//   .then(res => res.json())
//   .then(function(템플릿02){
//     console.log(템플릿02);
//   })
//   .catch(function(error){
//     console.log('실패ㅋㅋ');
//   })

// });

// 강사코드
  // 누른횟수 카운팅
var clickCnt = 0;

function showProductsList(요청주소) {
  $.get(요청주소)
  .done((data)=>{
    data.forEach((a, i)=>{
      var 템플릿 = 
      `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
      </div>`;
      $('.row').append(템플릿)
    })
  })
}

$('.btn-danger').click(function(){
  clickCnt += 1;
  if (clickCnt == 1) {
  // 1번이면 4,5,6번째 상품 보여주고
  showProductsList('https://codingapple1.github.io/js/more1.json')
  } else if (clickCnt == 2) {
  // 2번이면 7,8,9번째 상품 보여주기
  showProductsList('https://codingapple1.github.io/js/more2.json')
  } else {
  // 3번이면 버튼 숨기기
    alert("상품이 더 없어요");
    document.getElementById('showProductsBtn').classList.add('show-button');
  }

})


// 내코드
// products.forEach(function(a, i){
//   var 템플릿 = `<div class="col-sm-4"><img src="https://via.placeholder.com/600" class="w-100"></div>`;
//   var productTitle = `<h5>${a.title}</h5>`
//   var productPrice = '가격 : ' +  `<p>${a.price}</p>`
//   document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
//   document.querySelector(`.row`).insertAdjacentHTML('beforeend', productTitle);
//   document.querySelector(`.row`).insertAdjacentHTML('beforeend', productPrice);
// })

// 강사코드
// products.forEach((a, i)=>{
//   var 템플릿 = 
//   `<div class="col-sm-4">
//     <img src="https://via.placeholder.com/600" class="w-100">
//     <h5>${a.title}</h5>
//     <p>가격 : ${products[i].price}</p>
//   </div>`;
//   $('.row').append(템플릿)
// })

products.forEach(function(a, i){
  var 템플릿 = 
  `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${a.title}</h5>
    <p>가격 : ${a.price}</p>
  </div>`;
  $('.row').append(템플릿)
})
