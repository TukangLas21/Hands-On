import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is where you can showcase your work and skills.</p>
      <Link href="/projects">View my projects</Link>
    </div>
  );
}
