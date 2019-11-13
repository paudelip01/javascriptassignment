const express = require('express');   //use express dependency on main
const app = express();           //assigning const variable
require('./routes/route-student')(app);			//importing routes of student

           
app.get('/',(req,res)=>{
	res.send('Hello');		
});

app.listen(3000,()=>{
	console.log('Server Running');
}); 