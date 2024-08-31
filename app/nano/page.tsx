import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'
import exp from 'constants'
import data from './data.json'
import { promises as fs } from 'fs';

export async function getPeople() {
  return {
    
      pageContent: (page:string): ReactNode | null => {
          return <div className="person">
          <div className="image">
            <Image
              src=""
              width={100}
              height={100}
              alt="Placeholder Picture" /></div>
          <div className="text">
            <h1>Otto Muskens</h1>
            <h2>Area of Study: </h2>
            <h3>Lorum Ipsum</h3>
          </div>
          <button><Link href="#"><i className="gg-arrow-right-r"></i></Link></button>
        </div>
      }
    
  }
}

export async function loop() {
  var returnVals: JSX.Element[] = [];
  const returnJSON = await fs.readFile(process.cwd() + '/app/nano/data.json','utf-8');
  const out = JSON.parse(returnJSON);
  for (const key in out.People){
    //console.log(`${key} : ${out.People[key]}`);
    returnVals.push(retHTML(out.People[key].Name, out.People[key].AOS, out.People[key].About, out.People[key].Picture, out.People[key].PageName));
  }
  return returnVals
}

export function retHTML(name: string, aos: string, about: string, pic: string, page: string) {
  return (
    <div className="person">
          <div className="image">
            <Image
              src={pic}
              width={100}
              height={100}
              alt={pic} /></div>
          <div className="text">
            <h1>{name}</h1>
            <h2>Area of Study: {aos}</h2>
            <h3>{about}</h3>
          </div>
          <button><Link href={page}><i className="gg-arrow-right-r"></i></Link></button>
        </div>)
}



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
            <button className="dropbtn"><Link href="nano">People</Link>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="nano">Otto Muskens</a>
              <a href="nano/jordan">Jordan Scott</a>
              <a href="#">Priya Deoli</a>
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
            
            
            <div>{loop()}</div>
              
            
        </div>
      
      </body>
    )
  }
  /*<div className="person">
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
                <h1>Otto Muskens</h1>
                <h2>Area of Study: </h2>
                <h3>Lorum Ipsum</h3>
                </div>
                <button><Link href="#"><i className="gg-arrow-right-r"></i></Link></button>
            </div>*/