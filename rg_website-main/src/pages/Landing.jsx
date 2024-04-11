import styles from "../style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero, HeroCheck } from "../components";
import React from 'react';

const Landing = () => {
    return (
        <div>
            <div className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>

                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <HeroCheck />
                    </div>
                </div>

                <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Testimonials />
                        <Business />
                        <Billing />
                        <CardDeal />
                        <CTA />
                        <Footer />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing
