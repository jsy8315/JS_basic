// 03.05. Select02 자바스크립트로 html 생성하는 법
var a = document.createElement('p');
a.innerHTML = '안녕ㅋ';
document.querySelector('#test').appendChild(a);

// 이거보다 더 간단한 문법
var 템플릿 = '<p>안녕ㅋㅋ</p>';
document.querySelector('#test02').insertAdjacentHTML('beforeend', 템플릿);

// jQuery버전
var 템플릿제이쿼리 = '<p>안녕제이쿼리ㅎ</p>';
$('#test03jQuery').append(템플릿제이쿼리);

// 바지선택하면 28, 30 옵션나오게
document.querySelectorAll('.form-select')[0].addEventListener('input', function(e) {
    var value = e.currentTarget.value;
    if (value == '바지') {
        var pantsSize01 = document.createElement('option');
        var pantsSize02 = document.createElement('option');
        pantsSize01.innerHTML = '28';
        pantsSize02.innerHTML = '30';
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        document.querySelectorAll('.form-select')[1].appendChild(pantsSize01);
        document.querySelectorAll('.form-select')[1].appendChild(pantsSize02);
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
// 아오 어렵네요
// 답안
// 유저가 셔츠고르면 form-hide 떼어주세요
var value = document.querySelectorAll('.form-select')[0].value;
console.log(value);
var selectedProducts02 = $('.form-select').eq(0).val();
console.log(selectedProducts02);

document.querySelectorAll('.form-select')[0].addEventListener('input', function(e) {
    var value = e.currentTarget.value;
    if (value == '셔츠') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
    }
    if (value == '모자') {
        $('.form-select').eq(1).addClass('form-hide');
    }
});




