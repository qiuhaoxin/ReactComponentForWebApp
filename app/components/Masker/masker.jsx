import React,{Component,PropsType} from 'react';
import './masker.less'
import {is,fromJS} from 'immutable';

class MyComponent extends Component{
	constructor(props,context){
		super(props,context);
	}
	componentDidMount(){

	}
    handleClickMasker(callBack){
       callBack();
    }
	shouldComponentUpdate(nextProps,nextState){
		var flag=!is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
         return flag;
	}
	render(){
		let {maskerStatus,maskerCallBack}=this.props;
		var style={};
		if(maskerStatus){
			style['visibility']="visible";
			style['zIndex']=99;
		}else{
			style['visibility']='hidden';
			style['zIndex']=0;
		}
		return (
            <div className='hxq-masker-wrapper' style={style} onClick={this.handleClickMasker.bind(this,maskerCallBack)}>

            </div>
		)
	}
}
export default MyComponent;
