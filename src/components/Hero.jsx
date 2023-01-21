import { discount, arrowUp, robot } from "../assets"
import styles from "../style"
import GetStarted from "./GetStarted"


function Hero() {
  return (
    <section className={`flex md:flex-row flex-col`}>
      <div className={`${styles.paddingX} ${styles.paddingY} flex-1 w-full`}>
        <div className="flex flex-row justify-start items-center
         bg-discount-gradient w-fit rounded-[10px]">
          <img src={discount} alt="discount" 
          className='w-[30px] h-[30px] object-contain ' />
          <h4 className={`font-poppins font-normal text-[15px] ${styles.paragraph} px-2`}>
            <span className="text-white">20%</span> {' '}
            DISCOUNT FOR {' '}
            <span className="text-white">1 MONTH</span>{' '}
            ACCOUNT
            </h4>
        </div>

        <div className="text-white font-poppins font-semibold text-[60px] pt-5
        flex justify-between items-center">
          <h1> The Next <br/>
          <span className="text-gradient">Generation</span>
          </h1>
          <div className='ss:flex hidden'>
            <GetStarted/>
          </div>
        </div>
        <h1 className="text-white font-poppins font-semibold text-[60px] pt-3">
          Payment Method.</h1>
        <p className={`${styles.paragraph} text-[15px] 
        max-w-[470px] py-5`}>Our team of experts uses a methodology to identify 
          he credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.</p>
      </div>

      <div className="flex-1 relative">
        <img src={robot} alt="robot" 
        className="w-[100%] h-[100%] object-contain z-[5]"/>
        <div className='absolute top-0 right-20 pink__gradient w-[300px]
        h-[400px] rounded-full z-[3]' />
        <div className='absolute top-5 right-20 blue__gradient w-[200px]
        h-[300px] rounded-full z-[1]'/>
        <div/>
        <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted/>
        </div>
      </div>
    </section>
  )
}

export default Hero