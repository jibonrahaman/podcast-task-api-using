import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import Flex from "../Components/Flex";
import Images from "../Components/Images";
import ThirdButton from "../Components/ThirdButton";
import { useEffect, useState } from "react";
import ImagesData from "../ImagesData";
export default async function PodCast() {
  const [data, setData] = useState(ImagesData);
  const [Datas,setDatas] =useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  useEffect(()=>{  
  const fetchData = async ()=>{
    try{
    const response = await fetch('https://api.lyrics.ovh/suggest/e');
    if(response.ok){
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();
    setDatas(jsonData)
    setLoading(false); 
    
    }catch(error){
      console.error('Error fetching data:', error);
      setLoading(false); 
    }
  }
  fetchData();
  }, [])

  return (
    <section className=' bg-[#191919] w-full px-16 '>
      <div className={`text-white flex justify-between  pt-6 `}>
        <h2 className=" text-3xl font-semibold"> Welcome,claudia Alvies</h2>
        <div className=" relative">
          <input type="text" placeholder="Artist, Music, Album, Etc" className="py-2 px-10 bg-black rounded-3xl" />
          <FaSearch className=" absolute top-[13px] left-4" />
          <MdOutlineKeyboardVoice className=" absolute top-3 right-5" />
        </div>
      </div>

      <div className="overflow-y-scroll w-full h-[600px]">
        {
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
        }
        {/* <div className=" mt-10">
      <ThirdButton  text="For You"/>
      <Flex className=" mt-5 justify-between">
      <div className=" relative">
      <Images src={musicOne} alt={musicOne} />
      <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
      </div>

      <div className=" relative">
      <Images src={musicTwo} alt={musicTwo} />
      <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
      </div>

      <div className=" relative">
      <Images src={musicThree} alt={musicThree} />
      <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
      </div>

      <div className=" relative">
      <Images src={musicFour} alt={musicFour} />
      <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
      </div>

      <div className=" relative">
      <Images src={musicFive} alt={musicFive} />
      <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
      </div>
        
     </Flex>

 </div>
 <div className=" mt-10">
      <ThirdButton  text="For You"/>
      <Flex className=" mt-5 justify-between">
      <div className=" relative">
      <Images src={musicOne} alt={musicOne} />
      <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
      </div>

      <div className=" relative">
      <Images src={musicTwo} alt={musicTwo} />
      <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
      </div>

      <div className=" relative">
      <Images src={musicThree} alt={musicThree} />
      <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
      </div>

      <div className=" relative">
      <Images src={musicFour} alt={musicFour} />
      <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
      </div>

      <div className=" relative">
      <Images src={musicFive} alt={musicFive} />
      <FaRegPlayCircle className=" absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl" />
      </div>
        
     </Flex>

 </div> */}
      </div>
    </section>
  )
}
