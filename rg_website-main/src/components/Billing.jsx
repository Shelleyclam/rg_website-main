import {one, two, three } from "../assets";
import styles, { layout } from "../style";


const BillingCard = ({ icon, title}) => (
  <div className={`flex flex-row p-6 rounded-[20px]`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className={`${styles.sideHeading} font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1`}>
        {title}
      </h4>
    </div>
  </div>
);

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={styles.paddingY}>
      {/* <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
      
      <BillingCard icon={one} title="Digitize your product catalogue" />
      <BillingCard icon={two} title="Track your orders and Transactions" />
      <BillingCard icon={three} title="Digitized Documentation" />
      

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      We increase your visibility and  <br className="sm:block hidden" />
      help you in selling across the country.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our streamlined tools are designed to work in alignment with your
       workflow, enabling buyers and sellers to achieve an extended reach and better connectivity.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
