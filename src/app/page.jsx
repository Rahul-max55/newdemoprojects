"use client"; // This is a client component

import Image from 'next/image';
import { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Page = () => {

  const [h, setH] = useState("0");
  const [rotate, setRotate] = useState("0");


  const handleOpen = () => {
    h === "0" ? setH("40") : setH("0");
    rotate === "0" ? setRotate("180") : setRotate("0");
  }


  const [sH, setSH] = useState("0");
  const [sRotate, setSRotate] = useState("0");
  const [isburger, setIsburger] = useState("true");


  const sHandleOpen = () => {
    sH === "0" ? setSH("40") : setSH("0");
    sRotate === "0" ? setSRotate("180") : setSRotate("0");
  }



  return (
    <>
      {/* // Navbar */}

      <header>
        <div className="header_hero">
          <nav className='navigation'>
            <div className='logo' >
              <img src="images/logo.png" alt="logo" width={30} />
              <p>ZEROTIER</p>
            </div>
            <ul>
              <li>Feature</li>
              <li>Price</li>
              <li>Download</li>

              <li className='company_li' onClick={handleOpen} >Company <span className='company_name' style={{ rotate: `${rotate}deg` }} > <BiSolidDownArrow /></span>

                <div className='hide_drop' style={{ height: `${h}vh` }} >
                  <li>About Us</li>
                  <li>Career</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </div>

              </li>

              <li className='company_li' onClick={sHandleOpen} >Support<span className='company_name' style={{ rotate: `${sRotate}deg` }} > <BiSolidDownArrow /></span>

                <div className='hide_drop' style={{ height: `${sH}vh` }} >
                  <li>Document</li>
                  <li>Knowledge Base</li>
                  <li>Community</li>
                  <li>Getting Started</li>
                </div>

              </li>

            </ul>
            <div className='nav_button' >
              <button className="login" >Login</button>
              <button className="signup" >Signup</button>
              {isburger === "true" ? <GiHamburgerMenu className='burger' onClick={() => setIsburger("false")} /> : <ImCross className='burger' onClick={() => setIsburger("true")} />}
            </div>
          </nav>
          <div className="hero">
            <h1> Securely connect any device, anywhere </h1>
            <p> ZeroTier lets you build modern, secure multi-point virtualized networks of almost any type. From robust peer-to-peer networking to multi-cloud mesh infrastructure, we enable global connectivity with the simplicity of a local network.</p>
            <div className='hero_button' >
              <button className="zero" >Get Zero Tier</button>
              <button className="more" >Learn More</button>
            </div>
          </div>
        </ div>

        {/* hamburger navbar */}
        {isburger === "false" ? <div className="ham_nav">
          <ul>
            <li>Feature</li>
            <li>Price</li>
            <li>Download</li>

            <li className='company_li' onClick={handleOpen} >Company <span className='company_name' style={{ rotate: `${rotate}deg` }} > <BiSolidDownArrow /></span>

              <div className='hide_drop' style={{ height: `${h}vh` }} >
                <li>About Us</li>
                <li>Career</li>
                <li>Contact</li>
                <li>Blog</li>
              </div>

            </li>

            <li className='company_li' onClick={sHandleOpen} >Support<span className='company_name' style={{ rotate: `${sRotate}deg` }} > <BiSolidDownArrow /></span>

              <div className='hide_drop' style={{ height: `${sH}vh` }} >
                <li>Document</li>
                <li>Knowledge Base</li>
                <li>Community</li>
                <li>Getting Started</li>
              </div>

            </li>
            <li>login</li>

          </ul>
        </div> : ""}
        {/* end hamburger navbar */}


      </header >
      {/* // end Navbar */}

      {/* // main */}
      <main>

        <p>Latest version: 1.10.6 | ZeroTier is available on MikroTik. Read more.</p>

        <div className="cardOne" >
          <img src="images/phone_img.png" alt="phone_img" />
          <div className="right_detail" >
            <h1>It just works</h1>
            <p> ZeroTier combines the capabilities of VPN and SD-WAN, simplifying network management. Enjoy flexibility while avoiding costly hardware vendor lock in.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="cardOne cardTwo" >
          <img src="images/secure-technology.png" alt="phone_img" />
          <div className="right_detail" >
            <h1>Speed, flexibility, and security
            </h1>
            <p>  Set up ZeroTier in minutes with remote, automated deployment. <br /><br />

              Emulates Layer 2 Ethernet with multipath, multicast, and bridging capabilities. <br /><br />

              ZeroTier’s zero-trust networking solution provides scalable security with 256-bit end-to-end encryption.</p>
            <button>Get Zero Tier</button>
          </div>
        </div>

        {/* gradiant cards */}
        <div className='all_innovative_cards' >
          <h1>Used by the world's most innovative teams</h1>

          <div className="innovative_card">
            <img src="/images/user-icon.png" alt="user-icon" width={60} />
            <p>"In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us." <br /><br />
              PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY</p>
          </div>
          <div className="innovative_card">
            <img src="/images/user-icon.png" alt="user-icon" width={60} />
            <p>"In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us." <br /><br />
              PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY</p>
          </div>
          <div className="innovative_card">
            <img src="/images/user-icon.png" alt="user-icon" width={60} />
            <p>"In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us." <br /><br />
              PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY</p>
          </div>

        </div>
        {/* end gradiant cards */}

        {/* secure networcks section */}
        <div className='all_secure_cards' >
          <h1>Secure networks for teams of any size</h1>

          <div className="all_secure">

            <div className="two_card">
              <div className="one_card">
                <img src="/images/game-icon.png" alt="game-icon.png" width={180} />
                <h1>Individuals
                </h1>
                <p>Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere <br />
                  Conveniently share files and data, or even play LAN games with others <br />
                  Manage secure network access to users of choice</p>
              </div>
              <div className="one_card">
                <img src="/images/cloud-icon.png" alt="game-icon.png" width={180} />
                <h1>IT Teams
                </h1>
                <p>
                  Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution <br />

                  Build, manage, and observe any number of remote, on premise, or cloud networks with one management interface <br />

                </p>
              </div>
            </div>
            <div className="two_card">
              <div className="one_card">
                <img src="/images/devops-icon.png" alt="game-icon.png" width={180} />
                <h1>DevOps
                </h1>
                <p>
                  Quickly build backplane networks spanning multiple cloud providers
                  <br />
                  Save on performance, storage, and bandwidth
                  <br />
                  Administrate and debug from anywhere
                  <br />
                  Secure corporate network overlay and failover layer</p>
              </div>
              <div className="one_card">
                <img src="/images/global-network.png" alt="game-icon.png" width={180} />
                <h1>Embedded
                </h1>
                <p>
                  Enjoy vastly superior network control and functionality
                  <br />
                  Develop and manage products or services running on their own decentralized networks
                  <br />
                  Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can operate on 64MB of RAM</p>
              </div>
            </div>

          </div>
        </div>
        {/* end secure networcks section */}

      </main>
      {/* // end main */}


    </>
  )
}

export default Page