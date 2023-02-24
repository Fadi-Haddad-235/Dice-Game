window.onload=function(){

const random_number_1 =Math.floor(Math.random()*6)+1;
const random_number_2 =Math.floor(Math.random()*6)+1;
document.getElementById("dice-left").src=`dice-${random_number_1}.png`;
document.getElementById("dice-right").src=`dice-${random_number_2}.png`;
if (random_number_1 > random_number_2){
    document.getElementById("header-text").innerText="Player 1 Wins";
    document.getElementById("emoji-1").style.visibility = "hidden";

}else if(random_number_1 < random_number_2){
    document.getElementById("header-text").innerText="Player 2 Wins";
    document.getElementById("emoji-2").style.visibility = "hidden";
}
else{
    document.getElementById("header-text").innerText="Draw!!";
    document.getElementById("emoji-1").style.visibility = "hidden";
    document.getElementById("emoji-2").style.visibility = "hidden";
}

}