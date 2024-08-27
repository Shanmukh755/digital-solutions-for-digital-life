import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onSubmitForm = async event => {
        event.preventDefault()
        const inputData = {email, password}
        const url = "http://localhost:4002/user/login"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if (response.ok){
            setEmail('')
            setPassword('')
            Cookies.set('jwt_token', data.jwtToken, {expires: 1/48})
            Cookies.set('role', data.role, {expires: 1/48})
            navigate('/requests')
        }
    }
    return(
        <div className='signup-bg'>
            <Header />
            <div className='signup-cont'>
                <div className='signup-card'>
                    <form onSubmit={onSubmitForm} className='form-cont'>
                        <h1 className='l-head'>LOGIN</h1>
                        <label htmlFor='email' className='label-ele1'>Email</label>
                        <br />
                        <input type='text' id='email' placeholder='Enter Email' className='s-box' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <br />
                        <label htmlFor='password' className='label-ele1'>Password</label>
                        <br />
                        <input type='password' id='password' placeholder='Enter Password' className='s-box' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <div className='btn-row'>
                            <button type='submit' className='login-btn'>login</button>
                            <Link to={'/signup'} className='log'>
                                <button className='sign-btn'>signup</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login