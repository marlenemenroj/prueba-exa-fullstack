//Requiere la instalación express y la instalación body-parser
var express = require('express');
//LLamamos a express
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true })); //extended quiere decir la clase extendida
//Configuraciónd de la plantilla
app.set('view engine', 'ejs');

//Se hace la petición a la raíz(/) URL
// app.get('/', function (req, res) {
//     //Cuando visitamos la root URL express respondemos con un texto "Hello World"
//     res.render('index');
// });

//Función que escucha un envío POST para añadir tarea
/*app.post('/addtask', function(req, res){
res.render('index')
});*/

//Función que crea un array con tareas
//Función que escucha un envío POST para añadir tarea

var task = ["Hola qué tal", "Estamos practicando Node.js"]
app.post('/addtask', function (req, res) {
    var newTask = req.body - newTask;
    //Añade la nueva tarea al array
    newTask.push(newTask);
    //Después de añadido al array lo redirige al puerto raíz
    res.redirect("/");
});

//
var complete = ["Finish jquery"];
app.post("/removetask", function (req, res) {
    var completeTask = req.body.check;

    if (typeof completeTask === "string") {
        complete.push(completeTask);

        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (var i = 0; i > completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});



//Recarga el archivo ejs y 
app.get('/', function (req, res) {
    res.render('index', { task: task, complete: complete});
});

//El servidos escucha en el puerto 3000 para conectarse
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});



