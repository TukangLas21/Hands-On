import Link from "next/link";

export default function Contact() {
    return (
      <div className="text">
        <h1>Contact Me</h1>
        <h2>Feel free to contact me for any inquiries in the following:</h2>
        <p>Email: <Link href="mailto:19623160@std.stei.itb.ac.id">19623160@std.stei.itb.ac.id</Link></p>
        <p>LinkedIn: <Link href="https://linkedin.com/in/aria-judhistira-918892267" passHref={true}>Aria Judhistira</Link></p>
        <p>Line ID: ariajudhistira2005</p>
      </div>
    );
  }