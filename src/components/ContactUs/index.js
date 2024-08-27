import { useState } from 'react'
//import {v4 as uuidv4} from 'uuid'
import './index.css'
//import { json } from 'react-router-dom'

const ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [service, setService] = useState('')
    const [msg, setMsg] = useState('')
    //const [userData, setUserData] = useState([])
    const [response, setResponse] = useState('')
    const [isEnterAllDetails, setIsEnterAllDetails] = useState(false)
    const onChangeName = event => {
        setName(event.target.value)
    }
    const onChangeEmail = event => {
        setEmail(event.target.value)
    }
    const onChangePhone = event => {
        setPhone(event.target.value)
    }
    const onChangeCompany = event => {
        setCompany(event.target.value)
    }
    const onChangeService = event => {
        setService(event.target.value)
    }
    const onChangeMsg = event => {
        setMsg(event.target.value)
    }
    const onSubmitForm = async event => {
        event.preventDefault()
        const requsetData = {name, email, phone, company, service, msg}
        const url = "http://localhost:4002/requests"
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(requsetData)
        }
        const response = await fetch(url, options)
        const data = await response.json()

        if (response.ok){
            setResponse(data.message)
            setIsEnterAllDetails(true)
            setCompany('')
            setEmail('')
            setMsg('')
            setName('')
            setPhone('')
            setService('')
        } else{
            setResponse(data.message)
            setIsEnterAllDetails(false)
        }
    }
    //console.log(userData)
    return (
        <div className='contact-container'>
            <h1 className='about-head'>Contact us</h1>
            <div className='contact-card-container'>
                <p className='contact-data'>
                    Welcome to our contact page! At Digital Solutions For Digital Life, we value
                    communication and are here to assist you every step of the way. Whether you
                    have questions, feedback, or inquiries about our services, our dedicated team
                    is ready to provide personalized assistance and expert guidance. Feel free to
                    reach out to us using the contact form below, and we'll get back to you promptly.
                    We look forward to hearing from you and discussing how we can best meet your needs.
                </p>
                <form onSubmit={onSubmitForm} className='form-container shadow-sm'>
                    <img src='/app-logo-2.png' className='app-logo-mini' alt='app'/>
                    <div className='box-cont'>
                        <input type='text' placeholder='Name' className='box1' value={name} onChange={onChangeName}/>
                        <input type='text' placeholder='Email' className='box2' value={email} onChange={onChangeEmail} />
                    </div>
                    <div className='box-cont'>
                        <input type='number' placeholder='Phone' className='box1' value={phone} onChange={onChangePhone} />
                        <input type='text' placeholder='Company Name' className='box2' value={company} onChange={onChangeCompany} />
                    </div>
                    <select name="services" id="services" required className='w-100 box1' value={service} onChange={onChangeService}>
                        <option value="" disabled hidden>Select Service</option>
                        <option value="web design">Web Design</option>
                        <option value="seo">SEO</option>
                        <option value="social media">Social Media Marketing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Graphic design">Graphic Design</option>
                        <option value="Content strategy">Content Strategy</option>
                    </select>
                    <br />
                    <textarea placeholder='Message' rows={3} className='w-100' value={msg} onChange={onChangeMsg} />
                    <br />
                    {isEnterAllDetails ? <p className='pp'>{response}</p> : <p className='pp1'>{response}</p>}
                    <button type='submit' className='btn talk-btn btn-success w-100'>Let's Talk</button>
                </form>
            </div>
        </div>
    )
}
export default ContactUs