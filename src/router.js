import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home1 from "./components/home"
const routes = [
    { path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
    },
    { path: '/bubblegum',
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    { path: '/shoelaces',
        sidebar: () => <div>shoelaces8!</div>,
        main: () => <h2>Shoelaces</h2>
    },
    { path: './home2',
        sidebar: () => <div>shoe1lace</div>,
        component: () => <Home1/>
    }
]

export default routes