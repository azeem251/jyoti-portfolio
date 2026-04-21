import './contact.css'
import { useState } from "react";
const Contact = () => {
    const [form, setForm] = useState({
  name: "",
  email: "",
  number: "",
  message: "",
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
  setForm({ ...form, [e.target.id]: e.target.value });
};

const validate = () => {
  let newErrors = {};

  if (!form.name.trim()) newErrors.name = "Name is required";
  if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    newErrors.email = "Valid email required";
  if (!form.number.match(/^[0-9]{10}$/))
    newErrors.number = "Valid 10 digit number required";
  if (!form.message.trim()) newErrors.message = "Message is required";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validate()) return;

  const text = `Hello, my name is ${form.name}.
Email: ${form.email}
Phone: ${form.number}
Message: ${form.message}`;

  const whatsappURL = `https://wa.me/917617867769?text=${encodeURIComponent(text)}`;
  window.open(whatsappURL, "_blank");
};
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
                                    <form onSubmit={handleSubmit}>
                                        <div className='form_inputs'>
                                            <input type="text" name="" id="name" placeholder='Enter Name' 
                                                  value={form.name}
                                                      onChange={handleChange}
                                                />
                                            <span style={{color:'red'}}>{errors.name}</span>
                                        </div>
                                        <div className='form_inputs'>
                                            <input type="email"  onChange={handleChange} name="" id="email"  value={form.email} placeholder='Enter Email' />
                                            <span style={{color:'red'}}>{errors.email}</span>
                                        </div>
                                        <div className='form_inputs'>
                                            <input type="number" name="" id="name" placeholder='Enter Number'value={form.number} onChange={handleChange}/>
                                            <span style={{color:'red'}}>{errors.number}</span>
                                        </div>
                                        <div className='form_inputs'>
                                          <textarea name="" id="message" placeholder='Message' value={form.message} onChange={handleChange} cols="30" rows="6"></textarea>
                                            <span style={{color:'red'}}>{errors.message}</span>
                                        </div>
                                        <div className='form_inputs'>
                                         <input type="submit" value="Submit" style={{BackroundColor:"rgb(36, 103, 103);"}} />

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
