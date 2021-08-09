import React, {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { Table } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import '../App.css'
import Axios from 'axios' 

const Admin = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [inputData, setInputData] = useState('');
    const [district, setDistrict] = useState();
    const [menu, setMenu] = useState("");
    const [description, setDescription] = useState("");
    const [sites, setSites] = useState("");
    const [count,setCount] = useState(0)
    const [user1,setUser1] = useState([])
    const [currentDis,setDis]= useState("")
    const [currentDes,setDes]= useState("")
    const [currentMenu,setCMenu]= useState("")
    //const [currentSite,setCSite]= useState("")

    

    useEffect(()=>{

      
         Axios.get('http://localhost:8088/api/admin/read').then(data=>{
          setUser1(data.data)
          console.log(user1)
         }).catch(err=>{
           console.log(err)
         })
      
      
      
    },[open,open4])
   

    const addMenu = async() => {
      if(currentDis){
        const val1 = user1.filter(e=>e.district == currentDis);
        if(val1.length == 0 )
        {
  
        }
        else{
           let tempMenu = val1[0].menu.submenu;
           let tempDes = val1[0].menu.description;
         
              tempMenu.push(menu)
              tempDes.push(description)
              await Axios.put('http://localhost:8088/api/admin/update',{menu:{submenu:tempMenu,description:tempDes},currentDis});
              handleClose1()

            }
           
        
      }
   }
    const addSites = async() => {
      if(currentDis){
        const val1 = user1.filter(e=>e.district == currentDis);
        if(val1.length == 0 )
        {
  
        }
        else{
           let tempSite = val1[0].site;
          
         
              tempSite.push(sites)
             
              await Axios.put('http://localhost:8088/api/admin/update',{site:tempSite,currentDis});
              handleClose3()

            }
           
        
      }
   }

    const addItem = async() => {
        if(document.getElementById('item12').value === '') {
          console.log(inputData)
        }else{
          const distric =  document.getElementById('item12').value
          
        let obT = {
          district:distric,
          }
          await Axios.post('http://localhost:8088/api/admin/create',obT)
          handleClose()
        }
    }
    const deleteItem = async () => {
       
        let obT = {
          district:currentDis,
          }
          await Axios.post('http://localhost:8088/api/admin/delete',obT)
          handleClose4()
          
        }
    

   

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
      };

      const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };
      const handleClickOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };
      const handleClickOpen3 = () => {
        setOpen3(true);
      };
    
      const handleClose3 = () => {
        setOpen3(false);
      };
      const handleClickOpen4 = () => {
        setOpen4(true);
      };
    
      const handleClose4 = () => {
        setOpen4(false);
      };


   
     

      function SimpleDialog(props) {
        
        const { open } = props;
        const handleClose = (value) => {
            setOpen(false);
          };
        
      
        return (
          <Dialog fullWidth="true" onClose={handleClose} aria-labelledby="form-dialog-title" open={open}>
            <DialogTitle>Add School District</DialogTitle>
          <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="item12"
            label="Add School District.."
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addItem} style={{width: "70px"}} color="primary">
            Add
          </Button>
          <Button onClick={handleClose} style={{width: "70px"}} color="primary">
            Cancel
          </Button>
        </DialogActions>
            
          </Dialog>
        );
      }

    return (

    
        <div>
           <div>
     
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Description for {currentMenu}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {currentDes}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose2} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    <div>
     
     <Dialog
       open={open4}
       onClose={handleClose4}
       aria-labelledby="alert-dialog-title"
       aria-describedby="alert-dialog-description"
     >
       <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
       <DialogContent>
         <DialogContentText id="alert-dialog-description">
         Are you sure to delete district : {currentDis}
         </DialogContentText>
       </DialogContent>
       <DialogActions>
         
         <Button onClick={deleteItem} color="primary" autoFocus>
           Delete
         </Button>
         <Button onClick={handleClose4} color="primary">
           Cancel
         </Button>
       </DialogActions>
     </Dialog>
   </div>



      <div>
      
      <Dialog open={open1} onClose={handleClose1} aria-labelledby="form-dialog-title" fullWidth="true">
        <DialogTitle id="form-dialog-title">Add Menu and Description</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            For District 
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="menu"
            label="Menu"
            type="text"
            onChange={(e)=>{setMenu(e.target.value)}}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            onChange={(e)=>{setDescription(e.target.value)}}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addMenu} color="primary">
            Add
          </Button>
          <Button onClick={handleClose1} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    <div>
      
      <Dialog open={open3} onClose={handleClose3} aria-labelledby="form-dialog-title" fullWidth="true">
        <DialogTitle id="form-dialog-title">Add School Site </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="site"
            label="Site"
            type="text"
            onChange={(e)=>{setSites(e.target.value)}}
            fullWidth
          />
        
        </DialogContent>
        <DialogActions>
          <Button onClick={addSites} color="primary">
            Add
          </Button>
          <Button onClick={handleClose3} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>

          <div style={{width: "820px"}}>
            <Grid container spacing={3}>
                <Grid item xs={6} style={{marginTop: "10px"}}>
                    <h1 style={{marginLeft: '20px'}}>Bonami Bakery</h1>
                </Grid>
                <Grid item xs={6} style={{textAlign: "right", marginTop: "15px"}}>
                    <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        Add School District
                    </Button>
                    <SimpleDialog open={open} onClose={handleClose} />
                </Grid>
            </Grid>
            
      
      <Table style={{marginLeft:'20px'}}>
        <tbody>
          <tr style={{marginLeft:'20px'}}>
         
            <td>School Districts</td>
            <td>School Sites</td>
            <td>Menu</td>
            <td>Action</td>
          </tr>
          
          {
            
            user1.map((dis,index)=>{

              console.log(dis.district)
              return(
                <tr>
                
                  <td>{dis.district}</td>
                
             <td>
                 <div style={{display:"flex" , flexDirection: "column"}}>
             <i className="fa fa-plus fa-black" style={{paddingLeft:'40px'}}  onClick={(e)=>{
                    setDis(dis.district)
                    handleClickOpen3()
                       
             }}></i>
              {
                 
                 
                 dis.site.map((user,index)=>{
                    return(
                     
                    <tr  >
                    {user}
                    </tr>
                   
                    
                    )
                  })
                
                
              }
             </div>
            
             </td>
             <td>
                <div style={{display:"flex" , flexDirection: "column"}}>
                  <i className="fa fa-plus fa-black" style={{paddingLeft:'30px'}}  onClick={(e)=>{
                    setDis(dis.district)
                    handleClickOpen1()
                       
             }}></i>
             {
                 
                 
                 dis.menu.submenu.map((user,index)=>{
                    return(
                     
                    <tr  style={{cursor:'pointer'}} onMouseOver={(e)=>{e.target.style.color = '#ff0000'}} onMouseOut={(e)=>{e.target.style.color = '#000000'}} onClick={(e)=>{
                     setDes(dis.menu.description[index])
                     setCMenu(user)
                     handleClickOpen2()
                    }}>
                    {user}
                    </tr>
                   
                    
                    )
                  })
                
                
              }
             </div>
             </td>
             <td style={{alignSelf:'center'}}> 
             <i className="fas fa-trash"   onClick={(e)=>{
                    setDis(dis.district)
                    handleClickOpen4()
                       
             }}></i>
             </td>
           </tr>
              )
            })
             
            
         

        }
        </tbody>
      </Table>
      </div>

    </div>
    )
}

export default Admin;