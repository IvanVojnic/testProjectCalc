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
    let equip = {
        equipment: str
    };
    /*
        let response = await fetch('/app.js', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Accept: 'application/json',
            },
            body: JSON.stringify(equip)
        });
        if(response.ok){
            let result = await response.text();
            return result;
        } else {
            alert("Error");
        }*/
    let user = JSON.stringify({
        userName: "qwerty",
        userAge: "ytrewq",
    })
    let request = new XMLHttpRequest()
    // посылаем запрос на адрес "/user"
    request.open('POST', 'app.js', true)
    request.setRequestHeader(
        'Content-Type',
        'application/json'
    )
    request.addEventListener('load', function () {
        // получаем и парсим ответ сервера
        let receivedUser = JSON.parse(request.response)
        console.log(
            receivedUser.userName,
            '-',
            receivedUser.userAge
        ) // смотрим ответ сервера
    })
    request.send(user)
}
