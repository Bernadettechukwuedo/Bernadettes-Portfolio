import {motion} from 'framer-motion'
import { Icon } from '@iconify/react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1, ease: 'easeOut', when: "beforeChildren", staggerChildren: 0.15 } },
};

const childVariants1 = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut',delay: 0.2} },
};

function Contact() {


    const form = useRef();
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);
    const service_id = import.meta.env.VITE_SERVICE_ID;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;
    const public_key = import.meta.env.VITE_PUBLIC_KEY;
    const [statusMessage, setStatusMessage] = useState("");
    const [ loading, setLoading ] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
       
        


        setLoading(true);
        emailjs.sendForm(
            service_id,    
            template_id,
            form.current,
            { publicKey: public_key }  
        )
        .then(() => {
            
            setSent(true);
            setError(false);
            setStatusMessage("Message sent successfully! I'll be in touch soon.");
            form.current.reset();
            setLoading(false);
            setTimeout(() => {
                setStatusMessage("")
            }, 4000);
        })
        .catch((error) => {
            setError(true);
            setStatusMessage("Something went wrong. Please try again.");
            setLoading(false);
            console.log('FAILED...', error.text);
        });

        
    };
    return (
        <div className='bg-[#161B22] py-24' id="contact">
            <motion.div className='max-w-340 mx-auto px-8  grid grid-cols-1 md:grid-cols-2 gap-8 items-start' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{once:true}}>
                <div className='flex flex-col justify-center items-start space-y-6 max-w-sm'>
                    <p className='text-[#BDD1FF] font-semibold text-[14px]'>GET IN TOUCH</p>
                    <h1 className='font-medium text-3xl  text-[#F4F7F6]'>Have a project in mind?</h1>
                    <p className='opacity-75 text-md font-medium text-[#F4F7F6]'> Whether it's a full project  build or just a question about work, i read every message myself.</p>
                    <div className='flex flex-row gap-4 mt-4'>
        
                        <a href="https://github.com/Bernadettechukwuedo" target="_blank" rel="noopener noreferrer"><Icon className="text-[#BDD1FF] text-xl hover:text-[#2D9C8F]" icon="ri:github-line" /></a>
                        <a href="https://www.linkedin.com/in/bernadettechukwuedo/" target="_blank" rel="noopener noreferrer"><Icon className="text-[#BDD1FF] text-xl hover:text-[#2D9C8F]" icon="mingcute:linkedin-line" /></a>
                        <a href="mailto:chukwuedoogochukwubernadette@gmail.com"><Icon className="text-[#BDD1FF] text-xl hover:text-[#2D9C8F]" icon="akar-icons:envelope" /></a>
                        <a href="https://wa.me/2348078933435" target="_blank" rel="noopener noreferrer"><Icon className="text-[#BDD1FF] text-xl hover:text-[#2D9C8F]" icon="ic:outline-whatsapp" /></a>
                    </div>


                </div>
                {/* form */}
                
                <motion.form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-2 w-full  border border-[#E0E6E5] rounded-xl bg-[#FFFFFF] py-8 px-8 shadow-lg" variants={childVariants1}>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text" placeholder="Your Name" required className="border border-[#E0E6E5] bg-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#BDD1FF] text-[#0B2530] placeholder:text-[#9AAAA8]"/>

                    <label className="mt-3" htmlFor="email">Email</label>
                    <input name="email" id="email" type="email" placeholder="you@email.com" required className="border border-[#E0E6E5] bg-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#BDD1FF]  text-[#0B2530] placeholder:text-[#9AAAA8]"/>

                    <label className="mt-3" htmlFor="tel">Phone no</label>
                    <input name="tel" id="tel" type="tel" placeholder="+1 (555) 000-0000" required className="border border-[#E0E6E5] bg-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#BDD1FF]  text-[#0B2530] placeholder:text-[#9AAAA8]"/>

                    <label className="mt-3" htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Tell me about your project" required className="border border-[#E0E6E5] bg-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#BDD1FF]  text-[#0B2530] placeholder:text-[#9AAAA8]"></textarea>
                     <motion.button disabled={loading} whileTap={{scale:0.98}} whileHover={{ scale: 1.02 }}  type="submit" className="bg-[#4A79E7] w-full mt-4 text-white font-medium py-3 px-6 rounded-md hover:bg-[#0D1117] transition-colors">
                            {loading? "Sending..." : "Send message"}
                        </motion.button>

                        {/* Success / Error messages */}
                        {sent && <p className="text-green-600  text-sm">{statusMessage}</p>}
                        {error && <p className="text-red-500  text-sm">{statusMessage}.</p>}


               
                </motion.form>

            </motion.div>

        </div>
    );
}

export default Contact;