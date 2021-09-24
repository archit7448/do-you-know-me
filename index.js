var readlinesync = require('readline-sync') ;

console.log("Do you know me?")

var username = readlinesync.question("Enter your name to play quiz? ");
console.log("HI " + username+" let's start quiz");

var highScore = [
  {
    name: "Archit",
    score: 5,
  },{
    name: "Sanchi" , 
    score:4,
  }
]

var score=0

function play(question,answer){
  var useranswer = readlinesync.question(question);
if (useranswer === answer){
  console.log("you are right");
  score = score + 1
}else{
   console.log("oops")
}
console.log("score",score)
}
var questions=[
  {
    question:"Tell me where I live? ",
    answer: "Kanpur"
  },{
    question:"From which school I studied? (in short form & in uppercase) ",
    answer : "D.P.V.N"
  },{
    question: "Tell my birthday date? (dd-month-year) ",
    answer: "06-october-2004"
  },{
    question: "My fav movie? (let's give some option) \n a-Avengers End Game \n b-Conjuring \n c-The Soul \n ",
    answer: "c"
  },{
     question: "Which one I like most in cricket? \n  a-TEST\n b-One day\n c-T20\n ",
     answer: "a"
  },{
    question:"MY favourite book? \n a-Physcology of money \n b-Atomic Habits \n c-Deep Work \n ",
    answer: "b"
  }

]

for(var i=0;i<questions.length;i++){
  currentform = questions[i]
  play(currentform.question,currentform.answer)
}

function showHighScore(){
  console.log("yay you scored",score)
  console.log("checkout High score ,if you score more than high score inform me I will update it ")
  highScore.map(score=> console.log(score.name, ":",score.score)) 
}
showHighScore()