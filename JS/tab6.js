// 03.06. Select 3 : forEach, for in 반복문
var pants = [32, 34, 36, 38];
var shirts = [105, 110, 115, 120]; //셔츠 선택시 array 갯수에 맞게 <option> 생성


// 바지선택하면 28, 30 옵션나오게
//그냥 따옴표(큰 따옴표) 누르면 엔터키안됨 -> 백틱쓰기
document.querySelectorAll('.form-select')[0].addEventListener('input', function(e) {
    var value = e.currentTarget.value;

    if (value == '바지') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        var 템플릿바지 = `<option>28</option>
        <option>30</option>`;
        $('.form-select').eq(1).html(템플릿바지);
        pants.forEach(function(a){
            $('.form-select').eq(1).append(`<option>${a}</option>`)
        })
    }

    if (value == '셔츠') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        $('.form-select').eq(1).empty();
        shirts.forEach(function(a){
            $('.form-select').eq(1).append(`<option>${a}</option>`)
        })
    }

    if (value == '모자') {
        $('.form-select').eq(1).addClass('form-hide');
    }
});

var obj = {name : 'kim', age : 20, sex : 'M', address : 'Earth'}

for (var key in obj){
    console.log(key, obj[key]);
}

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



