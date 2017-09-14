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
        		selectedStyle=Object.assign({},segItem.sgmStyle,config.selectedStyle);
        	}else{
        		selectedStyle=Object.assign({},segItem.sgmStyle);
        	}
            segArr.push(
               <div className='hxq-sgm-item' id={'sgm'+i} ref={'sgm'+i} key={'segment'+i} style={selectedStyle} 
               onClick={this.changeSegment.bind(this,i)}>
                   <span className='hxq-sgm-text'>{segItem['sgmName']}</span>
               </div>
            )
        }
        var indicator="",width=config.itemList[0].sgmStyle['width'];
        var indicatorStyle={};
        width=width && (width.replace('px',''));
        indicatorStyle['left']=(width||0) * this.state.selectedIndex +"px";
        indicator=this.state.mode=='2' ? 
        (<div className='hxq-sgm-indicator' style={Object.assign({},indicatorStyle,config.indicatorStyle)}></div>):"";

		return (
            <div className='hxq-sgm-wrapper' style={config.style}>
                {indicator}
                {segArr}      
            </div>
		)
	}
}
export default MyComponent;