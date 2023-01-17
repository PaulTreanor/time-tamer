import TimerCard from './TimerCard';

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

  return (
    <div className="App px-4 py-4">
      <h1 className='text-3xl pb-4'>🦁 time tamer</h1>
      <div className="flex flex-row mb-6 mt-2">
        <input className="border-2 border-stone-300 rounded-l-md text-lg my-1 ml-1 pt-1 px-1" type="text" placeholder="add task" size="42"/>
        <button className="bg-stone-300 hover:bg-stone-400 text-black font-bold rounded-r-md my-1 mr-1  py-1 px-4">
          <i class="las la-plus"></i>
        </button>
      </div>
      <div className="">
        {taskList.map((task) => (
          <TimerCard key={task.id} task={task.task} time={task.time} status={task.status} />
        ))} 
      </div>
      {/* <footer class="fixed bottom-0  h-16 border-t-2 border-stone-900 w-11/12 m-auto"> */}
      <footer class="h-16 border-t-2 border-stone-900 w-11/12 m-auto">
        <div class="flex flex-row justify-end text-xl">
          <p className='px-6 m-2 pt-1'>total time:</p>
          <p className='bg-stone-200 rounded-md m-3 pt-1 px-1'>00:00:00</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
