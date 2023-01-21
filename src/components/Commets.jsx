import { quotes } from "../assets"
import { feedback } from "../constants"
import styles, { layout } from "../style"

function Commets() {
  return (
    <section className={`flex flex-col`}>
      <div className="flex md:flex-row flex-col justify-between
      w-full md:text-start text-center">
        <h1 className='font-poppins font-semibold
         text-[45px] text-white leading-[80px]'>What people are <br/>
          saying about us</h1>
        <p className={`text-dimWhite md:max-w-[470px] w-full text-[18px] pt-5 leading-[40px]
        ${styles.flexCenter}`}>Everything you need to accept card payments and grow 
          your business anywhere on the planet.</p>
      </div>
      
      <div className={`flex flex-wrap justify-center py-[100px]`}>
        {feedback.map((feedback,index) => (
          <div key={feedback.id} className={`max-w-[370px] min-w-[370px] p-8 feature-card flex flex-1 flex-col
          items-start text-white rounded-[20px] font-poppins ${index !== feedback.length - 1 ? 'mr-[5px]' : 'ml-0'}`}>
            <img src={quotes} alt="quotes" className="py-10" />
            <p className="text-[18px] leading-[32px]" >{feedback.content}</p>
            <div className="flex flex-1 flex-row mt-6 items-end pb-3">
              <img src={feedback.img} alt="" 
              className="w-[42px] h-[42px] object-contain"/>
              <div className="ml-4">
                <h4>{feedback.name}</h4>
                <p className='text-dimWhite'>{feedback.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Commets