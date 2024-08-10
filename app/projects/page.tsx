import Link from "next/link";

export default function Projects() {
    return (
      <div className="text">
        <h1>My Projects and Experiences</h1>
        <h2>These are projects and experiences that I&apos;ve been involved with in the past:</h2>
        <div className="list_projects">
          <ul>
            <li>Project: Programming Basics - <Link href="https://github.com/Labpro-21/if1210-2024-tubes-k11-c" passHref={true}>OWCA Monster Game</Link></li>
            <p>For the final project of IF1210, we were tasked with making a simple Pokemon-like game.</p>
            <li>Experience: HR Staff at TPB CUP 2023</li>
            <p>During TPB CUP 2023, I took part as a staff of the HR department overlooking the Publication Division.</p>
            <li>Experience: Property Staff at CC CUP 2022</li>
            <p>
              During CC CUP 2022, I took part as a staff of the Property Division to provide the necessary <br></br>
              equipments for the Basketball Competition.</p>
          </ul>
        </div>
      </div>
    );
  }