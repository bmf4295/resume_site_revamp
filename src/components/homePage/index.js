import headshot from "../assets/headshot.jpg"
const Home = ()=>{
    return (
        <div class=" flex bg-inherit  h-screen" id="intro">
            <div class=" flex items-center justify-center w-1/2" >
                <div>
                <h1 class="mb-4 text-lg font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">I am Brady Friese, based out of Japan.</h1>

                <p class="mb-4  dark:text-white">I am currently working as an Assistant Language Teacher at Hamada Commercial Business High School</p>

                </div>
            </div>

            <div class="flex items-center justify-center w-1/2">
                <img className="rounded-full" src={headshot} alt="Headshot of Brady Friese"/>
            </div>
        </div>
    )
};

export default Home