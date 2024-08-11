// 03.17.캐러셀에 스와이프 기능 만들기

var 시작좌표 = 0;
var 마우스눌렀나 = false;

$('.slide-box').eq(0).on('mousedown', function(e){
  시작좌표 = e.clientX;
  마우스눌렀나 = true;
});

// 내코드
// 이동거리가 600px 이상이면 둘째 사진
// 이동거리가 600px 미만이면 다시 첫째 사진으로

$('.slide-box').eq(0).on('mousemove', function(e){
  if (마우스눌렀나 == true && (600 >= (시작좌표 - e.clientX) >= 0)) {
    $('.slide-container').css('transform', 
      `translateX(${e.clientX - 시작좌표}px)`);
  }

  if (마우스눌렀나 == true && ((시작좌표 - e.clientX) >= 600)) {
    $('.slide-container').css('transform', 
      `translateX(-100vw)`);
  }
});

$('.slide-box').eq(0).on('mouseup', function(e){
  마우스눌렀나 = false;
  if (마우스눌렀나 == false && (600 >= (시작좌표 - e.clientX) >= 0)) {
    $('.slide-container').css('transform', 
      `translateX(0vw)`);
  }
});

// $('.slide-box').eq(0).on('mousedown', function(){
//   console.log('mousedown effect!');
// })

// $('.slide-box').eq(0).on('mouseup', function(){
//   console.log('mouseup effect!');
// })

// $('.slide-box').eq(0).on('mousemove', function(){
//   console.log('mousemove effect!');
// })


// --------------------------------------기존 캐러셀 코드---------------------------------------

// 코드 3줄로 캐러셀 (이미지 슬라이드) 만들기(버튼 누르면 넘어감)
document.querySelector('.slide-1').addEventListener('click', function(){
  document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
});

$('.slide-2').on('click', function(){
  $('.slide-container').css('transform', 'translateX(-100vw)');
});

$('.slide-3').on('click', function(){
  $('.slide-container').css('transform', 'translateX(-200vw)');
}
);
// prev버튼 만들기01
$('.slide-prev-btn').on('click', function(){
  if (document.querySelector('.slide-container').style.transform == 'translateX(0vw)') {
    alert("첫 슬라이드 입니다!")
  } else if (document.querySelector('.slide-container').style.transform == 'translateX(-200vw)') {
    document.querySelector('.slide-container').style.transform = 'translateX(-100vw)'
  } else if (document.querySelector('.slide-container').style.transform == 'translateX(-100vw)') {
    document.querySelector('.slide-container').style.transform = 'translateX(0vw)'
  } else {
    alert("흥!")
  }
})
// next버튼 만들기01
$('.slide-next-btn').on('click', function(){
  if (document.querySelector('.slide-container').style.transform == 'translateX(-200vw)') {
    alert("마지막 슬라이드 입니다!")
  } else if (document.querySelector('.slide-container').style.transform == 'translateX(0vw)') {
    document.querySelector('.slide-container').style.transform = 'translateX(-100vw)'
  } else if (document.querySelector('.slide-container').style.transform == 'translateX(-100vw)') {
    document.querySelector('.slide-container').style.transform = 'translateX(-200vw)'
  } else {
    alert("흥!")
  }
})
// 코드 3줄로 캐러셀 (이미지 슬라이드) 만들기2
// next버튼 만들기01

// 다음 버튼 누르면 
// 지금 보이는 사진이 1이면 2번 사진 보여주세요~
// 지금 보이는 사진이 2이면 3번 사진 보여주세요~

var 지금사진 = 
$('.next').on('click', function(){
    지금사진 = 지금사진 - 100;
    $('.slide-container').css('transform', 'translateX(' + 지금사진 + 'vw)');
  }
);

$('.prev').on('click', function(){
  if(지금사진 == 3) {
    $('.slide-container').css('transform', 'translateX(-100vw)');
    지금사진 -= 1;
  } else if (지금사진 == 2){
    $('.slide-container').css('transform', 'translateX(0vw)');
    지금사진 -= 1;
  } else if (지금사진 == 1) {
    alert("김씨 여기가 처음이여")
  }
}
);

let 이름 = 'SUO'; // 재선언이 불가능 > 실수 방지 가능
이름 = 'park' // 재할당은 
const 이름2 = "SUO"; //재선언 불가능

var count = 0;
$('.badge').on('click', function(){
  count++;
  console.log(count);
  if (count % 2 == 1) {
    document.getElementById('darkmodeBtn').innerHTML = 'Light🔄';
    document.getElementById('body').classList.remove('dark');
  } else {
    document.getElementById('darkmodeBtn').innerHTML = 'Dark 🔄';
    document.getElementById('body').classList.add('dark');
  }
});
// document.querySelector('.hello').innerHTML = '인사똑바로해라';
$('.hello').html('안녕하십니까!!');
$('.hello').css('color', 'red');
// 로그인 버튼을 누르면 black-bg에 있는 show-modal 클래스를 저기 붙여주셈
// document.getElementById('login').addEventListener('click', function(){
//  document.querySelector('.black-bg').classList.add('show-modal')
// })
$('#login').on('click', function(){
  $('.black-bg').addClass('show-modal')
});

$('#close').on('click', function(){
  $('.black-bg').addClass('close-modal')
});

document.querySelectorAll('.navbar-toggler')[0].addEventListener('click', function(){
      document.querySelectorAll('#test1')[0].classList.toggle('show');
  // document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
  //     document.getElementsByClassName('list-group')[0].classList.toggle('show');
});
  // 전송버튼 누르면
  // 저기 input에 입력한 값이 공백이면 알림창 띄워줘ㅋ;
  document.querySelectorAll('#loginForm')[0].addEventListener('submit', function(e){
    var 입력email = document.getElementById('loginId').value;
    var 입력pw = document.getElementById('loginPw').value;
    if(
      document.querySelectorAll('#loginId')[0].value == '' &&
      document.querySelectorAll('#loginPw')[0].value == ''
    ) {
      alert("아이디랑 패스워드 입력하라고 새꺄")
      e.preventDefault();
    } else if (
      document.querySelectorAll('#loginId')[0].value == '' 
    ) {
      alert("아이디입력해주시겠니?")
      e.preventDefault();
    } else if (
      document.querySelectorAll('#loginPw')[0].value == '' 
    ) {
      alert("비번 지대루 입력주시렵니까?")
      e.preventDefault();
    } // 이메일 형식 검사도 
    else if (
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(입력email) == false
    ) {
      alert("이메일형식아닌데요...ㅋㅋ")
      console.log(입력email);
      console.log(777);
      e.preventDefault();
    } 
    else if (
      /[A-Z]/.test(입력pw) == false
    ) {
      alert("비번에 대문자 추가하라고 쫌")
      console.log(입력pw);
      e.preventDefault();
    }
    else if (
      document.querySelectorAll('#loginPw')[0].value.length < 6
    ) {
      alert("비번은 6자이상으루다가~해줘~")
      e.preventDefault();
    } else {
      alert("어서옵셔")
    }
  
  document.querySelectorAll('#loginId')[0].addEventListener('input', function(){
    console.log('안녕!!!!')
  });
});
