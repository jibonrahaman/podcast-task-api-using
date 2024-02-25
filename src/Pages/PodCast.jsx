import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";

export default function PodCast() {
  return (
    <section className=' bg-[#191919] w-full px-16'>
         <div className={`text-white flex justify-between  pt-6 `}>
       <h2 className=" text-3xl font-semibold"> Welcome,claudia Alvies</h2>      
       <div className=" relative">
       <input type="text" placeholder="Artist, Music, Album, Etc" className="py-2 px-10 bg-black rounded-3xl"/>
       <FaSearch className=" absolute top-[13px] left-4" />
       <MdOutlineKeyboardVoice className=" absolute top-3 right-5"/>
       </div>
    </div> 
    </section>
  )
}
