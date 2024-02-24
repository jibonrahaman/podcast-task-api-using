import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";


function LoggedFirstTopic({className}) {
 
  return (
 <section>
     <div className={`text-white flex justify-between  pt-6 ${className}`}>
       <h2 className=" text-3xl font-semibold"> Welcome to fauget music services</h2>      
       <div className=" relative">
       <input type="text" placeholder="Artist, Music, Album, Etc" className="py-2 px-10 bg-black rounded-3xl"/>
       <FaSearch className=" absolute top-[13px] left-4" />
       <MdOutlineKeyboardVoice className=" absolute top-3 right-5"/>
       </div>
    </div>          
 </section>
  )
}

export default LoggedFirstTopic
