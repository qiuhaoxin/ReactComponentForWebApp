import React,{Component,PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History,Link} from 'react-router';
import {connect} from 'react-redux';
import {is,fromJS} from 'immutable';
import {Header,template} from './common/minin';
import ScrollImg from './swiper/swiper';
import Button from './Button/button'
import NiceCell from './NiceCell/niceCell.jsx';
import Switch from './Switch/switch';
import MenuLayout from './MenuLayout/menuLayout'

class Main extends Component {
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
      	 this.state={
             showSlider:false
      	 }
         this.handleMainPage=this.handleMainPage.bind(this);
         this.handleMaskClick=this.handleMaskClick.bind(this);
         this.handleBtnClick=this.handleBtnClick.bind(this);

         this.props.btn['btnCallBack']=this.handleBtnClick;
      }
      handleBtnClick(key){
      }
      handleMaskClick(e){
          this.setState({showSlider:false});
      }
      handleMainPage(e){
          this.setState({showSlider:true})
      }
      componentWillMount() {
            console.log("componentWillMount!");
      }
      componentDidMount() {
            console.log("componentDidMount!");
      }
      render() {
         let data=this.props;
          var slideStyle=this.state.showSlider?'hxq-slider-show':'hxq-slider-hide';
          var maskStyle=this.state.showSlider?'hxq-mask-show':'hxq-mask-hide';
          var mainPageStyle=this.state.showSlider?'hxq-mainpage-ts':'hxq-mainpage-back'
      	  return (
             <div>
                <div className={'hxq-mainpage-main displayflex '+mainPageStyle}>
                    <Header title={this.props.header.title} titleStyle={this.props.header.titleStyle} 
                       leftWrapper={this.props.header.leftWrapper} handleClick={this.handleMainPage} leftMode={1}>
                    </Header>
                   <div className='hxq-mainpage-body displayflex'>

                      <ScrollImg></ScrollImg>
                      <Switch></Switch>
                      <Button btn={this.props.btn}></Button>
                      <NiceCell></NiceCell>
                   </div>
                </div>
                <div className={'hxq-mainpage-slider displayflex '+slideStyle}>
                    <div className='hxq-slider-top'></div>
                    <div className='hxq-slider-bt'>
                         <MenuLayout></MenuLayout>
                    </div>
                </div>
                <div className={'hxq-mainpage-mask '+maskStyle} onClick={this.handleMaskClick}>
                </div>

             </div>
      	 )
      }

}
export default template({
  id:'index',
  component:Main,
  url:'LightApp/Data/platformService2.ashx',
  data:{
    action:'getconfig',
    openid:'11',
    eid:'333',
    acctid:3
  }
})