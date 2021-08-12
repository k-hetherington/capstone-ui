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
        padding: 20,
        fontSize: 30,
        marginLeft: 300,
        marginTop: 50,
        maxWidth: "60%",
        display: "flex",
        flex: "flex-wrap",
        position: "center"
    },

    centerW: {
        fontFamily: "Arima Madurai",
        fontStyle: "normal",
        fontWeight: "bold",
        padding: 0,
        fontSize: 24,
        marginLeft: 430,
        marginBottom: 50,
        maxWidth: "50%",
        display: "flex",
        flex: "flex-wrap",
        position: "center"
    },

}));
export default function Confirmation({center}) {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h1" className={classes.title}>
                Thank you for choosing Hira! Please drop off your products at: 
            </Typography>
            <Typography  variant="h5" className={classes.centerW}>
                {center}
            </Typography>
        </Box>
    );
}









