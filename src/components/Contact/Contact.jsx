import './contact.css'

const Contact = () => {
    return (
        <>
            <section className='cotact_wrapper pt-4 pb-5' id='contact_section'>
                <div className='container'>
                    <div className='text-center wow animate__animated animate__slow 3s  animate__zoomIn'>
                        <h2 className='text-center mb-3'>Contact Me</h2>
                        <div className="bar"></div>
                    </div>
                    <p className='text-center mt-2'>Link to active social media accounts like Twitter, Facebook, Instagram, and LinkedIn to give visitors another way to engage with the business Promote helpful content and resources.</p>
                    <div className='cotnact-row'>
                        <div className='row g-4'>
                            <div className='col-lg-6 wow animate__animated animate__slow 3s  animate__fadeInLeft'>
                                <div className='contact_links-Box'>
                                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56052.08427462649!2d77.41480744614697!3d28.592117941259158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee8f6eec5861%3A0x4a3148bd9ed55274!2sGalaxy%20Vega%20Techzone-IV!5e0!3m2!1sen!2sin!4v1707981863315!5m2!1sen!2sin" style={{ width: "100%", height: "450px", border: "0" }} allowFullScreen title='Galaxy vega market location' loading='lazy'></iframe>
                                </div>
                            </div>
                            <div className='col-lg-6 wow animate__animated animate__slow 3s  animate__fadeInRight'>
                                <div className='form-box'>
                                    <form action="">
                                        <div className='form_inputs'>
                                            <input type="text" name="" id="name" placeholder='Enter Name' />
                                        </div>
                                        <div className='form_inputs'>
                                            <input type="email" name="" id="name" placeholder='Enter Email' />
                                        </div>
                                        <div className='form_inputs'>
                                            <input type="number" name="" id="name" placeholder='Enter Number' />
                                        </div>
                                        <div className='form_inputs'>
                                          <textarea name="" id="" placeholder='Message' cols="30" rows="6"></textarea>
                                        </div>
                                        <div className='form_inputs'>
                                         <input type="button" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
