import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable'
import './menuLayout.less';
import Line from '../Line/line.jsx';
import Icon from '../Icon/icon.jsx'
import {Link,IndexLink} from 'react-router'

class MyComponent extends Component{
	static defaultProps={
		menuGroup:[
           [
                {menuName:'摇一摇',menuIcon:'e935',needLine:true,menuLink:'Setting'},
				{menuName:'扫一扫',menuIcon:'e923',needLine:true,menuLink:'Setting'},
				{menuName:'金彩通',menuIcon:'e92f',needLine:true,menuLink:'Setting'},

           ],
           [
				{menuName:'相册',menuIcon:'e928',needLine:true,menuLink:'Setting'},
				{menuName:'表情',menuIcon:'e920',needLine:true,menuLink:'Setting'},
           ]
		]
	}
	constructor(props,context){
		super(props,context);
		this.menuHtml=[];
	}
	componentWillMount(){
       var menuGroup=this.props.menuGroup;
       var _this=this;
       menuGroup.forEach(function(item,idx){
       	   var menuItem=[];
       	   item.forEach(function(menu,index){
       	   	   var iconConfig={};
       	   	   iconConfig['text']=menu['menuName'];
       	   	   iconConfig['icon']=menu['menuIcon'];
       	   	   iconConfig['iconStyle']={fontFamily:'icomoom',color:'rgb(0,147,255)',paddingLeft:'8%'};
       	   	   iconConfig['textStyle']={paddingLeft:'7px',fontSize:'15px'};
               if(index==item.length -1){
	                menuItem.push(
		               	<Link to={'/'+menu['menuLink']}>
		                   <div className='hxq-mg-item' key={'menuItem'+index}> 
		                        <Icon config={iconConfig} link={menu['menuLink']}></Icon><span className='right-arrow'></span>
		                   </div>
		             
		               	</Link>	                   
	                )
               }else{
                    menuItem.push(
		               	<Link to={'/'+menu['menuLink']}>
		                    <div className='hxq-mg-item' key={'menuItem'+index}> 
		                        <Icon config={iconConfig} link={menu['menuLink']}></Icon><span className='right-arrow'></span>
		                    </div>
		                    <Line></Line>
		               	</Link>	                   
	                )
               }
               
       	   })
           _this.menuHtml.push(
               <div className='hxq-mg-group' key={'menuGroup'+idx}>
                    {menuItem}
               </div>
           )
       })
	}
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props),fromJS(nextState)) || !is(fromJS(this.state),fromJS(nextState));
	}
	render(){
		return (
            <div className='hxq-ml-wrapper'>
                {this.menuHtml}
            </div>
		)
	}
}


export default MyComponent;