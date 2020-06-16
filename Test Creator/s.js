var quesEntered = [];
var opt1Entered = [];
var opt2Entered = [];
var opt3Entered = [];
var opt4Entered = [];
var ansEntered  = [];
var counter = 1;



function Saveinfo() {
    
    quesEntered[counter] = document.getElementById('ques').value;
    opt1Entered[counter] = document.getElementById('opt1').value;
    opt2Entered[counter] = document.getElementById('opt2').value;
    opt3Entered[counter] = document.getElementById('opt3').value;
    opt4Entered[counter] = document.getElementById('opt4').value;
    ansEntered[counter] = document.getElementById('ans').value;
    
    if(quesEntered[counter] === '' || opt1Entered[counter] === '' || opt2Entered[counter] === '' ||  opt3Entered[counter] === '' ||  opt4Entered[counter] === '' || ansEntered[counter] === ''){
        alert("Please fill all fields.");
    }else
    {
        counter++;

        document.getElementById("queno").innerHTML = counter +'.';

        document.getElementById('ques').value = '';
        document.getElementById('opt1').value = '';
        document.getElementById('opt2').value = '';
        document.getElementById('opt3').value = '';
        document.getElementById('opt4').value = '';
        document.getElementById('ans').value = '';
    }

    if(counter === 4){
        document.getElementById("node-blank").style.visibility="hidden";
        document.getElementById("savetestbtn").style.visibility="visible";
        //do more btn styling
        alert("You have filled all questions.");
        

    }
    
}

function Savetest() {
    document.getElementById("savetestbtn").style.visibility="hidden";
    document.getElementById("node-blank").style.visibility="hidden";
    document.getElementById("node-list").style.visibility="visible";

    document.getElementById("question1").innerHTML = quesEntered[1];
    document.getElementById("1option1").innerHTML = opt1Entered[1];
    document.getElementById("1option2").innerHTML = opt2Entered[1];
    document.getElementById("1option3").innerHTML = opt3Entered[1];
    document.getElementById("1option4").innerHTML = opt4Entered[1];
    document.getElementById("1answer").innerHTML = ansEntered[1];

    document.getElementById("question2").innerHTML = quesEntered[2];
    document.getElementById("2option1").innerHTML = opt1Entered[2];
    document.getElementById("2option2").innerHTML = opt2Entered[2];
    document.getElementById("2option3").innerHTML = opt3Entered[2];
    document.getElementById("2option4").innerHTML = opt4Entered[2];
    document.getElementById("2answer").innerHTML = ansEntered[2];

    document.getElementById("question3").innerHTML = quesEntered[3];
    document.getElementById("3option1").innerHTML = opt1Entered[3];
    document.getElementById("3option2").innerHTML = opt2Entered[3];
    document.getElementById("3option3").innerHTML = opt3Entered[3];
    document.getElementById("3option4").innerHTML = opt4Entered[3];
    document.getElementById("3answer").innerHTML = ansEntered[3];





}