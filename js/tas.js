let name=prompt("type of calce");
let men=parseInt(prompt("enter number of men"))
let money=parseInt(prompt("enter the money"))
let women=parseInt(prompt("enter number of women"))
let wives=parseInt(prompt("enter number of wives"))
let gender=confirm("are you male")
let age =parseInt(prompt("enter the age"))

let single=money/(men*2+women);

let wive=money/8
 console.log=(`wive`)

if(gender){
    if(age>=21){
        console.log(`you will recieve ${single*2}`)
    }
    if(age<=21){
        console.log(`you will recieve ${single*2} after ${21-age}years`);
    }
}else{if(age>=21){
    console.log(`you will recieve ${single}`)
}
if(age<=21){
    console.log(`you will recieve ${single} after ${21-age}years`);
}
}

let info=prompt("tybe of calce")
let math=parseInt(prompt("enter math degree"))
let frence=parseInt(prompt("enter frence degree"))
let english=parseInt(prompt("enter english degree"))
let science=parseInt(prompt("enter science degree"))
let arabic=parseInt(prompt("enter arabic degree"))
total=parseInt(prompt("enter number degree"))
let percent=100*(math+arabic+english+science+frence)/total;

if(percent>=85){
    alert("excellent")
}else if(percent>=75){
    alert("very good")
}else if(percent>=65){
    alert("good")
}else if(percent<=50){
    alert("looser")
}
let tex=prompt("tybe of calce");
let num=parseInt(prompt("enter the number"));
let p=prompt("enter the number")
let num1=parseInt(prompt("enter the number"));

if(p=="+"){
    alert(num+num1)
}else if(p=="-"){
    alert(num-num1)
}else if(p=="/"){
    alert(num/num1)
}else if(p=="*"){
    alert(num*num1)
}
