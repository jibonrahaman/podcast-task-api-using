
function FirstTopic({className}) {
  return (
    <div className={`text-white flex justify-evenly pt-12 ${className}`}>
       <h2 className=" text-3xl font-semibold"> Welcome to fauget music services</h2>
      
       <div className=" flex gap-x-8">
       <button className="px-10 py-2 cursor-pointer text-center duration-300 rounded-xl bg-black hover:bg-[#434040]">Sign in </button>
       <button className=" px-10 py-2 cursor-pointer text-center duration-300 rounded-xl bg-[#434040] hover:bg-black">Sign up</button>
       </div>
    </div>
  )
}

export default FirstTopic
