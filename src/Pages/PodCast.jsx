import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import ImagesData from '../ImagesData'
import { FaRegPlayCircle } from "react-icons/fa";
import Flex from '../Components/Flex';
import Images from '../Components/Images';
import ThirdButton from '../Components/ThirdButton';
export default function PodCast() {
  const [data,setdata] =useState(ImagesData)
  const [showApi,setshowApi] =useState([]);
  useEffect(()=>{
  fetch('https://api.lyrics.ovh/suggest/e')
  .then(res => res.json())
  .then(data =>setshowApi(data))
  }, []);
  const handleMusicSelection = ()=>{
    console.log("data");
  }
  return (
    <section className=' bg-[#191919] w-full px-16 '>
    <div className={`text-white flex justify-between  pt-6 `}>
      <h2 className=" text-3xl font-semibold"> Welcome,claudia Alvies</h2>
      <div className=" relative">
        <input type="text" placeholder="Artist, Music, Album, Etc" className="py-2 px-10 bg-black rounded-3xl" />
        <FaSearch className=" absolute top-[13px] left-4" />
        <MdOutlineKeyboardVoice  className=" absolute top-3 right-5" />
      </div>
    </div>

    <div className="overflow-y-scroll w-full h-[600px]">
    {showApi.data && showApi.data.map((item) => {
    console.log(item.artist);
   
  })}
     <Flex className=" flex-wrap gap-x-10">
     {
        showApi.data && showApi.data.map((item,id) => {
          // const { id, title, imgs } = item
          return <div key={id} className="mt-10 ">
            {/* <ThirdButton text={title} /> */}
                  <div className=" relative"  >
                <Images src={item.artist.picture} alt={item.artist} />
                  <button onClick={()=>handleMusicSelection(item)}>
                  <FaRegPlayCircle  className=" absolute  text-white  top-10 left-[50%] text-5xl translate-x-[-50%] " />
                  </button>
                  </div>
          </div>
        })
      }
     </Flex>
    
    </div>
  </section>
  )
}
