import { useState } from "react"
import Images from "../Images"
import logo from '/public/images/logo.png'
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { userLoginInfo } from "../../Slices/UserSlices";
import { useNavigate } from "react-router-dom";


function FirstTopic({ className }) {
  const [SignInPopup, setSignInPopup] = useState(false)
  const [SignupPopup, setSignupPopup] = useState(false)
  const [singUpEmail, setsingUpEmail] = useState('')
  const [singUpPass, setsingUpPass] = useState('')
  const [singInEmail, setsingInEmail] = useState('')
  const [singInPass, setsingInPass] = useState('')
  const [singUpEmailError, setsingUpEmailError] = useState('')
  const [singUpPassError, setsingUpPassError] = useState('');
  const [singInEmailError, setsingInEmailError] = useState('')
  const [singInPassError, setsingInPassError] = useState('');
const [defaultErrr,setdefaultErrr] =useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData =useSelector(state => state.userLoginInfo.userInfo);

  const handleChangeSignUpEmail = (e) => {
    setsingUpEmail(e.target.value);
    setsingUpEmailError('');
  }
  const handleChangeSignUpPass = (e) => {
    setsingUpPass(e.target.value)
    setsingUpPassError('');
  }
  const handleSignInPopup = () => {
    setSignInPopup(true)
  }
  const handleSignUpPopup = () => {
    setSignupPopup(true)
  }
  const handleCloseSignIn = () => {
    setSignInPopup(false)
    setSignupPopup(true)
  }
  const handleCloseSignUp = () => {
    setSignInPopup(true)
    setSignupPopup(false)
  }

  const handleSubmitSignUp = () => {
    if (!singUpEmail) {
      setsingUpEmailError("Email required")
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(singUpEmail))
        setsingUpEmailError("Enter Your Valid Email")
    }
    if (!singUpPass) {
      setsingUpPassError("Password required")
    }
   
    if (singUpEmail && singUpPass && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(singUpEmail))) {
      dispatch(userLoginInfo({
       email :singUpEmail,
       password: singUpPass
      }))
       setSignupPopup(false) 
       setSignInPopup(true)
    }
    setsingUpEmail('');
    setsingUpPass('')

  }

const handleChangeSignInEmail = (e)=>{
 setsingInEmail(e.target.value);
 setsingInEmailError('');
}
const handleChangeSignInPass = (e)=>{
 setsingInPass(e.target.value);
 setsingInPassError('');
}

const handleSubmitSignIn = () =>{
  if (!singInEmail) {
    setsingInEmailError("Email required")
  } else {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(singUpEmail))
      setsingUpEmailError("Enter Your Valid Email")
  }
  if (!singInPass) {
    setsingInPassError("Password required")
  }

  if (singInEmail && singInPass && singInEmailError === "" && singInPassError === "") {
    // Assuming userData is an array of user objects
    const foundUser = userData.find(item=> item.email === singInEmail && item.password === singInPass);
    if(foundUser){
      navigate('/logged')
      
    }else{
    setdefaultErrr('Please Correct your info')
    } 
   
  }
  
 
  
}



  return (
    <section className=' relative'>

      <div className={`text-white flex justify-between pt-6 ${className}`}>
        <h2 className=" text-3xl font-semibold"> Welcome to fauget music services</h2>
        <div className=" flex  gap-x-20 ">
          <button onClick={handleSignInPopup} className="px-10 py-2 cursor-pointer text-center duration-300 rounded-xl bg-black hover:bg-[#434040]">Sign in </button>
          <button onClick={handleSignUpPopup} className=" px-10 py-2 cursor-pointer text-center duration-300 rounded-xl bg-[#434040] hover:bg-black">Sign up</button>
        </div>
        {
          SignInPopup &&
          <div className='absolute top-0 left-0 w-full h-screen bg-black/10 z-50 backdrop-blur-sm flex justify-center items-center '>
            <div className=" relative w-[400px] flex flex-col items-center text-center bg-[#3b3b3b] rounded-lg p-5">
              <button onClick={() => setSignInPopup(false)} className=" cursor-pointer text-4xl absolute top-[-5px] right-[-5px]">
                <IoCloseCircleOutline />
              </button>
              <Images src={logo} />
              <h2 className='text-white text-2xl'>Log In</h2>
              <div className='text-white'>
                <p className='text-xl mt-3 text-green-600'>Email:</p>
                <input type="text" onChange={handleChangeSignInEmail} placeholder='enter your email' className='px-16 py-1 rounded-md bg-black outline-none mt-1  ' />
                {
                  singInEmailError && <p className=" mb-5 text-red-600">{singInEmailError}</p>
                }
                <p className='text-xl text-green-600 mt-3'>Password:</p>
                <input type="text" onChange={handleChangeSignInPass} placeholder='enter your password' className='px-16 py-1 rounded-md bg-black outline-none  mt-1' />
                {
                  singInPassError && <p className=" mb-2 text-red-600">{singInPassError}</p>
                }
                {
                  defaultErrr && <p className=" mb-2 text-red-600">{defaultErrr}</p>
                }
                <button onClick={handleSubmitSignIn} className='my-5 px-10 py-2 bg-black rounded-xl duration-300 hover:bg-[#262525]'>Sign in</button>
                <p className='text-lg mt-3'>Don’t have an account? <button onClick={handleCloseSignIn} className='text-red-700 text-center'>Create an account</button></p>
              </div>
            </div>
          </div>
        }

        {
          SignupPopup &&
          <div className='absolute top-0 left-0 w-full h-screen bg-black/10 z-50 backdrop-blur-sm flex justify-center items-center '>
            <div className=" relative w-[400px] flex flex-col items-center text-center bg-[#3b3b3b] rounded-lg p-5">
              <button onClick={() => setSignupPopup(false)} className=" cursor-pointer text-4xl absolute top-[-5px] right-[-5px]">
                <IoCloseCircleOutline />
              </button>
              <Images src={logo} />
              <h2 className='text-white text-2xl'>Sign Up</h2>
              <div className='text-white'>
                <p className='text-xl mt-3 text-green-600 '>Email:</p>
                <input type="text" onChange={handleChangeSignUpEmail} value={singUpEmail} placeholder='enter your email' className='px-16 py-1 rounded-md bg-black outline-none mt-1 ' />
                {
                  singUpEmailError && <p className=" mb-5 text-red-600">{singUpEmailError}</p>
                }
                <p className='text-xl mt-4 text-green-600'>Password:</p>
                <input type="text" onChange={handleChangeSignUpPass} value={singUpPass} placeholder='enter your password' className='px-16 py-1 rounded-md bg-black outline-none  mt-1' />
                {
                  singUpPassError && <p className=" mb-2 text-red-600">{singUpPassError}</p>
                }
                <button onClick={handleSubmitSignUp} className='my-5 px-10 py-2 bg-black rounded-xl duration-300 hover:bg-[#262525]'>Create an account</button>
                <p className='text-lg mt-3'> Have account? Sign in  account  <button onClick={handleCloseSignUp} className='text-red-700 text-center'> signin</button></p>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  )
}

export default FirstTopic
