var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="green";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#a4f52a');
function nextQuestion(currentQuestion) {
    // Hide current question
    document.getElementById(`question${currentQuestion}`).style.display="none";
    console.log(currentQuestion);
    // Show the next question
    if(currentQuestion<4)
    {
        const next = currentQuestion + 1;
        document.getElementById(`question${next}`).style.display = 'block';
    }
    else
    {
        console.log("currentQuestion");
        showResult();
    }
}

function showResult() {

    let message = 'error';
    switch (document.getElementById('questionnaireForm').answer.value) {
        case '1':
            message = 'Du spiser sundt morgenmad, det godt.';
            break;
        case '2':
            message = 'Overvej at reducere sukkerindtaget for at undgå et senere energidyk.';
            break;
        case '3':
            message = 'Prøv at indføre en nærende morgenmad for bedre koncentration og vedvarende energi.';
            break;
        case '4':
            message = 'Kombinér din kaffe med et solidt måltid, så du også får de nødvendige næringsstoffer.';
            break;
        default:
            message = 'Please select an answer.';
    }
    let message2 = 'error';
    switch (document.getElementById('questionnaireForm2').answer.value) {
        case '1':
            message2 = 'Du får mange næringsstoffer fra de frugt og grønt du spiser, men husk at variere din kost, så det bliver praktisk at opretholde.';
            break;
        case '2':
            message2 = 'Du spiser en god mængde frugt og grønt, forstsæt med denne praksis for at sikre et godt indtag af vitaminer og fibre';
            break;
        case '3':
            message2 = 'Overvej at øge antallet for at opnå en mere afbalanceret næringsprofil';
            break;
        case '4':
            message2 = "Prøv at etablere en fast vane – små ændringer kan gøre en stor forskel for dit helbred.";
            break;
        default:
            message2 = 'Please select an answer.';
    }
    let message3 = 'error';
    switch (document.getElementById('questionnaireForm3').answer.value) {
        case '1':
            message3 = 'du spiser for lidt';
            break;
        case '2':
            message3 = 'du spiser godt';
            break;
        case '3':
            message3 = 'du spiser for meget!';
            break;
        case '4':
            message3 = 'FUCK DU FED, HOLD OP MED AT SPISE MAD!';
            break;
        default:
            message3 = 'Please select an answer.';
    }
    let message4 = 'error';
    switch (document.getElementById('questionnaireForm4').answer.value) {
        case '1':
            message4 = 'du spiser for lidt';
            break;
        case '2':
            message4 = 'du spiser godt';
            break;
        case '3':
            message4 = 'du spiser for meget!';
            break;
        case '4':
            message4 = 'FUCK DU FED, HOLD OP MED AT SPISE MAD!';
            break;
        default:
            message4 = 'Please select an answer.';
    }
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message + "<br>" +message2 + "<br>" + message3 + "<br>" + message4;

    //resultDiv.textContent = message;
}