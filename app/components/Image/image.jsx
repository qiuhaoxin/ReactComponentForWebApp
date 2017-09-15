import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import './image.less'

class MyComponent extends Component{
	constructor(props,context){
		super(props,context);

	}
	render(){
		let {imgSrc,imgStyle}=this.props;
		return(
           <div className='hxq-img'>
               <img src={imgSrc} style={imgStyle}/>
           </div>
		)
	}

}
export default MyComponent;