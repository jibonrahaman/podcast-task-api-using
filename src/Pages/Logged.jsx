import { useNavigate } from "react-router-dom";
import LoggedFirstTopic from "../Components/Logged/LoggedFirstTopic";
import LoggedSecondTopic from "../Components/Logged/LoggedSecondTopic";
import LoggedThirdTopic from "../Components/Logged/LoggedThirdTopic";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Logged() {
  const navigate =useNavigate();
  const userData =useSelector(state => state.userLoginInfo.userInfo);
  useEffect(() => {
    // Check if userData is empty or undefined
    if (!userData || userData.length == 0) {
      navigate('/');
    }
  }, [userData,navigate]);
  return (
    <div className=' bg-[#191919] w-full px-16'>
      <LoggedFirstTopic />
      <LoggedSecondTopic />
      < LoggedThirdTopic/>
    </div>
  )
}
