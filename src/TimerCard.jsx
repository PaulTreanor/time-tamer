import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import CustomContextMenu from './CustomContextMenu';
import { useState, useEffect } from 'react'; 

function TimerCard({ task, time, status, last, playPauseOnclick }) {
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 })



  const cardBackgroundColor = status === 'playing' ? 'bg-green-100' : ""
  const cardBorderBottom = !last ? 'border-b' : ''

  useEffect(() => {
    const handleClick = () => {
      setContextMenu((prevState) => ({ ...prevState, visible: false }));
    };
  
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  
    
  return (
    <div onContextMenu={(event) => {
      event.preventDefault();
      setContextMenu({ visible: true, x: event.clientX, y: event.clientY });
    }}>
      <CustomContextMenu visible={contextMenu.visible} x={contextMenu.x} y={contextMenu.y} />

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