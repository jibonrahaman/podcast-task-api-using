import Images from "./Images";
import logo from '/public/images/logo.png'
export default function Popup() {
  return (
    <div className='absolute top-0 left-0 w-full h-screen bg-black/10 z-50 backdrop-blur-sm flex justify-center items-center '>
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
  )
}
