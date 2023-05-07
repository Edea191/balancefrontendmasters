
var money = [17.47 ,34.91, 52.36, 31.07, 23.39, 43.28, 25.48] 
var total= 0;
var percent=0;
var difference=0;
var balance=0;

var visableRules=true;


function calculate(){
    total=0;
for (let i=0; i < money.length; i++){
    document.getElementById('num' + i).value = '$ ' + money[i];
    document.getElementById('spup' + i).style.height = 3* Math.round(money[i]) + 'px';  
}

for (let i=0; i < money.length; i++){
    
    total=total+ money[i];
    total= Math.round(total * 100) / 100;
    document.getElementById("total").value = '$' + total;
}
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

function update(){
    if(document.getElementById('monday').value==""||
         document.getElementById('thuesday').value=="" ||
         document.getElementById('wednesday').value=="" ||
         document.getElementById('thuesday').value=="" ||
         document.getElementById('friday').value=="" ||
         document.getElementById('satursday').value=="" ||
         document.getElementById('sunday').value==""){
           return alert('Valid number!'); 
    }
    else{
   
            document.getElementById('myBalance').value='$' + parseInt(document.getElementById('balance').value);
       
    money[0]=parseFloat(document.getElementById('monday').value);
    money[1]=parseFloat(document.getElementById('thuesday').value);
    money[2]=parseFloat(document.getElementById('wednesday').value);
    money[3]=parseFloat(document.getElementById('thursday').value);
    money[4]=parseFloat(document.getElementById('friday').value);
    money[5]=parseFloat(document.getElementById('satursday').value);
    money[6]=parseFloat(document.getElementById('sunday').value);
    console.log(money);

    percent=0;
    difference=0;
    for (let i=0; i < money.length; i++){
        percent=percent+ money[i];
    }
    if(percent>total){
        difference=percent-total;
        
        percent="+"+ Math.round((difference/percent * 100) * 100) / 100 +"%";
    }
    else{
        difference=total-percent;
        percent="-"+ Math.round((difference/total * 100) * 100) / 100 +"%";

    }
    document.getElementById('percent').value=percent;

    calculate();
    document.getElementById('settings').style.visibility= "hidden";
    balance = Math.round(((parseFloat(document.getElementById('balance').value)) - total) * 100) / 100
    visableRules=false;
    
    if (balance<0){
        document.getElementById('myBalance').value=balance + '$';
        document.getElementById('myBalance').style.color='red';
    }
    else{
        document.getElementById('myBalance').value='$'+ balance;
        document.getElementById('myBalance').style.color='aliceblue';
    }

}
}
function settings(){
    if (visableRules==true){
    document.getElementById('settings').style.visibility="hidden";
    console.log('hello');
    visableRules=false;
    }
    else{
        visableRules=true;
        console.log('other');
        document.getElementById('settings').style.visibility="visible";    
    }
}



calculate();


