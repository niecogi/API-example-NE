const express =  require('express') // () para inicializarlo;
const app =express();

const PORT = 8080;

app.use(express.json()) // toda la petición que haya
//pasara antes por el middleware que parsea el json

app.listen(
    PORT,
     () => console.log(`its alive on http://localhost:${PORT}`)// callback para cuando esté activo
) // escuchamos en un puerto que definimos

// endpoint
app.get('/tshirt',(req /*request incoming data*/ ,res/*response outgoing data */ ) => {
    res.status(200).send({
        tshirt: "vamiseta",
        ejample: "3"
    })

});
//id : dynamic values in the URL
app.post('/tshirt/:id', (req,res) => {
    const {id} = req.params;
    const{logo} = req.body;

    if(!logo){
        res.status(418).send({message :"NOOO TIENE LOGO"})
    
    }
    res.send({
        tshirt: `camiseta with your ${logo} and  ID:${id}`,
    });
});