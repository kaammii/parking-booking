import React, { Component } from 'react'
import {firebaseAuth,userRef} from '../../config/constants';
import Loader from '../Loader';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';

export default class ViewLocation extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<h2>Hello from View Location</h2>
			)
	}
}