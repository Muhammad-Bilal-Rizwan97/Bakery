import React, {useState} from 'react';
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

const Admin = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [inputData, setInputData] = useState('');
    const [district, setDistrict] = useState();
    const [menu, setMenu] = useState([]);
    const [sites, setSites] = useState([]);
    const [count,setCount] = useState(0)
    const [user1,setUser1] = useState([])
    const [currentDis,setDis]= useState("")

    
   

    

    const addItem = () => {
        if(document.getElementById('item12').value === '') {
          console.log(inputData)
        }else{
          const distric =  document.getElementById('item12').value
          
        let obT = {
          distric,
          menu12:[],
          site12:[]
          }
         
      
        // setDistrict(document.getElementById('item12').value);
        const user12 = user1;
        user12.push(obT)
        setUser1(user12)
        document.getElementById('item12').value = "";
        setOpen(false)
       
        console.log(user1)
      
        }
    }

    const addMenu = () => {
        if(document.getElementById(currentDis).value === ''){
         
        }else{
         user1.map(de=>{
          if(de.distric === currentDis){
            de.menu12.push(document.getElementById(currentDis).value)
            handleClose1()

          }
          else{
            console.log(currentDis)
          }
          
         })
         console.log(user1)
        }
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


    const users = [
        {
          districts: 'Karachi South', menu: [{menus: 'Kabab'}, {menus: 'Paratha'}], sites: [
            { hm: 'School A'},
            { hm: 'School B'},
            { hm: 'School C'},
            { hm: 'School D'},
          ]
        },
        {
            districts: 'Karachi North', menu: [{menus: 'Kabab'}, {menus: 'Paratha'}], sites: [
              { hm: 'School A'},
              { hm: 'School B'},
              { hm: 'School C'},
              { hm: 'School D'},
            ]
          },
        {
            districts: 'Karachi East', menu: [{menus: 'Kabab'}, {menus: 'Paratha'}], sites: [
              { hm: 'School A'},
              { hm: 'School B'},
              { hm: 'School C'},
              { hm: 'School D'},
            ]
          }
      ]
      function SimpleDialogMenu(props) {
        
        const {district12} = props
        setDis(district12)
        return (
          <Dialog fullWidth="true" onClose={handleClose1} aria-labelledby="form-dialog-title" open={open1}>
            <DialogTitle>Add Menu</DialogTitle>
          <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id={district12}
            label="Add Menu.."
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addMenu} style={{width: "70px"}} color="primary">
            Add
          </Button>
          <Button onClick={handleClose1} style={{width: "70px"}} color="primary">
            Cancel
          </Button>
        </DialogActions>
            
          </Dialog>
        );
      }

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
        // <div style={{marginTop: "20px", marginLeft: "20px", textAlign: "left"}}>
        //     <Button variant="contained" color="primary">
        //     Add School District
        //     </Button>
        // </div>
        <div className="App">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h1>Bonami Bakery</h1>
                </Grid>
                <Grid item xs={6} style={{textAlign: "right", marginTop: "10px"}}>
                    <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        Add School District
                    </Button>
                    <SimpleDialog open={open} onClose={handleClose} />
                </Grid>
            </Grid>
            
      
      <Table style={{textAlign: "center"}}>
        <tbody>
          <tr style={{textAlign: "center"}}>
          <td>S.N</td>
            <td>School Districts</td>
            <td>Menu</td>
            <td>School Sites</td>
          </tr>
          
          {
            
            user1.map((dis,index)=>{
              return(
                <tr>

             
                <td><ol>asc211324</ol></td>
             <td>{dis.distric}</td>
           <td>
           <div style={{textAlign: "center"}}>
             <i className="fa fa-plus fa-black" onClick={handleClickOpen1}></i>
             <SimpleDialogMenu open={open1} district12={dis.distric} onClose={handleClose1} />
             </div>
               <Table >
         <tbody>
               {
                 
                 <tr>
                  {dis.menu12.map((user)=>{
                     return(<tr>
                     {user}
                     
                     </tr>)
                   })}
                 </tr>
                 
               }
               </tbody>
               </Table>
             </td>
             <td>
                 <div style={{textAlign: "center"}}>
             <i className="fa fa-plus fa-black"></i>
             </div>
               {/*  */}
               <Table >
         <tbody>
               {
             
  
                 <tr>
                   <td>{}</td>
                 </tr>
                 
               }
               </tbody>
               </Table>
               {/*  */}
             </td>
           </tr>
              )
            })
             
            
         

        }
        </tbody>
      </Table>

    </div>
    )
}

export default Admin;