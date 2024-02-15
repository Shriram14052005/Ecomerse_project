// import logo from './logo.svg';
import './App.css';
import Cart from './component/Cart2';            
import {useContext, useEffect, useState} from 'react'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'

import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography'; 
import { blue } from '@mui/material/colors';
import { DialogContent } from '@mui/material';
import Rating from '@mui/material/Rating';

import { UserContext } from '.';
// import { useContext } from 'react';
// import Typography from '@mui/material/Typography';


function App(){

  let[arr,setArr]=useState([])
  let[ addtocartdata,setAddToCartData]=useState([])
  let[open,setOpen]=useState(false)
  let[value,setValue]=useState([])

  let data=useContext(UserContext)
  console.log(data)

  useEffect(()=>{
    

    fetch("https://dummyjson.com/products").then((res)=>res.json()).then((json)=>{
      console.log(json.products)
      setArr(json.products)
    })
  },[])
  useEffect(()=>{
    console.log(addtocartdata,"addtocart")
  },[addtocartdata])
  const addtocart=(value)=>{ 
    setAddToCartData([...addtocartdata,value])
  }


  return(
    <UserContext.Provider value={data}>
    <div>
      <button onClick={()=>setOpen(true)} style={{position:"fixed",zIndex:"1"}}> <Badge badgeContent={addtocartdata.length} color="primary">< RemoveShoppingCartIcon/></Badge></button>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", flexDirection:"row",gap:"20px"}}>
      {arr.map((value,index)=>{
        return(
          <Cart  addtocart={addtocart} value={value} title={value.title} img={value.thumbnail} brand={value.brand} price={value.price} description={value.description} />
        )
      })}
    </div>                                                             
    <Dialog onClose={()=>setOpen(false)} open={open}>
      <DialogTitle>cart list</DialogTitle>
      <DialogContent>
      <List sx={{ pt: 0 }}> 
      {addtocartdata.map((user)=>{   
        return(
          <ListItem disableGutters>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}src={user.thumbnail}>
                  <PersonIcon /> 
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.title} />
            </ListItemButton>
          </ListItem>
        )

      })}
      </List>
      </DialogContent>
      </Dialog>
    </div>
    </UserContext.Provider>
  )
}

export default App;

