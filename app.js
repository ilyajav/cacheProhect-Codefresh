// imports //
import express from 'express'; // require express
import bodyParser from 'body-parser'; // require body-parser

// consts //
const app = express(); // express obj
const PORT = process.env.PORT || 3000; // varible environment

// middlewares //
app.use(bodyParser.urlencoded({extended: false})); // setting body-parser

app.listen(PORT, ()=>{ // listen
       console.log(`Server is running on port ${PORT}`)
});