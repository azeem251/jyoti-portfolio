import "./footer.css"
import { Link } from "react-router-dom"
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <footer className="fooer__Wrapper ">
        <div className="container">
            <div className="flex_ro_footer">
                <p className="wow animate__animated animate__slow 3s  animate__fadeInLeft">copyright all rights reserved {year}.</p>
                <div className="fooer_links wow animate__animated animate__slow 3s  animate__fadeInUp">
                    <ul>
                        <li><Link><i className="fa-brands fa-facebook"></i></Link></li>
                        <li><Link to="https://wa.me/8791328156"><i className="fa-brands fa-whatsapp"></i></Link></li>
                        <li><Link to="https://www.instagram.com/abdl_azeem__379"><i className="fa-brands fa-instagram"></i></Link></li>
                        <li><Link to="https://www.linkedin.com/public-profile/settings"><i className="fa-brands fa-linkedin"></i></Link></li>
                    </ul>
                </div>
                <p className="wow animate__animated animate__slow 3s  animate__fadeInRight">Develop By <strong>Azeem</strong></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer