function Footer({ totalTime }) {
  
  console.log('totalTime', totalTime)
  return (
    // <footer class="fixed bottom-0  h-16 border-t-2 border-stone-900 w-11/12 m-auto">
    <footer className="h-16 border-t-2 border-stone-900 w-11/12 m-auto">
      <div className="flex flex-row justify-end text-xl">
        <p className='px-6 m-2 pt-1'>total time:</p>
        <p className='bg-stone-200 rounded-md m-3 pt-1 px-1'>{ totalTime }</p>
      </div>
    </footer >
  );
}

export default Footer;