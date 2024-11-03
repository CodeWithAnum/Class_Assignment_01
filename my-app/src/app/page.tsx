import Link from "next/link";
import header from "./components/header/header";

const HomePage = () => {
  return(
    <div>
      <header></header>
      <h1>Hello EveryOne</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="contact">Contact</Link></li>
        <li><Link href="service">Service</Link></li>
      </ul>
    </div>
  )
}

export default HomePage