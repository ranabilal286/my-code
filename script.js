document.getElementById("alertname").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    alert(" my Name Is Muhmmad Bilal"  )
}
document.getElementById("alertnumber").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    alert(286)
}








document.getElementById("show variable name").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let html =("<ul> <li> the element can be written in camel case</li> </ul>  <ul> <li> Variable names must start with a letter, an underscore ( _ ) or a dollar sign ( $ ) </li> </ul>    <ul> <li> Variable names cannot contain spaces </li>  </ul> <ul> <li> Variables cannot be the same as reserved keywords such as if or const </li> </ul>")
    document.getElementById("output"). innerHTML= html
}

document.getElementById("sum2number").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let a = 5
    let b = 10
    let c = a+b
    let html=("let a ="+a+"<br>let b ="+b+"<br>let c ="+c )
    document.getElementById("output"). innerHTML= c
    document.getElementById("input"). innerHTML= html   
}





document.getElementById("subtract 2 number").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let a = 5
    let b = 10
    let c = a-b
    let html=("let a ="+a+"<br>let b ="+b+"<br>let c ="+c )
    document.getElementById("output"). innerHTML= c
    document.getElementById("input"). innerHTML= html   
}

document.getElementById("divide 2 number").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let a = 5
    let b = 10
    let c = a/b
    let html=("let a ="+a+"<br>let b ="+b+"<br>let c ="+c )
    document.getElementById("output"). innerHTML= c
    document.getElementById("input"). innerHTML= html   
}

document.getElementById("multiply 2 number").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let a = 5
    let b = 10
    let c = a*b
    let html=("let a ="+a+"<br>let b ="+b+"<br>let c ="+c )
    document.getElementById("output"). innerHTML= c
    document.getElementById("input"). innerHTML= html   
}

document.getElementById("dmas").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let c = 36
    document.getElementById("output").innerHTML = c
    let html = ("3*4/2+6**2-(2*3)")
    document.getElementById("input").innerHTML = html

}
document.getElementById("clear-output").onclick = function(){
    document.getElementById("output").innerHTML = ""
}
document.getElementById("clear-input").onclick = function(){
    document.getElementById("input").innerHTML = ""
}
