import {Link} from 'react-router-dom'
import './index.css'

const Services = ()=>{
    return(
        <div className='service-container'>
            <h1 className='about-head'>Services</h1>
            <ul className='services-list-container'>
                <Link to="/web-designing" className='nav-link'>
                    <li className='service-item-container'>
                        <img src='/web-design.png.jpeg' className='serv-img' alt='web design'/>
                        <div className='service-type'>
                            <p className='service-name'>Web Designing</p>
                        </div>
                    </li>
                </Link>
                <Link to="/seo" className='nav-link'>
                    <li className='service-item-container'>
                        <img src='/seo.png.jpeg' className='serv-img' alt='seo'/>
                        <div className='service-type'>
                            <p className='service-name'>SEO(Social Engine Optimization)</p>
                        </div>
                    </li>
                </Link>
                <Link to="/social-media-marketing" className='nav-link'>
                    <li className='service-item-container'>
                        <img src='/social-media.png.jpeg' className='serv-img' alt='social media'/>
                        <div className='service-type'>
                            <p className='service-name'>Social Media Marketing</p>
                        </div>
                    </li>
                </Link>
                <Link to="/digital-marketing" className='nav-link'>
                    <li className='service-item-container'>
                        <img src='/digi-market.png.jpeg' className='serv-img' alt='digital marketing'/>
                        <div className='service-type'>
                            <p className='service-name'>Digital Marketing</p>
                        </div>
                    </li>
                </Link>
                <Link to="/graphic-design" className='nav-link'>
                    <li className='service-item-container'>
                        <img src='/graphic-design.png.jpeg' className='serv-img' alt='graphic design'/>
                        <div className='service-type'>
                            <p className='service-name'>Graphic Design</p>
                        </div>
                    </li>
                </Link>
                <Link to="/content-strategy" className='nav-link'>
                    <li className='service-item-container'>
                        <img src='/content.png.jpeg' className='serv-img' alt='content'/>
                        <div className='service-type'>
                            <p className='service-name'>Content Strategy</p>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
export default Services