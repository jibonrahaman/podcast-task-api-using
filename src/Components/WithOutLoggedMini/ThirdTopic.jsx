import Flex from "../Flex";
import ThirdButton from "../ThirdButton";

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
 </div>
  )
}
