function PlayButton() {
  return (
    // <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l-none rounded-r-lg">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l-none rounded-r-lg">
{/* 
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
      </svg> */}
      <i class="las la-play"></i>
    </button>
  );
}

export default PlayButton;