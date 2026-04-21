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
                                        <h5>Jyoti Prajapati</h5>
                                        <p className='my-3'>I am a Android And Flutter Developer specialist.</p>
                                        <ul>
                                            <li>Gadhwa Chowk Ward No. 4 Pipraich Goorakhpur.</li>
                                            <li>+91 7617867769</li>
                                            <li>jyotiprajapati4852@gmail.com</li>
                                        </ul>
                                        
                                        <h5>BACHELOR  OF SCIENCE <span className='sentury-span'>2018-2022</span></h5>
                                        
                                        <ul className='marginunorderList'>
                                            <li>Buddha Institute Of Technologye Gida Gorakhpur (2018-2022)</li>
                                            <li>10th Co Operative Inter College Pipraich Gorakhpur (U.P Board)(2014).</li>
                                            <li>12th Co Operative Inter College Pipraich Gorakhpur (U.P Board) (2016).</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 wow animate__animated animate__slow 3s  animate__slideInRight'>
                                <div className='summyar0-conent-box'>
                                    <h2>Professional Experience</h2>
                                    <div className='loacion0-conetn-box'>
                                        <h5>Fluter DEVELOPER <span className='sentury-span'>2024-2025</span></h5>
                                        <p className='my-3'>I am a Android And Flutter Developer at DotMik Software Pvt Ltd.</p>
                                        <ul >
                                            <li>Prem nagar Block G, Gali No: 8 Najafgar New Delhi 110043.</li>
                                            <li><Link to='nextbigtechnology.com' style={{color:"#ffff"}}>www.dotmik.com/</Link></li>
                                            
                                            <li>jyotiprajapati4852@gmail.com</li>
                                        </ul>
                                        <h5>FLUTER DEVELOPER<span className='sentury-span'>2022-2024</span></h5>
                                        
                                        <ul className='marginunorderList'>
                                            <li>I am a Android And Flutter Developer at Rainet Technology.</li>
                                            <li>C-23, C Block, Sector 63, Noida, Uttar Pradesh 201301</li>
                                            <li><Link to='https://rainet.co.in/' style={{color:"#ffff"}}>rainet.co.in</Link></li>
                                            
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
