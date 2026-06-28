import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';


const achievements =[
    { id:1,
      name:'McKinsey Forward Program',
      icon:'game-icons:achievement',
      color:'#E4805B'
    },
    { id:2,
      name:'BSc Computer Science',
      icon:'stash:graduation-cap-light',
      color:'#2C9A8D'
    },
    { id:3,
      name:'EITCA',
      icon:'mdi:certificate',
      color:'#539CF0'
    }
]
const languages =[
    { id:1,
      name:'Python',
      color:'#3572A5'
    },
    { id:2,
      name:'JavaScript',
      color:'#F1E05A'
    },
    { id:3,
      name:'HTML/CSS/Tailwind CSS',
      color:'#E34C26'
    }
]

const stacks = [
    {
        id:1,
        name:'Django',
        color:'#2D9C8F',
        background:'#0D2818',
        border_color:'#1D9E75'
    },
        {
        id:2,
        name:'FastAPI',
        color:'#2D9C8F',
        background:'#0D2818',
        border_color:'#1D9E75'
    },

        {
        id:3,
        name:'React',
        color:'#55A1F8',
        background:'#0D2540',
        border_color:'#1F4A8C'
    },
            {
        id:4,
        name:'Vue.js',
        color:'#55A1F8',
        background:'#0D2540',
        border_color:'#1F4A8C'
    },
    {
        id:5,
        name:'Scikit-learn',
        color:'#B96848',
        background:'#2D1A0D',
        border_color:'#8C3D1F'
    },
        {
        id:6,
        name:'TensorFlow',
        color:'#B96848',
        background:'#2D1A0D',
        border_color:'#8C3D1F'
    },
     {
        id:7,
        name:'Node js',
        color:'#8A939D',
        background:'#161B22',
        border_color:'#30363D'
    },
         {
        id:8,
        name:'GCP',
        color:'#8A939D',
        background:'#161B22',
        border_color:'#30363D'
    },
    {
        id:9,
        name:'MySQL',
        color:'#8A939D',
        background:'#161B22',
        border_color:'#30363D'
    },
        {
        id:10,
        name:'Docker',
        color:'#8A939D',
        background:'#161B22',
        border_color:'#30363D'
    },
]


const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1, ease: 'easeOut', when: "beforeChildren", staggerChildren: 0.2 } },
};

const childVariants1 = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0,  transition: { duration: 0.7, ease: 'easeOut'} },
};

function Hero() {
    return (
        <div className="bg-[#0D1117] min-h-screen w-full flex items-center justify-center  overflow-hidden py-24 " id="hero">
            <motion.div className=' max-w-340 mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-center  ' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{once:true}}>
                <div className='space-y-8.5'>
                        <motion.div variants={childVariants1} className='flex flex-col lg:flex-row gap-4 md:gap-6 items-center' >
                            <img className=" w-40 h-40  rounded-full object-cover object-top border-2 border-[#BDD1FF]"src='https://res.cloudinary.com/dotzzcayo/image/upload/v1782344611/profile_esaxek.jpg' alt='An image of Bernadette Chukwuedo'/>
                            <motion.div className='flex flex-col' >
                                <h1 className='text-[#ffffff] text-[40px] font-black leading-tight'>Bernadette</h1>
                                <h2 className='text-[#ffffff] text-[40px]  font-black leading-tight'>Chukwuedo</h2>
                                <p className='text-[#BDD1FF] text-[14px] font-normal'>@bernadettechukwuedo</p>

                            </motion.div>   
                        </motion.div>

                        <motion.p variants={childVariants1} className='text-[#FFFFFF] text-[18px] max-w-md '>Fullstack Software Engineer crafting robust backend architectures and AI tools designed to solve real-world challenges and empower the next generation of tech talent.</motion.p>

                        <motion.div variants={childVariants1} className=' flex flex-row gap-4'>
                            <motion.a whileTap={{scale:0.98}} whileHover={{ scale: 1.02 }} href='#project' className='bg-[#4A79E7] text-[#ffffff] px-4 py-2 rounded-full text-center cursor-pointer font-medium text-[14px] hover:bg-[#FFFFFF] hover:text-black transition-colors'> View projects</motion.a>

                            
                            <motion.a 
                            whileTap={{ scale: 0.98 }} 
                            initial="initial"
                            whileHover="hover" 
                            href="#contact" 
                            className="flex flex-row items-center gap-2 bg-transparent text-[#ffffff] px-4 py-2 rounded-full text-center cursor-pointer font-medium text-[14px] hover:bg-[#4A79E7] transition-colors"
                            > 
                            Get in touch
                            <motion.div
                                variants={{
                                initial:{x:0},
                                hover: { x: 6 }
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <Icon className="text-[14px]" icon="maki:arrow" />
                            </motion.div>
                            </motion.a>
                        </motion.div>
                        <motion.div variants={childVariants1} className='flex flex-row items-center gap-3 mt-8'>
                             <motion.div className="flex items-center justify-center w-3 h-3" initial={{opacity:0}} animate={{opacity:[0,1,1,0]}} transition={{repeat:Infinity, duration:1, ease:'easeInOut'}}>
                                <Icon  className="text-[12px] text-[#4A79E7]" icon="material-symbols:circle" />
                            </motion.div>
                            <p className='text-[#FFFFFF] font-medium'> Open to remote roles </p>

                        </motion.div>

                </div>


                <div className='space-y-5'>
                    {/*stack*/}
                    <motion.div variants={childVariants1} >
                        <h1 className='text-[#BDD1FF] text-[19px] font-medium mb-3'>Stack</h1>
                        <motion.div className='flex flex-row flex-wrap gap-3.5' 
                        >
                            {stacks.map((stack) => (
                                <motion.div
                                    key={stack.id}

                                    className='rounded-full px-7.5 py-2.5 text-[#ffffff] bg-[#4A79E7] cursor-pointer'
                                    initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
                                    whileHover={{
                                    boxShadow: "0px 0px 20px 5px rgba(99, 102, 241, 0.4)",
                                    scale: 1.05
                                    }}
                                >
                                    <p className='text-[14px] font-normal'>{stack.name}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                   
                        <hr className='border-[#728091] mt-6' />
                    </motion.div>
                    
                    {/*language */}
                    <motion.div variants={childVariants1}>
                        <h1 className='text-[#BDD1FF] text-[19px] font-medium mb-3'>Languages</h1>
                        <div className='flex flex-col flex-wrap gap-2'>

                        {languages.map((language) => (<div key={language.id} className='flex flex-row flex-wrap gap-3'>
                                <div
    
                                    >
                                    <Icon style={{color:language.color}} className="text-[16px]" icon="material-symbols:circle" />
                                </div>
                                <p className='text-[#FFFFFF] text-[14px] font-normal'> {language.name} </p>

                            </div>))}
                        </div>
                 
                    
                        <hr className='border-[#728091] mt-6' />
                     </motion.div>
                    {/*achievement */}
                    <motion.div variants={childVariants1}>
                        <h1 className='text-[#BDD1FF] text-[19px] font-medium mb-3 '>Achievements</h1>
                        <div className='flex flex-col flex-wrap gap-2'>

                        {achievements.map((achievement) => (<div key={achievement.id} className='flex flex-row flex-wrap gap-3'>
                                <div
                                    className="inline-flex"
                                    >
                                    <Icon style={{color:achievement.color}} className="text-[16px]" icon={achievement.icon} />
                                </div>
                                <p className='text-[#FFFFFF] text-[14px] font-normal'> {achievement.name} </p>

                            </div>))}
                        </div>
                    </motion.div>



                </div>

            
            
            
            
            </motion.div>
            
  
            
        </div>
    )
}

export default Hero;