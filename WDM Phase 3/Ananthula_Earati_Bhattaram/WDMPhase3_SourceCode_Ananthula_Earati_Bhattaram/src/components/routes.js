/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import Signup from './Signup';

const baseUrl = process.env.PUBLIC_URL;

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (

    <Route basename={process.env.PUBLIC_URL} path="/signup" component={Signup} />
);