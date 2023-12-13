import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <body>
      
      <header>
        <link href="https://css.gg/css" rel="stylesheet" />
        <link href="https://unpkg.com/css.gg/icons/icons.css" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/css.gg/icons/icons.css"
          rel="stylesheet"
        />
        <div className="title">
        <Link href="/">
        <Image
            src="/QLM.png"
            width={100}
            height={20}
            alt="QLM Logo"
            
          />
          </Link>
        </div>

        <div className="options">
          <div className="dropdown">
            <button className="dropbtn">Groups
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="nano">Integrated Nanophotonics</a>
              <a href="#">Quantum Information</a>
              <a href="#">Link 3</a>
            </div>
            </div>
          <div><Link href="contact">Contact</Link></div>
        </div>
        

        <div className="logo">
            <Image
              src="/Logo.png"
              width={200}
              height={40}
              alt="University of Southampton Logo"
            />
          </div>
      </header> 
       
      
      <div className="intro">
        Welcome to QLM. We are part of the University of Southamptons School of Physics and Astronomy. <br></br>
        We are made up of multiple groups including Prof. Otto Muskens, Prof. Hendriks, etc.
      </div>
    
    </body>
  )
}