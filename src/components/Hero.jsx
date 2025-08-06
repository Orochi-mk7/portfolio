import Welcome from "./Welcome?react"
import laptop from "../assets/laptop.png"
import {forwardRef} from 'react'
const Hero = forwardRef((props, ref) => {
    const style ="w-2/3 max-h-[100px] mb-5 sm:mb-10 max-w-[1000px]"
    return(
        <>
        <main ref={ref} className="flex flex-col-reverse lg:flex-row text-center justify-center items-center px-3 lg:px-10 lg:h-[80vh] pb-5 overflow-hidden">
            <div className="flex flex-col items-center justify-center w-5/6">
                <Welcome className ={style} />
                <p className="text-white lg:text-xl">A Frontend Web Developer and a Computer Engineering graduate with proven experience and knowledge in React.js, JavaScript, Tailwind CSS, 
                    and working with AI and APIs. Focused on creating user-friendly, responsive web designs with an emphasis on performance, modern design 
                    principles, and accessibility for all users. Native Arabic speaker, fluent in English, and a beginner in German.</p>
                         
            </div>    

            <div className="w-5/6 flex items-center justify-center">
                <img className="w-[400px] xl:w-[500px]" src={laptop} />
            </div>
            
        </main>

    </>    
    )
})

export default Hero