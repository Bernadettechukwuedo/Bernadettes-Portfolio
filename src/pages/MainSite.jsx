import About from './About'
import Hero from './Hero'
import Footer from '../components/Footer';
import Contact from './Contact'
import Project from './Project';
import Navbar from '../components/NavBar';

function MainSite(){
    return(
        <div>
         
            <Navbar/>
            <Hero/>
            
            <About/>
            <Project/>
            <Contact/>
            <Footer/>


        </div>
    )
}
export default MainSite;