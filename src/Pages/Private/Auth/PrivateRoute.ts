import * as React from 'react';
import {  Navigate, Route, RouteProps } from 'react-router';
import {isAuthenticated}  from '../Auth/APIs'



export type ProtectedRouteProps = {
    userAuthenticated: boolean;
    authenticationPath: string;
    element: JSX.Element;
    path: string
  };
  const userAuthenticated = isAuthenticated()
  export default function ProtectedRoute({userAuthenticated, path ,authenticationPath, element}: ProtectedRouteProps) {
    if(userAuthenticated) {
      return element;
    } else {
      window.location.href= authenticationPath;
    }
  };