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
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={'https://img.freepik.com/premium-vector/online-rx-medical-prescription-medic-check-up-smartphone-illustration-doctor-showing-app-phone-with-prescriptions-medical-test-diagnosis-patient-online-medicine-concept_165217-210.jpg'} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>Medical App</h3>
                                        <p className="my-para">App Development Self Project. The primary objective of medical education apps is to maintain a reliable database with up-to-date medical information for doctors, students and medical users. Top medical apps focus on clinical reference, education, and networking, providing evidence-based content for professionals and students. Key platforms include Medscape (news/reference), Epocrates (drug dosing), UpToDate (clinical decisions), and MedShr (case studies). These apps offer drug interaction checkers, 3D anatomical animations, and secure case-sharing networks
                                        </p>
                                        <Link to='medical.zip'  download target="__blank" className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={'https://img.freepik.com/free-vector/making-money-online-service-platform-idea-business-development-commerce-activity-payback-mobile-app-vector-flat-illustration_613284-2415.jpg'} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>Sanchalan APP</h3>
                                        <p className="my-para">Based on search results, Sanchalan is primarily a transportation and logistics management app designed for bus operators to track. There are multiple apps with "Sanchalan" in their name, but the primary logistics tool is Sanchalan (by QTloads). It is a logistics management app designed to monitor vehicle movements, track fuel usage, manage driver assignments, and record transportation infractions/challans.</p>
                                        <Link to='https://play.google.com/store/apps/details?id=com.flutter.qtloads_sanchalan' target="__blank" className="show-projectbtn">Show Project</Link>
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
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={'https://img.freepik.com/free-vector/couples-families-celebrating-pride-day-together_23-2148525968.jpg'} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>Family Pride APP</h3>
                                        <p className="my-para">There are multiple apps with similar names, but the primary ones are a local produce delivery service and a laundry payment solution. The "Family Pride" app is for ordering fresh, locally sourced fruits and vegetables for home delivery.</p>
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
