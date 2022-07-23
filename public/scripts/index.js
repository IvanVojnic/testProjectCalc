function buttonToolPressed(symbol){
    let inputField = document.getElementById("inputField");
    let strToSolve = inputField.value;
    let checkNewSymbol = validatePrevSymbol(symbol);
    let checkSymbols = validatePrevSymbol(strToSolve);
    if(checkSymbols==true && checkNewSymbol == true){
        return;
    }
    switch (symbol){
        case "xSqr":
            strToSolve += "^2";
            break;
        case "xn":
            strToSolve += "^";
            break;
        case "C":
            strToSolve = "";
            break;
        case "delete":
            strToSolve = strToSolve.slice(0, strToSolve.length-1);
            break;
        case "+/-":
            strToSolve += "-"
            break;
        case "=":
            let solution = getSolution(strToSolve);
            console.log(solution);
            break;
        default:
            strToSolve = strToSolve + symbol;
            break;
    }
    inputField.value = strToSolve;
}

function validatePrevSymbol(str){
    let toolsSymbols = ["+", "-", "*", "/", "%", "^"];
    for(let i = 0; i < toolsSymbols.length; i++){
        if(str[str.length-1] == toolsSymbols[i]){
            return true;
        }
    }
}

async function getSolution(str) {
    let equip = JSON.stringify({
        equipment: str,
    });
    let request = new XMLHttpRequest()

    request.open('POST', '/app', true)
    request.setRequestHeader(
        'Content-Type',
        'application/json'
    )
    request.addEventListener('load', function () {
        // получаем и парсим ответ сервера
        let solution = JSON.parse(request.response)
        console.log(
            solution.equipment,
        ) // смотрим ответ сервера
        let inputField = document.getElementById("inputField");
        inputField.value = solution;
    })
    request.send(equip)
}
