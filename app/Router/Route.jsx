import React,{Component,PropTypes} from 'react';
import {Router,Route,Redirect,IndexRoute,browserHistory,hasHistory} from 'react-router';
import index from '../components/index';


class Roots extends Component{
	render(){
		return (
           <div>{this.props.children}</div>
		)
	}
}

const history=process.env.NODE_ENV !=='production' ? browserHistory : hasHistory;

const Setting= (location,cb)=>{
      require.ensure([],require=>{
      	  cb(null,require('../pages/setting.jsx').default);
      },'Setting')
}
const Dialog=(location,cb)=>{
       require.ensure([],require=>{
       	  cb(null,require('../pages/dialog.jsx').default);
       },'Dialog')
}

const RouterConfig=(
	    <Router history={history}>
	       <Route path="/" component={Roots}>
	           <IndexRoute component={index} />
	           <Route path='index' component={index}></Route>
	           <Route path='setting' getComponent={Setting}></Route>
	           <Route path='dialog' getComponent={Dialog}></Route>
	           <Redirect from='*' to='/' />
	       </Route>
	    </Router>
	)
   

export default RouterConfig;