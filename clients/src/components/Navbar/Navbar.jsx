import { Search } from '@mui/icons-material';
import './Navbar.css';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navLeft">
          <span className="navLanguage">
            KR
          </span>
          <div className="navSearchContainer">
            <input type="text" className='navInput' />
            <Search /> 
          </div>
        </div>
        <div className="navCenter">
          <h1 className='navLogo'>
            <Link to="/" className='navLink'>한국유통</Link>
          </h1>
        </div>
        <div className="navRight">
          <div className="navMenuItem">
            <Link to="/profile" className='navLink'>Profile</Link>
          </div>
          <div className="navMenuItem">
            <Link to="/logout" className='navLink'>Logout</Link>
          </div>
          <Badge badgeContent={3} color='secondary'>
            <Link to="/cart" className='navLink'>
              <ShoppingCartOutlined />
            </Link>
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
