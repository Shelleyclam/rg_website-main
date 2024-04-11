import { features } from "../constants";
import styles, { layout } from "../style";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import React from 'react'


const BlogCard = ({ icon, title, content }) => (
    <div class="max-w-lg mx-auto">
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-20">

            <img class="rounded-t-lg" src={icon} alt="" />

            <div class="p-5">
                <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
                </a>
                <p class="font-normal text-gray-700 mb-3">{content}</p>
                <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                </a>
            </div>
        </div>
    </div>
);

const Blog = () => {
    return (
        <div class="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingZ} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                    <div className="grid sm:grid-cols-1 pr-2 pl-2 md:grid-cols-3">
                        <BlogCard icon="https://flowbite.com/docs/images/blog/image-1.jpg" title="Noteworthy technology acquisitions 2021" content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
                        <BlogCard icon="https://flowbite.com/docs/images/blog/image-1.jpg" title="Noteworthy technology acquisitions 2021" content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
                        <BlogCard icon="https://flowbite.com/docs/images/blog/image-1.jpg" title="Noteworthy technology acquisitions 2021" content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
                        <BlogCard icon="https://flowbite.com/docs/images/blog/image-1.jpg" title="Noteworthy technology acquisitions 2021" content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
                        <BlogCard icon="https://flowbite.com/docs/images/blog/image-1.jpg" title="Noteworthy technology acquisitions 2021" content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
                        <BlogCard icon="https://flowbite.com/docs/images/blog/image-1.jpg" title="Noteworthy technology acquisitions 2021" content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
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

export default Blog
