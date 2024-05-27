for (var i = 0; i < 3; i++) {
    console.log(i);
}

// 버튼0 누르면 
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

// 좋은 관습 : 자주 쓰는 셀렉터 변수에 넣어쓰기
var 버튼 = $('.tab-button');
var 컨텐트 = $('.tab-content');
var countTab = $('.tab-content').length;

// for 반복문으로 코드 복붙 
for (let i = 0; i < countTab; i++) {
    버튼.eq(i).on('click', function() {
        버튼.removeClass('orange');
        버튼.eq(i).addClass('orange');
        컨텐트.removeClass('show');
        컨텐트.eq(i).addClass('show');
    })
}

// 버튼.eq(1).on('click', function() {
//     버튼.removeClass('orange');
//     버튼.eq(1).addClass('orange');
//     컨텐트.removeClass('show');
//     컨텐트.eq(1).addClass('show');
// })

// 버튼.eq(2).on('click', function() {
//     버튼.removeClass('orange');
//     버튼.eq(2).addClass('orange');
//     컨텐트.removeClass('show');
//     컨텐트.eq(2).addClass('show');
// })