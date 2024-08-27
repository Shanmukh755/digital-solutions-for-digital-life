import { Component } from 'react'
import Header from '../Header'
import VideoComponent from '../VideoComponent'
import ScrollingText from '../ScrollingText'
import Services from '../Services'
import AboutUs from '../AboutUs'
import ContactUs from '../ContactUs'
import FollowUs from '../FollowUs'
import './index.css'

class Home extends Component {
    render() {
        return (
            <div className="bg-container" id='homeSection'>
                <Header />
                <VideoComponent />
                <ScrollingText />
                <div id='servicesSection'><Services /></div>
                <div id='aboutSection'><AboutUs /></div>
                <div id='contactSection'>
                    <ContactUs />
                    <FollowUs />
                </div>
            </div>
        )
    }
}
export default Home