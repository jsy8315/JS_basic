// 03.05. Select02 자바스크립트로 html 생성하는 법
// 생성법2보다 2배 빠르다 (실은 별차이 없음ㅋ)
var a = document.createElement('p');
a.innerHTML = '안녕ㅋ';
document.querySelector('#test').appendChild(a);

// 이거보다 더 간단한 문법 (자바스크립트로 html 생성법2)
var 템플릿 = '<p>안녕ㅋㅋ</p>';
document.querySelector('#test02').insertAdjacentHTML('beforeend', 템플릿);

// jQuery버전
var 템플릿제이쿼리 = '<p>안녕제이쿼리ㅎ</p>';
$('#test03jQuery').append(템플릿제이쿼리);

// 바지선택하면 28, 30 옵션나오게
//그냥 따옴표(큰 따옴표) 누르면 엔터키안됨 -> 백틱쓰기
document.querySelectorAll('.form-select')[0].addEventListener('input', function(e) {
    var value = e.currentTarget.value;

    if (value == '바지') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        var 템플릿바지 = `<option>28</option>
        <option>30</option>`;
        $('.form-select').eq(1).html(템플릿바지);
    }

    if (value == '셔츠') {
        // 일단 기존에 바지에서 썼던 템플릿바지 html을 지워줘야함
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        $('.form-select').eq(1).empty();
        var 템플릿셔츠 = `<option>110</option>
        <option>115</option>
        <option>120</option>`;
        $('.form-select').eq(1).html(템플릿셔츠);
    }

    if (value == '모자') {
        $('.form-select').eq(1).addClass('form-hide');
    }
});

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
// 답안
// 유저가 셔츠고르면 form-hide 떼어주세요
var value = document.querySelectorAll('.form-select')[0].value;
console.log(value);
var selectedProducts02 = $('.form-select').eq(0).val();
console.log(selectedProducts02);





