import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import {persiancontact,encontact} from "../../components/about/Data";
import { useGlobalContext } from "../../context";
import "./contact.css";



function Contact() {
  const {language} = useGlobalContext();
  return (
    <div className="contact-sec">
      <div className="wrapp-contact">
        {!language &&
          persiancontact.map((item,key)=>{
            return(
             <h2 key={item.id} style={{direction:"rtl"}}>{item.title}</h2>)
          })
        }
          {language &&
          encontact.map((item,key)=>{
            return(
             <h2 key={item.id} style={{direction:"rtl"}}>{item.title}</h2>)
          })
        }
     
      <p className="email"><span><MdOutlineEmail/></span>Amerii.Atefeh@gmail.com </p>
      
      <div className="social">
        <ul className="social-link">
          <li className="li-social">
             <a href="https://t.me/Atefeh_amery"><PiTelegramLogoLight/></a>
            <a href="https://www.instagram.com/code.xui"><FaInstagram/></a>
            <a href="www.google.com"><CiLinkedin/></a>
          </li>
        </ul>
      </div></div>
    </div>
  );
}

export default Contact;
