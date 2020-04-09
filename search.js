

var i;
var value=new Array();
var uniquearray=[];
var count=0;
var find=false;
var temp=0;

for( i=0;i<200;i++){
    value[i]=Math.floor(Math.random()*100)+1;
}
for(i=0;i<value.length;i++){
    for(var j=0;j<uniquearray.length;j++){
        if(value[i]==uniquearray[j]){
            find=true;
        }
    }
    count++;
    if(count==1&&find==false){
        uniquearray.push(value[i]);
    }
    count=0;
    find=false;
}
$(document).ready(function(){
    $("#show").css('color','white');
    $('#show').html(uniquearray.join(" "));
});

function getValue(){
    var inputvalue=document.getElementById("input").value;

    for(i=0;i<uniquearray.length;i++){
        if(uniquearray[i]==inputvalue)
        {
           pos(i);
            break;
        }
        else{
            Cfind();
        }
    }
    
}
function pos(i){
    $('.result').css('color','red');
    document.querySelector(".result").innerHTML=" "+"Position is "+i;
}
function Cfind(){
    $('.result').css('color','red');
    document.querySelector(".result").innerHTML=" "+"Position is not fund ";
}
