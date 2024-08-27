import Header from '../Header'
import AboutUs from '../AboutUs'
import ContactUs from '../ContactUs'
import FollowUs from '../FollowUs'
import './index.css'

const SocialMedia = ()=>{
    return(
        <div className='web-container' id='socialMedia'>
            <Header />
            <div className='web-card-container'>
                <h1 className='about-head'>Social Media Marketing</h1>
                <div className='web-content-container'>
                    <img src='/social media 1.jpg' className='service-data-img1' alt='web development' />
                    <div className='web-content'>
                        <h1 className='uni-head'>What is Social Media Marketing</h1>
                        <p className='uni-des'>
                        Social media platforms are online spaces where users create, share, and 
                        exchange user-generated content, ideas, and information within virtual 
                        communities and networks. These platforms facilitate connection, communication, 
                        and collaboration through various features such as text posts, images, videos, 
                        live streams, chats, comments, likes, shares, and follows.
                        </p>
                    </div>
                </div>  
                <div className='web-content-container'> 
                    <img src='/social media 2.jpg' className='service-data-img1' alt='web designing' />
                    <div className='web-content1'>
                        <h1 className='uni-head'>What we do in Social Media Marketing</h1>
                        <p className='uni-des'>
                        At Digital Solutions for Digital Life, conducting a meticulous audit of 
                        our social media channels is imperative as we aim to optimize our online
                         visibility and engagement. We meticulously assess each platform we utilize, 
                         evaluating the effectiveness of our current profiles and identifying areas 
                         for improvement.
                        </p>
                    </div>
                </div>
            </div>
            <div className='goals-container'>
                <h1 className='goals-heading'>Social Media Marketing</h1>
                <ul className='goals-list-container'>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn.icon-icons.com/icons2/1860/PNG/512/analytics_118088.png'
                        className='goal-icon' alt='analysing' />
                        </div>
                        <p className='goal-text'>Analysing Your Competotor's</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/9086/9086360.png'
                        className='goal-icon' alt='goal' />
                        </div>
                        <p className='goal-text'>Set Your KPI's</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://icon-library.com/images/audit-icon/audit-icon-5.jpg'
                        className='goal-icon' alt='audit' />
                        </div>
                        <p className='goal-text'>Audit Your Social Media Channels</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://www.zrima.in/wp-content/uploads/2020/08/FAVPNG_social-media-optimization-social-networking-service-blog-icon_0PnkNvr3.png'
                        className='goal-icon' alt='improve' />
                        </div>
                        <p className='goal-text'>Create Social Media Accounts and Improve Profiles</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/4012/4012514.png'
                        className='goal-icon' alt='find' />
                        </div>
                        <p className='goal-text'>Create Social Media Content Calender</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/8583/8583855.png'
                        className='goal-icon' alt='work' />
                        </div>
                        <p className='goal-text'>Set up workflow in Your Team</p>
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
export default SocialMedia