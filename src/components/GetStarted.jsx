import { arrowUp } from "../assets"
import styles from "../style"
function GetStarted() {
  return (
    <div className='w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer'>
      <div className={`w-[100%] h-[100%] bg-primary rounded-full ${styles.flexCenter} flex-col`}>
        <div className="flex">
          <h1 className='font-poppins test-normal text-[15px]
          text-gradient'>Get</h1>
          <img src={arrowUp} alt="arrowUp" />
        </div>
        <h1 className='font-poppins test-normal text-[15px]
          text-gradient'>Started</h1>
      </div>
    </div>
  )
}

export default GetStarted