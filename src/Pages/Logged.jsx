import LoggedFirstTopic from "../Components/Logged/LoggedFirstTopic";
import LoggedSecondTopic from "../Components/Logged/LoggedSecondTopic";
import LoggedThirdTopic from "../Components/Logged/LoggedThirdTopic";

export default function Logged() {
  return (
    <div className=' bg-[#191919] w-full px-16'>
      <LoggedFirstTopic />
      <LoggedSecondTopic />
      < LoggedThirdTopic/>
    </div>
  )
}
