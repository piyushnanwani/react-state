import { useState } from 'react'


function App() {
 const [count, setCount] = useState<number>(0);  

  return (
    <>
      <h2>Count: {count} </h2>
      <button onClick={() => {
        // update function ( asynchronous)
        setCount(count + 1);  // setCount(0+1) // setCount(1)
        setCount(count + 1);  // setCount(0+1) // setCount(1) // value


        // functional update
        setCount(prev => prev + 1); // function
        setCount(prev => prev + 1); 
        
      } }> Increment by 2 </button>
      <button onClick={() => {
        setCount(count - 1);
      }}> Decrement </button>
    </>
  );
}

export default App
