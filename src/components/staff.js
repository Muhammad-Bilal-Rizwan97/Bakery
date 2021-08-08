import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from '@material-ui/core/Chip';
import Axios from "axios";
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
    MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };




function Staff() {
  const classes = useStyles();
  const theme = useTheme();
  const [menu, setMenu] = useState([]);
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [district, setDistrict] = useState("");
  const [school, setSchool] = useState("");
  const [data, setData] = useState([]);
  const [currentSite, setCSite] = useState([]);
  const [currentMenu, setCMenu] = useState([]);
  const [dis,setDis] =useState(true)  
  const [dis1,setDis1] =useState(true)  
  const [dis2,setDis2] =useState(true)  
  const [selectedDate, setSelectedDate] = useState(new Date('2021-07-18T21:11:54'));
  const [message,setMessage] = useState("")
  const [severity,setSev] = useState("")
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };




  const handleChange = async (event) => {
    setDistrict(event.target.value);
    const val1 = data.filter(e=>e.district === event.target.value);
    console.log(val1)
    if(val1.length!==0){

       
       
        if(val1[0].site.length!==0){
            setCSite(val1[0].site)
            setDis(false)

        }
        
        if(val1[0].menu.submenu.length!==0){
            
             setCMenu(val1[0].menu.submenu)
            
              setDis1(false)
        }
        if(val1[0].site.length!==0 && val1[0].menu.submenu.length!==0)
        {
            setDis2(false)
        }
        else{
            setDis(true)
            setDis1(true)
            setDis2(true)
            setCSite([])
            setCMenu([])
            setSchool("")
            setMenu([])
        }
    }

  };
  const handleChange1 = (event) => {
    setSchool(event.target.value);
    

  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };


  const handleSub = () => {
    const response = {
      district:district,
      site:school,
      deliveryDate:selectedDate,
      menu:menu

    }
    Axios.post('http://localhost:8088/api/staff/request',response).then(data=>{
      if(data.data.status==='success'){
        handleClose()
        setMessage("Mail Sent Successfully!")
        setSev("success")
        setOpen1(true)
      }
      else{
        setMessage("Something Went Wrong Please Try Again!")
        setSev("error")
        setOpen1(true)
      }
    });
  }




  const handleChange2 = (event) => {
    setMenu(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setMenu(value);
  };






  useEffect(() => {
    Axios.get("http://localhost:8088/api/admin/read").then((data1) => {
      setData(data1.data);
     
      console.log(data);
    });
  }, []);

  return (
    <div>
       <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
        <Alert onClose={handleClose1} severity={severity}>
          {message}
        </Alert>
      </Snackbar>


      <div style={{ display: "grid" }}>
        <Button
          style={{ margin: "auto" }}
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          Open form dialog
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth="true"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Selection</DialogContentText>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">district</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={district}
              onChange={handleChange}
            >
              {data.map((val, index) => {
                return <MenuItem value={val.district}>{val.district}</MenuItem>;
              })}
            </Select>
          </FormControl>



        

          <FormControl className={classes.formControl} disabled={dis}>
            <InputLabel id="demo-simple-select-label">School Site</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={school}
              onChange={(e)=>{e.preventDefault();handleChange1(e)}}
            >
              {currentSite.map((val, index) => {
                return <MenuItem value={val}>{val}</MenuItem>;
              })}
            </Select>
          </FormControl>


         




          <FormControl className={classes.formControl} disabled={dis1}>
        <InputLabel id="demo-mutiple-chip-label">Menu</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={menu}
          onChange={handleChange2}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {currentMenu.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, currentMenu, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          disabled={dis2}
        />

        </MuiPickersUtilsProvider>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={(e)=>{handleSub()}} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Staff;
