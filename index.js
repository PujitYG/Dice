document.getElementById("click-me").addEventListener("click",dothis);

function dothis(){
  var ele= document.getElementsByClassName("dice-img");
  for(i=0;i<2;i++){
    var ran=Math.random();
    ran=Math.floor(ran*6);
    ran=ran+1;
    var str="images/dice"+ran+".png";
    ele[i].setAttribute("src",str);
  }
//   var str="images/dice"+4+".png";
//   document.getElementsByClassName("dice-img")[0].setAttribute("src",str);
}
