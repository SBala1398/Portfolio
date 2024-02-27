import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';


function ContactUs() {
  return (

    <div id='contactus' className=" bg-[#55D3D4] py-8 flex justity-between flex-col ">

      <div className="text-center py-3 ">
        <h1 className=" text-xl  text-black  font-semibold text-white md:text-3xl">Stay Connected with Me </h1>
      </div>
      <div className='flex flex-row justify-center gap-3 px-10 p-10 '>
        <div className="">
          <a href="https://github.com/SBala1398" target="_blank" rel="noopener noreferrer" className="text-lg transition-colors hover:text-pink-600"><FiGithub className="text-2xl" /></a>
        </div>
        <div className="">
          <a href="https://www.linkedin.com/in/bala-subiramaniyan" target="_blank" rel="noopener noreferrer" className="text-lg transition-colors hover:text-pink-600"><FiLinkedin className="text-2xl" /></a>
        </div>
        <div className="">

          <a href="mailto:sombala1398@gmail.com" className="text-lg transition-colors hover:text-pink-600"> <FiMail className="text-2xl" /></a>
        </div>

      </div>
      <div className="flex justify-center gap-3 px-10 ">
        <p className='text-lg'> Interact with Me -
          <a href="mailto:sombala1398@gmail.com" className="text-lg transition-colors text-pink-600 hover:text-gray-400">sombala1398@gmail.com</a>
        </p>
      </div>
    </div>
  );

}
export default ContactUs;





