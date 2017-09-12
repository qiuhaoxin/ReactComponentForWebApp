import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import './switch.less';
import baseComponent from '../base/baseComponent';

class MyComponent extends baseComponent{
	constructor(props,context){
		super(props,context);
		this.state={
			status:0      //status of switch 0:close 1:open
		}
	}
	onTouchMove(e){
        var pointer=e.nativeEvent.touches[0];
        this.endPoint.x=pointer.pageX;
        this.endPoint.y=pointer.pageY;
	}
	onTouchEnd(e){
         this.endTime=new Date() * 1;
	}
	changeStatus(e){
         this.setState({status:!this.state.status});
	}
	componentDidMount(){

	}
	componentWillMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
	}
	render(){
        var switchStyle=this.state.status==0?'hxq-sw-close':'hxq-sw-open';
		return (
           <div className={'hxq-sw-wrapper '+switchStyle}  onClick={this.changeStatus.bind(this)} onTouchStart={this.onTouchStart}
           onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>
              
           </div>
		)
	}
}
export default MyComponent;