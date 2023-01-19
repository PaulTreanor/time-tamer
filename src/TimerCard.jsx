import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

function TimerCard({ task, time, status, last, playPauseOnclick }) {
  const cardBackgroundColor = status === 'playing' ? 'bg-green-100' : ""
  const cardBorderBottom = !last ? 'border-b' : ''
    
  return (
    <div onContextMenu={(e) => {
      e.preventDefault(); // prevent the default behaviour when right clicked
      console.log("Right Click", e.pageX, e.pageY);
    }}>
      <div className={cardBackgroundColor + " " + cardBorderBottom + " flex flex-row border-stone-100 justify-between rounded-lg min-w-fit max-w-5xl text-lg my-4"}>
      <p className="basis-7/12 align-bottom m-1 pt-1 px-1">{task}</p>
      <p className='bg-stone-200 rounded-md m-1 pt-1 px-1'>{time}</p>
      <div onClick={playPauseOnclick}>
        {status === 'paused' ? <PlayButton /> : <PauseButton />}
      </div>
    </div>
    </div>
    
  );
}

export default TimerCard;