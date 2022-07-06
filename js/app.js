// app.js----------------------

$(function(){

    /* #gnb toggle
        1. 열기: #toggle-btn 클릭시 #gnb on
        2. 닫기: #btn-close 클릭시 #gnb
    */
    $('#toggle-btn').click(function(){
        $('#gnb').addClass('on');
    });
    $('#btn-close').click(function(){
        $('#gnb').removeClass('on');
    });

});







fetch('https://raw.githubusercontent.com/csslick/animal-mobile/main/animal-data.json')
    .then(function(res){
        return res.json(); // JSON 객체 변환
    })                
    .then(function(obj){
        // obj 동물데이터
        showanimals(obj);    
    });

function showanimals(obj) {
// URL parameter(매개변수)
const query = location.search;
console.log(query);
// ? URL query문을 object(변수)로 변경
let params = new URLSearchParams(query).get('category');
console.log(params);

// params == null 이면 시작 페이지 dog 출력
if(params == null) {
    params = 'dog'
}


/*
    파라미터를 전달하여 요청하기
    홈페이지주소name = 홍길동
        매개변수(URL parameter) name = '홍길동'
    index.html -> index.html?category=dog -> 
    강아지 보여주세요
    cat.html -> cat.html?category=cat ->
    고양이 보여주세요
    bird.html -> bird.html?category=bird ->
    새 보여주세요
*/ 

// forEach() 반복문 = if반복문보다 간단함
obj.forEach(function(animal){
    // 카테고리 구분 dog | cat | bird
    // 요청한 params와 동물카테고리명이 일치하는 데이터만 출력 
    if(params == animal.category) {
        // console.log('params = ', params);
        // console.log(animal.category);

        let html = `
        <div class="col">
            <img src=${animal.imgUrl} alt="dog01">
            <p class="name">${animal.name}</p>
        </div>    
    `
    $('.row').append(html);
    };
    
});
};