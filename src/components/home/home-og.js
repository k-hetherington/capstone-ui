import './home.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button"
import { Box, Typography } from "@material-ui/core"



var background = <img src="https://images.unsplash.com/photo-1598412795976-9c195182ee01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" alt="background"/>
var moisturizers= <img src="https://images.unsplash.com/photo-1575410229391-19b4da01cc94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhY2UlMjBtb2lzdHVyaXplcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="moisturizers"/>
var cleansers= <img src="https://unsplash.com/photos/X1sIr53DhzA" alt="cleansers"/>
var serums= <img src="https://images.unsplash.com/photo-1600180583258-6d9b0c7b782b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNlcnVtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="serums"/>
var powders= <img src="https://images.unsplash.com/photo-1590156424570-698d124ec7dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBvd2RlciUyMG1ha2V1cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="powders"/>
var mascaras= <img src="https://images.unsplash.com/photo-1560725613-4b52e67fc67b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="mascaras"/>
var foundation= <img src="https://images.unsplash.com/photo-1607602132700-068258431c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80" alt="foundation"/>
var perfume= <img src="https://images.unsplash.com/photo-1622618991746-fe6004db3a47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcmZ1bWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="perfume"/>

export default function home(){
    return(
        
        <div className="page1">
            <div className="welcomePage">
                <div className="title1">
                    Making Beauty Sustainable
                </div>
                <div className="sub-text">
                    Donate or Recycle Your Makeup Products, learn More About SustainabilityThe beauty industry creates 120 billion units of packaging every year. In 2015, research found that packaging accounted for 146 million tonnes of plastic every year.
                </div>

                <Button className="register-button" variant="contained" color="primary">
                    Register
                </Button>
                <div className="footer-text">
                    We accept most skincare and makeup products for donations and recycling. We priotize  the products that most people use as part of their daily routine. Whether they come in paper, plastic, or glass, we will gladly accept them. Here are some of examples of what we accept....
                </div>
                <div>
                   {background}
                </div>
            </div>
                <div> className="sub-title1" 
                    Skincare
                </div>
                <div className="skincare-images-w-text"> 
                    <div className="s-image1">
                        {moisturizers}
                        Moisterizers + Sun
                        <div className="s-image1-bio">
                            Usually comes in plastic or glass containers.
                        </div>
                    </div>
                    <div className="s-image2">
                        {cleansers}
                        Cleansers
                        <div className="s-image2-bio">
                            Usually comes in plastic or glass containers.
                        </div>
                    </div>
                    <div className="s-image3">
                        {serums}
                        Serums
                        <div className="s-image3-bio">
                            Usually comes in glass containers
                        </div>
                    </div>
                </div>
                <div className="sub-title2"> 
                    Makeup 
                </div>
                <div className="makeup-images-w-text"> 
                <div className="s-image1">
                        {powders}
                        Moisterizers + Sun
                        <div className="m-image1-bio">
                            Usually comes in plastic or glass containers.
                        </div>
                    </div>
                    <div className="s-image2">
                        {mascaras}
                        Mascaras
                        <div className="m-image2-bio">
                            Usually comes in plastic.
                        </div>
                    </div>
                    <div className="m-image3">
                        {foundation}
                        Liquid Foundations
                        <div className="m-image3-bio">
                            Usually comes in glass containers
                        </div>
                    </div>
                    <div className="m-image4">
                        {perfume}
                        Perfumes
                        <div className="m-image4-bio">
                            Usually comes in glass containers
                        </div>
                    </div>
                </div>
        </div>
       
    )
}


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
// }));

// export default function SpacingGrid() {
//   const [spacing, setSpacing] = React.useState(2);
//   const classes = useStyles();

//   const handleChange = (event) => {
//     setSpacing(Number(event.target.value));
//   };

//   return (
//     <Grid container className={classes.root} spacing={2}>
//       <Grid item xs={12}>
//         <Grid container justifyContent="center" spacing={spacing}>
//           {[0, 1, 2].map((value) => (
//             <Grid key={value} item>
//               <Paper className={classes.paper} />
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//       <Grid item xs={12}>
//         <Paper className={classes.control}>
//           <Grid container>
//             <Grid item>
//               <FormLabel>spacing</FormLabel>
//               <RadioGroup
//                 name="spacing"
//                 aria-label="spacing"
//                 value={spacing.toString()}
//                 onChange={handleChange}
//                 row
//               >
//                 {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
//                   <FormControlLabel
//                     key={value}
//                     value={value.toString()}
//                     control={<Radio />}
//                     label={value.toString()}
//                   />
//                 ))}
//               </RadioGroup>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// }