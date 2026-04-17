import { Link } from 'react-router-dom'
import aboutimg from '../../assets/about-pick.png'
import './about.css'

const About = () => {
    return (
        <>
            {/* about wrapper start  */}
            <section className='about_Wrapper pt-5 pb-5' id="about_section">
                <div className='container'>
                    <div className='text-center wow animate__animated animate__slow 3s  animate__zoomIn'>
                        <h2 className='text-center mb-3'>About Me</h2>
                        <div className="bar"></div>
                    </div>
                    <div className='about_Row'>

                        <div className='row g-5'>
                            <div className='col-lg-7 wow animate__animated animate__slow 3s  animate__lightSpeedInLeft'>
                                <div className='about__content_box'>
                                    <h3>Frontend Developer</h3>

                                    <p>I am Skilled Frontend Developer & Web Developer  With Over 1 Year Of Experience In The Industry.My Passion Lies In Creating Captivating UI Designs  and App Design And Implementing Them Through Flutter Developer.Take Pride In Staying Up-To-Date With Current Design Trends And Leveraging My Creativity To Produce Visually Application And User-Friendly Websites.Through My Career,I Have Developed A Deep Understanding Of User Experince(UX) And User Interface (UI) Principles.</p>
                                    <div className='about_linkls'>
                                        <div className='aboutlinks-flex'>
                                            <ul>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='/'><strong>Website :-</strong> www.azeemansari.com</Link></li>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='tel:8791328156'><strong>Phone :-</strong>+91 8791328156 </Link></li>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='mailto:azeemabdul13696@gmail.com'><strong>Email :-</strong>azeemabdul13696@gmail.com</Link></li>
                                            </ul>
                                        </div>
                                        <div className='aboutlinks-flex'>
                                            <ul>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='/'><strong>Degree :-</strong>B.C.A (CS)</Link></li>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='/'><strong>Date-Of-Barth :- </strong> 13 DEC 2000</Link></li>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='/'><strong>City :-</strong> Greater Noida(U.P) India..</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                   
                                </div>
                                <Link to='/' className='hireMe_btn'>Hire Me</Link>
                            </div>
                            <div className='col-lg-5 text-center wow animate__animated animate__slow 3s  animate__bounceInDown'>
                                <div className='about-img'>
                                    <img src={aboutimg} alt="about_img" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About