import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero">
      <div className="detel">
        <h1>Hi! I'm <span>Aria Judhistira</span></h1>
        <p>This is my personal portfolio website</p>
      </div>
      <div className="images">
        <img src="/blueblob.png" className="blob"></img>
        <img src="/foto_diri.png" className="photo"></img>
      </div>
    </div>
  );
}
