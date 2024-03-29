import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import ImagesData from '../ImagesData'
import { FaRegPlayCircle } from "react-icons/fa";
import Flex from '../Components/Flex';
import Images from '../Components/Images';
import ThirdButton from '../Components/ThirdButton';
import { GiCancel } from "react-icons/gi";

export default function PodCast() {
  const [data, setdata] = useState(ImagesData)
  const [showApi, setshowApi] = useState([]);
  const [audioSrc, setAudioSrc] = useState(null);
  const [open,setOpen] =useState(true)
  useEffect(() => {
    fetch('https://api.lyrics.ovh/suggest/e')
      .then(res => res.json())
      .then(data => setshowApi(data))
  }, []);

  const handleMusicSelection = (index) => {
    setAudioSrc(showApi.data[index]);
   
  }

  return (
    <section className=' bg-[#191919] w-full px-16 relative'>
      <div className={`text-white flex justify-between  pt-6 `}>
        <h2 className=" text-3xl font-semibold"> Welcome,claudia Alvies</h2>
        <div className=" relative">
          <input type="text" placeholder="Artist, Music, Album, Etc" className="py-2 px-10 bg-black rounded-3xl" />
          <FaSearch className=" absolute top-[13px] left-4" />
          <MdOutlineKeyboardVoice className=" absolute top-3 right-5" />
        </div>
      </div>

      <div className=" w-full h-[600px]">
        <Flex className=" flex-wrap gap-x-10">
          {
            showApi.data && showApi.data.map((item, index) => {
              return <div key={index} className="mt-10 relative">
                <div className=" relative"  >
                  <Images src={item.album.cover} alt={item.album.cover} />
                  <button onClick={() => handleMusicSelection(index)}>
                    <FaRegPlayCircle className=" absolute  text-white  top-10 left-[50%] text-5xl translate-x-[-50%] " />
                  </button>
                </div>
              </div>
            })
          }
        </Flex>

      </div>
      {/* Audio player */}
      {
        audioSrc  && 
        <div className=" absolute bottom-[5%] left-[50%] translate-x-[-50%] w-[40%] h-[200px]  bg-white/70 backdrop-blur-sm">
        <div  className=" w-full h-full relative " >
        <img src={audioSrc.artist.picture} alt={audioSrc.artist.picture} className=" w-full h-full object-cover"/>
        <div className=" w-full h-full bg-black/60 top-0 left-0 absolute"/>
        </div>
        <audio controls src={audioSrc.preview} className=" absolute  bottom-5 left-[50%] translate-x-[-50%] w-[50%] h-[20%]"/>
        <button onClick={()=>setAudioSrc(false)}  className=" text-white absolute  top-0 right-0 text-3xl" >
        <GiCancel />
        </button>
      </div>
      }
    </section>
  )
}
