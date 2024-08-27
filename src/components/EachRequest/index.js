import './index.css'

const EachRequest = props => {
    const {requestData, deleteRequestFromDatabase} = props
    const {id, name, email, phone, company, service, msg} = requestData
    const deleteRequest = () => {
        deleteRequestFromDatabase(id)
    }
    return(
        <li className='request-item-cont'>
            <p className='req-data'>{name}</p>
            <p className='req-data'>{email}</p>
            <p className='req-data'>{phone}</p>
            <p className='req-data'>{company}</p>
            <p className='req-data'>{service}</p>
            <p className='req-data'>{msg}</p>
            <button type='button' className='del-btn' onClick={deleteRequest}>Delete</button>
        </li>
    )
}

export default EachRequest