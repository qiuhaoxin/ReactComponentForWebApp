import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';

import './radio.less';

class MyComponent extends Component{

	constructor(props,context){
		super(props,context);
		this.state={
			selected:props.selected||props.config['radioData'][0]['type']
		}
	}
	componentDidMount(){

	}
    handleRadioChange(type){
        this.setState((preState)=>({selected:type}));
    }
	render(){
		let {config}=this.props;
		var radioArr=config.radioData;
		var type=config.type;
		var radioHtml=radioArr.map((item,idx)=>{
            var selectedClass='';
            if(item.type==this.state.selected){
            	selectedClass='selected';
            }
			return (
               <label key={'radio'+idx} className={'hxq-radio-item '+type+" "+selectedClass} 
               onClick={this.handleRadioChange.bind(this,item['type'])}>
                   <input name='radio' type='radio'/>
                   <span style={{marginLeft:'7px'}}>{item.Text}</span>
               </label>
			)
		})
		return (
			<div className='hxq-radio-wrapper'>
		        {radioHtml}
			</div>
		)
	
	}
}
export default MyComponent;