import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';

import {Header,template} from '../components/common/minin'
import Segment from '../components/Segment/segment.jsx'
class Main extends Component{
	static defaultProps={
		header:{
             title:'Segment Demo',
            titleStyle:{
              color:'#fff',
              fontSize:'18px'
            },
            leftWrapper:{type:1}
        },
        segment1:{
           style:{
           	  width:'140px',

           },
           itemList:[
              {sgmName:'消息',sgmStyle:{}},
              {sgmName:'电话',sgmStyle:{}}
           ],
           selectedIndex:0,
           selectedStyle:{
               background:'#3dbaff',
               color:'#fff'
           },
           needIndicator:false,
           needIndicator:{

           }
        }
	}
	constructor(props,context){
		super(props,context);
	}
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
		return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
	}
	render(){
		return (
           <div className='hxq-page-sgm'>
                <Header title={this.props.header.title} titleStyle={this.props.header.titleStyle} 
                leftWrapper={this.props.header.leftWrapper} handleClick={this.handleMainPage}></Header>
                <div className='displayflex flexcenter' style={{height:'45px'}}>
                    <Segment config={this.props.segment1}></Segment>
                </div>
            
           </div>
		)
	}
}
export default template({
	id:'segment',
	component:Main,
	url:''
})