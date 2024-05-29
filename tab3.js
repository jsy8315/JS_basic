var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

  for(i = 0; i < 3; i++) {
    document.querySelectorAll('.card-title')[i].innerHTML = products[i]['title'];
    document.querySelectorAll('.card-price')[i].innerHTML = products[i]['price'];
  }


// dataset의 내용을 products의 value로 바꾸자
// 일단 클릭하는건 아니긴한데 흠