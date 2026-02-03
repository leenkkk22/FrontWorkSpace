test1.onclick = function(){
    var str = "Samsung Apple Xiami";
    console.log(str.length);
    console.log(str.toUpperCase());
    console.log(str.indexOf('p1'));
    console.log(str.lastIndexOf('i'));
    console.log(str.charAt(0));
    console.log(str[0]);


    //문자열 일부를 잘라서 리턴하는 메서드
    console.log(str.substring(2,4));
    console.log(str.substring(2));

    var arr = str.split(" ");
    console.log(arr);
};

test2.onclick = function(){
    var num = 123.456;
    console.log(Math,round(num*10)/10);
    console.log(Math.ceil(num));

};


test3.onclick = function() {
    var now = new Date();
    console.log(now);

    //내가 원하는 시간정보 가진 date 객체
    var time1 = new Date(2026, 0 , 20);// 20260120
    console.log(time1);
    
    // 날짜형식 문자열로 객체 생성
    var time2= new Date("1999/03/01 15:44:21");
    console.log(time2);

    //date 객체를 yyyy/mm/ss 로 출력하고 싶다ㅕㅁㄴ?

};

function displayDate(date){
    var yyyy= date.getFullYear();
    var mm = date.getMonth()+1;
    var dd = date.getDate();
    var dayArr = ['일', '월', '화', '수', '목', '금', '토'];

    var day = date.getDay(); // 0부터6까지(일~토)
    alert(yyyy +"/'" + mm+"/" + day + "(" + dayArr[day]+ ")");
};

test4.onclick = function(){
    console.log(3+7+'7'); // 107, string

    // '7'은 number 자료형으로 형 변환 된 후 연산
    console.log(7 - '7'); // 0, number
    console.log(7 *'7'); // 49, number

    // +를 제외한 산술연산 시 문자열은 number 자료형으로 자동 형변환된다.
    console.log(7%Number('4')); //3

    console.log(7%'a'); //숫자 형태가 아닌 문자열을 숫자로 형변환시 Nan 반환.
    // Nan값과 기타 값들간의 연산 결과는 항상 NaN이 반환됨
    console.log(Number('a'));

    console.log(7 + true); //true는 1로 처리
     console.log(7+false);  //0으로


     //모든 연산 시에는 원시값과 원시값 끼리만 연산이 가능, 참조변수는 원시값으로 변환 후 연산처리함
     console.log([5].toString() + 1); //1

     console.log({} + 1);
    function fn(){}
    console.log(fn +1);


};

test5.onclick = function(){
    var num = "1234,567원";
    console.log(Number(num)); 
    //Number는 정수/실수로 변환이 가능. 단 변환불가 문자가 있으면 NaN 반환
    console.log(parseInt(num));
    //문자열을 정수로 변환, 단 변환불가 문자가 있으면 해당 문자의 앞(좌측)까지만 변환.
    console.log(parseFloat(num));
};

test6.onclick = function(){
    console.log(10/0); //Infinity
    console.log(typeof(10/0)); // number
    console.log( 10 / "a"); // NaN
    console.log(typeof(10/"a")); //number


    var num = prompt("숫자를 입력하세요");

    if(!isNan(num)){
        alert("숫자");

    }else{
        alert("숫자 아님");
    }

};



test7.onclick = function(){

    /*
        자바스크립트에서는 변수나 리터럴이 boolean형으로 형변환이 가능하다.

        값이 존재하지 않는 것들은 false로 변환된다.

        ex) 0, -0, 0.0, "", undefined, null, NaN

        값이 존재하는 것들은 true로 변환된다.
        ex) 123, -123, 1.1, "안","안녕", new Date(),[], {}

    */

        console.log(Boolean(123)); //true
        console.log(Boolean(-500)); //true
        console.log(Boolean("abc")); //true;
        console.log(Boolean("")); //false
        console.log(Boolean(null)); //false
        console.log(Boolean([])); //true
        console.log(Boolean({})); //true

        function fn(){}
        console.log(Boolean(fn)); //true;

        console.log("0" == 0); //true;
        console.log([]==0); //true;
        console.log({} == "0"); //false;



        

};


test8.onclick = function(){
    /* 
        일반 동등비교연산자
        ==, != 
        왼쪽 오른쪽 타입이 서로 다르다면 "자동형변환" 후 비교 수행


        엄격 동등 비교 연산자
        === , !==
        왼쪽 오른쪽 타입이 다르면 false; 즉 두 값의 자료형 비교까지 수행
    */

        console.log(3 == "3"); //t
        console.log(3 != "3"); //t 
        
        console.log(3 === "3"); //f
        console.log(3 !== "3"); //ft

        console.log (3 === Number("3")); //t

        console.log(null == undefined); //true
        console.log(null === undefined); //false
        // console.log([] === 0); //f
};

test9.onclick = function(){
    // if(num % 2 ==0){
        //     alert("짝");
        // }else{
            //     alert("홀수");
            // }
            
            // 짧은 조건문
            // a(조건식) && b(실행문) -> a가 참이면 b 실행
            // a(조건식) || b(실행문) -> a가 거짓이면 b 실행
            
            var num =prompt("정수를 입력하세요")
    num % 2 == 0 && alert("짝수");
    num % 2 == 1 && alert("홀수");

};
