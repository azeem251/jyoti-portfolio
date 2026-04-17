import profileImg from "../../assets/my-pick.jpg"
import './sidebar.css'
import { Link, NavLink } from "react-router-dom"
import myCV from '../../assets/my_resume.pdf'
import $ from 'jquery'
const Sidebar = () => {
    // for home
 const handlerhome = () => {
    const elemhome = document.getElementById('hero_section');
    if (elemhome) {
        // 👇 Will scroll smoothly to the top of the next section
        elemhome.scrollIntoView({ behavior: 'smooth' });
    }
};
//form about
const handleAbout = () => {
    const element = document.getElementById('about_section');
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });

    }
};
 //form skills
 const handleSkills = () => {
    const element = document.getElementById('skills_section');
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });

    }
};
 //form education
 const handleEducation = () => {
    const element = document.getElementById('education_section');
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });

    }
};
//form project
const handleProject = () => {
const element = document.getElementById('project_section');
if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });

}
};

//form project
const handleCotact = () => {
const element = document.getElementById('contact_section');
if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });

}
};
    $(document).ready(function () {
        var sidebar = document.getElementById("sidebarID");
        var openbtn = document.getElementById('hamburger-6')
        $('.menubar_box ul li a').click(function () {
            sidebar.classList.remove("opensidebar")
            openbtn.classList.remove("is-active")
        })
    });
    return (
        <>
            <aside className="sidebar__wrapper" id="sidebarID">
                <div id="closebtn"></div>
                <div className="sidebar-container">
                    <div className="top-img">
                        <figure>
                            <img src={profileImg} alt="profile-img" className="img-fluid" />
                        </figure>
                        <p>Er.AZEEM</p>
                        <div className="social-links">
                            <ul>
                                <li><Link to=""><span className="fa-brands fa-facebook facebook"></span></Link></li>
                                <li><Link to="https://www.instagram.com/abdl_azeem__379"><span className="fa-brands fa-instagram intagram"></span></Link></li>
                                <li><Link to="https://wa.me/8791328156"><span className="fa-brands fa-whatsapp whatsapp"></span></Link></li>
                                <li><Link to="https://www.linkedin.com/public-profile/settings"><span className="fa-brands fa-linkedin linkedin"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="menubar_box">
                        <ul>
                            <li><span className="fa-solid fa-house"></span><NavLink to='/' onClick={handlerhome}>HOME</NavLink></li>
                            <li><span className="fa-solid fa-user"></span><NavLink to='/about' onClick={handleAbout}>ABOUT</NavLink></li>
                            <li><span className="fa-solid fa-code"></span><NavLink to='/skills' onClick={handleSkills}>SKILLS</NavLink></li>
                            <li><span className="fa-solid fa-graduation-cap"></span><NavLink to='/education' onClick={handleEducation}>EDUCATION</NavLink></li>
                            <li><span className="fa-solid fa-box"></span><NavLink to='/projects' onClick={handleProject}>PROJECTS</NavLink></li>
                            <li><span className="fa-solid fa-envelope"></span><NavLink to='/contact' onClick={handleCotact}>COTNACT ME</NavLink></li>
                            <strong className="cv-li"><Link to={myCV} download="MY_CV_PDF" target="_blank" rel="noreferrer" className="cv_download">Download CV</Link></strong>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar