
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './give.css';
import React from 'react';
import { Button, ImageListItem, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import  Grid  from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import apiClient from "../../services/apiClient";
import  IconButton  from "@material-ui/core/IconButton";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { InputLabel, Select, MenuItem, ListSubheader } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
import Alert from '@material-ui/lab/Alert';
import { red } from "@material-ui/core/colors";
// import { validateGiving } from "../../../../beauty-api/models/giving";




//Styles:CSS using Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginRight: theme.spacing(5),
    height:'25rem',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '10rem',
    maxHeight:'32rem',
  },

  formInputs: {
    '& .MuiTextField-root':{
      marginRight: theme.spacing(3),
    },

    display:'flex',
  
  },

  productType: {
     
    '& .MuiFormControl-root':{
      marginRight: theme.spacing(3),
    },
    margin: theme.spacing(1),
    minWidth: 180,
    marginTop: theme.spacing(2),
    marginRight:'20px',
    // textAlign:'flex-start',
  },

  qtySection:{
    '& .MuiFormControl-root':{
      marginRight: theme.spacing(3),
    },

    '& .MuiOutlinedInput-input':{
      textAlign:'center',
    },
    maxWidth:108,
    marginLeft:3,
  },

formControl: {
     
    '& .MuiFormControl-root':{
      marginRight: theme.spacing(3),
    },
    marginTop: theme.spacing(2),
    minWidth: 108,
  
  },

submit: {
    margin: theme.spacing(3, 0, 2),
    width:'8rem',
  },

typography:{
    fontFamily: 'Arima Madurai',
   marginBottom: '10px',
},
error:{
  color:'red',
  fontSize:'15px',
  margin: 0,
  // display:'flex',

},
}));




export default function Give({ user, setUser, setDonateNumber, setDonations, setRecycleNumber, setRecycles, initialized}){

    const navigate = useNavigate(
      

    )
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState([])
    
   //Obehi: The give form data ~ input sections
    const [form, setForm] = useState([
      //prouct_pic isnt included we have default image of product_pic depending on what the product_type is
       { product_type: "", quantity: "" , is_used: "",  id: uuidv4() }
    ])

    //Obehi: useEffect function used to handle logic so if user is not logged in and/or registered , display an 
    // authenticated view message, else allow them tssso give
    useEffect(() => {
      if (user?.email) {
        navigate("/give/")
      }
      else if(!user?.email && initialized){
        navigate("/give/giveUnauthorized")
      }
    }, [user, navigate, initialized])

    // console.log(form)

   
    //Obehi: Handles Default Pic rendering dependending on the product chosen to give
    const product_pic_default = {
      "Serum":'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VydW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      "Moisturizer": 'https://images.unsplash.com/photo-1609097164673-7cfafb51b926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9pc3R1cml6ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      "Cleanser":'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xlYW5zZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      "Powder": 'https://images.unsplash.com/photo-1503236823255-94609f598e71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXllc2hhZG93fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      "Mascara":'https://images.unsplash.com/photo-1560725613-4b52e67fc67b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      "Foundation": 'https://images.unsplash.com/photo-1607602132700-068258431c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80',
      "Perfume": 'https://images.unsplash.com/photo-1622618991746-fe6004db3a47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcmZ1bWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    }

    //Obehi: Handles Input Change
    const handleChange = (index, event) => {
      const values = [...form];
      values[index][event.target.name]=event.target.value
      setForm(values);
      
    };

    //Obehi: Handles click event of the add button
    const handleAddFields = () => {
      setForm([...form, {product_type: "", quantity: "", is_used: "" , id: uuidv4() }])
    }
    
    //Obehi: Handles click event of the remove button
    const handleRemoveFields = index => {
      const values = [...form];
      values.splice(index, 1);
      setForm(values);
    }
   
    //Obehi: Handles Logic after the Submission of the form
    const handleOnSubmit = async () => {
      setIsProcessing(true)

      // Map Over Form to check if every row is correct using validateGiving
      // Check for any errors and set it to "errorResponses"
      
      // const errorResponses = await Promise.all(
      //   form.map( x => apiClient.createGiving({
      //       product_type: x.product_type,
      //       quantity: x.quantity,
      //       is_used: x.is_used,
      //       product_pic: product_pic_default[x.product_type]
      //     })
      //   )
      // )
      //  console.log("Error Responses: " , errorResponses)
      //  console.log(errorResponses.length)
    let errorsArr = []
    let errorsIndex = []
     
      const responses = await Promise.all(
          form.map( x => apiClient.createGiving({
              product_type: x.product_type,
              quantity: x.quantity,
              is_used: x.is_used,
              product_pic: product_pic_default[x.product_type]
            })
          ) 
        )
  
          console.log("Responses ", responses)
           
           responses.forEach(function(item, index){
              if(item.error !==null){
                errorsArr.push(item.error)
                errorsIndex.push(index)
              }
              else if(item.data.givings.is_used === false ){
                console.log("Here at Donations")
                setDonations(donations=>[...donations, item.data.givings])
                setDonateNumber(d=>{
                return  d + item.data.givings.quantity}) 
              }
              else if(item.data.givings.is_used === true ){
                console.log("Here at Recycles")
                setRecycles(recycles=>[...recycles, item.data.givings])
                setRecycleNumber(r=>{
                return  r + item.data.givings.quantity})
              }   
            })
            
            
            if(errorsArr.length===0){
              navigate("/give/giveSuccess")
            }else{
              console.log(errorsArr, errorsIndex)
              setErrors(errorsArr)
              // setDonations(donations=>[...donations, item.data.givings])
              setForm(oldForm=> 
                oldForm.filter((formData, index)  => 
            
                  errorsIndex.includes(index)
                )
              )
            }
        
          
          setIsProcessing(false)
        
        
      
      // navigate("/give/giveSuccess")
      // if(!errors.length){
        
      // }
        
   


      
     
        // if there are absolutely no errors in any of the responses, then make a giving
      
        //  if (errorResponses.every( (res) =>  res.error === null  )){
        
        // const responses = await Promise.all(
        //   form.map( x => apiClient.createGiving({
        //       product_type: x.product_type,
        //       quantity: x.quantity,
        //       is_used: x.is_used,
        //       product_pic: product_pic_default[x.product_type]
        //     })
        //   ),
        // )

        //There are no errors and this giving has been created
        // console.log("Created Giving", responses)

        //Sorting each data into either a donation or a recycle
        
      // }else{
      //   errorResponses.forEach(function(item, index){
      //     if(errorResponses[index].error !== null){
      //       setErrors(errorResponses[index].error)
      //       console.log(errorResponses[index].error)
      //     }
      //   })
      // }    

      
      
    
      
    //  try{

    //     const responses = await Promise.all(
    //       form.map( x => apiClient.createGiving({
    //           product_type: x.product_type,
    //           quantity: x.quantity,
    //           is_used: x.is_used,
    //           product_pic: product_pic_default[x.product_type]
    //         })
    //       )
    //     )
    //       responses.forEach(function(item, index){
    //           if(responses[index].data.givings.is_used === false ){
    //             console.log("Here at Donations")
    //             setDonations(donations=>[...donations, responses[index].data.givings])
               
    //                   setDonateNumber(d=>{
    //                 return  d + responses[index].data.givings.quantity}) 
    //           }
    //           if(responses[index].data.givings.is_used === true ){
    //             console.log("Here at Recycles")
    //             setRecycles(recycles=>[...recycles, responses[index].data.givings])
                
    //                 setRecycleNumber(r=>{
    //                 return  r + responses[index].data.givings.quantity})
            
    //           }
                
    //         })

    //   }catch(err){
    //     setErrors(err)
    //   }
      





      
      
      
      // const errorsArr =[]
      // const allData= []


      // responses.forEach(function (item, index){
      //   if(responses[index].data === null){
      //       errorsArr.push(responses[index].error) 
      //       console.log("Pushed to errors")
      //   }
      //   else if(responses[index].data !== null  ){
      //       allData.push(responses[index].data) 
      //       console.log(errors)
      //       console.log("Pushed to Alldata")
      //   }
        
      // })

      console.log(errors)
          

      // If there's errors set them if not navigate to next page
      // if(errorResponses){
      //   setErrors(errorResponses.message)
      // }else{
      //   navigate("/give/giveSuccess")
      // }
     
      setIsProcessing(false)
      
    }

    console.log(errors)
 
  const classes = useStyles();
  
    
    return(
      <div className="Give">
        <Container maxWidth="lg" style={{ backgroundColor: '#ffffff',height: '100vh' }} justify-content="center">
           
           <div className="giveTitle">
                 <h2>GIVE</h2>
           </div>
           
           <div className="giveDescription">
                <p>
                    Empty, gently used, or never opened,  Hīrā will find the mose sustainable and eco-friendly way 
                    to get rid of your unwanted products. 
                </p>
            </div>
            
            <Grid container  spacing={1} className="feedArea">
      
              <Grid item xs={5} sm={5} md={5} className={classes.image}/>


              <Grid item xs={6} sm={6} md={6} className="giveForm" component={Paper} elevation={0}>
                <div className={classes.paper}>

                    {
                        // <Alert variant="outlined" severity="warning" className={classes.typography}>
                        //     Enter 1-5 recycle/donate entries
                        //  </Alert>
                      errors.length ===0?
                      <div>
                        <Alert variant="outlined" severity="warning" className={classes.typography}>
                            Enter 1-5 recycle/donate entries
                        </Alert>
                      </div> : 
                      
                      <div>           
                             { errors.map( error => 
                                <p className={classes.error}>{error} </p>
                              )
                            } 

                       </div>
                    
                    }

                  <form noValidate>
                  
                    
                    { form.map((userInput, index) => (
                       <div key={userInput.id} className={classes.formInputs}>
                       
                          {/* Product Type Input Box */}
                          <FormControl className={classes.productType} variant="outlined">
                            <InputLabel htmlFor="demo-simple-select-outlined-label">* Product</InputLabel>
                            <Select 
                              labelId="demo-simple-select-outlined-label" 
                              label="*product"
                              value={form.product_type} 
                              name="product_type" 
                              onChange={event=> handleChange(index, event)}
                              required
                              >
                              <ListSubheader>SkinCare</ListSubheader>
                                <MenuItem value={"Serum"}>Serum</MenuItem>
                                <MenuItem value={"Moisturizer"}>Moisturizer/Sun</MenuItem>
                                <MenuItem value={"Cleanser"}>Cleanser</MenuItem>
                              <ListSubheader>MakeUp</ListSubheader>
                                <MenuItem value={"Powder"}>Powder</MenuItem>
                                <MenuItem value={"Mascara"}>Mascara</MenuItem>
                                <MenuItem value={"Foundation"}>Liquid Foundation</MenuItem>
                                <MenuItem value={"Perfume"}>Perfume</MenuItem>
                            </Select>
                          </FormControl>
      
                          {/* Quantity Input Box */}
                          <FormControl>
                          {/* <InputLabel htmlFor="demo-simple-select-outlined-label">*Quantity</InputLabel> */}
                          <TextField
                                className={classes.qtySection}
                                // id="grouped-select-outlined" 
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="quantity"
                                labelId="demo-simple-select-outlined-label"
                                // id="demo-simple-select-outlined"
                                // labelId="demo-simple-select-outlined-label" 
                                 label="* Qty"
                                type="number"
                                min="1"
                                max="100000000"
                                InputProps={{ inputProps: { min: 1, max: 100000000 } }}
                                InputLabelProps={{ shrink: true, }}
                                // id="quantity"
                                autoComplete="current-quantity"
                                value={form.quantity}
                                onChange={event=> handleChange(index, event)}
                            />
                          </FormControl>
                            
                      
                          

                         {/* Obehi: Use Condition Input Box */}
                          <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">* Used?</InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              name="is_used"
                              value={form.is_used}
                              onChange={ event=> handleChange(index, event) }
                              label="Used?"
                            >
                              {/* <MenuItem value="">
                                <em>None</em>
                              </MenuItem> */}
                              <MenuItem value={"false"}>No</MenuItem>
                              <MenuItem value={"true"}>Yes</MenuItem>
                            </Select>
                          </FormControl>
                    
                        {/* Remove Button */}
                        { (form.length !== 1 ) && 
                         
                          <IconButton onClick={ () => handleRemoveFields(index) }>
                            <RemoveIcon /> 
                          </IconButton>
                        }

                          {/* Add Button */}
                          {(form.length - 1 === index && form.length !== 5) && 
                            <IconButton onClick={ () => handleAddFields() }>
                              <AddIcon  />
                            </IconButton>
                          }
                        

                    </div>

                    ))}


                  </form>
                  
                   
                  <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={handleOnSubmit}
                        disabled={isProcessing} 
                         >
                       
                        {isProcessing ? "Loading..." : "Submit"}
                        
                  </Button>

        </div>



              </Grid>
              

            </Grid>


        </Container>
      </div>
      
    );


}

