import React from "react";
import {Route, Redirect} from "react-router-dom";
import auth from "./components/Backend/auth.js"

export const ProtectedRoute = ({component:Component, ...rest}) =>{
    return (
        <Route
        {...rest}
        render={props=>{
            if (auth.isAuthenticated()){
                console.log("yes")
                return <Component {...props} />}
           else{
            return( <Redirect to={{
                pathname:"/",
                state:{
                    from: props.location
                }
            }} />
            )
        }
        }}
        />
    )
}
