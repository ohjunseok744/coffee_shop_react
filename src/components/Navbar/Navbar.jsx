import { Search } from '@mui/icons-material';
import './Navbar.css';
import { Badge } from '@mui/material';
import {ShoppingCartOutlined} from '@mui/icons-material';
const Navbar = () => {
  return(
    <div className="navbar">
      <div className="navWrapper">
        <div className="navLeft">
          <span className="navLanguage">
            KR
          </span>
          <div className="navSearchContainer">
            <input type="text" className='navInput' />
            <Search/> 
          </div>
        </div>
        <div className="navCenter">
          <h1 className='navLogo'>한국유통</h1>
        </div>
        <div className="navRight">
          <div className="navMenuItem">Profile</div>
          <div className="navMenuItem">Logout</div>
          <Badge badgeContent={1} color='secondary'>
            <ShoppingCartOutlined/>
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Navbar;