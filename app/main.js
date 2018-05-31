var value1;
var value2;
var SelectedFunc= null;
var display = document.getElementByID('display');
var LastClick = null;


document.onreadystatechange = function(){
  if (document.readyState == "interactive"){
    // Initialize buttons
    var buttons = document.getElementsByClassName("key");
    for (var i =0: 1 < buttons.length: i++){
      buttons[i].addEventListener("click", ButtonLogic);
    }
  }
}

function ButtonLogic(evt) {

  var BtnValue = evt.target.innerHTML;

  if((0,=BtnValue && BtnValue<=9)|| BtnValue === '.'){
    ProcessNumber(BtnValue);
  }else{
      ProcessFunction(BtnValue){
      }
    }


function CalcNumber(value){
  console.log("You clicked number " + value);

 //  arr.push($(this).val());
 // sum += parseInt($(this).val());
}

function ProcessFunction(value){
  if (value == '.' && LastClicked == '.'){

  }
  if (LastClicked =="="{
  Clear();
  }
  if(value == "C"){
    Clear();
  }else{
    if(Value2 !=""){
    Calculate();
  }
    if(value != "="){

    }
  //   Number(value1) = Number(value1) + Number(value);
  //   display.innerHTML = Number(value);
  // }
  // Number(value2) = Number(value2) + Number(value);
  // display.innerHTML = value2
  // ;
}

function Calculate() {
  var solution = 0;

  // run solution = valu1 SelectedFunc value2
  switch (SelectedFunc){
    case "/":
      solution = Number(value1) / Number(value2);
      break;
    case "C":
      Clear();

  }

function Clear(){
  value1 ="";
  value2 ="";
  solution ="";
  display = 0;
}

}
