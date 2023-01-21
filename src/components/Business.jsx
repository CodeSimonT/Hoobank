import { features } from "../constants"
import styles, {layout} from '../style'
import Button from './Button'
function Business() {
  return (
    <section className={`${layout.section} ${styles.paddingY}`} >
      <div className={` md:text-start text-center flex flex-1 md:items-start items-center flex-col justify-center `}>
        <h1 className='font-poppins font-semibold
         text-[45px] text-white leading-[80px]'>You do the business, <br/>
          we’ll handle the money.</h1>
        <p className={`text-dimWhite md:max-w-[470px] w-full text-[18px] pt-5 leading-[40px]`}>
        With the right credit card, you can improve your financial life by building credit, 
        earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <div>
          <Button style={`mt-[20px]`} />
        </div>
      </div>

    <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index) => (
          <div
          className={`flex flex-row font-poppins text-white bg-primary justify-center items-center
           rounded-[15px] p-6 feature-card ${index !== feature.length - 1 ? 'mb-5' : 'mb-0'}`}
          >
            <div className={`w-[50px] h-[50px] bg-dimBlue ${styles.flexCenter}
            rounded-full `}>
              <img src={feature.icon} alt="" 
              className="w-[50%] h-[50%] object-contain"/>
            </div>
            <div className="flex flex-col justify-center items-start flex-1 ml-3">
              <h1 className="text-[18px] leading-[30px] font-bold">{feature.title}</h1>
              <p className={`${styles.paragraph} text-[16px]`}>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Business