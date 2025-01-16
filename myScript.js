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

function showResult() {

    const form = document.getElementById('questionnaireForm');
    const resultDiv = document.getElementById('result');
    const selectedAnswer = form.answer.value;

    let message = '';
    switch (selectedAnswer) {
        case 'spring':
            message = 'det er godt du ikke spiser for meget sukker, men husk at du kan godt belønne sig en gang imellem';
            break;
        case 'summer':
            message = 'du spiser nogenlunde ok mængde sukker, men pas på du ikke spiser mere end det';
            break;
        case 'autumn':
            message = 'du spiser for meget sukker, for høj sukker indtag kan føre til sukkersyge og overvægt, det er også usundt fortænderne!';
            break;
        case 'winter':
            message = 'FUCK DU FED, HOLD OP MED AT SPISE SUKKER!';
            break;
        default:
            message = 'Please select an answer.';
    }
    form.style.display = 'none';
    resultDiv.textContent = message;
}