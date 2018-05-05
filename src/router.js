import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from "./components/styled-components"
const routes = [
    {
        path: '/home',
        component: Home,
    },

]

export default routes