var quizArr = [

    {
        num: 1,
        qustion: " : HTML stand for .... ? ",
        optns: {
            a: "hyper text markup language",
            b: "hyper text markup laguage",
            c: "hyper text makeup language",
            d: "harpic text markup language",
        },
        corect: "hyper text markup language"
    },

    {
        num: 2,
        qustion: " : CSS stand for .... ? ",
        optns: {
            a: " cascading style sheet     ",
            b: "cascading style shock  ",
            c: "cascading socket sheet",
            d: " color style sheet",
        },
        corect: "cascading style sheet"
    },
    {
        num: 3,
        qustion: " : DOM stand for .... ? ",
        optns: {
            a: "Document Object Model",
            b: "Detail Object Model",
            c: "Document objection Model",
            d: "Document Object module",
        },
        corect: "Document Object Model"
    },
    {
        num: 4,
        qustion: " : PSL stand for .... ? ",
        optns: {
            a: "Pakistan Super League",
            b: "Pakistan Super legal ",
            c: "Pakistan suplement League ",
            d: "Pakistan special League  ",
        },
        corect: "Pakistan Super League"
    },
    {
        num: 5,
        qustion: " : CPU stand for .... ? ",
        optns: {
            a: "Central Processing Unit",
            b: "Central Processing  unity ",
            c: "Central Purchase Unit ",
            d: "chicago Processing Unit ",
        },
        corect: "Central Processing Unit"
    },


]

var qustn = document.getElementById("quest")

// console.log(qustn)

var options = document.getElementsByClassName("lis")
// console.log(options)

var btn1 = document.getElementById("btnNext")
var reslt = document.getElementById("result")
var total = document.getElementById("ttl")
var correct = document.getElementById("crt")
var wrong1 = document.getElementById("wrn")
var mbox = document.getElementById("man")
var nm = document.getElementById("nm")
var bg1 = document.getElementById("mb")

// console.log(btn1)

for (var i = 0; i < options.length; i++) {
    options[i].setAttribute("onClick", " check1(this)")
    // console.log(i)
}
for (var p = 0; p < qustn.length; p++) {
    qustn[p]
    // console.log(p)
    
}
var count3= 1
var count = 0
var count1 = 1
var score = 0
var wrong = 0
function startQuize() {
    qustn.innerHTML = [count1++] + quizArr[count].qustion
nm.innerHTML=[count3++]


    options[0].innerHTML = quizArr[count].optns.a
    options[1].innerHTML = quizArr[count].optns.b
    options[2].innerHTML = quizArr[count].optns.c
    options[3].innerHTML = quizArr[count].optns.d
btn1.style.display="none"
    // console.log(count)

}

function next() {
    if (count < options.length ) {
        count++;
        startQuize()
    }
    else{
        reslt.style.display="block"
mbox.style.display="none"
total.innerHTML= quizArr.length 
correct.innerHTML= score
wrong1.innerHTML= wrong


    }
    for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "visible"
    
        options[i].style.backgroundColor = "transparent"
    }

}




function check1(e) {
    if (e.innerHTML === quizArr[count].corect) {
        score++
        e.style.backgroundColor = "#00b09b"
    }
    else {
        wrong++
        e.style.backgroundColor = "#00b09b  "
    }

    for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "none"

    }
    btn1.style.display = "block"
}

var min1 = document.getElementById("min")
var sec1 = document.getElementById("sec")
var mi = 5
var sc = 0 
min1.innerHTML = mi
 var interval = setInterval(function(){
sc++
sec1.innerHTML = sc
if (sc ==5){
mi--
min1.innerHTML = mi
sc=0
}
if(mi <0 ){
reslt.style.display="block"

mbox.style.display="none"
total.innerHTML= quizArr.length 
correct.innerHTML= score
wrong1.innerHTML= wrong

}



}
    
    
    
    
 ,1000   )