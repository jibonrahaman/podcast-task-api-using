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
  console.log(showApi);
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
    console.log(item);
    // return your JSX for each item here
  })}
      {/* {
        data.map((item) => {
          const { id, title, imgs } = item
          return <div key={id} className="mt-10 ">
            <ThirdButton text={title} />
            <Flex className=" mt-5 justify-between">
              {
                imgs.map((items, index) => (
                  <div key={index} className=" relative">
                    <Images src={items} alt={items} />
                    <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
                  </div>
                ))
              }
            </Flex>
          </div>
        })
      } */}
    
    </div>
  </section>
  )
}
