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
    if(currentQuestion<2)
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

    const form = document.getElementById('questionnaireForm');
    const resultDiv = document.getElementById('result');
    const selectedAnswer = form.answer.value;

    let message = '';
    switch (selectedAnswer) {
        case '1':
            message = 'det er godt du ikke spiser for meget sukker, men husk at du kan godt belønne sig en gang imellem';
            break;
        case '2':
            message = 'du spiser nogenlunde ok mængde sukker, men pas på du ikke spiser mere end det';
            break;
        case '3':
            message = 'du spiser for meget sukker, for høj sukker indtag kan føre til sukkersyge og overvægt, det er også usundt fortænderne!';
            break;
        case '4':
            message = 'FUCK DU FED, HOLD OP MED AT SPISE SUKKER!';
            break;
        default:
            message = 'Please select an answer.';
    }
    const form2 = document.getElementById('questionnaireForm2');
    const selectedAnswer2 = form2.answer.value;
    let message2 = '';
    switch (selectedAnswer2) {
        case '1':
            message2 = '2det er godt du ikke spiser for meget sukker, men husk at du kan godt belønne sig en gang imellem';
            break;
        case '2':
            message2 = '2du spiser nogenlunde ok mængde sukker, men pas på du ikke spiser mere end det';
            break;
        case '3':
            message2 = '2du spiser for meget sukker, for høj sukker indtag kan føre til sukkersyge og overvægt, det er også usundt fortænderne!';
            break;
        case '4':
            message2 = '2FUCK DU FED, HOLD OP MED AT SPISE SUKKER!';
            break;
        default:
            message2 = 'Please select an answer.';
    }
    resultDiv.innerHTML = message + "<br>" +message2;

    //resultDiv.textContent = message;
}