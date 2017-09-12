import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import {Header,template} from '../components/common/minin';
import Button from '../components/Button/button.jsx';
import Dialog from '../components/Dialog/dialog.jsx';
import Masker from '../components/Masker/masker.jsx';

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
      dialog:{
           
            title:'弹框提示',
            content:'内容居中，告知用户当前页面信息',
            btns:{
              btnCallBack:null,
              btnList:[
                  {btnText:'确定',key:'cancel',btnStyle:{}}
              ]
            }

      },
      dialog1:{          
            title:'提示',
            content:'自定义弹框内容，居左对齐，告知用户需求确认得信息！',
            btns:{
              btnCallBack:null,
              btnStyle:{border:'borderTop'},
              btnList:[
                {btnText:'取消',key:'cancel',border:'borderRight',btnStyle:{color:'rgb(53,53,53)',height:'42px'}},
                {btnText:'确定',key:'sure',border:'',btnStyle:{color:'rgb(11,178,12)',height:'42px'}}
              ]
            }
           
      }
	}
	constructor(props,context){
      super(props,context);
      this.state={
         showDialog:false,
         curDialog:this.props.dialog
      }
	}
  handleBtnClick=(key)=>{
    //console.log("key is "+JSON.stringify(this.props.dialog));
    var dialogConfig=null; 
    switch(key){
      case 'btn_one':
         dialogConfig=this.props.dialog;
         this.setState((preState,props)=>({
           curDialog:dialogConfig,
           showDialog:!preState.showDialog
         }));
         console.log("curDialog is "+JSON.stringify(this.state.curDialog));
         break;
      case 'btn_two':
         dialogConfig=this.props.dialog1;
         this.setState((preState,props)=>({
             curDialog:dialogConfig,
             showDialog:!preState.showDialog
         }));
         console.log("curDialog is "+JSON.stringify(this.state.curDialog));
         break;
      case 'cancel':
         this.setState({showDialog:false});
         break;   
      case 'sure':
         this.setState({showDialog:false});
         break;   
    }
  }
  handleMaskerClick=()=>{
      this.setState((preState)=>({
            showDialog:!preState.showDialog
      })
      )
  }
  componentWillMount(){
      this.props.btn['btnCallBack']=this.handleBtnClick;
      this.props.btn1['btnCallBack']=this.handleBtnClick;
      this.props.dialog.btns['btnCallBack']=this.handleBtnClick;
      this.props.dialog1.btns['btnCallBack']=this.handleBtnClick;
  }
	render(){
		return (
			<div className='hxq-dialog-page'>
                 <Header title={this.props.header.title} titleStyle={this.props.header.titleStyle} 
                       leftWrapper={this.props.header.leftWrapper} handleClick={this.handleMainPage}>
                  </Header>
                  <Button btn={this.props.btn}></Button>
                  <Button btn={this.props.btn1}></Button>
                  <Masker maskerStatus={this.state.showDialog} maskerCallBack={this.handleBtnClick}></Masker>
                  <Dialog title={this.state.curDialog.title} content={this.state.curDialog.content} showDialog={this.state.showDialog}
                   btns={this.state.curDialog.btns}>
                  </Dialog>
		    </div>
		)
	}
}
export default template({
	id:'dialog',
	component:Main,
	url:''
})