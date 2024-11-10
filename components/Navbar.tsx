import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return ( 
        <nav className="flex flex-row items-center lg:justify-between justify-around">
            <div className="lg:text-6xl text-4xl text-white font-bold cursor-pointer">
                RA
            </div>
            <ul className="list-none flex flex-row items-center gap-2">
                <li>
                    <a 
                        href="https://github.com/Enayarefrei" target="_blank" rel="noopener noreferrer">
                        
                        <FaGithub  className="w-8 h-8 text-white" />    
                    </a>
                </li>    
                <li>
                    <a 
                        href="https://www.linkedin.com/in/rayane-achouchi-00bba9240/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-8 h-8 text-white"/>
                    </a>        
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;