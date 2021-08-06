import './giveSuccess.css';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Box, Typography, makeStyles, Grid, Link, Container, Image, CardMedia, CardContent, FormHelperText } from "@material-ui/core"
import { render } from 'react-dom';
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({

    title: {
        fontFamily: "Arima Madurai",
        fontStyle: "normal",
        fontWeight: "normal",
        padding: 50,
        fontSize: 20,
        
    },
  
}));
export default function Confirmation({center}) {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h1" className={classes.title}>
            {`Thank you for choosing Hira! Please drop off your products at ${center} between 10am and 6pm.`}
            </Typography>
        </Box>
        
        
    );
}









