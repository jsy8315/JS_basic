// Array와 Object 자료형
// 지금 client-side rendering 하는 중임, 데이터바인딩
var car = ['소나타', 50000, 'white'];
var car2 = {name : '그랜저', price : [50000, 3000, 4000]};

document.querySelector('.car-title').innerHTML = car2['name'];
document.querySelector('.car-price').innerHTML = car2['price'][1];


// 좋은 관습 : 자주 쓰는 셀렉터 변수에 넣어쓰기
var 버튼 = $('.tab-button');
var 컨텐트 = $('.tab-content');
var countTab = $('.tab-content').length;

// for 반복문으로 코드 복붙 
// for (let i = 0; i < countTab; i++) {
//     버튼.eq(i).on('click', function() {
//         탭열기(i)
//     })
// }
$('.list').click(function(e){
    // 탭열기(지금 누른 버튼에 숨겨져있는 data-id) 
    탭열기(parseInt(e.target.dataset.id))
})

function 탭열기(숫자) {
    버튼.removeClass('orange');
    버튼.eq(숫자).addClass('orange');
    컨텐트.removeClass('show');
    컨텐트.eq(숫자).addClass('show');
}
