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

//어레이 다나가 순으로 정렬하기
var 어뢔이 = ['가', '다', '나'];
어뢔이.sort(function(a, b){
  if ((b - a) > 0) {
    return 1
  } else {
    return -1
  }
})
console.log(어뢔이);


  products.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>가격 : ${products[i].price}</p>
      <button type="button" class="btn btn-outline-dark" id="buyBtn${i}">구매</button>
    </div>`;
    $('.row').append(템플릿)
  })

// localStorage에 array, object를 저장하려면
// array/object -> JSON으로 바꾸면 저장가능
// JSON -> array/object : JSON.parse
var arr = [1, 2, 3];
var newArr = JSON.stringify(arr);
localStorage.setItem('num', newArr);  
var 꺼낸거 = localStorage.getItem('num');
console.log(JSON.parse(꺼낸거)[1]);

// 장바구니 기능과 localStorage 숙제1 : 구매버튼 누르면 구매한 상품명 localStorage에 저장하기
//추가. 먼저 array를 만드는게 낫지 않나?
var productTitleList = []; //이거를 시작하자마자 만들고
function pushProductTitle(pushTest01) {
  productTitleList.push(pushTest01);
  var newProductTitleList = JSON.stringify(productTitleList);
  localStorage.setItem('cart',newProductTitleList);
}

// 1. 애드이벤트리스너 생성 - 순수자바스크립트로 해볼까?
// 2. 시블링하여 title값 묶기?
// 3. 일단 저장하자
document.getElementById('buyBtn0').addEventListener('click', function(){
  var productTitle = $("#buyBtn0").prev().prev()[0];
  pushProductTitle(productTitle);
});

// 3. 처음 저장인 경우 / 처음저장이 아닌경우 나누기
// 4. 저장 / 수정

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
      if (b.title > a.title) {
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


