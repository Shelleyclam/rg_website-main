import styles from "../style";
import car from "../assets/EV_Car.png";
import Button from "./Button";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.padding} sm:text-[18px]`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0  px-16 px-6 pt-26`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[80px]">
            Streamline your <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Business</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[70px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          with the largest EV marketplace 
        </h1>
        {/* <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
        Our one stop platform is to build an EV economy 
        while prioritizing sustainability, focusing on key areas such 
        as time-saving, improved decision-making, supply chain visibility, and waste reduction.
        </p> */}
        <button className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}">Read More</button>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={car} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
