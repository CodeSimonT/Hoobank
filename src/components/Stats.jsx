import { stats } from "../constants"
import styles from "../style"

function Stats() {
  return (
    <section id="stats" className={`${styles.flexCenter} flex-wrap flex-row justify-evenly
    `}>
      {stats.map((stat,index) => (
        <div 
        key={stat.id}
        className={`text-white font-poppins flex flex-row justify-center
        items-center`}>
          <h4 className="text-[30px] font-semibold ">{stat.value}</h4>
          <p className="text-gradient font-normal uppercase pl-5">{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats