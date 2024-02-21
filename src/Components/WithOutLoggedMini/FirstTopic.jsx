import { useState } from "react"
import Popup from "../Popup"
import { useRef } from "react"
import { useEffect } from "react"
import Images from "../Images"
import logo from '/public/images/logo.png'

function FirstTopic({ className }) {
  
  const [SignInPopup,setSignInPopup] =useState(false)
  
const handleSignInPopup = () =>{
  setSignInPopup(true)
}
 const dropref =useRef(null)
 useEffect(()=>{
  const falseHover=(e)=>{
   if(!dropref.current.contains(e.target)){
    setSignInPopup(false)

   }
  }
  document.addEventListener("mousedown",falseHover) 
  return()=>{
   document.removeEventListener("mousedown",falseHover)
  } 
 },[]) 

  return (
    <section className=' relative'>
      <div className={`text-white flex justify-between pt-6 ${className}`}>
        <h2 className=" text-3xl font-semibold"> Welcome to fauget music services</h2>
        <div className=" flex  gap-x-20 ">   
         <button  onClick={handleSignInPopup} className="px-10 py-2 cursor-pointer text-center duration-300 rounded-xl bg-black hover:bg-[#434040]">Sign in </button>

       
        <div ref={dropref} className='absolute top-0 left-0 w-full h-screen bg-black/10 z-50 backdrop-blur-sm flex justify-center items-center '>
    <div className=" w-[400px] flex flex-col items-center text-center bg-[#3b3b3b] rounded-lg p-5">
      <Images src={logo} />
      <h2 className='text-white text-2xl'>Sign</h2>
      <div className='text-white'>
        <p className='text-xl mt-3 '>Email:</p>
        <input type="text" placeholder='enter your email' className='px-16 py-1 rounded-md bg-black outline-none mt-1  mb-5' />
        <p className='text-xl '>Password:</p>
        <input type="text" placeholder='enter your password' className='px-16 py-1 rounded-md bg-black outline-none  mt-1' />
        <button  className='my-5 px-10 py-2 bg-black rounded-xl duration-300 hover:bg-[#262525]'>Sign in</button>
        <p className='text-lg mt-3'>Don’t have an account? <button className='text-red-700 text-center'>Create an account</button></p>
      </div>
    </div>
    </div>
       
             

          {/* popup sign up ----------------------- */}
          {/* <Popup
            trigger={<button className=" px-10 py-2 cursor-pointer text-center duration-300 rounded-xl bg-[#434040] hover:bg-black">Sign up</button>}
            modal
            nested
            open ={showSignUp}
            onClose={()=>setShowSignUp(false)}
            
          >
            {close => (
              <div className="modal ">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header flex flex-col items-center text-center">
                  <Images src={logo} />
                  <h2 className=' text-white text-2xl '>Sign </h2>
                </div>
                <div className='text-white'>
                  <p className='  text-xl text-left'>Email:</p>
                  <input type="text" placeholder='enter your email' className=' px-16 py-1 rounded-md bg-black outline-none mt-3 mb-5' />
                  <p className='  text-xl text-left'>Password:</p>
                  <input type="text" placeholder='enter your password' className=' px-16 py-1 rounded-md bg-black outline-none my-3' />
                  <button className='my-3 px-10 py-2 bg-black  rounded-xl duration-300 hover:bg-[#262525]'>Create an account</button>
                  <p className=' text-lg mt-3'>Don’t have account? Create an account </p>
                  <button onClick={handleSignInClick} className=' text-red-700 text-center'>sign in</button>
                </div>
              </div>
            )}
          </Popup> */}
          {/* popup sign up ----------------------- */}
        </div>
      </div>
    </section>
  )
}

export default FirstTopic
