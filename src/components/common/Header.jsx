import { Menu } from "@mui/icons-material"
import React from 'react';
import { Link } from 'react-router-dom';
import { navlink } from "../data/dummydata"
import { navlink } from "../data/dummydata"


function Header() {
  const [responsive, setResponsive] = useState(false)
 function handleResponsive(){
 setResponsive(!responsive)
 };

  return (
    <>
    <header>
    <div className="container flexsd">
      <div className="logo">
        <img src={logo} alt=''/>
      </div>
    <div className="nav">   {navlink.map((links, i) => (
              <Link to={links.url} key={i} >
                {links.text}
              </Link>
            ))}
       </div>
       <button className="toggle" onClick={handleResponsive}>
       {responsive ? "hideMenu" : "nav"}

       <Menu className='icon' />

       </button>
    </div>
   
    </header>
    </>
  );
}

export default Header;
