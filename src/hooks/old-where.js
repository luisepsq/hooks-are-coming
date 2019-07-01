import React, { Component } from 'react';

export default class Where extends React.Component {
state ={
    latitud: undefined,
    longitud: undefined
};

render(){
    return(
        <div>
        <h2>Latitud: {this.state.latitud}</h2>
        <h2>Longitud: {this.state.longitud}</h2>  
        </div>
        );
        
};

componentDidMount(){
    this.geoId = window.navigator.geolocation.watchPosition(position=>{
        this.setState({
            latitud: position.coords.latitude,
            longitud : position.coords.longitude
        });
    });
};

componentWillUnmount(){
    navigator.geolocation.clearWatch(this.geoId)
};
};