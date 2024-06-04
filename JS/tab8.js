var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];


products.forEach(function(a, i){
  var 템플릿 = `<div class="col-sm-4"><img src="https://via.placeholder.com/600" class="w-100"></div>`;
  var productTitle = `<h5>${a.title}</h5>`
  var productPrice = '가격 : ' +  `<p>${a.price}</p>`
  document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
  document.querySelector(`.row`).insertAdjacentHTML('beforeend', productTitle);
  document.querySelector(`.row`).insertAdjacentHTML('beforeend', productPrice);
})