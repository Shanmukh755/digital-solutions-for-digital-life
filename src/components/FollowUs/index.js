import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import './index.css'

const FollowUs = () => {
    return (
        <>
            <div className='bg-light follow-container'>
                <div className='icons-container'>
                    <div className="each-icon">
                        <FaLinkedin className="i-icon" />
                        <p className="icon-name">Linkedin</p>
                    </div>
                    <div className="each-icon">
                        <GrInstagram className="i-icon" />
                        <p className="icon-name">Instagram</p>
                    </div>
                    <div className="each-icon">
                        <FaFacebookSquare className="i-icon" />
                        <p className="icon-name">Facebook</p>
                    </div>
                </div>
                <div className="social-media-container">
                    <a href="https://www.instagram.com/digitalsolutionfordigitallife/" target="https://www.instagram.com/digitalsolutionfordigitallife/">
                        <img src="/instagram.png" className="social-icon" alt="instagram" />
                    </a>
                    <a href="https://www.facebook.com/digitalsolutionsfordigitallife" target="https://www.facebook.com/digitalsolutionsfordigitallife" >
                        <img src="/facebook.png" className="social-icon" alt="facebook" />
                    </a>
                    <a href="https://www.linkedin.com/company/digital-solutions-for-digital-life/" target="https://www.linkedin.com/company/digital-solutions-for-digital-life/" >
                        <img src="/linkedin.png" className="social-icon" alt="linkedin" />
                    </a>
                    <a href="https://x.com/DSDL8328" target="https://x.com/DSDL8328" >
                        <img src="/twitter.png" className="social-icon" alt="twitter" />
                    </a>
                    <a href="https://wa.me/919121518328" target="https://wa.me/919121518328" >
                        <img src="/social.png" className="social-icon" alt="whatsapp" />
                    </a>
                </div>
                <div className="address-container">
                    <div className="address-left">
                        <img src="/app-logo.png" className="address-logo" alt="app" />
                        <p className="address-text">
                            Digital Solution for Digital life is a digital marketing company,
                            web designing, web development, Digital Marketing, Graphic Designing,
                            SEO and etc., We offer services to boost your business online presence
                            using advanced technologies.
                        </p>
                    </div>
                    <div className="address-right">
                        <h1 className="ad-head">Address:</h1>
                        <p className="ad-des">
                            Plot no 63, D No s/2, phase - 2,<br />
                            simhadri appannababu arcade near <br />
                            krishna temple,sri sai lalitha nagar, <br />
                            kukalametta lakshmipuram, Vizianagaram, <br />
                            Andhra Pradesh-535003
                        </p>
                        <h1 className="ad-head">Email:</h1>
                        <p className="ad-des">Info@digitalsolutionsfordigitallife.com</p>
                        <h1 className="ad-head">Contact No:<span className="ad-des"> 9121518328</span></h1>
                    </div>
                </div>
            </div>
            <div className='end-card'>
                <p className='end-head'>@Digital Solutions For Digital Life</p>
            </div>
        </>
    )
}
export default FollowUs