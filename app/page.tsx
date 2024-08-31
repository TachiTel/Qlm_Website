import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <body>
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <header>
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
            <button className="dropbtn"><Link href="nano">People</Link>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="nano">Otto Muskens</a>
              <a href="nano/jordan">Jordan Scott</a>
              <a href="#">Priya Deoli</a>
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
        Welcome to the Integrated Nanophotonics Group. We are part of the University of Southamptons School of Physics and Astronomy. <br></br>
        We are a PhD group dedicated to the research of photonics at the nano scale from metalenses to photonic computing.<br></br>
        We work with a variety of partners in industry to advance the field of Nanophotonics under the supervision of Prof. Otto Muskens.
      </div>
      <footer>
        <h1>kek</h1>
      </footer>
    </body>
  )
}