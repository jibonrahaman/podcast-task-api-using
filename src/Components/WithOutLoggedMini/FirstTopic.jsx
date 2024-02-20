import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Images from '../Images';
import logo from '/public/images/logo.png'
function FirstTopic({className}) {
  return (
 <section>
     <div className={`text-white flex justify-between  pt-6 ${className}`}>
       <h2 className=" text-3xl font-semibold"> Welcome to fauget music services</h2>
      
       <div className=" flex  gap-x-20">       
       {/* popup ----------------------- */}
       <Popup
    trigger={<button className="px-10 py-2 cursor-pointer text-center duration-300 rounded-xl bg-black hover:bg-[#434040]">Sign in </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header flex flex-col items-center text-center">
          <Images src={logo} />
          <h2 className=' text-white text-2xl '>Sign </h2>
          <p>Email:</p>
          <input type="text" placeholder='enter your email' className=' px-6 py-1 rounded-md bg-black outline-none' />
           </div>
        
        {/* <div className="actions">
          <Popup
           
          
          >
            
          </Popup>
         
        </div> */}
      </div>
    )}
  </Popup>
      {/* popup ----------------------- */}
       <button className=" px-10 py-2 cursor-pointer text-center duration-300 rounded-xl bg-[#434040] hover:bg-black">Sign up</button>
       
       </div>
    </div>
           

       
       

 </section>
  )
}

export default FirstTopic
