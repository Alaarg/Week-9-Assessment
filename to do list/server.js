const express = require('express')
const app = express();

app.use(express.json());




const tasks = [
    {
      id: 1,
      title: "Download Zoom",
      isCompleted: false
    },
    {
      id: 2,
      title: "Eat Fried Chicken",
      isCompleted: true
    },
    {
      id: 3,
      title: "Play Games",
      isCompleted: false
    },
    {
      id: 4,
      title: "Go for Shopping",
      isCompleted: true
    },
    {
      id: 5,
      title: "Watch Movie",
      isCompleted: false
    }
  ]
  app.get('/', (req, res) => {

    res.send("plese go to prt 7000/tasks")
});

  app.get('/tasks', (req, res) => {

    res.json(tasks)
});



app.post('/tasks', (req, res) => {
    let Newtsk = req.body;
    tasks.push(Newtsk);
    res.json(tasks);
  });



  app.delete('/tasks/:id', (req, res) => {
    let reqestedDeleteId = parseInt(req.originalUrl.slice(7));
    for (let index = 0; index < tasks.length; index++) {
      if(tasks[index].id === reqestedDeleteId) {
        tasks.splice(index, 1);
      }
    }
    res.json(tasks);
  });


const PORT = 7000;
app.listen(PORT, () => console.log(`its working ${PORT}`))