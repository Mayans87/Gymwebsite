const express= require('express');
const app= express();
const path= require('path');
const fs= require('fs');

//PUG STUFF
app.use('/static',express.static('static'));  //to serve static files.

//Middleware to bring posted data to express:
app.use(express.urlencoded());

app.set('view engine','pug');  //sets pug as template engine for the app.
app.set('views',path.join(__dirname,'views'))  //joins views folder to directory.

//ENDPOINTS
app.get('/',(req,res)=>{
    // let cons="this is content!";
    // let params={"title":"this is title rendering using pug","content":cons};
    res.status(200).render('index');
});
app.post('/',(req,res)=>{
    write_this=`name of client is ${req.body.name} ,is ${req.body.age} years old, ${req.body.gender}, lives at ${req.body.address}, phone number is ${req.body.tel}, and ${req.body.more} is more about him/her . `
    fs.writeFileSync("output.txt",write_this)
    console.log(req.reqbody);
    const params={'message':'your response has been submitted successfully!'}
    res.status(200).render('index.pug',params);
})



//SERVER STUFF
const port=80;
app.listen(port,'localhost',()=>{
    
    console.log(`App is running at port${port}`);
});
