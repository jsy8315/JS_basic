// 버튼0 누르면 
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

// 좋은 관습 : 자주 쓰는 셀렉터 변수에 넣어쓰기
var 버튼 = $('.tab-button');
var 컨텐트 = $('.tab-content');
var countTab = $('.tab-content').length;

//for 반복문으로 코드 복붙 
// for (let i = 0; i < countTab; i++) {
//     버튼.eq(i).on('click', function() {
//         탭열기(i)
//     })
//     console.log('맞는데 왜 안되지')
// }

$('.list').click(function(e){
    // 탭열기(지금 누른 버튼에 숨겨져있는 data-id) 
    탭열기(parseInt(e.target.dataset.id));
})

function 탭열기(숫자) {
    버튼.removeClass('orange');
    버튼.eq(숫자).addClass('orange');
    컨텐트.removeClass('show');
    컨텐트.eq(숫자).addClass('show');
}

// 버튼.eq(1).on('click', function() {
//     버튼.removeClass('orange');
//     버튼.eq(1).addClass('orange');
//     컨텐트.removeClass('show');
//     컨텐트.eq(1).addClass('show');
// })
