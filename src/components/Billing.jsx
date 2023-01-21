import { bill, google, apple  } from "../assets"
import styles, {layout} from "../style"


function Billing() {
  return (
    <section className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse} p-[20px]`}>
        <img src={bill} alt="bill" 
        className='w-[100%] h-[100%] object-contain z-[5]' />
        <div className='left-0 top-20 absolute w-[500px] h-[500px] z-[4]
        white__gradient rounded-full' />
      </div>

      <div className={layout.sectionInfo}>
        <h1 className='font-poppins font-semibold
         text-[45px] text-white leading-[80px]'>Easily control your <br/>
          billing & invoicing.</h1>
        <p className={`text-dimWhite md:max-w-[470px] w-full text-[18px] pt-5 leading-[40px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices
          ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex mt-[40px]">
          <img src={apple} alt="apple" className="w-[100px] cursor-pointer mr-4" />
          <img src={google} alt="google" className="w-[100px] cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing