import Header from '../Header'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [key, setKey] = useState('')
    const [keyMatched, setKeyMatched] = useState('')
    const [sucStatus, setSucStatus] = useState(false)
    const [failStatus, setFailStatus] = useState(false)
    const [statusMsg, setStatusMsg] = useState('')

    const onSubmitForm = async event => {
        event.preventDefault()
        try{
            if (role === 'admin'){
                if (key==='Dsdl280824'){
                    const inputData = {email, password, role}
                    const url = "http://localhost:4002/user/signup"
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
                        setEmail("")
                        setPassword("")
                        setKey("")
                        setKeyMatched(true)
                        setSucStatus(true)
                        setStatusMsg(data.message)
                    } else {
                        setFailStatus(true)
                        setStatusMsg(data.message)
                    }
                } else {
                    setKeyMatched(false)
                }
            } else {
                const inputData = {email, password, role}
                const url = "http://localhost:4002/user/signup"
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
                    setKey('')
                    setSucStatus(true)
                    setStatusMsg(data.message)
                } else {
                    setFailStatus(true)
                    setStatusMsg(data.message)
                }
            }
            
        } catch (err) {
            console.log('Error: ', err)
        }
    }
    return(
        <div className='signup-bg'>
            <Header />
            <div className='signup-cont'>
                <div className='signup-card'>
                    <form onSubmit={onSubmitForm} className='form-cont'>
                        <h1 className='l-head'>SIGN UP</h1>
                        <div className='role-row'>
                            <p className='label-ele1'>Register As</p>
                            <input id='user' type='radio' className='radio' checked={role==="user"} value="user" onChange={(e)=>setRole(e.target.value)}/>
                            <label htmlFor='user' className='label-ele1'>user</label>
                            <input id='admin' type='radio' className='radio' checked={role==="admin"} value="admin" onChange={(e)=>setRole(e.target.value)} />
                            <label htmlFor='admin' className='label-ele1'>admin</label>
                        </div>
                        {role==='admin' && <input type='password' placeholder='secret key*' className='s-box' value={key} onChange={(e)=>setKey(e.target.value)} />}
                        {(keyMatched===false && role==='admin')&& <p className='err'>Key doesn't matched, enter valid key</p>}
                        <label htmlFor='email' className='label-ele1'>Email</label>
                        <br/>
                        <input id='email' type='text' className='s-box' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <br />
                        <label htmlFor='password' className='label-ele1'>Password</label>
                        <br/>
                        <input id='password' type='password' className='s-box' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <br />
                        {sucStatus && <p className='suc'>{statusMsg}</p>}
                        {failStatus && <p className='err'>{statusMsg}</p>}
                        <div className='btn-row'>
                            <button type='submit' className='signup-btn'>signup</button>
                            <Link to={'/login'} className='log'>
                                <button className='log-btn'>login</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup