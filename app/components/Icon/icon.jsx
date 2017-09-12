import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import {Link,IndexLink} from 'react-router'
import './icon.less';


class MyComponent extends Component{
	constructor(props,context){
        super(props,context);
	}
	componentWillMount(){

	}
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
	}
	createMarkup(icon){
		return {__html:'<i data-icon="&#x'+icon+';"></i>'}
	}
	render(){
		let {config,selected}=this.props;
		var text=config.text||'',style=config.style||{},textStyle=config.textStyle||{},iconStyle=config.iconStyle||{},
		textPos=config.textPos||'right',icon=config.icon||'';
        var child=[];
        if(selected){
        	iconStyle.color=config.selectedColor||'green';
        	textStyle.color=config.selectedColor||'green';
        	if(config.selectedIcon){
        		icon=config.selectedIcon;
        	}
        }
        iconStyle.fontFamily='icomoon';
        if(icon!=''){
            if(icon=='leftArrow'){
               child.push(
                  <div key={'icon'+icon} className='left-arrow'></div>
               )
            }else{
                //dangerouslySetInnerHTML
                child.push(
                   <div key={'icon'+icon} style={iconStyle} dangerouslySetInnerHTML={this.createMarkup(icon)}>

                   </div>
                );
            }
        
        }
        if(text!=''){
        	child.push(
                <div key='text' style={textStyle}>
                   {text}
                </div>
        	);
        }
        var style={};
        if(textPos=='top'||textPos=='left'){
        	child=child.reverse();
        }
        if(textPos=='top'||textPos=='bottom'){
            style['flexDirection']="column";
        }else{
        	style['flexDirection']="row";
        }
		return (
           <div data-ref={'icon'} className='hxq-icon' style={style}>
                 {child}          
           </div>
		)
	}
}

export default MyComponent;
