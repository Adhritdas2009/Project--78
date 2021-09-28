var a=["download.png", "Mother.jpeg", "Teenager.png"];
var n=["Arijit Das", "Pubali Das", "Adhrit Das"];
var i=0;
function next(){
document.getElementById("familybook").src=a[i];
document.getElementById("familytext").innerHTML=n[i];
i=i+1;
if(i==3){
    i=0;
    
}
}

