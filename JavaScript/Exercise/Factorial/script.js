let num = prompt("Pls enter the Number")
function factorial(ele){
    if(ele == 1 || ele==0) return 1; 
    return ele * factorial(ele -1);
}
let asn = factorial(num)
document.getElementsByClassName("mark")[0].innerHTML = 'factorial off given number is ' 
document.getElementsByClassName("mark")[0].append(asn)
