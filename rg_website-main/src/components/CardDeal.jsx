import { card, track, tracknew } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import  {Link}  from "react-router-dom";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better product deal in<br className="sm:block hidden" />  few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Get quotes from verified sellers in a matter of hours, track the progress, 
      and communicate with potential sellers in real time.
      </p>

      <Link to="./register"><Button styles={`mt-10`} /></Link>
    </div>

    <div className={layout.sectionImg}>
      <img src={track} alt="billing" className="w-[100%] h-[100%] rounded-full" />
    </div>
  </section>
);

export default CardDeal;
