import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import {Header,template} from '../components/common/minin';
import ListView from '../components/ListView/listView.jsx';
import ListData from '../../Data/serverData';

class Main extends Component{
     static defaultProps={
     	 header:{
            title:'ListViewDemo',
            titleStyle:{
              color:'#fff',
              fontSize:'18px'
            },
            leftWrapper:{type:1}
          },
          listView:{
          	 listData:ListData['listViewData']
          }
     }
	 constructor(props,context){
          super(props,context);
          console.log("serverData is "+JSON.stringify(ListData.listViewData));
	 }
	 componentDidMount(){

	 }
	 shouldComponentUpdate(nextProps,nextState){
	 	return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
	 }
	 render(){
	 	return (
            <div className='hxq-lvDemo-page'>
                  <Header title={this.props.header.title} titleStyle={this.props.header.titleStyle} 
                       leftWrapper={this.props.header.leftWrapper} handleClick={this.handleMainPage}>
                  </Header>
                  <ListView config={this.props.listView}></ListView>
            </div>
	 	)
	 }
}
export default template({
	id:'listViewDemo',
	component:Main,
	url:''
})