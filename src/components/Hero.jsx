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
                <p className="text-white lg:text-xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                     Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                      mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                       quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, 
                       rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
                       Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.                      
                         leo eget bibendum sodales, augue velit cursus nunc,</p>
            </div>    

            <div className="w-5/6 flex items-center justify-center">
                <img className="w-[400px] xl:w-[500px]" src={laptop} />
            </div>
            
        </main>

    </>    
    )
})

export default Hero