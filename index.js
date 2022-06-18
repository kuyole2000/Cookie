const express = require('express');
const app = express()

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));


app.get('/greet', (req, res)=>{
    const {name = 'No name'} = req.cookies
    console.log(name)
    res.send(`HEY THERE ${name}`)
})

app.get('/setname', (req, res) =>{
    res.cookie('name', 'hen');
    res.cookie('anmial', 'new hen');
    res.send('SEND YOU A COOKIE')
})

app.get('/getsignedcookie', (req,res)=>{
    res.cookie('fruit', 'grape', {signed:true});
    res.send('OK SIGNED YOUR FRUIT')
})

app.get('/verifyfruit', (req,res)=>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies)
})


app.listen(3000, () =>{
    console.log('SERVING')
})