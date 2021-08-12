import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link as RLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import apiClient from "../../services/apiClient"
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../Contexts/auth';
import "../Login/Login.css"

function Copyright() {
  return (
    <div variant="body2" color="textSecondary" align="center" className="text">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      Hīrā
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  blue:{
    fontFamily : 'Arima Madurai, cursive ',
    textAlign: 'center',
    marginLeft: 0,
    color: '#3f51b5',
    // marginRight: '65px',
},
}));

//prop; data passed between components. 
// open closed bracket inside settings call to reference a prop

export default function Settings() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const {user, setUser} = useAuthContext()
  const [userSettings, setUserSettings] = useState({ first_name: "", last_name: "", email: "", zip_code:""})
  // const [userSettings, setUserSettings] = useState({}); 
  const navigate = useNavigate();
  
  console.log(userSettings)
  
  const handleOnChange = e =>{
    setUserSettings((f) => ({ ...f, [e.target.name]: e.target.value }))
   
    // const newData = {
    //   ...userSettings,
    //   [e.target.name]: e.target.value
    // }
    // setUserSettings(newData);
  }

  useEffect(()=>{
    setUserSettings(user)
  }, [user])
  
  const handleOnSubmit = async (e) => {
    
    setIsProcessing(true)
    setErrors((e) => ({ ...e, userSettings: null }))

    const { data, error } = await apiClient.updateUser({

      zip_code: userSettings.zip_code,
      first_name: userSettings.first_name,
      last_name: userSettings.last_name,
      email: userSettings.email,
    })
    if (error) setErrors((e) => ({ ...e, setUserSettings: error }))

    if(data){
      setUser(data.user)
     
      setIsProcessing(false)
    }
    
    setIsProcessing(false)
      
    
    
    
    
  }
 

  // const [password, setPassword] = useState({})

  

  // const updatePassword = (event) => {
  //   setPassword({
  //     ...password,
  //     [event.target.name]: event.target.value
  //   })
  // }

//   const [hide, show] = useState(true)
//   const showPasswordBox = () =>{
//     show(hide ? false : true)
// }


  
  const classes= useStyles();
  
  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: '#ffffff',height: '100vh' }} >
      <CssBaseline />
      <div className={classes.paper}>
        
        {
        isProcessing?
          <div> 
            <p>Saved!</p>
          </div> :
          
          <h1 className="text">
          Update User Info
        </h1>

        
        }
        
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label={<span className="text">First Name</span> }
                autoFocus
                value={userSettings.first_name}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label={<span className="text">Last Name</span> }
                name="last_name"
                value={userSettings.last_name}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label={<span className="text">Email</span> }
                name="email"
                value={userSettings.email}
                onChange={handleOnChange}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="age"
                name="age"
                variant="outlined"
                required
                fullWidth
                id="age"
                label={<span className="text">Age</span> }
                value={userSettings.age}
                onChange={handleOnChange}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="zipCode"
                label={<span className="text">Zip Code</span> }
                name="zip_code"
                autoComplete="zip"
                value={userSettings.zip_code}
                onChange={handleOnChange}
              />
            </Grid>
            </Grid>
          <Button
            type="submit"
            fullWidth
            color="primary"
            variant="contained"
            className={classes.submit}
            onClick={handleOnSubmit}
          >
            <div component="h1" variant="button" className="text">
            Save Updates
            </div>
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <RLink to="/profile" variant="body" >
                  <div className={classes.blue}>
                    Go to your profile
                  </div>
              </RLink>
            </Grid>
          </Grid>
        </form>
      </div>
      
      {/* Update PassWord Section */}
      {/* <Box> */}
        {/* <div className={classes.paper}>
        <h1 className="text">
          Update Password
        </h1>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="current password"
                variant="outlined"
                required
                fullWidth
                id="currPass"
                label={<span className="text">Current Password</span> }
                value={userSettings.email}
                onChange={handleOnChange}
              />
              <TextField
                name="New Password"
                variant="outlined"
                required
                fullWidth
                id="currPass"
                label={<span className="text">New Password</span> }
                value={userSettings.email}
                onChange={handleOnChange}
              />
            </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel onClick={showPasswordBox}
                control={<Checkbox value="showPassword" color="primary" />}
                label={<span className="text">Show Password</span> }
              />
            </Grid>
          <Button
            type="submit"
            fullWidth
            color="primary"
            variant="contained"
            className={classes.submit}
            onClick={handleOnSubmit}
          >
            <div component="h1" variant="button" className="text">
            Confirm Password
            </div>
          </Button>
        </form>
      </div>
      </Box> */}
      
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
   
    
  )
}