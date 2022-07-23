const express = require('express')

const app = express()
const jsonParser = express.json();
app.use(express.static(__dirname + '/public'))

app.post('/app', jsonParser, function (request, response) {
    console.log(request.body)
    let math = request.body;
    math = math.equipment.split(" ") ;
    let result = eval(math.join(' '));
    let rez = String(result);
    response.json(rez) // отправляем пришедший ответ обратно
})

app.use('/', function (request, response) {
    response.send('<h1>Главная страница</h1>')
})

app.listen(3000)
