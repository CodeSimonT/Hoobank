import {
  Nav,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Comments,
  Companies,
  Starter,
  Footer
} from './components'
import styles from './style'

function App() {
  return (
    <div className={`w-full bg-primary overflow-hidden`}>
      {/* nav */}
      <div className={`${styles.flexCenter} 
       ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Nav/>
        </div>
      </div>
      {/* hero */}
      <div className={`${styles.paddingY} ${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth} `}>
          <Hero/>
        </div>
      </div>
      {/* body */}
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
        <div  className={`${styles.boxWidth} `}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Comments />
          <Companies />
          <Starter />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App