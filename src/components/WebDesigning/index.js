import Header from '../Header'
import AboutUs from '../AboutUs'
import ContactUs from '../ContactUs'
import FollowUs from '../FollowUs'
import './index.css'

const WebDesigning = ()=>{
    return(
        <div className='web-container' id='webDesigning'>
            <Header />
            <div className='web-card-container'>
                <h1 className='about-head'>Web Designing</h1>
                <div className='web-content-container'>
                    <img src='https://th.bing.com/th/id/OIP.EOVeADxML-yXo4mafgLYJQHaFW?w=2000&h=1444&rs=1&pid=ImgDetMain' className='service-data-img' alt='web development' />
                    <div className='web-content'>
                        <h1 className='uni-head'>What is Web Designing</h1>
                        <p className='uni-des'>
                        Web designing is the process of creating and arranging the visual elements 
                        and layout of a website. It involves designing how the website looks and 
                        how users interact with it, including the colors, fonts, images, and overall 
                        structure. The goal is to make the website attractive, easy to navigate, and 
                        user-friendly.
                        </p>
                    </div>
                </div>  
                <div className='web-content-container'> 
                    <img src='https://th.bing.com/th/id/OIP.VYjt6gMDP454lnezgf6H1wHaGc?w=4037&h=3510&rs=1&pid=ImgDetMain' className='service-data-img' alt='web designing' />
                    <div className='web-content1'>
                        <h1 className='uni-head'>What we do in Web Designing</h1>
                        <p className='uni-des'>
                            At Digital Solutions for Digital Life for web designing, we plan the layout 
                            of the website, choose appealing colors and fonts, and create wireframes and 
                            mockups to sketch the website’s look. We design graphics and images, develop 
                            an easy-to-navigate user interface (UI), and ensure the website looks good 
                            on all devices. Additionally, we add interactive elements like buttons, forms, 
                            and animations, optimize the site for quick loading, and continuously test and 
                            improve the design based on feedback.
                        </p>
                    </div>
                </div>
            </div>
            <div className='goals-container'>
                <h1 className='goals-heading'>Web Designing</h1>
                <ul className='goals-list-container'>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn.icon-icons.com/icons2/1860/PNG/512/analytics_118088.png'
                        className='goal-icon' alt='analysing' />
                        </div>
                        <p className='goal-text'>Analysing Competitors Website</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn.pixabay.com/photo/2016/06/03/15/35/customer-service-1433639_960_720.png'
                        className='goal-icon' alt='goal' />
                        </div>
                        <p className='goal-text'>Understand Customer Needs</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://icon-library.com/images/icon-web-design/icon-web-design-9.jpg'
                        className='goal-icon' alt='audit' />
                        </div>
                        <p className='goal-text'>Enhance Visual Design</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://uploads-ssl.webflow.com/5c828fe52301c335b40dd5fa/5c859bd8364587853dff4e7c_web.png'
                        className='goal-icon' alt='improve' />
                        </div>
                        <p className='goal-text'>Optimise for Mobile Devices</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/9420/9420634.png'
                        className='goal-icon' alt='find' />
                        </div>
                        <p className='goal-text'>Focus on Speed and Performance</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://www.worksheetcloud.com/wp-content/uploads/2021/08/WorksheetCloud-Report-Card.png'
                        className='goal-icon' alt='work' />
                        </div>
                        <p className='goal-text'>Testing with Real Users</p>
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
export default WebDesigning