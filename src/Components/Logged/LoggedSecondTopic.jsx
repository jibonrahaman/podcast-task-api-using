import Images from "../Images";
import LoggedSecondPic from '/public/images/LoggedSecondTopic.png'
export default function LoggedSecondTopic() {
  return (
    <div className="text-lg font-semibold mt-5 text-white ">
    <div className=" relative ">
       <div className=" h-[280px]">
       <Images src={LoggedSecondPic} alt={LoggedSecondPic} className=" w-full h-full"/>
       </div>
        <div className=" absolute top-10 left-14 ">
            <p>No Ads & Unlock All Paid Songs</p>
            <h2 className=" text-5xl my-3">Premium Membership</h2>
            <p className=" w-[50%] my-3 text-sm font-medium">It is a long established fact that a is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <div className=" flex gap-x-6">
            <button className="px-6 py-1 bg-[#015b69] rounded-xl ">Upgrade Now</button>
            <button className="px-6 py-1 bg-[#015b69] rounded-xl "> Learn more</button>
            </div>
        </div>
    </div>

</div>
  )
}
