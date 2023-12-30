
import { Link, NavLink } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import links from "./navData";import { useGlobalContext } from "../../context";
import "./Navbar.css";
import Home from "../../components/home/Home";
function Navbar() {
  const {language,languagechanger} = useGlobalContext();
 

  return (
    <section className="home-section" > 
      { !language && <aside className="aside" style={{direction:"rtl"}}>
<div className="aside-container">
  <div className="topbar">
    <h3>پورتفولیو</h3>
    <div className="icons-top">
    <span className="icon-topbar" onClick={languagechanger}><MdLanguage/></span>
     </div>

  </div>
  <div className="sumabout">
    <h3 className="name-title">
     سلام عاطفه عامری ام 👋 
    </h3>
    <h4  className= "job-title">
    توسعه دهنده فرانت اند و طراح UI/UX 
    </h4>
    <p > نزدیک به دوسال است که یادگیری برنامه نویسی فرانت اند رو شروع کردم.در مسیر یادگیری  با چالش های زیادی در زندگیم مواجه شدم ولی مصمم تر ادامه دادم و همچنان در حال یادگیری ام, باعث افتخار است که در کنار شما پیشرفت کنم و باعث پیشرفت شما باشم.</p>
   <Link to="contact" ><button className="btn btn-contact">ارتباط با من</button></Link>
  </div>
  <div className="links-container">
  <ul className="links">
    {
      links.map((item)=>{
        return(
<div  key ={item.id} className="linkNav-hover">
           <li  className="linkNav"><NavLink to={item.url} className="each-link" activeClassName="active">{item.icon} </NavLink></li></div>
        )
      })
    }
   
  {/*  <li><Link to="about">Skills</Link></li>
    <li><Link to="gallery">Gallery</Link></li>
    <li><Link to="contact">Contact</Link></li>*/}
  </ul></div>
  <div className=" download-pdf">
 
    <a href="resumeameri.pdf" download="re resumeameri.pdf">
  <button className="btn btnpdf">  دانلود رزومه (pdf)</button></a>
  </div>







</div>

    </aside>
  
  }
  { language && <aside className="aside" >
<div className="aside-container">
  <div className="topbar">
    <h3>Portfolio</h3>
    <div className="icons-top">
    <span className="icon-topbar" onClick={languagechanger}><MdLanguage/></span>
     </div>

  </div>
  <div className="sumabout">
    <h3 className="name-title">
    Hi I'm Atefeh Amerii 👋
    </h3>
    <h4  className= "job-title">
    Front-End Developer & UI/UX Designer
    </h4>
<p> I have been learning front-end programming for almost two years. Along the way, I have faced many challenges in my life, but I have never given up on learning, and I am still in the process of learning. It is an honor to progress alongside you and contribute to your progress.</p>   

<Link to="contact" ><button className="btn btn-contact">Contact me</button></Link>
   </div>
  <div className="links-container">
  <ul className="links">
    {
      links.map((item)=>{
        return(
<div  key ={item.id} className="linkNav-hover">
      <li  className="linkNav"><NavLink to={item.url} className="each-link" activeClassName="active">{item.icon} </NavLink></li></div>
        )
      })
    }
   
  {/*  <li><Link to="about">Skills</Link></li>
    <li><Link to="gallery">Gallery</Link></li>
    <li><Link to="contact">Contact</Link></li>*/}
  </ul></div>
  <div className=" download-pdf">
     <a href="Untitled (5).pdf" download="ai Untitled (5).pdf">
  <button className="btn btnpdf">Download Resume(pdf)</button></a>
  </div>







</div>

    </aside>
  
  }
 
    </section>
  );
}

export default Navbar;
