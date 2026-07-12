import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from "@iconify/react";
import { useState } from 'react';

const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1, ease: 'easeOut', when: "beforeChildren", staggerChildren: 0.2 } },
};

const childVariants1 = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut'} },
};

const projects = [
    {
        id:1,
        name: 'uniattend',
        description: 'Campus event manager with role-based access control and QR check-in — built so staff and students could run events without paper sign-in chaos.',
        status: 'deployed',
        stack: ['FastAPI', 'Vue.js', 'MySQL', 'Docker'],
        language: 'Python',
        languageColor: '#3572A5',
        link: 'https://uniattend-app-1.onrender.com/',
        img_url:'https://res.cloudinary.com/dotzzcayo/image/upload/v1783884923/Screenshot_75_dubmso.png',
        alt_image:'An image of uniattend landing page'
    },
    {
        id:2,
        name: 'ai-wishlist-generator',
        description: 'SVM-based recommendation engine that learns from user behaviour to suggest personalised gift ideas.',
        status: 'deployed',
        stack: ['Django', 'scikit-learn', 'pandas'],
        language: 'Python',
        languageColor: '#3572A5',
        link: 'https://ai-wishlist-generator.vercel.app/',
        img_url:'https://res.cloudinary.com/dotzzcayo/image/upload/v1783885063/Screenshot_76_rtyfpn.png',
        alt_image:'An image of the AI Wishlist Generator page'
    },
    {   
        id:3,
        name: 'textlator',
        description: 'A clean, fast translation tool built on the Google Translate API for everyday use.',
        status: 'deployed',
        stack: ['Django', 'Google API'],
        language: 'Python',
        languageColor: '#3572A5',
        link: 'https://textlator.vercel.app/',
        img_url:'https://res.cloudinary.com/dotzzcayo/image/upload/v1783885081/Screenshot_78_lbk6dr.png',
        alt_image:'An image of the Textlator page'
    },
    {
        id:4,
        name: 'makeup-portfolio',
        description: 'A Makeup portfolio for a makeup artist',
        status: 'deployed',
        stack: ['React', 'Tailwind CSS'],
        language: 'JavaScript',
        languageColor: '#3572A5',
        link: 'https://franceschuksbeauty.vercel.app/',
        img_url:'https://res.cloudinary.com/dotzzcayo/image/upload/v1783885099/Screenshot_80_w8atoq.png',
        alt_image:'An image of the Makeup Portfolio page'
    },
];

function Project() {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className='bg-[#0D1117] py-24 border-t border-[#30363D] ' id="project">
            <motion.div className='max-w-340 mx-auto px-8' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{once:true}}>

                {/* label */}
                <p className='text-[#BDD1FF] font-semibold text-[14px] mb-6 tracking-widest uppercase'>
                    Selected Work
                </p>

                {/* github top bar */}
                <motion.div variants={childVariants1}>
                <div className='flex flex-row items-center bg-[#122530] border border-[#1E3A44] rounded-t-lg p-3 gap-3'>
                    
                    <a    href="https://github.com/Bernadettechukwuedo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon
                            className="text-[#F4F7F6] text-xl hover:text-[#2D9C8F] transition-colors"
                            icon="ri:github-line"
                        />
                    </a>
                    <span className='text-[#BDD1FF] text-[12px] md:text-[14px] '>Bernadettechukwuedo</span>
                    <span className='text-[#5B7F8E] text-[12px] md:text-[14px] '>/</span>
                    <span className='text-[#F4F7F6] text-[12px] md:text-[14px] font-medium'>projects</span>
                    <div className='hidden md:flex border border-[#1E3A44] rounded-full px-3 py-0.5 ml-1'>
                        <p className='text-[#5B7F8E] text-[11px] '>Public</p>
                    </div>
                </div>

                {/* code tab */}
                <div className='flex flex-row items-center bg-[#0B1F28] border-x px-3 py-2 gap-2 border-b border-[#BDD1FF]'>
                    <Icon
                        className="text-[#F4F7F6] text-lg"
                        icon="mingcute:code-line"
                    />
                    <span className='text-[#F4F7F6] text-[13px] font-medium'>Code</span>
                </div>

                {/* main content */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-0 border-x border-b border-[#1E3A44] rounded-b-lg overflow-hidden'>

                    {/* left — file list */}
                    <div className='bg-[#122530] border-r border-[#1E3A44]'>

                        {/* branch row */}
                        <div className='flex flex-row justify-between items-center px-4 py-3 border-b border-[#1E3A44]'>
                            <div className='flex flex-row items-center gap-2'>
                                <Icon
                                    className="text-[#5B7F8E] text-base"
                                    icon="boxicons:git-branch"
                                />
                                <span className='text-[#5B7F8E] text-[12px]'>main</span>
                            </div>
                            <span className='text-[#5B7F8E] text-[12px]'>
                                {projects.length} projects
                            </span>
                        </div>

                        {/* project rows — map from array */}
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                                className={`flex flex-row items-center gap-3 px-4 py-3 border-b border-[#1E3A44] cursor-pointer transition-colors
                                    ${selectedProject?.id=== project.id
                                        ? 'bg-[#1E3A44]'
                                        : 'hover:bg-[#163844]'
                                    }`}
                            >
                                <Icon
                                    className="text-[#5B7F8E] text-lg "
                                    icon="material-symbols-light:folder-rounded"
                                />
                                <span className='text-[#BDD1FF] text-[14px]'>
                                    {project.name}
                                </span>
                                {project.status && (
                                    <span className='ml-auto text-[10px] text-[#BDD1FF] border border-[#BDD1FF] rounded-full px-2 py-0.5'>
                                        {project.status}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* right — about panel */}
                    <div className='bg-[#0B1F28] p-6 flex flex-col gap-8'>
                        <AnimatePresence mode='wait'>
                        {selectedProject ? (
                        <motion.div initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} exit={{ opacity: 0, x: -10 }} transition={{ease:'easeInOut', duration:0.2}}>
                        {/* about */}
                        <div>
                            <h2 className='text-[#F4F7F6] text-[14px] font-semibold mb-3'>
                                About
                            </h2>
                            <hr className='border-[#1E3A44] mb-4' />
                            <p className='text-[#5B7F8E] text-[13px] leading-relaxed'>
                                {selectedProject.description}
                            </p>

                            {/* stack tags */}
                            <div className='flex flex-row flex-wrap gap-2 mt-4'>
                                {selectedProject.stack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className='text-[11px] text-[#BDD1FF] border border-[#1E3A44] rounded-full px-3 py-0.5'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/*project image */}
                        
                        <div>
                            <h2 className='text-[#F4F7F6] text-[14px] font-semibold mb-3 mt-4'>
                                Project Image
                            </h2>
                            <hr className='border-[#1E3A44] mb-4' />
                            <motion.img  initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ease:'easeIn', duration:0.5 }} src={selectedProject.img_url} alt={selectedProject.alt_image} className='w-full h-auto rounded-md' />
                        </div>


                        {/* languages */}
                        <div>
                            <h2 className='text-[#F4F7F6] text-[14px] font-semibold mb-3 mt-4'>
                                Languages
                            </h2>
                            <hr className='border-[#1E3A44] mb-4' />
                            <div className='flex flex-row items-center gap-2'>
                                <span
                                    className='w-3 h-3 rounded-full '
                                    style={{ background: selectedProject.languageColor }}
                                />
                                <span className='text-[#5B7F8E] text-[13px]'>
                                    {selectedProject.language}
                                </span>
                            </div>
                        </div>


                        {/* github link */}
                        
                        <a  href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex flex-row items-center gap-2 text-[#BDD1FF] text-[13px] hover:text-[#ffffff] transition-colors w-fit mt-2'
                        >
                                <Icon icon="ph:link-bold" className='text-base '/>
                                                Go Live
                        </a>
                        
                        </motion.div>
                        ):(
                            <motion.div 
                            key="empty"
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            className="text-[#5B7F8E] text-sm text-center mt-10"
                        >
                            Select a project to view details
                        </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                    

                </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Project;