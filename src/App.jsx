import TimerCard from './TimerCard';
import Footer from './Footer';
import { useState, useEffect} from 'react';
import uuid4 from "uuid4";
import useFrame from './useFrame'




const taskList = []

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds/1000)
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  const seconds = totalSeconds - (hours * 3600) - (minutes * 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

function App() {
  const [tasks, setTasks] = useState(taskList);
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    window.app.readFromStore().then((data) => setTasks(data))
    }, [])

  useFrame((timeDifference) => {
    const playingTaskIndex = tasks.findIndex(task => {    // returns first task found that meets condition
      return task.status === "playing"
    })
    if (playingTaskIndex != -1) {
      let before = tasks.slice(0,playingTaskIndex)
      let after = tasks.slice(playingTaskIndex + 1)
      let newItem = { ...tasks[playingTaskIndex], time: tasks[playingTaskIndex].time += timeDifference }
      setTasks([...before, newItem, ...after])
      window.app.writeToStore(tasks)
    }
  })

  function calculateTotalTime() {
    return tasks.reduce((totalTime, task) =>
      // total time is accumulator, task is current 
      totalTime + task.time, 0)
  }

  const addTask = () => {
    if (newTaskName === '') {
      return;
    }
    if (tasks.length === 5) {
      alert('You can only add 5 tasks at a time');
      return;
    }
    const newTask = {
      id: uuid4(),
      task: newTaskName,
      time: 0,
      status: 'paused'
    }
    setTasks([...tasks, newTask]);
    setNewTaskName('');
    window.app.writeToStore(tasks).then((res) => console.log(res))
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
    setTasks(newTasks);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      addTask();
    }
  }

  return (
    <div className="App px-4 py-4">
      <h1 className='text-3xl pb-4'>🦁 time tamer</h1>
      <div className="flex flex-row mb-6 mt-2">
        <input className="border-2 border-stone-300 rounded-l-md text-lg my-1 ml-1 pt-1 px-1" type="text" value={newTaskName} onChange={(event) => setNewTaskName(event.target.value)} onKeyDown={(event) => handleKeyPress(event)} placeholder="add task" size="42"/>
        <button onClick={(event) => addTask(event)} className="bg-stone-300 hover:bg-stone-400 text-black font-semibold rounded-r-md my-1 mr-1  py-1 px-4">
          add task
        </button>
      </div>
      <div className="">
        {tasks.map((task) => (
          <TimerCard key={task.id} task={task.task} time={formatTime(task.time)} status={task.status} last={task.id === taskList.length} playPauseOnclick={(event) => toggleTaskStatus(task.id)} />
        ))} 
      </div>
      <Footer totalTime={formatTime(calculateTotalTime())} />
    </div>
  );
}

export default App;
