import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import './segment.less';

class MyComponent extends Component{
	constructor(props,context){
       super(props,context);
       this.state={
       	   mode:props.mode||'1',
       	   selectedIndex:props.selectedIndex||0
       }
	}
	componentWillMount(){

	}
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
		return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
	}
	changeSegment=(i)=>{
        this.setState((preState,props)=>({
            selectedIndex:i
        }));
	}
	render(){
		let {config}=this.props;
		var sgList=config.items||[],segArr=[],selectedStyle=null;
        for(let i=0,len=config.itemList.length;i<len;i++){
        	var segItem=config.itemList[i];
        	if(i==this.state.selectedIndex){
        		selectedStyle=config.selectedStyle;
        	}else{
        		selectedStyle={};
        	}
            segArr.push(
               <div className='hxq-sgm-item' id={'sgm'+i} ref={'sgm'+i} key={'segment'+i} style={selectedStyle} 
               onClick={this.changeSegment.bind(this,i)}>
                   {segItem['sgmName']}
               </div>
            )
        }
		return (
            <div className='hxq-sgm-wrapper' style={config.style}>
                {segArr} 
            </div>
		)
	}
}
export default MyComponent;