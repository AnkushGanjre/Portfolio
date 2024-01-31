import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/GamerNinja.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Ankush Ganjre</strong>, a dedicated game developer and 3D artist with a fervent passion for creating immersive digital experiences. With a solid foundation in game programming and level design, coupled with expertise in Unity 3D, I strive to push the boundaries of interactive storytelling and visual aesthetics.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey in the realm of game development began with a fascination for blending artistry with technology. Over the years, I have honed my skills in Unity 3D & programming languages such as C#, leveraging them to bring virtual worlds to life. Whether it's coding intricate gameplay mechanics or optimizing performance, I am committed to delivering seamless and engaging gaming experiences.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            In addition to my prowess in game development, I am also deeply immersed in the realm of 3D artistry. From modeling and texturing to lighting and animation, I revel in the creative process of sculpting digital landscapes and characters. With a keen eye for detail and a knack for storytelling, I strive to evoke emotions and immerse players in captivating virtual environments.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Explore my portfolio to see how I blend technology and artistry to craft captivating games and stunning 3D renders. Let's collaborate and create something extraordinary together!
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                
             <div style={{display:"flex",justifyContent:"space-evenly"}}>
                 <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
             </div>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
