import MoviesWatchlist from "../assets/movies-watchlist.png"
import ChefHelper from "../assets/chef-helper.png"
import Quizzical from "../assets/quizzical.png"
import {forwardRef} from 'react'
const Projects = forwardRef((props,ref) => {
    return(
        <section ref={ref} className="bg-white px-10 xl:px-25 text-center">
            <h3 className="mb-7 text-xl font-bold md:mb-8 md:text-2xl xl:mb-15 xl:text-3xl 
            border-b-3 inline-block pb-2
            ">MY PROJECTS</h3>
            <ul className="flex gap-10 md:gap-30 flex-col">

                <li className="flex flex-col gap-7 md:flex-row items-center">
                    <div className="shadow-xl border border-gray-200 max-w-[1000px] w-3/4 sm:min-w-[400px]">
                        <img src={ChefHelper}/>
                    </div>    
                    <div className="flex flex-col items-center xl:gap-5 w-2/4">
                        <span className="text-xl font-bold pb-3 lg:text-2xl xl:text-3xl">Chef Helper</span>
                        <p className="text-gray-700 lg:text-xl">Ai powered React app to help you find recipes with what ingredients you have,
                            uses REST api to get the Chef's reccomendations after the users inputs 4 or more ingredients, 
                            styled with Tailwind CSS and build with accessibility in mind
                        </p>
                        <a className="bg-[#0A001B] text-white w-1/3 max-w-[150px] xl:max-w-[200px]
                         xl:py-3 py-2 rounded-md mt-5 cursor-pointer min-w-[120px]"href="https://chefhelper.netlify.app"
                         target="_blank"><button >Visit</button></a>
                    </div>
                </li>

                <li className="flex flex-col gap-7 md:flex-row items-center">
                    <div className="shadow-xl border border-gray-200 max-w-[1000px] w-3/4 sm:min-w-[400px]">
                        <img src={Quizzical}/>
                    </div>    
                    <div className="flex flex-col items-center xl:gap-5 w-2/4">
                        <span className="text-xl font-bold pb-3 lg:text-2xl xl:text-3xl">Quizzical</span>
                        <p className="text-gray-700 lg:text-xl">React app build to test your
                            mind with API powered questions 
                            on varied topic! styled using Tailwind 
                            to look simple yet appeling, are you up to the
                            Quizzical challange?
                        </p>
                        <a className="bg-[#0A001B] text-white w-1/3 max-w-[150px] xl:max-w-[200px]
                         xl:py-3 py-2 rounded-md mt-5 cursor-pointer min-w-[120px]"href="https://quizzicalmk.netlify.app"
                         target="_blank"><button >Visit</button></a>
                    </div>
                </li>    

                <li className="flex flex-col gap-7 md:flex-row items-center">
                    <div className="shadow-xl border border-gray-200 max-w-[1000px] w-3/4 sm:min-w-[400px]">
                        <img src={MoviesWatchlist}/>
                    </div>    
                    <div className="flex flex-col items-center xl:gap-5 w-2/4">
                        <span className="text-xl font-bold pb-3 lg:text-2xl xl:text-3xl">Movies Watchlist</span>
                        <p className="text-gray-700 lg:text-xl">originally build with plain javascript, Remasterd app with React and tailwind, using REST api
                            to fetch movies to help the user prepair a watchlist, that is then saved in the user's local storage
                        </p>
                        <a className="bg-[#0A001B] text-white w-1/3 max-w-[150px] xl:max-w-[200px]
                         xl:py-3 py-2 rounded-md mt-5 cursor-pointer min-w-[120px]"href="https://movieswatchlistreact.netlify.app"
                         target="_blank"><button >Visit</button></a>
                    </div>
                </li>                   
            </ul>
        </section>
    )
})

export default Projects