import { RxDragHandleHorizontal } from "react-icons/rx";
import './index.css';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

const Header = () => {
  const jwtToken = Cookies.get('jwt_token')
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/')
  }

  const onClickLogin = () => {
    navigate('/login')
  }

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary bg-dark ps-3 pe-3 fixed-top' data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/app-logo-2.png" className="app-logo" alt="logo" />
        </a>
        <button className="toggle-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <RxDragHandleHorizontal className="toggle" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto fw-semibold">
            <li className="nav-item">
              <Link to="/" className="home-nav-link">
                <a className="nav-link active" aria-current="page" href="#homeSection">Home</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#servicesSection" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"/web-designing"} className="home-nav-link">
                    <a className="dropdown-item" href="#">Web Design</a>
                  </Link>
                </li>
                <li>
                  <Link to={"/seo"} className="home-nav-link">
                    <a className="dropdown-item" href="#">SEO</a>
                  </Link>
                </li>
                <li>
                  <Link to={"/social-media-marketing"} className="home-nav-link">
                    <a className="dropdown-item" href="#">Social Media Marketing</a>
                  </Link>
                </li>
                <li>
                  <Link to={"/digital-marketing"} className="home-nav-link">
                    <a className="dropdown-item" href="#">Digital Marketing</a>
                  </Link>
                </li>
                <li>
                  <Link to={"/graphic-design"} className="home-nav-link">
                    <a className="dropdown-item" href="#">Graphic Design</a>
                  </Link>
                </li>
                <li>
                  <Link to={"/content-strategy"} className="home-nav-link">
                    <a className="dropdown-item" href="#">Content Strategy</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutSection">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactSection">Contact us</a>
            </li>
            <li className="nav-item">
              <Link to={'/requests'} className="nav-link">Requests</Link>
            </li>
            <li className="nav-link">
                {!jwtToken ? 
                  <button className="login-button" onClick={onClickLogin}>Login</button> :
                <button type="button" onClick={onClickLogout} className="logout-button">Logout</button>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
