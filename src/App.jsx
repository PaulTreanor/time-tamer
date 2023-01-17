import TimerCard from './TimerCard';

function App() {

  return (
    <div className="App px-4 py-4">
      <h1 className='text-3xl pb-4'>🦁 time tamer</h1>
      <div className=''>
        <TimerCard />
        <TimerCard />
        <TimerCard />
        <TimerCard />
        <TimerCard />
      </div>
      <footer class="fixed bottom-0  h-16 border-t-2 border-stone-900 w-11/12 m-auto">
        <div class="flex flex-row justify-end text-xl">
          <p className='px-6 m-2 pt-1'>Total time:</p>
          <p className='bg-stone-200 rounded-md m-3 pt-1 px-1'>00:00:00</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
