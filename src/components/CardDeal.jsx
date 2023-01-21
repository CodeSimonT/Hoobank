import { card } from "../assets"
import Button from "./Button"
import styles, {layout} from "../style"

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h1 className='font-poppins font-semibold
         text-[45px] text-white leading-[80px]'>Find a better card deal <br/>
          in few easy steps.</h1>
        <p className={`text-dimWhite md:max-w-[470px] w-full text-[18px] pt-5 leading-[40px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet
        eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <div>
          <Button style={'mt-[30px]'}/>
        </div>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%] object-contain" />
      </div>
    </section>
  )
}

export default CardDeal