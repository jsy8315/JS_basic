var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

var 어레이 = [7, 3, 5, ,2 , 40];
어레이.sort(function(a,b){
  return b - a
});
console.log(어레이);

var 어레이2 = ['a', 'c', 'b', 'd']
어레이2.sort()
console.log(어레이2);
어레이2.reverse()
console.log(어레이2)

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
products.forEach((a, i)=>{
  var 템플릿 = 
  `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${a.title}</h5>
    <p>가격 : ${products[i].price}</p>
  </div>`;
  $('.row').append(템플릿)
})
