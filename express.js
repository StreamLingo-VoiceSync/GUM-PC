// created the express js server because we need 
// this sever to run in alocalHost context instead of file.
//so that we can enumerate devices (it must run in a secure context)
const express =requre('express');
const path =require('path')
const app=express();
app.use(express.static(path.join(__dirname)))
app.listen(3000)