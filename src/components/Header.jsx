 import BurgerIcon from '../assets/burger-menu.svg?react'
 import ExitIcon from '../assets/close-icon.svg?react'
 import { useMediaQuery } from 'react-responsive'
 import { useState, useRef } from 'react'
 import Animate from 'react-smooth/src/Animate'
 //homeSection={homeSection} skillsSection={skillsSection} projectsSection={projectsSection} contactSection={contactSection}
 function Header(props) {
    const btnStle = "text-sm font-bold cursor-pointer hover:border-b border-white md:text-base w-full "
    const liStyle ='hover:bg-[#0A001B] w-full text-center py-2 border-b border-solid border-[#808080]'
    const isMobile = useMediaQuery({query: '(max-width: 648px)'})
    const [isClicked, setIsClicked] = useState(false)
    function handleClick(ref) {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setIsClicked(false)
}
    return(
        <header className="flex pt-3 pb-4 lg:pt-7 px-3 sm:px-10 justify-between bg-[#0A001B] text-white items-center fixed  w-full">
            
            <h1 className="font-bold text-base sm:text-xl lg:text-2xl">Mohammed AL Khayyat</h1>
            
            {isMobile ? 
            <nav className='flex justify-between items-center'>
                <button className='w-7 w-7' onClick={() => setIsClicked(prev => !prev)}>
                    {
                        !isClicked ?
                        <BurgerIcon className="fill-white text-white w-full h-full" /> :
                        <Animate to="1" from="0" attributeName="opacity" duration="1000">
                            <ExitIcon className="fill-white text-white w-full h-full" />
                        </Animate>    
                    }</button>
                {isClicked && 
                <Animate to="1" from="0" attributeName="opacity" duration="1000">
                    <ul className='fixed top-12 left-0 w-full flex flex-col items-center bg-[#1A1136] '>
                        <li className={liStyle}><button onClick={()=>handleClick(props.homeSection)} className={btnStle}>HOME</button></li>
                        <li className={liStyle}><button onClick={()=>handleClick(props.skillsSection)} className={btnStle}>SKILLS</button></li>
                        <li className={liStyle}><button onClick={()=>handleClick(props.projectsSection)} className={btnStle}>PROJECTS</button></li>
                        <li className={liStyle}><button onClick={()=>handleClick(props.contactSection)} className={btnStle}>CONTACT</button></li>
                    </ul>
                </Animate>
                }
            </nav>
            : 
            <nav className="gap-5  justify-center flex md:pr-5 md:gap-10">
                <button onClick={()=>handleClick(props.homeSection)} className={btnStle}>HOME</button>
                <button onClick={()=>handleClick(props.skillsSection)} className={btnStle}>SKILLS</button>
                <button onClick={()=>handleClick(props.projectsSection)} className={btnStle}>PROJECTS</button>
                <button onClick={()=>handleClick(props.contactSection)} className={btnStle}>CONTACT</button>
            </nav>}
        </header>
    )
}
export default Header