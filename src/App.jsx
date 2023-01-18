import TimerCard from './TimerCard';
import Footer from './Footer';
import { useState } from 'react';


const taskList = [
  {
    id: 1,
    task: 'Work on React app',
    time: '00:00:00',
    status: 'playing'
  },
  {
    id: 2,
    task: 'Go for a run',
    time: '00:00:00',
    status: 'paused'
  },
  {
    id: 3,
    task: 'Cook a healthy meal',
    time: '00:00:00',
    status: 'paused'
  },
  {
    id: 4,
    task: 'Read 2 chapters of a book',
    time: '00:00:00',
    status: 'paused'
  }
]

function App() {
  const [tasks, setTasks] = useState(taskList);
  const [newTaskName, setNewTaskName] = useState('');

  const addTask = () => {
    if (newTaskName === '') {
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      task: newTaskName,
      time: '00:00:00',
      status: 'paused'
    }
    setTasks([...tasks, newTask]);
    setNewTaskName('');
  }

  const toggleTaskStatus = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.status === 'playing' && task.id !== id) {
        task.status = 'paused';
      }
      if (task.id === id) {
        task.status = task.status === 'playing' ? 'paused' : 'playing';
      }
      return task;
    })
    console.log({"newTasks": newTasks})
    setTasks(newTasks);
  }


  return (
    <div className="App px-4 py-4">
      <h1 className='text-3xl pb-4'>🦁 time tamer</h1>
      <div className="flex flex-row mb-6 mt-2">
        <input className="border-2 border-stone-300 rounded-l-md text-lg my-1 ml-1 pt-1 px-1" type="text" value={newTaskName} onChange={(event) => setNewTaskName(event.target.value)} placeholder="add task" size="42"/>
        <button onClick={(event) => addTask(event)} className="bg-stone-300 hover:bg-stone-400 text-black font-semibold rounded-r-md my-1 mr-1  py-1 px-4">
          add task
        </button>
      </div>
      <div className="">
        {tasks.map((task) => (
          <TimerCard key={task.id} task={task.task} time={task.time} status={task.status} last={task.id === taskList.length} playPauseOnclick={(event) => toggleTaskStatus(task.id)} />
        ))} 
      </div>
      <Footer />
    </div>
  );
}

export default App;
