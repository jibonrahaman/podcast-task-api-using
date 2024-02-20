import Flex from "../Flex";
import Images from "../Images";
import ThirdButton from "../ThirdButton";
import musicOne from '/public/images/music1.png';
import musicTwo from '/public/images/music2.png';
import musicThree from '/public/images/music3.png';
import musicFour from '/public/images/music4.png';
import musicFive from '/public/images/music5.png';
export default function ThirdTopic() {
  return (
 <div className=" mt-8">
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
        <Images src={musicOne} alt={musicOne} />
        <Images src={musicTwo} alt={musicTwo} />
        <Images src={musicThree} alt={musicThree} />
        <Images src={musicFour} alt={musicFour} />
        <Images src={musicFive} alt={musicFive} />
     </Flex>

 </div>
  )
}
