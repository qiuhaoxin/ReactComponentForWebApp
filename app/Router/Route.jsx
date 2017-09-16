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
const Segment=(location,cb)=>{
       require.ensure([],require=>{
       	  cb(null,require('../pages/segment.jsx').default);
       },'Segment')
}
const Tabbar=(location,cb)=>{
	   require.ensure([],require=>{
	   	  cb(null,require('../pages/tabbar.jsx').default);
	   },'Tabbar')
}
const SearchBar=(location,cb)=>{
	   require.ensure([],require=>{
	   	  cb(null,require('../pages/searchbar.jsx').default);
	   },'SearchBar')
}
const RouterConfig=(
	    <Router history={history}>
	       <Route path="/" component={Roots}>
	           <IndexRoute component={index} />
	           <Route path='index' component={index}></Route>
	           <Route path='setting' getComponent={Setting}></Route>
	           <Route path='dialog' getComponent={Dialog}></Route>
	           <Route path='segment' getComponent={Segment}></Route>
	           <Route path='tabbar' getComponent={Tabbar}></Route>
	           <Route path='searchbar' getComponent={SearchBar}></Route>
	           <Redirect from='*' to='/' />
	       </Route>
	    </Router>
	)
   

export default RouterConfig;