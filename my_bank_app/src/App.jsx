import styles from './style';

import {Navbar,Billing,CardDeal,Business,Clients,ClickToAction,Stats,Footer,Testimonials,Hero,
} from "./components";

const App = () => (
    <div className="bg-primary w-full  overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* This will be the nav bar section */}
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* This will be the hero section, the main page where everything is initially loaded */}
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* This will be several different sections displayed on page */}
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <ClickToAction />
          <Footer />
        </div>
      </div>
    </div>
  )


export default App