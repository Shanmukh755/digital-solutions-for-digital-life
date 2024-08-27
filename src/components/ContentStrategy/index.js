import Header from '../Header'
import AboutUs from '../AboutUs'
import ContactUs from '../ContactUs'
import FollowUs from '../FollowUs'
import './index.css'

const ContentStrategy = ()=>{
    return(
        <div className='web-container' id='contentStrategy'>
            <Header />
            <div className='web-card-container'>
                <h1 className='about-head'>Content Strategy</h1>
                <div className='web-content-container'>
                    <img src='/content writing 1.jpg' className='service-data-img1' alt='web development' />
                    <div className='web-content'>
                        <h1 className='uni-head'>What is Content Strategy</h1>
                        <p className='uni-des'>
                        A content strategy is a comprehensive approach to organizing, creating, 
                        distributing, and overseeing content across multiple platforms to achieve 
                        established business goals. It involves identifying the target audience, 
                        understanding their needs and preferences, and creating content that resonates 
                        with them.
                        </p>
                    </div>
                </div>  
                <div className='web-content-container'> 
                    <img src='/content writing 2.jpg' className='service-data-img1' alt='web designing' />
                    <div className='web-content1'>
                        <h1 className='uni-head'>What we do in Content Strategy</h1>
                        <p className='uni-des'>
                        At Digital Solutions for Digital Life, we set clear objectives for our content 
                        strategy, whether it's to boost brand awareness, increase website traffic, or 
                        generate leads. We delve into demographics, interests, and pain points of the 
                        audience to tailor content that engages and retains them. Through a meticulous 
                        content marketing audit and research process, we identify content ideas and topics 
                        that align with organizational goals and audience interests. We create Key Performance
                         Indicators (KPIs) to measure the effectiveness of our content initiatives, tracking 
                         metrics such as website traffic, engagement rates, conversion rates, and seo content
                         writing shares.
                        </p>
                    </div>
                </div>
            </div>
            <div className='goals-container'>
                <h1 className='goals-heading'>Content Strategy</h1>
                <ul className='goals-list-container'>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/8548/8548911.png'
                        className='goal-icon' alt='analysing' />
                        </div>
                        <p className='goal-text'>Define Your Object and Audience</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://www.nyc.gov/assets/nycha/images/content/pages/rrsandy-icon-3.png'
                        className='goal-icon' alt='goal' />
                        </div>
                        <p className='goal-text'>Conduct Content Audit and Research</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/9086/9086360.png'
                        className='goal-icon' alt='audit' />
                        </div>
                        <p className='goal-text'>Establish Key Performance Indicators(KPI's)</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://play-lh.googleusercontent.com/4sMTlndJjgmleqFeq_zxU4xG_tommxKjVxZDbEAmNIBOB1id7iqA8KcXJz_JiGHFY4g=w240-h480'
                        className='goal-icon' alt='improve' />
                        </div>
                        <p className='goal-text'>Develop Content Themes and Topics</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/4012/4012514.png'
                        className='goal-icon' alt='find' />
                        </div>
                        <p className='goal-text'>Create a Content Calender</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn.shopify.com/s/files/1/2161/7289/files/brainstorm-icon_480x480.png?v=1605721653'
                        className='goal-icon' alt='work' />
                        </div>
                        <p className='goal-text'>Imeplement, Measure and Iterate</p>
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
export default ContentStrategy