var number = document.getElementById('number')
setTimeout(function timer(){
    console.log("10");
    number.innerText="10"
},1000);

setTimeout(function timeout(){
    console.log("9");
    number.innerText="9"
},2000);

setTimeout(function timer(){
    console.log("8");
    number.innerText="8"
},3000);

setTimeout(function timeout(){
    console.log("7");
    number.innerText="7"
},4000);

setTimeout(function timer(){
    console.log("6");
    number.innerText="6"
},5000);

setTimeout(function timeout(){
    console.log("5");
    number.innerText="5"
},6000);

setTimeout(function timer(){
    console.log("4");
    number.innerText="4"
},7000);

setTimeout(function timeout(){
    console.log("3");
    number.innerText="3"
},8000);

setTimeout(function timer(){
    console.log("2");
    number.innerText="2"
},9000);

setTimeout(function timeout(){
    console.log("1");
    number.innerText="1"
},10000);

setTimeout(function timer(){
    console.log("Happy")
    number.innerText="Happy"
    number.style.color="red"
},11000)

setTimeout(function timeout(){
    console.log("Independence Day")
    number.innerText="Independence Day"
    number.style.color="green"
},12000)
