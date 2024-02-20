import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";

function LoggedFirstTopic({className}) {
  return (
 <section>
     <div className={`text-white flex justify-between  pt-6 ${className}`}>
       <h2 className=" text-3xl font-semibold"> Welcome to fauget music services</h2>      
       <input type="text" placeholder="Artist, Music, Album, Etc"/>
       <FaSearch />
       <MdOutlineKeyboardVoice />

    </div>          
 </section>
  )
}

export default LoggedFirstTopic
