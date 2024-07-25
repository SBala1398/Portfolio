import p1 from "../assets/images/p1.png"
import p2 from "../assets/images/p2.png"
import p3 from "../assets/images/p3.png"
import p4  from "../assets/images/p4.png"
import p5 from "../assets/images/p5.png"

function Projects() {
    return (


        <div id="projects" className="">
            <div className="text-center">
                <h1 className="mt-10 text-xl font-bold text-white md:text-4xl">PROJECTS</h1>
                <p className="w-full p-10 md:px-60 text-sm font-semibold text-justify text-[#55D3D4] md:text-center md:text-2xl">
                    Here you will find some of the personal  projects that I created with each project containing its own case study
                </p>
            </div>




            <div className="flex-row gap-3 p-10 rounded-md md:flex felx-wrap ">
                <div className="relative p-4 overflow-hidden rounded-lg md:w-1/2 group hover:shadow-lg ">

                    <img src={p1} alt="sale" className="object-cover transition duration-300 transform w-fit md:w-full group-hover:scale-105 " />
                    <div
                        className="absolute inset-0 transition duration-300 bg-[#0F172A] rounded-lg opacity-0 group-hover:opacity-75">
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">

                        <a href="https://sbala1398.github.io/TripAdvisor-Clone/" target="blank" className="px-4 py-2 font-semibold text-white transition duration-300 border-2 shadow-md border-[#55D3D4] hover:text-[#0F172A] hover:border-[#0F172A] hover:bg-[#55D3D4] bg-[#0F172A]">Project Link
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-around px-1 md:w-1/2 text- md:px-10 md:py-22">
                    <h2 className="text-xl font-semibold text-pink-500 md:text-2xl md:text-bold">TripAdviser-Clone</h2>
                    <h3 className="text-[#55D3D4] text-justify w-full md:m-0 mt-8">Crafted a responsive TripAdvisor clone website using custom HTML and CSS, replicating the original platform's UI with personal design flair. Implemented responsive features for optimal usability across mobile and desktop screens, ensuring seamless navigation. This project demonstrates a fusion of creativity and technical skill, offering a visually appealing platform for exploring destinations</h3>
                    <div className="flex flex-row flex-wrap gap-4 mt-5 ">
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">HTML5</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">CSS3</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">TailwindCss</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">GitHub</p>
                    </div>
                </div>
            </div>




            <div className="flex-row gap-3 p-10 rounded-md md:flex felx-wrap ">
                <div className="relative p-4 overflow-hidden rounded-lg md:w-1/2 group hover:shadow-lg ">

                    <img src={p2} alt="sale" className="object-cover transition duration-300 transform w-fit md:w-full group-hover:scale-105 " />
                    <div
                        className="absolute inset-0 transition duration-300 bg-[#0F172A] rounded-lg opacity-0 group-hover:opacity-75">
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">

                        <a href="https://sbala1398.github.io/Nosta-Ecommerce-Website/" 
                        target="blank" 
                        className="px-4 py-2 text-white transition duration-300 border-2 shadow-md border-[#55D3D4] font-semibold hover:border-[#0F172A] hover:text-[#0F172A] hover:bg-[#55D3D4] bg-[#0F172A]">Project Link
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-around px-1 md:w-1/2 text- md:px-10 md:py-22">
                    <h2 className="text-xl font-semibold text-pink-500 md:text-2xl md:text-bold">Nosta-Ecommerce-Website</h2>
                    <h3 className="text-[#55D3D4] text-justify w-full md:m-0 mt-8">Developed a responsive e-commerce fashion website comprising home, collection, and contact pages. Utilized JavaScript for dynamic filtering functionalities, enhancing user experience. Built with HTML, Tailwind CSS, and JavaScript, this site seamlessly blends aesthetics with functionality, catering to modern shopping needs</h3>
                    <div className="flex flex-row flex-wrap gap-4 mt-2 ">
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">JavaScript</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">HTML5</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">CSS3</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">TailwindCss</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">GitHub</p>
                    </div>
                </div>
            </div>



            <div className="flex-row gap-3 p-10 rounded-md md:flex felx-wrap ">
                <div className="relative p-4 overflow-hidden rounded-lg md:w-1/2 group hover:shadow-lg ">

                    <img src={p3} alt="sale" className="object-cover transition duration-300 transform w-fit md:w-full group-hover:scale-105 " />
                    <div
                        className="absolute inset-0 transition duration-300 bg-[#0F172A] rounded-lg opacity-0 group-hover:opacity-75">
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">

                        <a href="https://sbala1398.github.io/Nosta-Ecommerce-Website/" 
                        target="blank" 
                        className="px-4 py-2 text-white transition duration-300 border-2 shadow-md border-[#55D3D4] font-semibold hover:border-[#0F172A] hover:text-[#0F172A] hover:bg-[#55D3D4] bg-[#0F172A]">Project Link
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-around px-1 md:w-1/2 text- md:px-10 md:py-22">
                    <h2 className="text-xl font-semibold text-pink-500 md:text-2xl md:text-bold">Greendon-IndoorPlants</h2>
                    <h3 className="text-[#55D3D4] text-justify w-full md:m-0 mt-8">Crafted an indoor plant website featuring home, products, and contact pages. Leveraging HTML, Tailwind CSS, and JavaScript, implemented search and filtering functionalities for enhanced user experience. Seamlessly responsive, with a mobile-friendly navigation bar, ensuring optimal viewing across devices</h3>
                    <div className="flex flex-row flex-wrap gap-4 mt-2 ">
                    <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">CSS3</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">TailwindCss</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">GitHub</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">JavaScript</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">HTML5</p>
                       
                    </div>
                </div>
            </div>


            <div className="flex-row gap-3 p-10 rounded-md md:flex felx-wrap ">
                <div className="relative p-4 overflow-hidden rounded-lg md:w-1/2 group hover:shadow-lg ">

                    <img src={p4} alt="sale" className="object-cover transition duration-300 transform w-fit md:w-full group-hover:scale-105 " />
                    <div
                        className="absolute inset-0 transition duration-300 bg-[#0F172A] rounded-lg opacity-0 group-hover:opacity-75">
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">

                        <a href="https://sbala1398.github.io/netflixc-clone-Tailwindcss/" 
                        target="blank" 
                        className="px-4 py-2 text-white transition duration-300 border-2 shadow-md border-[#000000] font-semibold hover:border-[#ffffff] hover:text-[#fefefe] hover:bg-[#d30000] bg-[hsl(0,58%,47%)]">In Process
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-around px-1 md:w-1/2 text- md:px-10 md:py-22">
                    <h2 className="text-xl font-semibold text-pink-500 md:text-2xl md:text-bold">Netflix-Clone</h2>
                    <h3 className="text-[#55D3D4] text-justify w-full md:m-0 mt-8">Developed a responsive Netflix clone using HTML, Tailwind CSS, and JavaScript. This project features a user-friendly interface with content menus for home, movies, TV shows, and subscription options. Leveraging Tailwind CSS for streamlined design and JavaScript for dynamic functionality, the Netflix clone provides an immersive browsing experience reminiscent of the original platform</h3>
                    <div className="flex flex-row flex-wrap gap-4 mt-2 ">
                    <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">CSS3</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">TailwindCss</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">GitHub</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">JavaScript</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">HTML5</p>
                       
                    </div>
                </div>
            </div>



            <div className="flex-row gap-3 p-10 rounded-md md:flex felx-wrap ">
                <div className="relative p-4 overflow-hidden rounded-lg md:w-1/2 group hover:shadow-lg ">

                    <img src={p5} alt="sale" className="object-cover transition duration-300 transform w-fit md:w-full group-hover:scale-105 " />
                    <div
                        className="absolute inset-0 transition duration-300 bg-[#0F172A] rounded-lg opacity-0 group-hover:opacity-75">
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">

                        <a href="https://sbala1398.github.io/netflixc-clone-Tailwindcss/" 
                        target="blank" 
                        className="px-4 py-2 text-white transition duration-300 border-2 shadow-md border-[#55D3D4] font-semibold hover:border-[#0F172A] hover:text-[#0F172A] hover:bg-[#55D3D4] bg-[#0F172A]">Project Link
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-around px-1 md:w-1/2 text- md:px-10 md:py-22">
                    <h2 className="text-xl font-semibold text-pink-500 md:text-2xl md:text-bold">ActoDo-React</h2>
                    <h3 className="text-[#55D3D4] text-justify w-full md:m-0 mt-8">Crafted a dynamic todo list application using React, complete with essential functionalities for managing tasks. Leveraging React's functional components, this project offers a seamless user experience, allowing users to create, edit, and delete tasks efficiently. The Actodo app is live and fully functional, showcasing my proficiency in React development and UI/UX design</h3>
                    <div className="flex flex-row flex-wrap gap-4 mt-2 ">
                    <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">CSS3</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">TailwindCss</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">GitHub</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">JavaScript</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">HTML5</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">React</p>
                        <p className="text-[#55D3D4] bg-[#122B3C] px-4 py-1 font-semibold rounded-full">Versel</p>
                       
                    </div>
                </div>
            </div>
            

        </div>



    )

}
export default Projects;