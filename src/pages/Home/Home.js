import React, { useState } from 'react';
import "./Home.css";

import showcaseBlob from "../../assets/images/Illustration.png";
import showcaseBlob2 from "../../assets/images/Illustration-2.png";
import Button from '../../components/Button/Button';
import One from "../../assets/images/01.png";
import Two from "../../assets/images/02.png";
import Three from "../../assets/images/03.png";
import Four from "../../assets/images/04.png";
import Five from "../../assets/images/05.png";
import Six from "../../assets/images/06.png";
import Card from '../../components/Card/Card';
import { Input } from '../../components';

const Home = () => {

    const tabs = [
        { id: 1, tab: "All" },
        { id: 2, tab: "Illustrations" },
        { id: 3, tab: "App" },
        { id: 4, tab: "Branding" },
    ];

    const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <section className='home'>
        <div className='flex flex-col-sm container'>
            <div className='text-center-sm mb-2'>
                <h1>We help Brands <br /> to create Their <br /> <span style={{ background: "#FF5678", color: "#fff", padding: 3, marginTop: "100px" }}>Imagination</span></h1>
                <Button text={`Learn More`} />
            </div>
            <img src={showcaseBlob} alt="" style={{ width: "400px", height: "400px" }} />
        </div>

        <div className='flex flex-col-sm-reverse mt-2 container'>
            <img src={showcaseBlob} alt="" style={{ width: "400px", height: "400px" }} />
            <div className='text-center-sm mb-2'>
                <h1>We help Brands <br /> to create Their <br /> <span style={{ background: "#FF5678", color: "#fff", padding: 3, marginTop: "100px" }}>Imagination</span></h1>
                <Button text={`Learn More`} />
            </div>
        </div>

        <div className='flex flex-col-sm-reverse mt-10 image-bg' style={{ position: "absoluteee" }}>
            <div className="container">
                <div className='flex flex-col-sm-reverse'>

                    <div className='text-center-sm mb-2'>
                        <h1>Things We Enjoy<br /> <span style={{ background: "#FF5678", color: "#fff", padding: 3, marginTop: "100px" }}>Imagination</span></h1>
                        <div className='d-flex'>
                            <img src={Four} alt="" style={{ marginRight: "30px", width: "50px" }} />
                            <div>
                                <h3>Content Writing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, id!
                                </p>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <img src={Five} style={{ marginRight: "30px", width: "50px" }} />
                            <div>
                                <h3>Content Writing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, id!
                                </p>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <img src={Six} alt="" style={{ marginRight: "30px", width: "50px" }} />
                            <div>
                                <h3>Content Writing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, id!
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                    <div className='d-flex'>
                            <img src={One} alt="" style={{ marginRight: "30px", width: "50px" }} />
                            <div>
                                <h3>Content Writing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, id!
                                </p>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <img src={Two} style={{ marginRight: "30px", width: "50px" }} />
                            <div>
                                <h3>Content Writing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, id!
                                </p>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <img src={Three} alt="" style={{ marginRight: "30px", width: "50px" }} />
                            <div>
                                <h3>Content Writing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, id!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className='flex flex-col-sm-reverse mt-10 container'>
            <div className='text-center-sm mb-2'>
                <h1>We help Brands <br /> to create Their <br /> <span style={{ background: "#FF5678", color: "#fff", padding: 3, marginTop: "100px" }}>Imagination</span></h1>
                <Button text={`Learn More`} />
            </div>
            <img src={showcaseBlob} alt="" style={{ width: "400px", height: "400px" }} />
        </div>

        <div className='mt-10 container'>
            <h1 className='text-center'>Meet The <span style={{ background: "#FF5678", color: "white" }}>Team</span></h1>
            <div className='grid-3'>
                <Card name={`Gabriel`} position="CEO" />
                <Card name={`Gabriel`} position="CEO" />
                <Card name={`Gabriel`} position="CEO" />
            </div>
        </div>

        <div className='mt-10 container'>
            <h1 className='text-center'>Some of our <span style={{ background: "#FF5678", color: "white" }}>Previous Work</span></h1>
            <div className='flex' style={{ width: "50%", margin: "auto"}}>
                { tabs.map(tab => (
                    <p key={tab.id} style={{ background: tab.id === selectedIndex ? "#FF5678" : "white", color: tab.id === selectedIndex ? "white": "black", cursor: "pointer" }} onClick={() => setSelectedIndex(tab.id)}>
                        {tab.tab}
                    </p>
                )) }
            </div>
        </div>

        <div className='container'>
            <p>{selectedIndex}</p>
        </div>


        <div className='flex flex-col-sm-reverse mt-10 container'>
            <img src={showcaseBlob} alt="" style={{ width: "400px", height: "400px" }} />
            <div className='text-center-sm mb-2'>
                <h1>Need Any Help <br /> to create Their <br /> <span style={{ background: "#FF5678", color: "#fff", padding: 3, marginTop: "100px" }}>Contact Us</span></h1>
                <form action="#" method="post">
                    <Input type="text" placeholder="Enter your name" />
                    <Input type="email" placeholder="Enter your email" />
                    <Input type="textarea" placeholder="Enter your Message" />
                    <div>
                        <Button text="send" />
                    </div>
                </form>
            </div>
        </div>

                    

    </section>
  )
}
export default Home;