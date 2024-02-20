import FirstTopic from "../Components/WithOutLoggedMini/FirstTopic";
import SecondTopic from "../Components/WithOutLoggedMini/SecondTopic";
import ThirdTopic from "../Components/WithOutLoggedMini/ThirdTopic";

export default function HomePages() {
  return (
    <div className=' bg-[#191919] w-full px-16'>
    <FirstTopic/>
    <SecondTopic />
    <ThirdTopic />
  </div>
  )
}
