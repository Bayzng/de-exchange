
import './Navbar.css'
import imgLogo from '../../assets/DLT-Africa.png';

import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={goHome}>
          <img src="/src/assets/DLT-Africa.png" />
        </div>

        <div className='navText'>

          <Link style={{textDecoration: 'none'}} to="swap">
            <p>Swap</p>
          </Link>


        <button>Connect Wallet</button>
      </nav>
    </header>

  );
};

export default Navbar;
