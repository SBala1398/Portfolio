function Education() {
    return (<>

        <div id="education" className="text-[#BDCAE5] flex flex-col md:flex-row justify-around h-full overflow-hidden">
            <div className="flex justify-center w-full p-10 md:w-1/2">
                <div className="flex flex-col pt-10 md:pt-28">
                    <h2 className="m-2 text-2xl font-bold text-pink-600 md:text-4xl ">EDUCATION</h2>
                    <br />
                    <hr
                        style={{
                            backgroundColor: '#55D3D4',
                            Color: '#55D3D4',
                            height: 8,
                            width: '60%',
                        }}
                        className="m-2 text-center"
                    />

                    <p className="mt-5 m-2 text-[#55D3D4]  md:text-bace md:font-semibold  text-justify ">Completed a Bachelor of Science in Information Technology from
                        Arumugam Pillai Seethai Ammal Arts and Science College, achieving a CGPA of 8.51 during the period of 2020 to 2023.<br />
                        Certified in MERN Full Stack Development from Clever Academy, attaining the Certificate Holder status</p>
                </div>
            </div>
            <div className="flex flex-col justify-center w-full gap-6 p-10 mt-10 md:w-1/2">
                <div className="flex bg-[#122B3C] flex-col p-1 font-semibold rounded-md py-2">
                    <h2 className="px-10 font-sans font-bold text-pink-600 md:text-3xl">BSC - Information Technology</h2>
                    <h2 className="text-[#55D3D4] text-base md:text-xl mb-5 font-semibold px-10">2020-2023</h2>
                    <p className="text-[#55D3D4] px-10 md:text-bace md:font-semibold text-justify leading-6">Arumugam Pillai Seethai Ammal Arts and Science College | Thiruppture</p>
                    <h2 className="text-[#55D3D4] text-base md:text-xl font-semibold px-10">CGPA-8.51</h2>
                </div>
                <div className="flex bg-[#122B3C] flex-col   p-1 font-semibold rounded-md py-2">
                    <h2 className="px-10 font-sans font-bold text-pink-600 md:text-3xl">Certification Course</h2>
                    <h2 className="text-[#55D3D4] text-base md:text-xl mb-5 font-semibold px-10">MERN Full Stack Development</h2>
                    <p className="text-[#55D3D4] px-10 md:text-bace md:font-semibold text-justify leading-6">@Error Make Clever-Academy</p>
                    <h2 className="text-[#55D3D4] text-base md:text-xl font-semibold px-10">Student</h2>
                </div>
            </div>

        </div>

    </>
    );

}
export default Education;