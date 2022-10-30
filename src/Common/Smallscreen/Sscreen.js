import {Menu,  MenuItem, Button} from '@material-ui/core';
 
import React, { useState } from 'react'

const Sscreen = () => {

  const [anchor, setAnchor]=useState(null);

   const openMenu=(event) =>{
     setAnchor(event.currentTarget);
  }
  const closeMenu=()=>{
    setAnchor(null);
  }

return (
  <div style={{marginTop:130, marginLeft:140}}>
   <Button onClick={openMenu}>P </Button><br></br> <br></br> <br></br> <br></br>  
      <Menu open={Boolean(anchor)} 
      keepMounted anchorEl={anchor} 
      onClose={closeMenu} style={{marginTop:50, marginLeft:0}}
      PaperProps={{
        style: {
          maxHeight: 40* 4,
          width: '20ch'
        }
      }}>
         <MenuItem>First</MenuItem>
         <MenuItem>Second</MenuItem>
         <MenuItem>Third</MenuItem>
         <MenuItem>Fourth</MenuItem>
      </Menu>
  </div>   
      );
  };
  
  export default Sscreen;