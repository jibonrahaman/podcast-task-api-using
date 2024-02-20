import { FaHome } from "react-icons/fa";
import Flex from "../Components/Flex";
import Images from "../Components/Images";
import logo from '/public/images/logo.png'
import { IoSettings } from "react-icons/io5";
import { SiMusicbrainz } from "react-icons/si";
import Svg from '../Svg/Svg'

export default function WithOutLogged() {
 
  return (
    <div>
      <section className="withoutLogged   w-full">
     <Flex>
      {/* sidebar design  */}      
     <div className="bg-[#3B3B3B] h-screen  px-5 flex  flex-col gap-y-7 pt-10 text-white font-semibold text-xl">
        <div className=' flex flex-col gap-y-7'>
          <Images src={logo} />
          <Flex className=" relative after:content-[''] after:w-10 after:absolute after:top-4 after:right-8 after:h-[1px] after:bg-white">
            <h2>Menu</h2>
          </Flex>

          <Flex className=" items-center gap-x-5">
            <FaHome />
            <h2  className ={`${window.document.location.pathname== '/logged' && ' text-green-600'} ${window.document.location.pathname== '/' && ' text-green-600'}`}>Home</h2>
          </Flex>

          <Flex className=" items-center  gap-x-5">
            <SiMusicbrainz />
            <h2>Podcast</h2>
          </Flex>
          <Flex className=" items-center gap-x-5">
          <IoSettings />

            <h2>Settings</h2>
          </Flex>
        </div>
        <div className=' flex flex-col gap-y-7 mt-20'>
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
