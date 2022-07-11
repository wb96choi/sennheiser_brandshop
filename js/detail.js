 // 제품 데이터 가져오기
 function getData() {
    // 여기에 여러분 깃허브 JSON 파일 경로(서버 데이터 주소)
    const DataURL = 'https://raw.githubusercontent.com/csslick/sennheiser-mobile/main/data.json';
    fetch(DataURL)
    .then(function(res){
      return res.json(); // JSON 객체 변환
    })
    .then(function(obj){
      // obj 동물데이터
      showDetail(obj);
      console.log(obj);
    });
  }
  
  function showDetail(obj) {
    // 현재 페이지의 URL query 파라미터(매개변수)
    const query = location.search;
    console.log(query);
    // ? URL query문을 object(변수)로 변경
    let params = new URLSearchParams(query).get('id');
  
    // params == null 이면(시작 페이지 모든 제품 출력)
    if(params == null || params =='all') {
        params = null;
    }
    console.log(params);  
  
    let category = obj[params].category;
    let name = obj[params].name;
    let price = obj[params].price;
    let imgUrl = obj[params].imgUrl;
    let text = obj[params].text;
    console.log(`name = `, name);
    

    // detail.html에 변수값 주입
    $('#detail main header h1').text(name);
    $('#detail main header .price').text(price);
    $('#detail main figure').html(`<img src=${imgUrl} alt="제품사진">`);
    // $('#detail main figure img').attr('src',imgUrl);   <<도 가능
    $('#detail main .container .text').text(text);
    
  }
  
  $(function(){
    getData();
  })