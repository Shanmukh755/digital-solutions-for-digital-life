import Header from '../Header'
import AboutUs from '../AboutUs'
import ContactUs from '../ContactUs'
import FollowUs from '../FollowUs'
import './index.css'

const Seo = ()=>{
    return(
        <div className='web-container' id='seo'>
            <Header />
            <div className='web-card-container'>
                <h1 className='about-head'>SEO(Social Engine Optimization)</h1>
                <div className='web-content-container'>
                    <img src='/seo 1.jpg' className='service-data-img1' alt='web development' />
                    <div className='web-content'>
                        <h1 className='uni-head'>What is SEO</h1>
                        <p className='uni-des'>
                        SEO, or search engine optimization, is the process of enhancing a website's 
                        visibility and ranking on search engine results pages (SERPs) for specific 
                        keywords relevant to its content and target audience. Simply put, SEO aims 
                        to make a website more discoverable to individuals seeking related content, 
                        products, or services.
                        </p>
                    </div>
                </div>  
                <div className='web-content-container'> 
                    <img src='/seo 2.jpg' className='service-data-img1' alt='web designing' />
                    <div className='web-content1'>
                        <h1 className='uni-head'>What we do in SEO</h1>
                        <p className='uni-des'>
                        At Digital Solutions for Digital Life, we embark on a comprehensive exploration of our 
                        competitors to gain invaluable insights into their backlink profiles, keyword strategies, 
                        and online presence. Armed with this intelligence, we meticulously craft seo marketing 
                        strategies tailored to our goals and objectives. We establish measurable Key Performance 
                        Indicators (KPIs) to track our progress. Simultaneously, we conduct a thorough evaluation 
                        of our existing website content, assessing its quality, relevance, and alignment with 
                        targeted seo keywords.
                        </p>
                    </div>
                </div>
            </div>
            <div className='goals-container'>
                <h1 className='goals-heading'>SEO(Social Engine Optimization)</h1>
                <ul className='goals-list-container'>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn.icon-icons.com/icons2/1860/PNG/512/analytics_118088.png'
                        className='goal-icon' alt='analysing' />
                        </div>
                        <p className='goal-text'>Analysing Your Competotor's SEO Strategies</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://th.bing.com/th/id/R.2e9e2964dc445153868493343842e34c?rik=NL93iKHhq0I9VA&riu=http%3a%2f%2fwww.mypass.com.my%2fpic%2fmypass_web_intro_goal.png&ehk=9TR7D7DISyP9L%2bb4wQIZFX8UHJwucXhiRe1VczXOGuA%3d&risl=&pid=ImgRaw&r=0'
                        className='goal-icon' alt='goal' />
                        </div>
                        <p className='goal-text'>Set Your Goals and KPI's</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://icon-library.com/images/audit-icon/audit-icon-5.jpg'
                        className='goal-icon' alt='audit' />
                        </div>
                        <p className='goal-text'>Audit Your Site's Existing Content</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn2.iconfinder.com/data/icons/gradient-circle/36/2195-512.png'
                        className='goal-icon' alt='improve' />
                        </div>
                        <p className='goal-text'>Improve Your On-Page SEO</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://onesafesoftware.com/software/wp-content/uploads/2017/12/icon_fix.png'
                        className='goal-icon' alt='find' />
                        </div>
                        <p className='goal-text'>Find & Fix Technical SEO Issues</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn3.iconfinder.com/data/icons/business-round-set-2/128/OFFICE_WORK-512.png'
                        className='goal-icon' alt='work' />
                        </div>
                        <p className='goal-text'>Work On Your Off-Page SEO</p>
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
export default Seo