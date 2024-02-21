import { FaHome } from "react-icons/fa";
import Flex from "../Components/Flex";
import Images from "../Components/Images";
import logo from '/public/images/logo.png'
import { IoSettings } from "react-icons/io5";
import { SiMusicbrainz } from "react-icons/si";
import { GrLogout } from "react-icons/gr";
import Svg from '../Svg/Svg'

export default function WithOutLogged() {
 
  return (
    <div>
      <section className="withoutLogged   w-full">
     <Flex>
      {/* sidebar design  */}      
     <div className="bg-[#3B3B3B] h-screen  px-5 flex  flex-col gap-y-7 pt-6 text-white font-semibold text-xl">
        <div className=' flex flex-col gap-y-5'>
          <Images src={logo} />
          <Flex className=" relative after:content-[''] after:w-10 after:absolute after:top-4 after:right-8 after:h-[1px] after:bg-white">
            <h2>Menu</h2>
          </Flex>

          <Flex className=" items-center gap-x-5">
            <FaHome />
            <button  className ={`${window.document.location.pathname== '/logged' && ' text-green-600'} ${window.document.location.pathname== '/' && ' text-green-600'}`}>Home</button>
          </Flex>

          <Flex className=" items-center  gap-x-5">
            <SiMusicbrainz />
            <button>Podcast</button>
          </Flex>
          <Flex className=" items-center gap-x-5">
          <IoSettings />
            <button>Settings</button>
          </Flex>
          
          <Flex className={`items-center gap-x-5 ${window.document.location.pathname== '/logged' ? " block" : " hidden"}`}>
          <GrLogout />
            <button>LogOut</button>
          </Flex>
        </div>
        <div className={`flex flex-col gap-y-8   ${window.document.location.pathname== '/logged' ? "mt-20" : " mt-28"}`}>
          <Flex className=" relative after:content-[''] after:w-10 after:absolute after:top-4 after:right-2 after:h-[1px] after:bg-white">
            <h2>My Playlist</h2>
          </Flex>

          <Flex className=" items-center gap-x-5">
          <Svg />
            <h2>Playlist #A</h2>
          </Flex>
          <Flex className=" items-center  gap-x-5">
          <Svg />
            <h2>Playlist #A</h2>
          </Flex>
          <Flex className=" items-center gap-x-5">
          <Svg />
            <h2>Playlist #C</h2>
          </Flex>
          <Flex className=" items-center gap-x-5">
            <Svg />
            <h2>Add New +</h2>
          </Flex>
        </div>
      </div>
      {/* sidebar design  */}
 
     </Flex>
      
    </section>
    </div>
  )
}
