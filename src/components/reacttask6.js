import "./style.css";
import myimg from "./21bce9040.png";
import {useRef} from "react";
export function Home(){
    const home=useRef(null);
    const about=useRef(null);
    const skills=useRef(null);
    const projects=useRef(null);
    const contact=useRef(null);

   const scrollToSection=(elementRef)=>{
    window.scrollTo({
        top:elementRef.current.offsetTop,
        behavior:'smooth'
    })
   }
     
    return(

        <div class="App">
            <div class="hero">
                <ul>
                    <li onClick={()=>scrollToSection(home)} class="link">Home</li>
                    <li onClick={()=>scrollToSection(about)} class="link">About me</li>
                    <li onClick={()=>scrollToSection(skills)} class="link">Skills</li>
                    <li onClick={()=>scrollToSection(projects)} class="link">Projects</li>
                    <li onClick={()=>scrollToSection(contact)} class="link">Contact details</li>
                </ul>
            </div>
            <div ref={home} class="home">
                  <h3 class="heading">Home</h3>
                   <table>
                    <tr>
                    <td><h3 class="i1">Hi</h3>
                    <h3 class="i1">My name is Javvaji Akshita</h3>
                    <h3 class="i1">Welcome to my portfolio website...Here you will get to know about my skills, projects that I have done so far</h3>
                    <h3 class="i1">My resume link <a href="https://drive.google.com/file/d/1Ph3CBdvSga3qo70kvU1RCdMagHneKK7_/view?usp=sharing" target="_blank" rel="noreferrer" >It's here</a></h3>
                    <h3 class="i1">Currently engaged in MERN fullstack internship by <a href="https://www.ethnus.com" target="blank">ethnus</a> and Cloud practitioner internship by <a href="https://aws.amazon.com/" target="blank">AWS</a></h3></td>
                    <td><img src={myimg} alt="My img"></img></td>
                    </tr>
                   </table>

                  </div>
            <div ref={about}class="about">
                    <h3 className="heading">About me</h3>
                     <h4>Highly motivated and detail-oriented B.Tech graduate seeking a challenging position in 
the software engineering field. Offering a strong foundation in coding, along with a passion 
for artificial intelligence and machine learning. Committed to continuous learning and 
professional growth, with a proven ability to adapt to new technologies and work 
collaboratively in team environments.
</h4>  

            </div>
            <div ref={skills} class="skills">
                 <h3 className="heading">My skills</h3>
                <h4>➢ Programming languages: Java, Python.</h4>
                <h4>➢ Web technologies:Html,CSS,JavaScript,PHP.</h4>
                <h4>➢ Solid understanding of Artificial intelligence and machine learning, Software development, web 
technologies,softskills.</h4>
                <h4>➢ Good in problem solving of data structures</h4>
                <h4>➢ Database: Oracle</h4>
                <h4>➢ Strong mathematical and logical reasoning abilities</h4>
                <h4>➢ High  analytical skills</h4>
                <h4>➢ Strong presentation and public speaking abilities</h4>
                <h4>Event Management skills</h4>
            </div>
            <div ref={projects} class="projects">
                <h3 class="heading">Projects done by me</h3>
                <h4>➢ Brain tumor detection using deep learning techniques (work and research)</h4>
                <h4>➢ Firefighting robot using Arduino Uno.</h4>
                <h4>➢ Sentiment analysis of reviews using NLP (work and research)</h4>
               <h4>➢ Review paper on cloud cryptography.</h4>
               <h4>➢ Basic website for agriculture related information using html,css,javascript and php.</h4>
            </div>
            <div ref={contact} class="contact">
                <h3 class="heading">Contact details</h3>
                <h4>Email me at javvajiakshita@gmail.com</h4>
                <h4>Contact Number 8332097937</h4>
                <h4>My GitHub link <a href="https://github.com/Akshita0501">It's here</a></h4>
                <h4>Instagram Id @akshita_javvaji</h4>
            </div>
        </div>
    )
}