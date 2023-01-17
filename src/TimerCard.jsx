import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

function TimerCard({ key, task, time, status }) {
  const cardBackgroundColor = status === 'playing' ? 'bg-green-100' : ""
  return (
    <div className={cardBackgroundColor + " flex flex-row border-b border-stone-100 justify-between rounded-lg min-w-fit max-w-5xl text-lg my-4"}>
      <p className="basis-7/12 align-bottom m-1 pt-1 px-1">{task}</p>
      <p className='bg-stone-200 rounded-md m-1 pt-1 px-1'>{time}</p>
      {status === 'paused' ? <PlayButton /> : <PauseButton />}
      </div>
  );
}

export default TimerCard;