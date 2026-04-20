import { Link } from 'react-router-dom'
import aboutimg from '../../assets/about-pick.jpg'
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
                                    <h3>Flutter Developer</h3>

                                    <p>I am Skilled Flutter Developer & Android Developer With Over 3 Years Of Experience In The Industry.My Passion Lies In Creating Captivating UI Designs and App Design And Implementing Them Through Flutter Developer.Take Pride In Staying Up-To-Date With Current Design Trends And Leveraging My Creativity To Produce Visually Application And User-Friendly Websites.Through My Career,I Have Developed A Deep Understanding Of User Experince(UX) And User Interface (UI) Principles.</p>
                                    <div className='about_linkls'>
                                        <div className='aboutlinks-flex'>
                                            <ul>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='/'><strong>Website :-</strong>jyoti-portfolio-rho.vercel.app</Link></li>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='tel:8791328156'><strong>Phone :-</strong>+91 7617867769 </Link></li>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='mailto:jyotiprajapati4852@gmail.com'><strong>Email :-</strong>jyotiprajapati4852@gmail.com</Link></li>
                                            </ul>
                                        </div>
                                        <div className='aboutlinks-flex'>
                                            <ul>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='/'><strong>Degree :-</strong>B.Tech (Information Technology)</Link></li>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='/'><strong>Date-Of-Barth :- </strong> 02 AUG 1997</Link></li>
                                                <li><i className='fa-solid fa-arrow-right-to-bracket' id='arrow-id'></i><Link to='/'><strong>City :-</strong> Gadhwa Chowk Ward No. 4 pipraich Gorakhpur.</Link></li>
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
