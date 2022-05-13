
let x = question1["question1","choice1","choice2","choice3","choice4",1];
let y = question1["question2","choice1","choice2","choice3","choice4",2];
let z = question1["question3","choice1","choice2","choice3","choice4",3];
var qstnNo = 0;

function next(){
  qstnNo ++;
  console.log(qstnNO);
  let questionArr[] = qstnNo[]
  arrayToHTML(questionArr);
}

function arrayToHTML(questionArr){
  let question= questionArr[0];
  document.getElementById("question").innerHTML = question
  let choice1 = questionArr[1];
  document.getElementById("btn1").innerHTML = choice1
  let choice2 = questionArr[2];
  document.getElementById("btn2").innerHTML = choice2
  let choice3 = questionArr[3];
  document.getElementById("btn3").innerHTML = choice3
  let choice4 = questionArr[4];
  document.getElementById("btn4").innerHTML = choice4

  for (i=0;i<5;i++)(
    console.log(question1[i])
  )
  let correctBtnID = "btn" + question1[5];
  console.log(correctBtnID)
  
  document.getElementById(correctBtnID).onclick = "wrong()"

}

function correct()
{
  document.write("correct");
}
function wrong()
{
  document.write("wrong");
}
