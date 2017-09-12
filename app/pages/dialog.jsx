import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import {Header,template} from '../components/common/minin';
import Button from '../components/Button/button.jsx';

class Main extends Component{
	static defaultProps={
		  header:{
            title:'主页',
            titleStyle:{
              color:'#fff',
              fontSize:'18px'
            },
            leftWrapper:{type:1}
          },
      btn:{
            btnCallBack:null,
            btnList:
            [
                {btnText:'Dialog style one',btnStyle:{'margin':'20px 20px','backgroundColor':'rgb(4,190,2)',
                color:'#fff'},key:'btn_one'},
            ] 
      },
      btn1:{
            btnCallBack:null,
            btnList:
            [
                {btnText:'Dialog style two',btnStyle:{'margin':'20px 20px','backgroundColor':'rgb(4,190,2)',
                color:'#fff'},key:'btn_two'},
            ] 
      },
	}
	constructor(props,context){
      super(props,context);
      this.state={
         showDialog:false
      }
      //this.handleBtnClick=this.handleBtnClick.bind(this);

	}
  handleBtnClick=()=>{
      this.setState((preState)=>({
        showDialog:!preState.showDialog
      }))
  }
  componentWillMount(){
      this.props.btn['btnCallBack']=this.handleBtnClick;
      this.props.btn1['btnCallBack']=this.handleBtnClick;
  }
	render(){
		return (
			<div className='hxq-dialog-page'>
                 <Header title={this.props.header.title} titleStyle={this.props.header.titleStyle} 
                       leftWrapper={this.props.header.leftWrapper} handleClick={this.handleMainPage}>
                  </Header>
                  <Button btn={this.props.btn}></Button>
                  <Button btn={this.props.btn1}></Button>
		    </div>
		)
	}
}
export default template({
	id:'dialog',
	component:Main,
	url:''
})