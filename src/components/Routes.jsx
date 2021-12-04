import React from 'react';
import { Results } from './Results';
import {Switch,Route,Redirect } from 'react-router-dom';

function Routes() {
    return (
        <div className="p-4">
           <Switch>
               <Route exact path="/">
                        <Redirect to="/search" />
               </Route>
               <Route exact path={['/search','/images','/news']}>
                    <Results/>
               </Route>
           </Switch>
        </div>
    )
}

export default Routes
