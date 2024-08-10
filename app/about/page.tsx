export default function About() {
    return (
      <div className="about_text">
        <h1>About Me</h1>
        <p>
          I am a second-year student currently enrolled in Bandung Institute of Technology, majoring in Informatics Engineering. <br>
        </br>
          I was born in Jakarta, at 25 September 2005, but I lived most of my life in BSD, South Tangerang.
        </p>

        <h2>Interests</h2>
        <p> Right now, I am interested in:</p>
        
        <div>
          <table>
            <tr>
              <th>Software Engineering</th>
              <th>Data Science</th>
              <th>AI</th>
            </tr>
            <tr>
              <td>
                Currently, I'm interested in web development, 
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
                this portfolio website. It's really cool to think about the 
                potential of AI and it's future impact to the world.
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
            <tr>
              <td>
                <img src='/orkes_smp.png' className="foto_smp"></img>
              </td>
              <td>
                <img src='/flute_cc.jpeg' className="foto_sma"></img>
              </td>
            </tr>
          </table>
        </div>
      </div>

    );
  }