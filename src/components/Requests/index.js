import { Component } from 'react'
import Header from '../Header'
import EachRequest from '../EachRequest'
import Cookies from 'js-cookie'
import './index.css'

class Requests extends Component {
    state = {
        requestList: []
    }

    componentDidMount(){
        this.getRequestList()
    }

    getRequestList = async()=>{
        const response = await fetch('http://localhost:4002/requests')
        if (response.ok){
            const data = await response.json()
            const formatedData = data.map(each => ({
                id: each._id,
                name: each.name,
                email: each.email,
                phone: each.phone,
                company: each.company,
                service: each.service,
                msg: each.msg
            }))
            this.setState({requestList: formatedData})
        }
    }

    deleteRequestFromDatabase = async id => {
        const url = `http://localhost:4002/requests/${id}`
        const options = {
            method: 'DELETE'
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if (response.ok){
            const { requestList } = this.state;
            const updatedData = requestList.filter(each => each.id !== id);
            this.setState({ requestList: updatedData });
        }
    }
    renderSuccess = () => {
        const {requestList} = this.state
        return(
            <div className='main-req'>
              {requestList.length>0 ? 
                <ul className='requests-list'>
                    {requestList.map(each => (
                        <EachRequest requestData={each} key={each.id} deleteRequestFromDatabase={this.deleteRequestFromDatabase}/>
                    ))}
                </ul> : 
                <div className='noreq-cont'>
                    <img src='https://cdn3.iconfinder.com/data/icons/traveling-45/24/canceled-512.png' className='noreq-img' alt='no data' />
                    <h1 className='noreq'>No Service Requests</h1>
                </div>
              }
            </div>
        )
    }
    renderFailure = () => {
        return(
            <div className='noreq-cont'>
                <img src='https://cdn-icons-png.flaticon.com/512/6418/6418218.png' className='noreq-img' alt='no data' />
                <h1 className='noreq'>You are not Authorised to access service requests</h1>
            </div>
        )
    }
    render() {
        const jwtToken = Cookies.get('jwt_token')
        const role = Cookies.get('role')
        return (
            <div className="bg-container" id='homeSection'>
                <Header />
                {jwtToken && role==='admin' ? this.renderSuccess() : this.renderFailure()}
            </div>
        )
    }
}
export default Requests