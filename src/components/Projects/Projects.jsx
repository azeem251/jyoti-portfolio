import "./projects.css"

import mediaImg from '../../assets/media.jpg'

import drsahab from '../../assets/drsahab.jpeg'
import educationImg from '../../assets/education.jpg'
import rajImg from '../../assets/resturant.jpg'
import { Link } from "react-router-dom"
import MirchiImg from "../../assets/mirchi.jpg"
import payment from '../../assets/payment.jpg'
const Projects = () => {
    return (
        <section className="project_wrapper pt-5 pb-5" id="project_section">
            <div className="container">
                <div className='text-center wow animate__animated animate__slow 3s  animate__zoomIn'>
                    <h2 className='text-center mb-3'>Projects</h2>
                    <div className="bar"></div>
                </div>
                <div className="project_row">
                    <div className="row g-4 justify-content-center wow animate__animated animate__slow 3s  animate__zoomInLeft">
                        <div className="col-lg-4 col-md-6">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={'https://jyoti-two.web.app/static/media/medical.09e743bd196e3e4f30ae.jpg'} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>Medical App</h3>
                                        <p className="my-para">App Development Self Project. The primary objective of medical education apps is to maintain a reliable database with up-to-date medical information for doctors, students and medical users.
                                        </p>
                                        <Link to='medical.zip'  download target="__blank" className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={'https://play-lh.googleusercontent.com/VVJafiUEfuDVO7XJ2-d60eP7DoTH_tpDd4PxN8Fd4k3yD8L53XzdCCj-OGwB6RTCLhNXryxwCeVuE8VO7UbxVeY=w400-h200-rw'} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>Sanchalan APP</h3>
                                        <p className="my-para">Based on search results, Sanchalan is primarily a transportation and logistics management app designed for bus operators to track.</p>
                                        <Link to='https://doctorwebsite.vercel.app' target="__blank" className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={payment} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>Online Payment</h3>
                                        <p className="my-para">Online payment is the electronic transfer of funds via the internet, usually between a merchant and a consumer. These payments can be made in various ways, such as via credit and debit cards.</p>
                                        <Link to='https://atmbank.co.in' target="__blank" className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div> */}
                        <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={educationImg} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>E Education App</h3>
                                        <p className="my-para">E-learning mobile apps take content delivery to the next level with interactive sessions between teachers and students
                                            wherein they can communicate and share their opinions Students can ask questions and teachers.</p>
                                        <Link to='https://education-psi.vercel.app' target="__blank"className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={rajImg} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>IT setUp Web </h3>
                                        <p className="my-para">When it comes to building websites, content is a necessity! Without content, your website is like a blank piece of paper or an empty toolbox – there is nothing to help or equip your visitors. The challenge is often putting together.</p>
                                        <Link to='https://itsetuptheme.vercel.app' target="__blank" className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={MirchiImg} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>Learning Dashboard</h3>
                                        <p className="my-para">Learning analytics dashboards (LADs) can analyze user data to create individualized learning paths by recommending content, modules, or assessments based on a students progress</p>
                                        <Link to='masala app.zip' target="__blank"className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
