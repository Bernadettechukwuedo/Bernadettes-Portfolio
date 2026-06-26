import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";

function Footer() {
    return (
        <footer className="bg-[#0B2530] py-6">
            <div className="container text-center justify-between flex flex-col gap-4 md:flex-row mx-auto md:max-w-340 px-8">
                <div className='flex flex-col'>
                    <h1 className='text-[#F4F7F6] text-[16px] font-serif'>Bernadette Chukwuedo</h1>
                    <p className='text-[#76A3A0] text-[13px] font-serif'>FullStack Software Engineer</p>
                </div>
                <div className='flex flex-row gap-4 justify-center'>
    
                    <a href="https://github.com/Bernadettechukwuedo" target="_blank" rel="noopener noreferrer"><Icon className="text-[#76A3A0] text-xl hover:text-[#2D9C8F]" icon="ri:github-line" /></a>
                    <a href="https://www.linkedin.com/in/bernadettechukwuedo/" target="_blank" rel="noopener noreferrer"><Icon className="text-[#76A3A0] text-xl hover:text-[#2D9C8F]" icon="mingcute:linkedin-line" /></a>
                    <a href="mailto:chukwuedoogochukwubernadette@gmail.com"><Icon className="text-[#76A3A0] text-xl hover:text-[#2D9C8F]" icon="akar-icons:envelope" /></a>
                    <a href="https://wa.me/2348078933435" target="_blank" rel="noopener noreferrer"><Icon className="text-[#76A3A0] text-xl hover:text-[#2D9C8F]" icon="ic:outline-whatsapp" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;