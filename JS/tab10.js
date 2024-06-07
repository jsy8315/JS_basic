var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

var 어뤠이 = [7, 3, 5, 2, 40]
// 자주쓰는 filter함수
var new어뤠이 = 어뤠이.filter(function(a){
  return a < 4
});
console.log(new어뤠이);

// 자주쓰는 map함수 - 환율 변환기
var new어뤠이02 = 어뤠이.map(function(a){
  return a * 1000
});
console.log(new어뤠이02);



  products.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>가격 : ${products[i].price}</p>
    </div>`;
    $('.row').append(템플릿)
  })
// 03.10. array에 자주 쓰는 sort, map, filter 함수

// var 어레이 = [7, 3, 5, ,2 , 40];
// 어레이.sort(function(a,b){
//   return b - a
// });
// 1. 버튼을 누른다
// 2. products안의 데이터를 기준으로 가격순으로 정렬한다
// 3. 보여준다

$('.btn-outline-primary').click(function(){
  // var sortProducts = products.sort((a,b) => a.price - b.price); 내코드
  products.sort(function(a, b){
    return a.price - b.price
  });
  document.querySelector('.row').innerHTML = '';
  
  products.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>가격 : ${products[i].price}</p>
    </div>`;
    $('.row').append(템플릿)
  });
  });

  $('#sortProductsByNameRe').click(function(){
    products.sort(function(a, b){
      if (b.title < a.title) {
        return 1
      } else {
        return -1
      }
    });

    console.log(products);
    document.querySelector('.row').innerHTML = '';
    
    products.forEach((a, i)=>{
      var 템플릿 = 
      `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${products[i].price}</p>
      </div>`;
      $('.row').append(템플릿);
    });
    });

    $('#showUnder6Btn').click(function(){
      var under6 = products.filter(function(a){
        return a.price <= 60000
      });
  
      console.log(under6);
      document.querySelector('.row').innerHTML = '';
      
      under6.forEach((a, i)=>{
        var 템플릿 = 
        `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${a.title}</h5>
          <p>가격 : ${under6[i].price}</p>
        </div>`;
        $('.row').append(템플릿);
      });
      });


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


// 강사코드

