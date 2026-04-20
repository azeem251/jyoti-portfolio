
import hello from "../../assets/hello.gif"
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
import whatspap from "../../assets/whatsapp.svg"
import appDevimg from "../../assets/app-dev.png"
import "./hero.css"
const Hero = () => {


    return (
        <>
            {/* hero wrapper start */}
            <section className="hero__Wrapper pt-5 pb-5" id="hero_section">
                <div className="container">
                    <div className="hero-row">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6 wow animate__animated animate__slow 3s  animate__fadeInLeft">
                                <div className="hero-conent">

                                    <p>Hello <img src={hello} alt="hello img" width="20px" /> I am</p>


                                    <h1 className="word">Jyoti Prajapati</h1>


                                    <h3>Flutter Developer</h3>


                                    <p className="small-resume">3 Years of Experience</p>


                                    <Link to="#contact" id="contact-hero-btn">Contact</Link>


                                    <div className="socila-links">
                                        <ul>
                                            <li><Link to="https://www.linkedin.com/public-profile/settings"><img src={linkedin} className="img-fluid" alt="linkeind" /></Link></li>
                                            <li><Link><img src={github} className="img-fluid" alt="github" /></Link></li>
                                            <li to="https://wa.me/7617867769"><Link ><img src={whatspap} className="img-fluid" alt="whatsapp" /></Link></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 wow animate__animated animate__slow 3s  animate__fadeInRight">
                                <div className="appdev-img-hero">
                                    <img src={appDevimg} alt="appdevimg" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* hero wrapper ends */}

        </>
    )
}

export default Hero
