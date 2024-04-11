import styles, { layout } from "../style";
import {Navbar, Footer, Buyers, Providers, Suppliers} from "../components";
import {evimg} from "../assets";
import React from 'react';
import  {Link}  from "react-router-dom";


const Services = () => {
    return (
        <div class="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingZ} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <h1 className={`${styles.heading2} mx-auto max-w-[510px] text-center lg:mt-10 text-gradient text-xl  block text-lg font-bold pb-16`}>
                        OUR SERVICES
                    </h1>
                    {/* <div class="grid grid-cols-3 gap-x-32">
                        <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] `}>BUYER</button>
                        <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] `}>SUPPLIER</button>
                        <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] `}>SERVICE PROVIDER</button>
                    </div> */}
                    <div class="container my-20 px-6 mx-auto">
                        <Buyers text="BUYERS" />

                        <section class="mb-32">
                            <div class="flex flex-wrap ">
                                <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 ">
                                    <div class="flex lg:py-12">
                                        <img src={evimg} class="w-full rounded-lg shadow-lg z-10 ml-0 lg:visible ml-10"
                                            id="cta-img-nml-50 " alt="" />
                                    </div>
                                </div>

                                <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                                    <div
                                        class="bg-slate-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                                        <div class="lg:pl-12 ">
                                            <h2 class="text-3xl font-bold mb-6">Want to know more?</h2>
                                            <p class="mb-6 pb-2 lg:pb-0">
                                            Our platform provides you with a unified, intuitive workspace to handle all your electric vehicle-related requirements efficiently. With our easy-to-use interface, you can browse and choose from a wide range of EV products and components, connect with relevant suppliers, manage your digital documents, maintain your purchase orders, and keep track of your order status in real-time. By streamlining and simplifying the EV procurement process, we help you save time, effort, and resources.
                                            </p>
                                            <Link to="/register"><button type="button" class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Connect now</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <Suppliers text="SUPPLIERS" />

                        {/* <section class="mb-32 text-gray-800  text-center md:text-left">
                                <div class="flex flex-wrap justify-center">
                                    <div class="place-self-center mx-auto text-center grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
                                        <div class="grid md:grid-cols-2 gap-x-6 items-center">
                                            <div class="mb-6 md:mb-0">
                                                <h2 class="text-3xl font-bold">
                                                    Do not miss any updates.
                                                    <br />
                                                    <span class="text-cyan-700">Subscribe to the newsletter</span>
                                                </h2>
                                            </div>

                                            <div class="mb-6 md:mb-0">
                                                <div class="md:flex flex-row">
                                                    <button
                                                        class="inline-block px-7 py-3 lg:ml-48 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                                                        Register Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section> */}

                        <Providers text="SERVICE PROVIDERS" />

                    </div>

                </div>
            </div>



            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default Services
