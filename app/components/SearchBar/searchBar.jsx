import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import './SearchBar.less';
import Helper from '../base/utils'

class MyComponent extends Component{
	constructor(props,context){
        super(props,context);
        this.handleFocus=this.handleFocus.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
        this.handleInput=this.handleInput.bind(this);
	}
	componentDidMount(){

	}
	handleFocus(event){
         var Form=this.refs['srb-form'],rightBtn=this.refs['rightBtn'];
         if(Form){
         	Form.classList.add('hxq-srb-active');
         }
         if(rightBtn){
         	rightBtn.style['marginRight']="0px";
         }

	}
	handleBlur(event){
       
	}
	handleClick(){

	}
	handleInput(event){
      var target=event.target,form=this.refs['srb-form'];
      console.log("test for helper is "+Helper.hasClass(form,'hxq-srb-noempty'));
      // if(target.value.length>0){
      // 	var classArr=this.refs['srb-form'].classList;
      // 	if(classArr.indexOf('hxq-srb-noempty')==-1){
      // 		this.refs['srb-form'].classList.add('hxq-srb-noempty');
      // 	}
   
      // }
	}
	render(){
		var {config}=this.props;
		var placeHolder=config.placeHolder;
        return (
           <div data-common='searchBar' className='hxq-srb-wrapper'>
               <form id='form' className='hxq-searchbar' ref='srb-form'>
                  <div className='hxq-srb-input'>
                     <input placeholder={placeHolder} type='search' onFocus={this.handleFocus} onBlur={this.handleBlur} 
                     onInput={this.handleInput}/>
                     <a href='javascript:void(0)' className='hxq-srb-clear'></a>
                  </div>
                  <a href='javascript:void(0)' ref='rightBtn' className='hxq-srb-cancel' onClick={this.handleClick.bind(this)}>cancel</a>
               </form>
           </div>
        )
	}
	shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
	} 
}
export default MyComponent;