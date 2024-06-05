var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

// 더보기 버튼 누르면 상품 3개 가져와서 출력하기
// 버튼 누르기 - 클릭이벤트
document.querySelectorAll('.btn-danger')[0].addEventListener('click', function(){

  // 쌩자바스크립트로 구현하기
fetch('https://codingapple1.github.io/js/more1.json')
  .then(res => res.json())
  .then(function(템플릿02){
    console.log(템플릿02);
  })
  .catch(function(error){
    console.log('실패ㅋㅋ');
  })

});

// 강사코드
$('.btn-danger').click(function(){
  $.get('https://codingapple1.github.io/js/more1.json')
  .done((data)=>{
    console.log(data)
  })
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
products.forEach((a, i)=>{
  var 템플릿 = 
  `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${a.title}</h5>
    <p>가격 : ${products[i].price}</p>
  </div>`;
  $('.row').append(템플릿)
})
