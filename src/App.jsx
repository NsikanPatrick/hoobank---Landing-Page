import styles from '../styles';
import {
  Navbar,
  Hero,
  Business,
  Billing,
  Button,
  CardDeal,
  Clients,
  Cta,
  FeedbackCard,
  Faq,
  // Faqa,
  GetStarted,
  Stats,
  Testimonials,
  Pricing,
  Footer,
} from "./Components";


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* NAVBAR COMPONENT */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* END OF NAVBAR */}

      {/* HERO SECTION */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* END OF HERO SECTION */}

      {/* COMPOSING ALL OTHER COMPONENTS SECTION */}
       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          {/* The components from here needs a retouch */}
          <Business />   
          <Billing />
          <CardDeal />
          <Faq />
          <Testimonials />
          <Pricing />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div> 
      {/* END OF COMPOSING ALL OTHER COMPONENTS SECTION */}
    </div>
  )
}

export default App;