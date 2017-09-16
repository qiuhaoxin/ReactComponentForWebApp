import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import {Header,template} from '../components/common/minin';
import SearchBar from '../components/SearchBar/searchbar.jsx'


class Main extends Component{
	static defaultProps={
		header:{
            title:'SearchBar Demo',
            titleStyle:{
              color:'#fff',
              fontSize:'18px'
            },
            leftWrapper:{type:1}
		},
		searchBar:{
			placeHolder:'please input the goods name'
		}
	}
    constructor(props,context){
    	super(props,context);

    }
    componentDidMount(){

    }
    render(){
    	return (
           <div className='hxq-srb-page'>
               <Header title={this.props.header.title} titleStyle={this.props.header.titleStyle} 
                leftWrapper={this.props.header.leftWrapper} handleClick={this.handleMainPage}></Header>
                <SearchBar config={this.props.searchBar}></SearchBar>
           </div>
    	)
    }
}
export default template({
	id:'searchbar',
	component:Main,
	url:''
})