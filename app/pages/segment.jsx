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
           indicatorStyle:{

           }
        },
        segment2:{
        	style:{
        		border:'1px solid orange',
        		borderRadius:'20px'
        	},
        	itemList:[
               {sgmName:'首页',sgmStyle:{width:'80px'}},
               {sgmName:'新闻',sgmStyle:{width:'80px'}},
               {sgmName:'资讯',sgmStyle:{width:'80px'}}
        	],
        	selectedIndex:0,
        	selectedStyle:{
        		backgroundColor:'orange',
        		color:'#fff'
        	},
            indicatorStyle:{

           }
        },
        segment3:{
        	style:{
        		border:'0',
        		borderRadius:'20px',
        		background:'rgb(43,62,77)',
        		color:'#fff'
        	},
        	itemList:[
               {sgmName:'中国',sgmStyle:{width:'80px'}},
               {sgmName:'中国香港',sgmStyle:{width:'80px'}},
               {sgmName:'国外',sgmStyle:{width:'80px'}},
               {sgmName:'中国台湾',sgmStyle:{width:'80px'}}
        	],
        	selectedIndex:0,
        	selectedStyle:{

        	},
            indicatorStyle:{
                position:'absolute',
                height:'32px',
                width:'80px',
                borderRadius:'16px',
                backgroundColor:'rgb(143,173,220)'
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
                 <div className='displayflex flexcenter' style={{height:'50px'}}>
                    <Segment config={this.props.segment2}></Segment>
                </div>
                 <div className='displayflex flexcenter' style={{height:'50px'}}>
                    <Segment mode={'2'} config={this.props.segment3}></Segment>
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