
import Flex from '../Flex';
import Images from '../Images';
import ThirdButton from '../ThirdButton';
import musicOne from '/public/images/music1.png';
import musicTwo from '/public/images/music2.png';
import musicThree from '/public/images/music3.png';
import musicFour from '/public/images/music4.png';
import musicFive from '/public/images/music5.png';
import { FaRegPlayCircle } from "react-icons/fa";

export default function LoggedThirdTopic() {
  return (
 <div className=" mt-16">
       <Flex className=" justify-between">
      <ThirdButton  text="For You"/>
      <ThirdButton  text="Popular"/>
      <ThirdButton  text="Trend"/>
      <ThirdButton  text="Pop"/>
      <ThirdButton  text="Edm"/>
      <ThirdButton  text="Rock"/>
      <ThirdButton  text="More"/>
    </Flex>
     
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
  )
}
