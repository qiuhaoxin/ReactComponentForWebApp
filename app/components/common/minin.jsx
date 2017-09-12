import React,{Component,PropTypes} from 'react'
import {Link,IndexLink} from 'react-router';
import pureRender from 'pure-render-decorator';
import {is,fromJS} from 'immutable';
import template from './template';
import Icon from '../Icon/icon.jsx';
export {template}


/**
 * public Head
 *
 *
 **/
 export class Header extends Component{
 	 static defaultProps={
 	 	  iconConfig:{
        icon:'leftArrow',
        text:'Back',
      
      },
      leftMode:2
 	 }
 	 constructor(props,context){
 	 	super(props,context);
 	 }
 	 shouldComponentUpdate(nextProps,nextState){
 	 	return !is(fromJS(this.props),fromJS(nextProps))
 	 	||!(is(fromJS(this.state),fromJS(nextState)));
 	 }
 	 render(){
 	 	let {title,titleStyle,leftWrapper,handleClick,leftMode}=this.props;
 	 	console.log("leftWrapper is "+JSON.stringify(leftWrapper));
        var type=leftWrapper.type;
        //show icon
        if(type==1){
           
        }else if(type==2){

        }
 	 	return (
 	 		<header className='hxq-header' style={titleStyle}>
               <div className='hxq-left-header hxq-icon' onClick={handleClick}>
                   <i className='hxq-header-left' data-code='f0c9' data-icon='&#xf0c9;' style={leftMode==1?{'display':'block'}:{'display':'none'}}></i>
                   <div style={leftMode==2?{'display':'block'}:{'display':'none'}}>
                     <Icon config={this.props.iconConfig}></Icon>
                   </div>
           
               </div>
               <div className='hxq-mid-header'>{title}</div>
               <div className='hxq-right-header'></div>
 	 	    </header>
 	 	)
 	 }
 }