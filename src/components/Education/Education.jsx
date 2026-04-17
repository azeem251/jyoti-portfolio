import './education.css'
import { Link } from 'react-router-dom'
const Education = () => {
    return (
        <>
            <section className='education__wrapper pt-5 pb-5' id='education_section'>
                <div className='container'>
                    <div className='text-center wow animate__animated animate__slow 3s  animate__zoomIn' >
                        <h2 className='text-center mb-3'>Education</h2>
                        <div className="bar"></div>
                        <p className="pt-2">Education is the cornerstone of personal and societal growth, fostering critical thinking, creativity, and problem-solving skills.While it’s safe to say that no one knows what will happen tomorrow, having an education under your belt will open the door to more opportunities. These job opportunities are also likely to pay more with more education, so what you do today in terms of education will surely prepare you for what’s yet to come.</p>
                    </div>
                    <div className='education-row'>
                        <div className='row g-4'>
                            <div className='col-lg-6 col-md-6 wow animate__animated animate__slow 3s  animate__slideInLeft'>
                                <div className='summyar0-conent-box'>
                                    <h2>Summary</h2>
                                    <div className='loacion0-conetn-box'>
                                        <h5>Er.Azeem</h5>
                                        <p className='my-3'>I am a Web Designer And Frontend Developer at Rainet Technology.</p>
                                        <ul>
                                            <li>Greater Noida (UP) India</li>
                                            <li>+91 8791328156</li>
                                            <li>azeemabdul13696@gmail.com</li>
                                        </ul>
                                        
                                        <h5>BACHELOR  OF COMPUTER APPLICATION <span className='sentury-span'>2021-2022</span></h5>
                                        
                                        <ul className='marginunorderList'>
                                            <li>Greater Noida (UP) India</li>
                                            <li>+91 8791328156</li>
                                            <li>azeemabdul13696@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 wow animate__animated animate__slow 3s  animate__slideInRight'>
                                <div className='summyar0-conent-box'>
                                    <h2>Professional Experience</h2>
                                    <div className='loacion0-conetn-box'>
                                        <h5>WEB DESIGN SPECIALIST <span className='sentury-span'>2022-2023</span></h5>
                                        <p className='my-3'>I am a Web Designer And Frontend Developer at Rainet Technology.</p>
                                        <ul >
                                            <li>Jamia Nagar, Okhla, New Delhi, Delhi 110025</li>
                                            <li><Link to='https://kreativedigitalmedia.com/' style={{color:"#ffff"}}>Kreativedigitalmedia.Com</Link></li>
                                            
                                            <li>azeemabdul13696@gmail.com</li>
                                        </ul>
                                        <h5>FRONTEND DEVELOPER<span className='sentury-span'>2022-2024</span></h5>
                                        
                                        <ul className='marginunorderList'>
                                            <li>C-23, C Block, Sector 63, Noida, Uttar Pradesh 201301</li>
                                            <li><Link to='https://rainet.co.in/' style={{color:"#ffff"}}>rainet.co.in</Link></li>
                                            <li>Currently Working..</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education