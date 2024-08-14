import Image from "next/image";

export default function About() {
    return (
      <div className="about_text">
        <h1>About Me</h1>
        <p>
          My name is Aria Judhistira. I am a second-year student currently enrolled in Bandung Institute of Technology, majoring in Informatics Engineering. <br>
        </br>
          I was born in Jakarta, at 25 September 2005, but I lived most of my life at Serpong, South Tangerang.
        </p>

        <h2>Interests</h2>
        <p> Right now, I am interested in:</p>
        
        <div className="interest_table">
          <table>
            <tr>
              <th>Software Engineering</th>
              <th>Data Science</th>
              <th>AI</th>
            </tr>
            <tr>
              <td>
                Currently, I&apos;m interested in web development, 
                particularly front-end development, although
                I also found back-end development to be interesting
                as well, since it relates to data and servers.
              </td>
              <td>
                I have always been fascinated by data and how it truly
                affects the population, especially involving Big Data.
              </td>
              <td>
                Even now I rely on ChatGPT to assist me in making
                this portfolio website. It&apos;s really cool to think about the 
                potential of AI and it&apos;s future impact to the world.
              </td>
            </tr>
          </table>
        </div>
        
        <br></br>

        <h2>Talents</h2>
        <p>
          I was quite an avid musician during my junior and senior high school years.
          I played the piano, the violin, and most prominently,  
          <br></br>
          the flute, where I played in the Santa Ursula BSD Orchestra and the Canisius Wind Ensemble.
        </p>

        <div className="image_table">
          <table>
            <tbody>
              <tr>
                <td>
                  <Image 
                    src="/orkes_smp.png" 
                    className="foto_smp" 
                    alt="Photo FLute SMP" 
                    width={759}
                    height={784}
                  />
                </td>
                <td>
                  <Image 
                    src="/flute_cc.png" 
                    className="foto_sma" 
                    alt="Photo Flute SMA" 
                    width={736}
                    height={1030}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    );
  }