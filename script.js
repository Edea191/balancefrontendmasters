
var money = [17.47 ,34.91, 52.36, 31.07, 23.39, 43.28, 25.48] 
var total= 0;

for (let i=0; i < money.length; i++){
    document.getElementById('num' + i).value = '$ ' + money[i];
    console.log(Math.round(money[i]));
    document.getElementById('spup' + i).style.height = 3* Math.round(money[i]) + 'px';
   
}

for (let i=0; i < money.length; i++){
    total=total+ money[i];
    total= Math.round(total * 100) / 100;
    document.getElementById("total").value = '$' + total;
}



function disabled(number){
    document.getElementById('num' + number).hidden = false;
    for (let i=0; i < 7; i++){
        if (i != number){
            document.getElementById('num' + i).hidden = true;
            document.getElementById('spup' + number).style.backgroundColor = 'hsl(186, 34%, 60%)';
            document.getElementById('spup' + i).style.backgroundColor = 'hsl(10, 79%, 65%)';
        }
    }
}




