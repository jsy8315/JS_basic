var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

  products.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${a.title}</h5>
      <p>가격 : ${products[i].price}</p>
      <button type="button" class="btn btn-outline-dark buy" id="buyBtn${i}">구매</button>
    </div>`;
    $('.row').append(템플릿)
  })

// localStorage에 array, object를 저장하려면
// array/object -> JSON으로 바꾸면 저장가능
// JSON -> array/object : JSON.parse
var arr = [1, 2, 3];
var newArr = JSON.stringify(arr); //JSON으로 바꿈
localStorage.setItem('num', newArr);  
var 꺼낸거 = localStorage.getItem('num');
console.log(JSON.parse(꺼낸거)[1]); //JSON으로 바꾼거 다시 바꿈

// 장바구니 기능과 localStorage 숙제1 : 구매버튼 누르면 구매한 상품명 localStorage에 저장하기
var productTitleList = []; 

function pushProductTitle(pushTest01) {
  productTitleList.push(pushTest01);
  var newProductTitleList = JSON.stringify(productTitleList);
  localStorage.setItem('cart',newProductTitleList);
}

// CA 코드
$('.buy').click(function(e){
  var productTitle = $(e.target).siblings('h5').text();
  pushProductTitle(productTitle);
  // 만약에 이미 cart라는 항목이 있으면 수정
  // 아니면 밑에것 수행
  // if (localStorage.getItem('cart') != null ) {
  //   var 꺼낸거 = JSON.parse(localStorage.cart);
  //   꺼낸거.push(productTitle);
  //   localStorage.setItem('cart',JSON.stringify(꺼낸거));
  // } else {
  //   pushProductTitle(productTitle);
  // }
});

//장바구니 보여주기 버튼 내 코드
$('#showCart').click(function(){
  // 01.로컬스토리지에서 cart 오브젝트를 가져오고
  var cartList = localStorage.getItem('cart');
  cartList = JSON.parse(cartList);
  console.log(cartList);
// 02. html을 forEach문을 통해서 넣는 방법으로 하자
  cartList.forEach(function(a,i){
    var 카트템플릿 = 
    `<p>${a}</p>`;
    $('#showCartList').append(카트템플릿);
  });
});

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


