import { clients } from "../constants"
import styles from "../style"

function Companies() {
  return (
    <section className="flex flex-wrap justify-evenly items-center">
      {clients.map((client,index) => (
        <div key={client.id} className={`${styles.flexCenter} w-[170px] h-fit`}>
          <img src={client.logo}  alt="logo" className='w-[100%] h-[100%] object-contain' />
        </div>
      ))}
    </section>
  )
}

export default Companies