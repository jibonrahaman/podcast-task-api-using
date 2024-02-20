import Images from "../Images"
import WithLogged2ndTopic from '/public/images/WithLogged2ndTopic.png'
export default function SecondTopic() {
    return (
        <div className="text-lg font-semibold mt-5 text-white ">
            <div className=" relative ">
               <div className=" h-[280px]">
               <Images src={WithLogged2ndTopic} alt={WithLogged2ndTopic} className=" w-full h-full"/>
               </div>
                <div className=" absolute top-10 left-14 ">
                    <p>Top play music station</p>
                    <h2 className=" text-2xl my-3">The Dark Side of Music: Unveiling Its Negative Effects</h2>
                    <p className=" w-[50%] my-3 text-sm font-medium">Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</p>
                    <button className=" px-6 py-1 bg-[#11343c] rounded-xl ">For You?</button>
                </div>
            </div>

        </div>
    )
}
