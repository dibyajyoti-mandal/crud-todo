const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./models/todo')
const app = express();

app.use(express.json());
app.use(cors());

(async()=> {
	try {
		await mongoose.connect('mongodb+srv://dmandal:dmandal2104@cluster0.flbmuji.mongodb.net/?retryWrites=true&w=majority', {
		}).then(() => console.log(`Connected to MongoDB`));
	}
	catch (err) {
		console.log(err);
		process.exit(1);
	}
})()


app.get('/todos', async (req, res) => {
	const todos = await Todo.find();
	res.json(todos);
});

app.post('/todo/new', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	})
	todo.save();
	res.json(todo);
});

app.delete('/todo/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);
	res.json({ result });
});

app.get('/todo/complete/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);
	todo.complete = !todo.complete;
	todo.save();
	res.json(todo);
})

app.put('/todo/update/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);
	todo.text = req.body.text;
	todo.save();
	res.json(todo);
});

app.listen(3001, ()=>{
	console.log("connected to server")
})