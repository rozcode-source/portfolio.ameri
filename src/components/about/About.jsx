import React from 'react'
import {info,skills,persianinfo,persianskills} from './Data';
import "./About.css";
import { useGlobalContext } from "../../context";

function About() {
  const {language} = useGlobalContext();
  return (
   
      <section className='section-aboutpage'>
        { language &&
    <div className='div-about'>
      <div className='div-personal'>
    <article> <h2>Personal Information</h2>
      {
         info.map((info)=>{
          return(
            <>
           <div key={info.id} className='container-info'>
            <p ><span>{info.icon}</span>{info.name} : {info.answer}</p></div>
            </>
          )
        })
      }
  
  </article>
  </div>
  <div className='div-skills'>
   <article className="skills">
  <h2>Skills</h2>
  {
    skills.map((skill)=>{
      return (
        <> <div key={info.id} className='container-loole'>
        <div className='top-skill' ><span>{skill.icon}{skill.name}</span>{skill.width}</div>
  <div className='loole'><span className='skill__bar-percentage' style={{width:`${skill.width}`}}></span></div>
  </div>
        </>
      )
    })
  }
  </article></div>
  <div className="warn">
    
    <p className='attention'><span ><i class="uil uil-lightbulb-alt"></i></span> these values will change!</p>
  </div>
  </div>}
  { !language &&
    <div className='div-about ' style={{direction:"rtl"}}>
      <div className='div-personal'>
    <article> <h2>اطلاعات شخصی</h2>
      {
         persianinfo.map((info)=>{
          return(
            <>
           <div key={info.id} className='container-info'>
            <p ><span>{info.icon}</span>{info.name} : {info.answer}</p></div>
            </>
          )
        })
      }
  
  </article>
  </div>
  <div className='div-skills'>
   <article className="skills">
  <h2>مهارت ها</h2>
  {
    persianskills.map((skill)=>{
      return (
        <> <div key={info.id} className='container-loole'>
        <div className='top-skill' ><span>{skill.icon}{skill.name}</span>{skill.width}</div>
  <div className='loole'><span className='skill__bar-percentage' style={{width:`${skill.width}`}}></span></div>
  </div>
        </>
      )
    })
  }
  </article></div>
  <div className="warn">
    
    <p className='attention'><span ><i class="uil uil-lightbulb-alt"></i></span>این مقادیر تغییر خواهند کرد!</p>
  </div>
  </div>}
</section>
    
  )
}

export default About