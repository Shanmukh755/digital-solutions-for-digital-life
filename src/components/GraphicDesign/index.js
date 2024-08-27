import Header from '../Header'
import AboutUs from '../AboutUs'
import ContactUs from '../ContactUs'
import FollowUs from '../FollowUs'
import './index.css'

const GraphicDesign = ()=>{
    return(
        <div className='web-container' id='graphicDesign'>
            <Header />
            <div className='web-card-container'>
                <h1 className='about-head'>Graphic Design</h1>
                <div className='web-content-container'>
                    <img src='/graphic design 1.jpg' className='service-data-img1' alt='web development' />
                    <div className='web-content'>
                        <h1 className='uni-head'>What is Graphic Design</h1>
                        <p className='uni-des'>
                        Graphic design is the creative discipline of visually conveying ideas, concepts, 
                        and information using elements such as fonts, images, colors, and layout techniques. 
                        Its objective is to effectively communicate with a target audience across various media, 
                        including print, digital, and multimedia platforms.
                        </p>
                    </div>
                </div>  
                <div className='web-content-container'> 
                    <img src='/graphic design 2.jpg' className='service-data-img1' alt='web designing' />
                    <div className='web-content1'>
                        <h1 className='uni-head'>What we do in Graphic Design</h1>
                        <p className='uni-des'>
                        At Digital Solutions for Digital Life, we begin the graphic design process with a creative 
                        brief that outlines project goals, target audiences, key messages, and deliverables. We 
                        embark on thorough research, exploring audience preferences, conducting competition analysis, 
                        and studying industry trends to inform our creative direction. Armed with this newfound 
                        understanding, our designers create wireframes that serve as blueprints, guiding element 
                        placement and ensuring a seamless user experience. Through a collaborative process, we 
                        incorporate fonts, photography, color schemes, and other visual components that align with 
                        communication objectives and brand identity.
                        </p>
                    </div>
                </div>
            </div>
            <div className='goals-container'>
                <h1 className='goals-heading'>Graphic Design</h1>
                <ul className='goals-list-container'>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://research.uga.edu/iga/wp-content/uploads/sites/12/2020/01/writing.png'
                        className='goal-icon' alt='analysing' />
                        </div>
                        <p className='goal-text'>Writing a Creating Breif</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1803/1803210.png'
                        className='goal-icon' alt='goal' />
                        </div>
                        <p className='goal-text'>Research</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://www.nyc.gov/assets/nycha/images/content/pages/rrsandy-icon-3.png'
                        className='goal-icon' alt='audit' />
                        </div>
                        <p className='goal-text'>Build a Wireframe</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn.shopify.com/s/files/1/2161/7289/files/brainstorm-icon_480x480.png?v=1605721653'
                        className='goal-icon' alt='improve' />
                        </div>
                        <p className='goal-text'>Create The Design</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://cdn-icons-png.flaticon.com/512/8437/8437070.png'
                        className='goal-icon' alt='find' />
                        </div>
                        <p className='goal-text'>Get Feedback</p>
                    </li>
                    <li className='goal-item-cont'>
                        <div className='goal-container'>
                        <img src='https://investsrilanka.com/wp-content/uploads/2020/04/Logistics.png'
                        className='goal-icon' alt='work' />
                        </div>
                        <p className='goal-text'>Final Delivery</p>
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
export default GraphicDesign