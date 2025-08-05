import Gmail from "../assets/gmail.svg"
import Linkdin from "../assets/linkedin.svg"
import {forwardRef} from 'react'
const Contact = forwardRef((props,ref) => {
    return (
        <section ref={ref} className="bg-white pt-30 flex flex-col items-center">
            <h4 className="mb-7 text-xl font-bold md:mb-8 md:text-2xl xl:mb-15 xl:text-3xl 
            border-b-3 inline-block pb-2
            ">My Contacts</h4>
            <div className="px-2">
                <a href="https://www.linkedin.com/in/mohammed-al-khayyat-80a19a285/" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-1 sm:gap-3  flex-wrap">
                        <div className="w-[30px] sm:w-[50px] lg:w-[70px]">
                            <img src={Linkdin} alt="Linkedin logo" />
                        </div>    
                        <span className="border-b border-solid border-[#808080] font-bold lg:text-2xl">Mohammed Al Khayyat</span>
                    </div>
                </a>
                <a href="mailto:mohammedkhayyatmk@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-1 sm:gap-3  flex-wrap">
                        <div className="w-[30px] sm:w-[50px] lg:w-[70px]">
                            <img src={Gmail} alt="Gmail logo" />
                        </div>    
                        <span className="border-b border-solid border-[#808080] pb font-bold lg:text-2xl break-all">mohammedkhayyatmk@gmail.com</span>
                    </div>
                </a>
            </div>
        </section>
    )
})

export default Contact