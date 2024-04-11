import { features } from "../constants";
import styles, { layout } from "../style";
import React from 'react';
import  {Link}  from "react-router-dom";


const Suppliers = ({text}) => (
<section class="pt-12 pb-12 lg:pt-[120px] lg:pb-[90px]">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
          <h2
            class="text-white mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
          >
            {text}
          </h2>
          <p class="text-white text-base">
           EV Chain provides a comprehensive range of EV products and services, making it the only stop suppliers to reach out to buyers.
          </p>
        </div>
      </div>
    </div>
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.266779 13.0037C-0.506658 17.1803 0.421467 21.3568 2.79334 24.8631C5.21678 28.3693 8.82615 30.6897 12.9512 31.4631C13.9308 31.6178 14.859 31.7209 15.7871 31.7209C23.2637 31.7209 29.9668 26.3584 31.359 18.6756C32.9574 10.0647 27.234 1.81466 18.6746 0.26779ZM29.6574 18.3662C29.5543 18.8819 29.4512 19.449 29.2965 19.9131L16.7668 15.2209V1.81466C17.2824 1.86623 17.8496 1.91779 18.3652 2.02091C25.9449 3.4131 30.998 10.735 29.6574 18.3662ZM14.9105 1.81466V14.9115H1.86522C1.91678 14.3959 1.96834 13.8287 2.07147 13.3131C3.20584 6.86779 8.67147 2.22716 14.9105 1.81466ZM13.3121 29.6584C9.65115 28.9881 6.45428 26.9256 4.28865 23.8318C2.79334 21.7178 1.96834 19.2428 1.81365 16.7678H15.6324L28.5746 21.6147C26.048 27.3381 19.7574 30.8443 13.3121 29.6584Z"
                fill="white"
              />
            </svg>
          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">
                Receive Requirement enquiry and Send quotation
          </h4>
          <p class="text-body-color">
            Respond to buyer enquiries by providing appropriate quotations, either by using our existing format or by uploading your own quotation.
          </p>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
          >
            <svg
              width="39"
              height="22"
              viewBox="0 0 39 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.575 4.58345L16.3463 5.55695L16.3463 5.55696L16.575 4.58345ZM20.2921 7.0642L19.6014 7.78736L19.6018 7.78769L20.2921 7.0642ZM32.1756 6.41655L32.4046 5.44311L32.4041 5.44301L32.1756 6.41655ZM28.4577 3.93652L27.7671 4.65974L27.7673 4.6599L28.4577 3.93652ZM6.82441 15.5835L6.59564 16.5569L6.59586 16.557L6.82441 15.5835ZM10.5423 18.0642L9.85161 18.7874L9.85196 18.7877L10.5423 18.0642ZM22.425 17.4173L22.1959 18.3907L22.1963 18.3908L22.425 17.4173ZM18.7079 14.9365L19.3983 14.2131L19.3982 14.213L18.7079 14.9365ZM0.275037 17.4207L-0.672026 17.0997L0.275037 17.4207ZM0.62555 17.6138L-0.0992438 16.9248L0.62555 17.6138ZM28.9752 15.58L29.9222 15.901L28.9752 15.58ZM28.6246 15.3869L27.8998 14.6979L28.6246 15.3869ZM38.7247 4.58049L37.7777 4.25936L38.7247 4.58049ZM38.3742 4.38741L39.099 5.07632L38.3742 4.38741ZM10.0251 6.42044L9.07806 6.09926L10.0251 6.42044ZM10.3756 6.61355L11.1004 7.30255L10.3756 6.61355ZM19.5004 -1C16.9224 -1 14.7064 -0.432275 12.9214 0.777273C11.1301 1.99111 9.86051 3.79212 9.07806 6.09926L10.9721 6.74162C11.6413 4.76847 12.6764 3.35925 14.0434 2.43295C15.4167 1.50235 17.2126 1 19.5004 1V-1ZM11.1004 7.30255C12.6907 5.62967 14.4042 5.10069 16.3463 5.55695L16.8037 3.60996C14.0926 2.97305 11.6733 3.79712 9.65083 5.92456L11.1004 7.30255ZM16.3463 5.55696C17.5202 5.83268 18.3899 6.63023 19.6014 7.78736L20.9828 6.34104C19.8482 5.25741 18.5964 4.03104 16.8036 3.60995L16.3463 5.55696ZM19.6018 7.78769C20.5507 8.69312 21.6704 9.7678 23.1998 10.5957C24.7495 11.4346 26.6758 12 29.2502 12V10C26.9917 10 25.395 9.50973 24.1519 8.83684C22.8885 8.15292 21.9456 7.2597 20.9824 6.34071L19.6018 7.78769ZM29.2502 12C31.8278 12 34.0437 11.4323 35.8286 10.2229C37.6199 9.00923 38.8895 7.20846 39.6718 4.90163L37.7777 4.25936C37.1088 6.23199 36.0737 7.64098 34.7067 8.56718C33.3334 9.49769 31.5376 10 29.2502 10V12ZM37.6493 3.6985C36.0597 5.37104 34.3464 5.89986 32.4046 5.44311L31.9466 7.38998C34.6577 8.02765 37.0771 7.20371 39.099 5.07632L37.6493 3.6985ZM32.4041 5.44301C31.2295 5.16725 30.3598 4.36966 29.1482 3.21314L27.7673 4.6599C28.9017 5.74271 30.1535 6.96904 31.947 7.39008L32.4041 5.44301ZM29.1483 3.2133C28.1993 2.30704 27.0797 1.23211 25.5504 0.404169C24.0008 -0.434783 22.0747 -1 19.5004 -1V1C21.7589 1 23.3554 1.49011 24.5983 2.16296C25.8614 2.84681 26.8041 3.74014 27.7671 4.65974L29.1483 3.2133ZM9.74981 10C7.17206 10 4.95609 10.5678 3.17112 11.7774C1.3798 12.9913 0.110142 14.7924 -0.672026 17.0997L1.2221 17.7418C1.89099 15.7686 2.92609 14.3594 4.29308 13.433C5.66642 12.5024 7.46231 12 9.74981 12V10ZM1.35034 18.3028C2.94075 16.6297 4.65428 16.1007 6.59564 16.5569L7.05318 14.61C4.34259 13.973 1.92317 14.7973 -0.0992438 16.9248L1.35034 18.3028ZM6.59586 16.557C7.77045 16.8327 8.64013 17.6303 9.85161 18.7874L11.233 17.341C10.0983 16.2573 8.84657 15.031 7.05295 14.6099L6.59586 16.557ZM9.85196 18.7877C10.8008 19.6931 11.9204 20.7678 13.4497 21.5957C14.9993 22.4346 16.9257 23 19.5004 23V21C17.2415 21 15.6448 20.5097 14.4018 19.8368C13.1385 19.1529 12.1958 18.2598 11.2326 17.3407L9.85196 18.7877ZM19.5004 23C22.0781 23 24.294 22.4324 26.079 21.223C27.8704 20.0093 29.14 18.2084 29.9222 15.901L28.0281 15.2589C27.3592 17.232 26.3241 18.6411 24.9572 19.5673C23.5838 20.4978 21.7879 21 19.5004 21V23ZM27.8998 14.6979C26.3095 16.371 24.5959 16.9 22.6537 16.4438L22.1963 18.3908C24.9075 19.0277 27.327 18.2035 29.3494 16.0759L27.8998 14.6979ZM22.6541 16.4439C21.4798 16.1675 20.61 15.3697 19.3983 14.2131L18.0174 15.6599C19.1519 16.7427 20.4035 17.9688 22.1959 18.3907L22.6541 16.4439ZM19.3982 14.213C18.4494 13.3077 17.3296 12.2328 15.8003 11.4047C14.2506 10.5656 12.3242 10 9.74981 10V12C12.0083 12 13.6049 12.4904 14.848 13.1635C16.1115 13.8476 17.0544 14.741 18.0176 15.66L19.3982 14.213ZM-0.672026 17.0997C-0.889639 17.7416 -0.537234 18.2988 -0.109577 18.5315C0.304715 18.7568 0.918575 18.757 1.35034 18.3028L-0.0992438 16.9248C0.18334 16.6276 0.587185 16.6337 0.846137 16.7746C1.11845 16.9227 1.3702 17.3049 1.2221 17.7418L-0.672026 17.0997ZM29.9222 15.901C30.1398 15.2591 29.7874 14.7019 29.3598 14.4693C28.9455 14.2439 28.3316 14.2437 27.8998 14.6979L29.3494 16.0759C29.0669 16.3732 28.663 16.367 28.4041 16.2261C28.1317 16.078 27.88 15.6958 28.0281 15.2589L29.9222 15.901ZM39.6718 4.90163C39.8895 4.25959 39.537 3.70235 39.1093 3.46973C38.695 3.24438 38.0811 3.24419 37.6493 3.6985L39.099 5.07632C38.8164 5.37366 38.4126 5.36747 38.1537 5.22663C37.8814 5.07852 37.6295 4.69631 37.7777 4.25936L39.6718 4.90163ZM9.07806 6.09926C8.86033 6.74124 9.21275 7.29849 9.64037 7.53115C10.0546 7.75655 10.6685 7.7568 11.1004 7.30255L9.65083 5.92456C9.93346 5.62726 10.3373 5.63349 10.5962 5.77436C10.8685 5.9225 11.1203 6.30472 10.9721 6.74162L9.07806 6.09926Z"
                fill="white"
                mask="url(#path-1-inside-1)"
              />
            </svg>
          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">
            Product information management
          </h4>
          <p class="text-body-color">
          Gather, store, and oversee all the necessary data to facilitate prompt delivery of your products to customers. 
          Share your product catalogues across all your sales channels.
          </p>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062 0.65625 11.1562V4.21094C0.65625 2.46094 2.07813 1.03906 3.82813 1.03906H10.7734C12.5234 1.03906 13.9453 2.46094 13.9453 4.21094V11.1562C13.9453 12.9062 12.5234 14.3281 10.7734 14.3281ZM3.82813 2.95312C3.17188 2.95312 2.57031 3.5 2.57031 4.21094V11.1562C2.57031 11.8125 3.11719 12.4141 3.82813 12.4141H10.7734C11.4297 12.4141 12.0313 11.8672 12.0313 11.1562V4.21094C12.0313 3.55469 11.4844 2.95312 10.7734 2.95312H3.82813Z"
                fill="white"
              />
              <path
                d="M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062 21.0547 11.1562V4.21094C21.0547 2.46094 22.4766 1.03906 24.2266 1.03906H31.1719C32.9219 1.03906 34.3438 2.46094 34.3438 4.21094V11.1562C34.3438 12.9062 32.9219 14.3281 31.1719 14.3281ZM24.2266 2.95312C23.5703 2.95312 22.9688 3.5 22.9688 4.21094V11.1562C22.9688 11.8125 23.5156 12.4141 24.2266 12.4141H31.1719C31.8281 12.4141 32.4297 11.8672 32.4297 11.1562V4.21094C32.4297 3.55469 31.8828 2.95312 31.1719 2.95312H24.2266Z"
                fill="white"
              />
              <path
                d="M10.7734 33.9609H3.82813C2.07813 33.9609 0.65625 32.5391 0.65625 30.7891V23.8438C0.65625 22.0938 2.07813 20.6719 3.82813 20.6719H10.7734C12.5234 20.6719 13.9453 22.0938 13.9453 23.8438V30.7891C13.9453 32.5391 12.5234 33.9609 10.7734 33.9609ZM3.82813 22.5859C3.17188 22.5859 2.57031 23.1328 2.57031 23.8438V30.7891C2.57031 31.4453 3.11719 32.0469 3.82813 32.0469H10.7734C11.4297 32.0469 12.0313 31.5 12.0313 30.7891V23.8438C12.0313 23.1875 11.4844 22.5859 10.7734 22.5859H3.82813Z"
                fill="white"
              />
              <path
                d="M31.1719 33.9609H24.2266C22.4766 33.9609 21.0547 32.5391 21.0547 30.7891V23.8438C21.0547 22.0938 22.4766 20.6719 24.2266 20.6719H31.1719C32.9219 20.6719 34.3438 22.0938 34.3438 23.8438V30.7891C34.3438 32.5391 32.9219 33.9609 31.1719 33.9609ZM24.2266 22.5859C23.5703 22.5859 22.9688 23.1328 22.9688 23.8438V30.7891C22.9688 31.4453 23.5156 32.0469 24.2266 32.0469H31.1719C31.8281 32.0469 32.4297 31.5 32.4297 30.7891V23.8438C32.4297 23.1875 31.8828 22.5859 31.1719 22.5859H24.2266Z"
                fill="white"
              />
            </svg>
          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">Components and materials management</h4>
          <p class="text-body-color">
          Maintain a digital library of components and materials, where parts and other components can be catalogued, classified, and associated.
          </p>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 7.875C8.20312 7.875 0.65625 16.0781 0.65625 26.1406C0.65625 26.6875 1.09375 27.125 1.64062 27.125H33.3594C33.9062 27.125 34.3438 26.6875 34.3438 26.1406C34.3438 16.0781 26.7969 7.875 17.5 7.875ZM19.4687 25.2109L17.9922 20.5078C17.8281 20.0156 17.1719 20.0156 17.0078 20.5078L15.5312 25.2109H2.625C3.0625 16.625 9.57031 9.78906 17.5 9.78906C25.4297 9.78906 31.9375 16.625 32.375 25.2109H19.4687Z"
                fill="white"
              />
              <path
                d="M17.5 13.7812C16.9531 13.7812 16.5156 14.2187 16.5156 14.7656V16.1875C16.5156 16.7344 16.9531 17.1719 17.5 17.1719C18.0469 17.1719 18.4844 16.7344 18.4844 16.1875V14.7656C18.4844 14.2187 18.0469 13.7812 17.5 13.7812Z"
                fill="white"
              />
              <path
                d="M25.8672 17.8828L24.9922 18.8125C24.6094 19.1953 24.6094 19.7969 24.9922 20.1797C25.1563 20.3438 25.4297 20.4531 25.6484 20.4531C25.9219 20.4531 26.1406 20.3438 26.3594 20.1797L27.2344 19.25C27.6172 18.8672 27.6172 18.2656 27.2344 17.8828C26.8516 17.5 26.25 17.5 25.8672 17.8828Z"
                fill="white"
              />
              <path
                d="M9.13281 17.8828C8.80468 17.5 8.14843 17.4453 7.76562 17.8281C7.38281 18.1562 7.32812 18.8125 7.71093 19.1953L8.53125 20.125C8.69531 20.3437 8.96874 20.4531 9.24218 20.4531C9.46093 20.4531 9.67968 20.3984 9.89843 20.2344C10.2812 19.9062 10.3359 19.25 9.95312 18.8672L9.13281 17.8828Z"
                fill="white"
              />
            </svg>
          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">Purchase order management</h4>
          <p class="text-body-color">
                Efficiently manage all your purchase orders by storing them in a centralized location 
                that can be easily accessed for retrieval.
          </p>
        </div>
      </div> 
    </div>
  </div>
</section>



);

export default Suppliers
