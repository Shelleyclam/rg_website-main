import React from 'react'
import styles from "../style"
import Navbar from "../components/Navbar";
import Parse from 'parse/dist/parse.min.js';




const Register = () => {

    const handleRegister = async (event) => {

        console.log(event.target.email.value)
        console.log(event.target.name.value)
        console.log(event.target.company_name.value)
        console.log(event.target.phone_number.value)
        console.log(event.target.message.value)

        // create a new Parse Object instance
      const Person = new Parse.Object('ClientDetails');
      // define the attributes you want for your Object
      Person.set('email', event.target.email.value);
      Person.set('name', event.target.name.value);
      Person.set('company_name', event.target.company_name.value);
      Person.set('phone_number', event.target.phone_number.value);
      Person.set('messages', event.target.message.value);

      await Person.save();


    } 

  return (
    <div class="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingZ} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
        </div>
        <section class="bg-primary dark:bg-gray-900">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gradient">Contact Us</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-400 dark:text-gray-400 sm:text-xl">Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" class="space-y-8" onSubmit={handleRegister}>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-300">Name</label>
                        <input type="text" id="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required />
                    </div>
                    <div>
                        <label for="company_name" class="block mb-2 text-sm font-medium text-gray-300">Company Name</label>
                        <input type="text" id="company_name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required />
                    </div>
                    <div>
                        <label for="phone_number" class="block mb-2 text-sm font-medium text-gray-300">Phone Number</label>
                        <input type="text" id="phone_number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-300">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    {/* <div class="grid grid-cols-2"> */}
                        <button type="submit" class={`py-4 px-6 mt-10 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-full outline-none ${styles} place-self-center`}>Register</button>
                        {/* <button class={`py-4 px-6 mt-10 font-poppins font-medium text-[18px] text-gradient bg-white rounded-full outline-none ${styles} place-self-center`}>Back</button> */}
                    {/* </div> */}
                    
                 </form>
            </div>
        </section>
    </div>
    
  )
}

export default Register
