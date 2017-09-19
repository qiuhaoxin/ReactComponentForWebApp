import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import {Header,template} from '../components/common/minin';
import Radio from '../components/Radio/radio.jsx';


class Main extends Component{
	static defaultProps={
		header:{
            title:'Form Demo',
            titleStyle:{
              color:'#fff',
              fontSize:'18px'
            },
            leftWrapper:{type:1}
		},
		radioConfig:{
			type:'sex',
			selected:'boy',
			radioData:[
               {Text:'男',Style:{},type:'boy'},
               {Text:'女',Style:{},type:'girl'}
			]
		},
		radioConfig1:{
			type:'address',
			selected:'mainlang',
			radioData:[
               {Text:'大陆',Style:{},type:'mainlang'},
               {Text:'中国台湾',Style:{},type:'hk'},
               {Text:'中国香港',Style:{},type:'tw'}
			]
		}
	}
	constructor(props,context){
		super(props,context);
	}
	componentDidMount(){

	}

	render(){
		return (
           <div className='hxq-form-page'>
                <Header title={this.props.header.title} titleStyle={this.props.header.titleStyle} 
                leftWrapper={this.props.header.leftWrapper} handleClick={this.handleMainPage}></Header>
                <Radio config={this.props.radioConfig}></Radio>
                <Radio config={this.props.radioConfig1}></Radio>
           </div>
		)
	}
}

export default template({
	id:'form',
	component:Main,
	url:''
})