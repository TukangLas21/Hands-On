import Image from "next/image";

export default function Home() {
  return (
    <div className="hero">
      <div className="home_text">
        <h1>Hi! I&apos;m <span>Aria</span></h1>
        <p>
          And this is my personal portfolio website for my <br>
        </br>
          SPARTA 2023 Hands On Project.</p>
      </div>
      <div className="home_images">
        <Image 
          src="/foto_diri.png" 
          className="photo" 
          alt="Self Photo" 
          width={750}
          height={750}
        />
      </div>
    </div>
  );
}
