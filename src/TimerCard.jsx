import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

function TimerCard() {
  return (
    <div className="flex flex-row border-b border-stone-100 justify-between rounded-lg min-w-fit max-w-5xl text-lg my-4">
      <p className="basis-7/12 align-bottom m-1 pt-1 px-1">Task item</p>
      <p className='bg-stone-200 rounded-md m-1 pt-1 px-1'>00:00:00</p>
      <PauseButton />
      </div>
  );
}

export default TimerCard;