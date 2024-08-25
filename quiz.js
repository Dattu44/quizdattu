
var count = 0;

//var txt = document.getElementById("inp12").style.backgroundColor="lightgreen";

//var txt = document.getElementById(".p1").value;
function fun1() {
  var txt = (document.getElementById("inp11").style.backgroundColor =
    "#28DF99");

  var in11 = document.getElementById("in11");

  /*
var in12 = document.getElementById("in12");
var in13 = document.getElementById("in13");
var in14 = document.getElementById("in14");
*/

  //alert(in1)
  if (in11.checked == true) {
    //alert()
    var txt = (document.getElementById("inp11").style.backgroundColor =
      "#28DF99");
    count++;
  }

  /*
else if(in12.checked==true){
var txt = document.getElementById("inp12").style.backgroundColor="#FF6363";
count++;
}

else if(in13.checked==true){
var txt = document.getElementById("inp13").style.backgroundColor="#FF6363";
}

else if(in14.checked==true){
var txt = document.getElementById("inp14").style.backgroundColor="#FF6363";
}

else{

alert("you are not selected any option!")

}

*/

  var txt = (document.getElementById("inp21").style.backgroundColor =
    "#28DF99");

  var in21 = document.getElementById("in21");
  var in22 = document.getElementById("in22");
  var in23 = document.getElementById("in23");
  var in24 = document.getElementById("in24");

  //alert(in1)
  if (in21.checked == true) {
    //alert()
    var txt = (document.getElementById("inp21").style.backgroundColor =
      "#28DF99");
    count++;
  } else if (in22.checked == true) {
    var txt = (document.getElementById("inp22").style.backgroundColor =
      "#FF6363");
  } else if (in23.checked == true) {
    var txt = (document.getElementById("inp23").style.backgroundColor =
      "#FF6363");
  } else if (in24.checked == true) {
    var txt = (document.getElementById("inp24").style.backgroundColor =
      "#FF6363");
  } else {
    //alert("you are not selected any option!")
  }
  //alert()
  //alert(count)
  document.getElementById("res").innerHTML = "You Got " + count + "/2";
  document.getElementById("btn").remove();

  //m-div1 color setting
  if (in11.checked == true) {
    //alert("working")
    document.getElementById("m-div1").style.backgroundColor = "#CDF2CA";
  } else {
    document.getElementById("m-div1").style.backgroundColor = "#FFBBBB";
  }

  //m-div2 color setting
  if (in21.checked == true) {
    //alert("working")
    document.getElementById("m-div2").style.backgroundColor = "#CDF2CA";
  } else {
    document.getElementById("m-div2").style.backgroundColor = "#FFBBBB";
  }
}
