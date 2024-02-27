import c1 from "../assets/images/c1.png"


function AboutMe() {
    return (
        <>
            <div id="aboutme" className="text-[#BDCAE5]  flex flex-col md:flex-row justify-around h-full overflow-hidden ">
                <div className="w-full md:w-1/2 flex justify-center p-20  md:p-20">
                    <img src={c1} alt="sale" className="z-10 " />
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="flex flex-col pt:10 md:pt-24">
                        <h2 className="text-pink-600 font-bold mb-5 md:text-3xl px-10 font-sans ">Who Iam ?</h2>
                        <p className="px-10  md:text-bace md:font-semibold text-justify leading-6 ">As an enthusiastic fresher web developer, I bring a keen interest and burgeoning expertise in MERN stack development. With proficiency in HTML,
                            CSS, JavaScript, Node.js, Express.js, React.js,
                            and MongoDB, I am equipped to tackle diverse challenges in web development. My passion lies in
                            crafting robust web applications that seamlessly integrate cutting-edge technologies, ensuring optimal user
                            experiences.<br /><br />

                            I'm a driven and curious web developer, eager to contribute to dynamic software projects.
                            in collaborative environments, I'm committed to continuous learning and staying at the forefront of web development trends.</p>
                        <h2 className="mt-5 text-[#55D3D4] text-base md:text-2xl font-semibold px-10"> Skills</h2>
                        <div className="px-10 flex flex-row gap-4 flex-wrap  mt-2">
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">React. Js</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">Node. Js</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">MangoDB</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">Express. Js</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">JavaScript</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">HTML5</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">CSS3</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">TailwindCss</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">GitHub</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">DOM</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">MySql</p>
                            <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">Figma</p>
                        </div>
                        <div className="  px-10 mt-20 md:text-2xl w-fit font-sans ">
                            <p> Download My Resume  <a href="../assets/resume/Balasubiramaniyan.pdf" download="Balasubiramaniyan.pdf" className="text-pink-600 bg-[#122B3C] rounded-md py-1 px-2 hover:text-[#55D3D4]">
                                Download
                            </a>
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </>

    );

}
export default AboutMe;