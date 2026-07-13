import {motion, useMotionValueEvent, useScroll, AnimatePresence} from 'framer-motion';
import { useState } from 'react';
import { Icon } from "@iconify/react";

const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1, ease: 'easeOut', when: "beforeChildren", staggerChildren: 0.15 } },
};

const childVariants1 = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut',delay: 0} },
};

const childVariants2 = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut',delay: 0.2} },
};
function Navbar() {
    const [visible, setVisible] = useState(false);
    const { scrollY }= useScroll();
    const [ show, setShow ] = useState(false)
    const [activeLink, setActiveLink] = useState("");

    useMotionValueEvent(scrollY, "change",(latest) =>{
        if (latest > 100){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    });



    const toggleMenu =() =>{
        setShow(!show);
    };

    return (
        <motion.nav id="navbar" className="fixed top-0 left-0 w-full z-20 bg-[#0D1117]/80 backdrop-blur-md border-b border-[#30363D]">
            <motion.div className="hidden  max-w-340 mx-auto px-8 py-5 md:flex items-center justify-between " variants={containerVariants} initial="hidden" animate='visible'>
                <motion.div className='flex flex-row items-center  gap-3' variants={childVariants1}>
                    
                    <a    href="/"
                    
                        rel="noopener noreferrer"
                    >
                        <img src="https://res.cloudinary.com/dotzzcayo/image/upload/v1783942587/favicon_hsvabg.png" alt="Bernadette Chukwuedo Logo" className='w-10 h-10 object-contain '/>
                    </a>
                    <a href="#hero"><span className='text-[#4A79E7] text-[15px]'>Bernadettechukwuedo</span></a>
                    <span className='text-[#5B7F8E] text-[15px]'>/</span>
                    <span className='text-[#F4F7F6] text-[15px] font-medium'>portfolio</span>

                </motion.div>

                <motion.div className='flex space-x-8 ' variants={childVariants2}>
                    <a href='#about' className=" text-[12px]   text-[#ffffff] hover:text-[#4A79E7] transition duration-300 py-2 px-3" >About</a>
                    <a href="#project" className=" text-[12px]   text-[#ffffff] hover:text-[#4A79E7] transition duration-300 py-2 px-3">Project</a>
                    <a href="#contact" className=" text-[12px]  text-[#ffffff] transition duration-300 bg-[#4A79E7] rounded-full py-2 px-4 hover:bg-[#ffffff] hover:text-black">Contact </a>
                </motion.div>
            </motion.div>

            {/* Mobile version */}
            <div className="md:hidden flex items-center justify-between w-full px-8 py-5 bg-[#0D1117]/80 backdrop-blur-md  border-b border-[#30363D]">
                <div className='flex flex-row items-center  gap-3'>
                    
                    <a    href="/"
                      
                        rel="noopener noreferrer"
                    >
                    <img src="https://res.cloudinary.com/dotzzcayo/image/upload/v1783942587/favicon_hsvabg.png" alt="Bernadette Chukwuedo Logo" className='w-10 h-10 object-contain '/>
                    </a>
                    <a href="#hero"><span className='text-[#4A79E7] text-[15px]'>Bernadettechukwuedo</span></a>
             

                </div>
                
                <button aria-label="Menu" onClick={toggleMenu}>
                    <Icon className="text-[#8A939D] hover:text-[#BDD1FF] text-2xl" icon="pepicons-pencil:menu" />
                </button>
            </div>
            <AnimatePresence mode="wait">
            {show && (
                <motion.div 
                    className='fixed inset-0 z-50 bg-[#161B22] h-screen w-full p-8' 
                    initial={{ x: "100%", opacity:0 }} 
                    animate={{ x: 0, opacity:1 }} 
                    exit={{ opacity:0}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay:0.3}}
                >
                    <div className='flex items-center justify-between'>
                
                        <div className='flex flex-row items-center  gap-3'>
            
                            <a    href="/"
                             
                                rel="noopener noreferrer"
                            >
                            <img src="https://res.cloudinary.com/dotzzcayo/image/upload/v1783942587/favicon_hsvabg.png" alt="Bernadette Chukwuedo Logo" className='w-10 h-10 object-contain '/>
                            </a>
                            <span className='text-[#4A79E7] text-[16px]'>Bernadettechukwuedo</span>
                    

                        </div>
                        

                        <button onClick={toggleMenu} aria-label="cancel" className="text-[#8A939D] hover:text-[#BDD1FF] text-2xl">
                            <Icon icon="mdi:cancel-bold" />
                        </button>
                    </div>

                    
                    <div className='flex flex-col space-y-8 mt-20 items-center py-24'>
                                <motion.a href="#about" onClick={() => {
                                setActiveLink("about");
                                toggleMenu();}} className={` text-xl tracking-[0.14em]  ${activeLink === "about" ? "text-[#4A79E7]" : "text-[#FFFFFF]"}  hover:text-[#4A79E7] transition duration-300`} initial={{ x: 0 }} whileHover={{ x: 10 }} transition={{ type: "tween", duration:0.1, ease:'easeOut' }}>About</motion.a>

                                <motion.a href='#project' onClick={() => {
                                    setActiveLink("project");
                                    toggleMenu();
                                }} className={` text-xl tracking-[0.14em]  ${activeLink === "project" ?  "text-[#4A79E7]" : "text-[#FFFFFF]"}  hover:text-[#4A79E7]  transition duration-300`} initial={{ x: 0 }} whileHover={{ x: 10 }} transition={{ type: "tween", duration:0.1, ease:'easeOut' }} >Project</motion.a>

                                <motion.a href="#contact" onClick={() => {
                                        setActiveLink("contact");
                                        toggleMenu();
                                    }} className={` text-xl tracking-[0.14em]  ${activeLink === "contact" ?  "text-[#4A79E7]" : "text-[#FFFFFF]"}  hover:text-[#4A79E7]  transition duration-300`} initial={{ x: 0 }} whileHover={{ x: 10 }} transition={{ type: "tween", duration:0.1, ease:'easeOut' }}>Contact</motion.a>

                           
                    </div>
                </motion.div>
            )}</AnimatePresence>

        </motion.nav>
        

    );
}
export default Navbar;