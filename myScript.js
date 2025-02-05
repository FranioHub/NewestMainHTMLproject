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

    let message;
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
    let message2;
    switch (document.getElementById('questionnaireForm2').answer.value) {
        case '1':
            message2 = 'Du får mange næringsstoffer fra de frugt og grønt du spiser, men husk at variere din kost, så det bliver praktisk at opretholde.';
            break;
        case '2':
            message2 = 'Du spiser en god mængde frugt og grønt, forstsæt med denne praksis for at sikre et godt indtag af vitaminer og fibre.';
            break;
        case '3':
            message2 = 'Overvej at øge antallet for at opnå en mere afbalanceret næringsprofil.';
            break;
        case '4':
            message2 = "Prøv at etablere en fast vane – små ændringer kan gøre en stor forskel for dit helbred.";
            break;
        default:
            message2 = 'Please select an answer.';
    }
    let message3;
    switch (document.getElementById('questionnaireForm3').answer.value) {
        case '1':
            message3 = 'For at fastholde de sunde vaner kan du prøve at variere dine grøntsager og inkludere nye, spændende sunde opskrifter. Husk at drikke rigeligt med vand og vær opmærksom på portionsstørrelser for at holde energiniveauet oppe hele dagen.';
            break;
        case '2':
            message3 = 'Overvej at planlægge dine måltider og forberede sunde alternativer hjemme, så du nemt kan undgå de hurtige løsninger. Prøv fx at lave en sund version af dine yndlingsretter og tag sunde snacks med, når du er på farten.\n' +
                '\n';
            break;
        case '3':
            message3 = 'Det kan være en god idé at starte med små ændringer. Prøv at introducere en ekstra grøntsag eller frugt ved hvert måltid, og find et par sunde opskrifter, du kan lave hjemme. Overvej også at reducere mængden af sukkerholdige drikke ved at erstatte dem med vand eller naturligt frugtvand.';
            break;
        case '4':
            message3 = 'Begynd med at lære de grundlæggende principper for en sund kost. Du kan starte med at læse artikler fra pålidelige sundheds- og ernæringskilder, se videoer med enkle opskrifter eller endda deltage i et kostkursus for unge. Prøv at eksperimentere med at tilføje en ny frugt eller grøntsag til dine måltider og se, hvordan det føles.\n' +
                '\n';
            break;
        default:
            message3 = 'Please select an answer.';
    }
    let message4;
    switch (document.getElementById('questionnaireForm4').answer.value) {
        case '1':
            message4 = 'Fortsæt med at have sunde snacks som frugt, nødder eller grøntsager tilgængelige. Det kan også være en idé at planlægge dine måltider, så du undgår sult, der kan føre til cravings.';
            break;
        case '2':
            message4 = 'Det er en god strategi – prøv at eksperimentere med mellemmåltider, der både mætter og er næringsrige, såsom smoothies eller yoghurt med bær.';
            break;
        case '3':
            message4 = 'Lav en plan, hvor du forudser små portioner af dine yndlingsusunde snacks. På den måde kan du tilfredsstille din craving uden at overdrive, og så kan du fokusere på at spise mere af det sunde det meste af tiden.';
            break;
        case '4':
            message4 = 'Overvej at prøve mindfulness-teknikker eller find en mentor/coach, som kan hjælpe dig med at identificere udløsende faktorer og finde strategier til at tackle cravings på en konstruktiv måde.';
            break;
        default:
            message4 = 'Please select an answer.';
    }
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message + "<br><br>" +message2 + "<br><br>" + message3 + "<br><br>" + message4;

    //resultDiv.textContent = message;
}