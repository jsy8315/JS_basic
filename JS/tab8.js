var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];
  

  //데이터바인딩 숙제, 내 코드
  for(i = 0; i < 3; i++) {
    document.querySelectorAll('.card-title')[i].innerHTML = products[i]['title'];
    document.querySelectorAll('.card-price')[i].innerHTML = products[i]['price'];
  }
//데이터바인등 숙제, 강사 코드
document.querySelectorAll('.card-body h5')[0].innerHTML = products[0].title;
document.querySelectorAll('.card-body p')[0].innerHTML = '가격은요 : ' + products[0].price;

var a = '그래';
console.log(`어${a}그래`);