import { Link } from 'react-scroll';

function Navbar() {
    return (
        <>
            <div className="bg-[#0F172A] py-2 px-4 md:px-20 flex flex-wrap items-center justify-between shadow-md sticky top-0 z-20 text-sm md:text-xl md:font-normal  shadow-[#122B3C]">

                <div className="text-[#55D3D4]">
                    <p className="mt-4 mr-2 font-sans font-bold"> Portfolio </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 md:gap-10 text-[#BDCAE5] overflow-hidden">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        className="hover:text-[#55D3D4] cursor-pointer transition duration-1500 ease-in-out">
                        Profile
                    </Link>
                    <Link
                        activeClass="active"
                        to="aboutme"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        className="hover:text-[#55D3D4] cursor-pointer  transition duration-1500 ease-in-out">
                        AboutMe
                    </Link>
                    <Link
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        className="hover:text-[#55D3D4] cursor-pointer  transition duration-1500 ease-in-out">
                        Education
                    </Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        className="hover:text-[#55D3D4] cursor-pointer  transition duration-1500 ease-in-out">
                        Projects
                    </Link>
                </div>
                <div className='text-[#BDCAE5] hidden md:flex mt-4' >
                    <Link
                        activeClass="active"
                        to="contactus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        className="hover:text-[#55D3D4] text-[#BDCAE5]  transition duration-1500 ease-in-out">
                        ContactMe
                    </Link>
                </div>
            </div>
        </>

                );
}
                export default Navbar;