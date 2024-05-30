// 좋은 관습 : 자주 쓰는 셀렉터 변수에 넣어쓰기
var 버튼 = $('.tab-button');
var 컨텐트 = $('.tab-content');
var countTab = $('.tab-content').length;

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

// 셔츠고르면 <select>하나 더 보여주기
// 1. 일단 셔츠를 선택
// 2. 안보였던 셀렉트 클래스가 생겨남
var showShirtList = document.querySelector('.list');

function selectShirt(e) {
    const selectedShirt = e.value;
    console.log(selectedShirt);
    if (selectedShirt == 'shirts') {
       showShirtList.style.display = "block";
       console.log(showShirtList.style.display);
    } else {
        alert('다시.');
    }
} 
