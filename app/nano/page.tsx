import Link from 'next/link'
import Image from 'next/image'
export default function Page() {
    return (
        <body>
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
          <button className="dropbtn">Groups
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a className="active" href="/nano">Integrated Nanophotonics</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          </div>
        <div><Link href="/contact">Contact</Link></div>
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
        <div className="people">
            
            <div className="person">
                <div className="image">
                <Image
                    src="/Jordan.png"
                    width={100}
                    height={100}
                    alt="Jordan's Pic"
                    /></div>
                <div className="text">
                <h1>Jordan Scott (New PhD Student)</h1>
                <h2>Area of Study: Metamaterial Optics</h2>
                <h3>I am a new starter in the Integrated Nanophotonics group looking into metalenses. My project is in conjunction with Qioptiq Ltd.</h3>
                </div>
                <button><Link href="/nano/jordan"><i className="gg-arrow-right-r"></i></Link></button>
            </div>
            <div className="person">
                <div className="image">
                <Image
                    src=""
                    width={100}
                    height={100}
                    alt="Placeholder Picture"
                    /></div>
                <div className="text">
                <h1>Name</h1>
                <h2>Area of Study: </h2>
                <h3>Lorum Ipsum</h3>
                </div>
                <button><Link href="#"><i className="gg-arrow-right-r"></i></Link></button>
            </div>
        </div>
      
      </body>
    )
  }