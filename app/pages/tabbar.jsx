import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import {Header,template} from '../components/common/minin';
import Tabbar from '../components/Tabbar/tabbar.jsx'

class Main extends Component{
	static defaultProps={
		header:{
             title:'Tabbar Demo',
            titleStyle:{
              color:'#fff',
              fontSize:'18px'
            },
            leftWrapper:{type:1}
        },
		tabbarConfig:{
			style:{position:'fixed',left:'0',width:'100%',bottom:'0',height:'60px'},
			selectedKey:'invetory',
            tabbarList:[
               {Name:'商品',Type:'img',key:'invetory',Source:'../app/img/invetory.png',clickSource:'../app/img/invetory-click.png'},
               {Name:'购物车',Type:'img',key:'shopping',Source:'../app/img/shoppingcar.png',clickSource:'../app/img/shoppingcar-click.png'},
               {Name:'收藏夹',Type:'img',key:'folder',Source:'../app/img/favoriteFolder.png',clickSource:'../app/img/favoriteFolder-click.png'},
               {Name:'我的订单',Type:'img',key:'order',Source:'../app/img/order.png',clickSource:'../app/img/order-click.png'}
            ]
		}
	}
	constructor(props,context){
		super(props);
	}
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
		return !is(fromJS(this.props),fromJS(nextProps)) || !is(fromJS())
	}
	render(){
        return (

            <div className='hxq-tb-page'>
                <Header title={this.props.header.title} titleStyle={this.props.header.titleStyle} 
                    leftWrapper={this.props.header.leftWrapper}></Header>
                <Tabbar config={this.props.tabbarConfig}></Tabbar>
            </div>
        )
	}
}
export default template({
	id:'tabbar',
	component:Main,
	url:''
})