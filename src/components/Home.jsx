import c2 from "../assets/images/c2.png"
import Anime1 from "../anime/Anime1";
import Anime2 from "../anime/Anime2";
function Home() {
    return (
        <>
            <Anime1 />
            <Anime2 />
            <div id="home" className="text-[#BDCAE5] flex flex-col md:flex-row justify-around h-full overflow-hidden">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="flex flex-col pt-10 md:pt-40">
                        <h2 className="m-2 animate-slide-from-left text-2xl md:text-4xl">Hello, I'm <b className="font-bold text-pink-600">BalaSubiramaniyan</b>.</h2>
                        <h2 className="m-2 animate-slide-from-right text-2xl md:text-4xl">I'm a MERN Stack Web Developer</h2>
                        <p className="mt-5 m-2 text-[#55D3D4]  md:text-bace md:font-semibold animate-slide-from-top">"I build dynamic and scalable web applicationsusing the  <br /> MERN stack,crafting seamless user experiences with <br />   cutting-edge technologies" </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-around p-20 md:p-40">
                    <img src={c2} alt="sale" className="z-10 " />
                </div>
            </div>
        </>
    );
}
export default Home;