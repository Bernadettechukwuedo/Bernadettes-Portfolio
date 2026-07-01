import {motion} from 'framer-motion'
import { Icon } from '@iconify/react';
const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1, ease: 'easeOut', when: "beforeChildren", staggerChildren: 0.2 } },
};

const childVariants1 = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut'} },
};
const childVariants2= {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay:0.2 } },
};

const childVariants3= {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay:0.4 } },
};

const about_section=[
    {
        id:1,
        name:'Backend, frontend & ML',
        icon:'material-symbols:database-outline',
        color:'#76A3A0'
    },
        {
        id:2,
        name:'Writing on LinkedIn',
        icon:'solar:pen-outline',
        color:'#E8825C'
    },
        {
        id:3,
        name:'Supporting early-career devs',
        icon:'boxicons:handshake-filled',
        color:'#5B8FD9'
    },
        {
        id:4,
        name:' BSc Computer Science',
        icon:'stash:graduation-cap-light',
        color:'#D4537E'
    },
]
function About(){
    return(
        <div className="bg-[#0D1117] py-24 border-t border-[#30363D] " id="about">
            <motion.div variants={containerVariants} initial='hidden' whileInView='visible' viewport={{once:true}}>
            <div className='max-w-340 mx-auto px-8  grid grid-cols-1 md:grid-cols-2 gap-8' >
                <motion.div variants={childVariants1}>
                        <img  className='border-2 border-[#BDD1FF] rounded-lg w-full h-100 object-cover object-top' src='https://res.cloudinary.com/dotzzcayo/image/upload/v1782487367/about_profile_qai6b9.jpg' alt='An image of Bernadette Chukwuedo'/>
                </motion.div>

                <motion.div className='space-y-6' variants={childVariants2}>
                    <p className='text-[#BDD1FF] font-semibold text-[14px]'>ABOUT</p>
                    <p className=' max-w-xl text-[#F4F7F6] text-[16px]'>I'm a fullstack software engineer, working across Django, FastAPI, React and Vue to build complete products. Lately I've been deepening into machine learning from classic models to neural networks so the systems I build can get smarter, not just bigger.</p>
                    <p className=' max-w-xl text-[#F4F7F6] text-[16px] opacity-75'>Outside of code, I write on LinkedIn about growth, self-belief, and what it actually looks like to build a career in tech and I'm always glad to talk through career questions with developers earlier in their journey than me.</p>
                </motion.div>

            </div>
            <motion.div className='max-w-340 mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 mt-14' variants={childVariants3}>

               {about_section.map((abouts) =>( <motion.div key={abouts.id} className='bg-[#163844] rounded-md p-8 flex flex-col space-y-2 justify-center text-center items-center'>
                    <Icon style= {{ color:abouts.color}} className=" text-2xl" icon={abouts.icon} />
                    <p className='text-[#F4F7F6] '> {abouts.name}</p>
                </motion.div>))}

      
            </motion.div>

            </motion.div>
            


        </div>
    )
}
export default About;