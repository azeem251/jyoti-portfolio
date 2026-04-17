
import './skills.css'
const Skills = () => {

  return (
    <>
      <section className="skills__wrapper pt-5 pb-5" id='skills_section'>
        <div className="container">
          <div className='text-center wow animate__animated animate__slow 3s  animate__zoomIn'>
            <h2 className='text-center mb-3'>Skills</h2>
            <div className="bar"></div>
            <p className="pt-2">Proficiency in HTML, CSS, BOOTSTRAP, REACT JS, and JavaScript: Frontend developers must have a strong foundation in these core web technologies to create responsive, visually appealing interfaces.</p>
          </div>
          <div className="skills-row">
            <div className="row g-4 justify-content-center wow animate__animated animate__slow 3s  animate__zoomInLeft">
             
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="progress-baks">
                  <div className="skill">
                    <div className="skill-name">HTML</div>
                    <div className="skill-bar">
                      <div className="skill-percentage"  per="90%" style={{maxWidth:"90%"}}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="progress-baks">
                  <div className="skill">
                    <div className="skill-name">CSS</div>
                    <div className="skill-bar">
                      <div className="skill-percentage" per="83%" style={{maxWidth:"83%"}}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="progress-baks">
                  <div className="skill">
                    <div className="skill-name">JAVASCRIPT</div>
                    <div className="skill-bar">
                      <div className="skill-percentage"  per="75%" style={{maxWidth:"75%"}}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="progress-baks">
                  <div className="skill">
                    <div className="skill-name">BOOTSTRAP</div>
                    <div className="skill-bar">
                      <div className="skill-percentage"  per="79%" style={{maxWidth:"79%"}}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="progress-baks">
                  <div className="skill">
                    <div className="skill-name">JQUERY</div>
                    <div className="skill-bar">
                      <div className="skill-percentage"  per="68%" style={{maxWidth:"68%"}}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="progress-baks">
                  <div className="skill">
                    <div className="skill-name">REACT JS</div>
                    <div className="skill-bar">
                      <div className="skill-percentage"  per="64%" style={{maxWidth:"64%"}}>
                      </div>
                    </div>
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

export default Skills