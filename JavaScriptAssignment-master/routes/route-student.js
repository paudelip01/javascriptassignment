module.exports=(app)=>{
	const student = require('../controllers/controller-student');
	app.get('/students',student.list);
	app.get('/studentsid',student.find);     // : helps to find id of users choice
	app.post('/studentcreate',student.create);		//post needs to be used to create
	app.put('/student/:id',student.update);			//put needs to be used to update
	//app.delete('/student/:id',student.delete);		//delete needs to be used for deletion
}
	