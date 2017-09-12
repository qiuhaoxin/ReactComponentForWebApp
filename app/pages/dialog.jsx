import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import {Header,template} from '../components/common/minin'

class Main extends Component{
	static defaultProps={
		  header:{
            title:'主页',
            titleStyle:{
              color:'#fff',
              fontSize:'18px'
            },
            leftWrapper:{type:1}},
            btn:{
               btnCallBack:null,
               btnList:
               [
                    {btnText:'cancel',btnStyle:{},key:'cancel'},
                    {btnText:'sure',btnStyle:{},key:'sure'}
                ] 
            }
	}
	constructor(props,context){
         super(props,context);

	}
	render(){
		return (
			<div className='hxq-dialog-page'>
                 <Header title={this.props.header.title} titleStyle={this.props.header.titleStyle} 
                       leftWrapper={this.props.header.leftWrapper} handleClick={this.handleMainPage}></Header>
		    </div>
		)
	}
}
export default template({
	id:'dialog',
	component:Main,
	url:''
})