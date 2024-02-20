
export default function ThirdButton({className,text}) {
  return (
    <button className={`px-8 text-center hover:bg-black duration-300 py-1 text-lg font-semibold rounded-lg text-white bg-[#434040] ${className}`}>{text}</button>
  )
}
