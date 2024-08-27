import Header from '../Header'
import AboutUs from '../AboutUs'
import ContactUs from '../ContactUs'
import FollowUs from '../FollowUs'
import './index.css'

const DigitalMarketing = ()=>{
    return(
        <div className='web-container' id='digitalMarketing'>
            <Header />
            <div className='web-card-container'>
                <h1 className='about-head'>Digital Marketing</h1>
                <div className='web-content-container'>
                    <img src='/digital marketing 1.jpg' className='service-data-img1' alt='web development' />
                    <div className='web-content'>
                        <h1 className='uni-head'>What is Digital Marketing</h1>
                        <p className='uni-des'>
                        Digital marketing encompasses all marketing initiatives that use electronic 
                        devices and the internet to advertise products or services. It utilizes various 
                        digital platforms, channels, and technologies to connect and engage with target 
                        consumers on a personal level. Unlike traditional marketing, digital marketing 
                        operates online, enabling real-time campaign tracking, analysis, and optimization.
                        </p>
                    </div>
                </div>  
                <div className='web-content-container'> 
                    <img src='/digital marketing 2.jpg' className='service-data-img1' alt='web designing' />
                    <div className='web-content1'>
                        <h1 className='uni-head'>What we do in Digital Marketing</h1>
                        <p className='uni-des'>
                        Digital marketing provides businesses with a powerful toolbox to connect with 
                        their target market in today's digital landscape. Through strategies such as 
                        search engine optimization (SEO), pay-per-click (PPC) advertising, social media 
                        marketing agency, email marketing, and content marketing, we ensure accurate 
                        targeting, tangible results, and ongoing optimization.
                        </p>
                    </div>
                </div>
            </div>
            <div className='goals-container'>
                <h1 className='goals-heading'>Digital Marketing</h1>
                <ul className='goals-list-container'>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1803/1803210.png'
                        className='goal-icon' alt='goal' />
                        </div>
                        <p className='goal-text'>Researching</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn.icon-icons.com/icons2/1860/PNG/512/analytics_118088.png'
                        className='goal-icon' alt='analysing' />
                        </div>
                        <p className='goal-text'>InterNet Business Analysis</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://www.nyc.gov/assets/nycha/images/content/pages/rrsandy-icon-3.png'
                        className='goal-icon' alt='audit' />
                        </div>
                        <p className='goal-text'>Build</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/9090/9090986.png'
                        className='goal-icon' alt='improve' />
                        </div>
                        <p className='goal-text'>Implement</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1870/1870096.png'
                        className='goal-icon' alt='find' />
                        </div>
                        <p className='goal-text'>Measure</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/3427/3427967.png'
                        className='goal-icon' alt='work' />
                        </div>
                        <p className='goal-text'>Manage Result</p>
                    </li>
                </ul>
            </div>
            <div id='aboutSection'><AboutUs /></div>
            <div id='contactSection'>
                <ContactUs />
                <FollowUs />
            </div>
        </div>
    )
}
export default DigitalMarketing