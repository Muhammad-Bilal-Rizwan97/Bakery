import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { Table } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import '../App.css'

const Admin = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [input1, setInput1] = useState('');
    const [inputData, setInputData] = useState('');
    const [district, setDistrict] = useState();
    const [menu, setMenu] = useState([]);
    const [sites, setSites] = useState([]);
    
    const user1 = {
        userDistrict: district,
        userMenu: menu,
        userSite: sites
    }

    const addItem = () => {
        if(!inputData){

        }else{
            
        setDistrict(inputData);
        user1.userDistrict = district;
        setInputData('');
        }
    }

    const addMenu = () => {
        if(!inputData){

        }else{
            
        setMenu(inputData);
        user1.userMenu = menu;
        setInputData('');
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
    
      const handleClose1 = (value) => {
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
        
        const { open1 } = props;
        const handleClose1 = (value) => {
            setOpen1(false);
          };
        
      
        return (
          <Dialog onClose={handleClose1} aria-labelledby="simple-dialog-title" open={open1}>
            <DialogTitle>Add Menu</DialogTitle>
            <List>
                <ListItem>
                <input 
                    type="text" 
                    placeholder="Add Menu.." 
                    value={inputData} 
                    onChange={(e) => setInputData(e.target.value)}
                />
                </ListItem>
                <ListItem>
                <Button variant="contained" color="primary" style={{width: "70px"}} onClick={addMenu}>Add</Button>
                </ListItem>
            </List>
            
          </Dialog>
        );
      }

      function SimpleDialog(props) {
        
        const { open } = props;
        const handleClose = (value) => {
            setOpen(false);
          };
        
      
        return (
          <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle>Add School District</DialogTitle>
            <List>
                <ListItem>
                <input 
                    type="text" 
                    placeholder="Add School District.." 
                    value={input1}
                    onChange={(e) => {e.preventDefault(); setInput1(e.target.value)}}
                />
                </ListItem>
                <ListItem>
                <Button variant="contained" color="primary" style={{width: "70px"}} onClick={addItem}>Add</Button>
                </ListItem>
            </List>
            
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
            
            <tr>
               <td>{1}</td>
            <td>{user1.userDistrict}</td>
          <td>
          <div style={{textAlign: "center"}}>
            <i className="fa fa-plus fa-black" onClick={handleClickOpen1}></i>
            <SimpleDialogMenu open={open1} onClose={handleClose1} />
            </div>
              <Table >
        <tbody>
              {
                
                <tr>
                  <td>{user1.userMenu}</td>
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
          
          }
        </tbody>
      </Table>

    </div>
    )
}

export default Admin;