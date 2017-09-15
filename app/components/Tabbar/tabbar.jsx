import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import './tabbar.less';
import Image from '../Image/image.jsx';
import Icon from '../Icon/icon.jsx'

class MyComponent extends Component{
	constructor(props,context){
		super(props,context);
		this.state={
			selectedKey:props.config.selectedKey
		}
	}
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
	}
	changeTabbar(key){
        this.setState({selectedKey:key});
	}
	render(){
		let {config}=this.props,_this=this;
		var tabbarList=config.tabbarList;
		var tabbarArr=[];
		var tabbarStyle={};
		tabbarStyle['width']=(100 / tabbarList.length) + '%';
        tabbarList.forEach(function(item,index,array){
        	var tempDom=null,imgSrc='',selectedTextStyle={};;
        	if(item.key==_this.state.selectedKey){
                imgSrc=item['clickSource'];
                selectedTextStyle['color']='#56abe4';
        	}else{
        		imgSrc=item['Source'];
        		selectedTextStyle['color']='#888';
        	}
            tabbarArr.push(
            	<div data-common='tabbar-item' key={'tabbar-item'+index} className='hxq-tb-item displayflex ' style={tabbarStyle}
            	onClick={_this.changeTabbar.bind(_this,item.key)}>
                     {item.Type=='img'?

                     (<div>
                     <Image imgSrc={imgSrc} imgStyle={{width:'30px',height:'30px'}}></Image>
                      <div className={'hxq-tabbar-text'} style={selectedTextStyle}>{item.Name}</div>
                      </div>
                     ):
                     (<span>icon</span>)}
            	</div>
            )
        })
		return (
           <div data-common='tabbar' className='hxq-tb-wrapper displayflex ' style={config.style}>
                {tabbarArr}
           </div>
		)
	}
}
export default MyComponent;