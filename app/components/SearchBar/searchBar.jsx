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
        this.state={
        	autoSearch:props.autoSearch||false
        }
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
	handleClear(event){
        event.preventDefault();
        var inputDom=this.refs['form-input'],form=this.refs['srb-form'];
        if(inputDom){
        	inputDom.value="";
        }
	}
	handleCancel(event){
	   event.preventDefault();
       var target=event.target,form=this.refs['srb-form'];
       target.style['margin-right']="-53px";
       if(form){
       	 Helper.removeClass(form,'hxq-srb-active');
       }
	}
	handleInput(event){
      var target=event.target,form=this.refs['srb-form'];
      Helper.addClass(form,'hxq-srb-noempty');
	}
	render(){
		var {config}=this.props;
		var placeHolder=config.placeHolder;
        return (
           <div data-common='searchBar' className='hxq-srb-wrapper'>
               <form id='form' className='hxq-searchbar' ref='srb-form'>
                  <div className='hxq-srb-input'>
                     <input placeholder={placeHolder} ref='form-input' type='search' onFocus={this.handleFocus} onBlur={this.handleBlur} 
                     onInput={this.handleInput}/>
                     <a href='javascript:void(0)' className='hxq-srb-clear' onClick={this.handleClear.bind(this)}></a>
                  </div>
                  <a href='javascript:void(0)' ref='rightBtn' className='hxq-srb-cancel' 
                  onClick={this.handleCancel.bind(this)}>cancel</a>
               </form>
           </div>
        )
	}
	shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
	} 
}
export default MyComponent;