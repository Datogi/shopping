
import { useEffect, useState } from 'react';
import Search from './components/Search';

function App() {

  
  return (
    <div>
 
      <div className='border-2  border-black'>
       <Search/>
      </div> 
      <div className='flex'>
      <div className='w-1/4 border-2 h-screen border-black'></div>
       
    
     <div className='w-1/2 border-2 h-screen border-black'></div>
       
    
     <div className='w-1/4 border-2 h-screen border-black'></div>
       
  </div>
     </div>
  );
}

export default App;
