import styles from "../style";
import car from "../assets/new_ev_car.png";
import  {Link}  from "react-router-dom";
import Button from "./Button";

const HeroCheck = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col text-center`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 pt-28 pb-36 `}>
                    <div className="flex flex-row justify-between items-center w-full ">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[54px] text-white ss:leading-[100.8px] leading-[80px] ">
                            Streamline your {" "}
                            <span className="text-gradient">Business</span>{" "}
                        </h1>
                    </div>

                    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                        with the largest one stop EV marketplace
                    </h1>
            
                    {/* <Link to="./register"><button class={`py-4 px-6 mt-10 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-full outline-none ${styles} place-self-center`}>Connect Now</button></Link> */}
                    {/* <p className={`${styles.paragraph} max-w-[470px] mt-10 pb-16 pr-10 ml-96 text-center`}>
                        Our one stop platform is to build an EV economy
                        while prioritizing sustainability, focusing on key areas such
                        as time-saving, improved decision-making, supply chain visibility, and waste reduction.
                    </p> */}
                </div>
            

        </section>
    );
};

export default HeroCheck;