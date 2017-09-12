import React,{Component,PropTypes}  from 'react';
import ReactDOM,{render} from 'react-dom';
import {Provider} from 'react-redux'
import route from './Router/Route';
import store from './Redux/Store/store';


import './Config/config.js'

import './less/main.less'

store.subscribe(()=>{

})

render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.getElementById('root')
)
