import React from 'react';
import Layout from '../pages/layout/index.jsx';
import Main from '../pages/main/index.jsx';
import NotFound from '../pages/NotFound/index.jsx';

export default [
    {
        path: '/',
        element: <Layout />,
        children: [{ index: true, element: <Main /> }],
    },
    {
        path: '/*',
        element: <NotFound />,
    },
]