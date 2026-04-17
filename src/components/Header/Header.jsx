import "../Header/header.css";
import { Link, NavLink } from "react-router-dom";
import $ from 'jquery'
import { useEffect } from "react";
import myCV from '../../assets/my_resume.pdf'

const Header = () => {
    $(document).ready(function () {
        $(".hamburger").click(function () {
            $(this).addClass("is-active");

        });

    });

    // click humburger btn

    window.addEventListener("scroll", function () {
        let header_wrap = document.querySelector('.header_wrapper');
        if (window.pageYOffset > 50) {
            header_wrap.classList.add("sticky_header");
        } else {
            header_wrap.classList.remove("sticky_header");
        }
    });

    const handleopen = () => {

        var sidebar = document.getElementById("sidebarID");
        console.log('click menu')
        sidebar.classList.add("opensidebar")
        // body.classList.add("bg-layer")
    }
    useEffect(() => {
        // opensidebar javascript

        document.addEventListener("click", (e) => {
            var sidebar = document.getElementById("sidebarID");
            var openbtn = document.getElementById('hamburger-6')
            // var linesbtn = document.getElementsByClassName('line')
            if (!sidebar.contains(e.target) && e.target !== openbtn) {
                sidebar.classList.remove("opensidebar")
                openbtn.classList.remove("is-active")
                //   linesbtn.classList.remove("is-active")

                //   body.classList.remove("bg-layer")
            }
        })
    }, [])

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


   
    return (
        <>
            <header className="header_wrapper" id="Header" >
                <div className="header-container ">
                    <div className="wrap-menu-header">
                        <div className="jyoti-name">
                            <span>{"<Azeem"}</span>
                            <span>{" Ansari/>"}</span>
                        </div>
                        <div className="header-Links">
                            <ul>
                                <li><NavLink to="/" className="HeaderLikns" onClick={handlerhome}>HOME</NavLink></li>
                                <li><NavLink to="/about" className="HeaderLikns" onClick={handleAbout}>ABOUT</NavLink></li>
                                <li><NavLink to="/skills" className="HeaderLikns" onClick={handleSkills}>SKILLS</NavLink></li>
                                <li><NavLink to="/education" className="HeaderLikns" onClick={handleEducation}>EDUCATION</NavLink></li>
                                <li><NavLink to="/projects" className="HeaderLikns" onClick={handleProject}>PROJECTS</NavLink></li>
                                <li><NavLink to="/contact" className="HeaderLikns" onClick={handleCotact}>CONTACT US</NavLink></li>
                                <li><Link to={myCV} download="MY_CV_PDF" target="_blank" rel="noreferrer" className="resume_btn">Download CV</Link></li>
                            </ul>

                        </div>
                        <div className="hamburger" id="hamburger-6" onClick={handleopen}>
                            <span className="line" ></span>
                            <span className="line" ></span>
                            <span className="line" ></span>
                        </div>
                    </div>



                </div>

            </header>
        </>
    )
}

export default Header