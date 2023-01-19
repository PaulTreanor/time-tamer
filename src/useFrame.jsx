import { useEffect, useState, useCallback, useRef } from "react";

function useFrame(cb) {
  let [lastTime, setLastTime] = useState(performance.now());
  let handleOnFrame = useCallback(cb, [cb]);

  const requestRef = useRef();

  function onFrame(newTime) {
    handleOnFrame(newTime - lastTime);
    setLastTime(newTime);
    requestRef.current = requestAnimationFrame(onFrame);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(onFrame);
    return () => cancelAnimationFrame(requestRef.current);
  }, [cb]);
}

export default useFrame