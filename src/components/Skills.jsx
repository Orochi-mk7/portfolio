import {forwardRef} from 'react'
const Skills = forwardRef((props,ref) => {
    const liStyle = "bg-[#0A001B] text-white text-center p-2 text-gray-700 rounded-lg sm:p-3 lg:p-5 sm:text-xl lg:text-2xl"
    return(
        
        <section ref={ref} className="bg-white flex justify-center py-10 flex-col items-center pb-20">
            <h2 className="mb-7 text-xl font-bold md:mb-8 md:text-2xl xl:mb-15 xl:text-3xl 
            border-b-3 inline-block pb-2
            ">My Skills</h2>
            <ul className="flex flex-wrap justify-center gap-3 sm:w-1/3">
                <li className={liStyle}>React.js</li>
                <li className={liStyle}>Tailwind css</li>
                <li className={liStyle}>Responsive Web Desgine</li>
                <li className={liStyle}>REST Api</li>    
                <li className={liStyle}>HTML</li>
                <li className={liStyle}>css</li>
                <li className={liStyle}>Javascript</li>
                <li className={liStyle}>Git</li>  
                <li className={liStyle}>English</li>
                <li className={liStyle}>German A1</li>
            </ul>
        </section>
    )
})

export default Skills