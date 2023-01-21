import Button from "./Button"
import styles, {layout} from "../style"

function Starter() {
  return (
    <section className={`flex flex-col w-full  bg-black-gradient my-20 ${styles.padding} rounded-[20px]`}>
      <div className='flex flex-1 md:flex-row justify-between flex-col'>
        <div className='md:text-start text-center'>
        <h1 className={`${styles.heading2} flex md:justify-start justify-center`}>Let’s try our service now!</h1>
        <p className={`text-dimWhite md:max-w-[470px] w-full text-[18px] pt-5 leading-[40px]`}>
          Everything you need to accept card payments and grow your
           business anywhere on the planet.</p>
        </div>
        <div className={`flex md:justify-end justify-center items-center md:mr-10 mr-0`}>
          <Button/>
        </div>
      </div>
    </section>
  )
}

export default Starter