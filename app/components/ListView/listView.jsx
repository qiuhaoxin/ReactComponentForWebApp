import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import './listView.less'

class ListItem extends Component{
     constructor(props,context){
     	super(props,context);
     }
     componentDidMount(){

     }
     render(){
        let {itemData}=this.props;
     	return (
          <div>
              {itemData.name}
          </div>
     	)
     }

}
class MyComponent extends Component{
    constructor(props,context){
        super(props,context);
    }
    componentDidMount(){
        
    }
    render(){
        let {config}=this.props;
        var listData=config.listData;
        console.log("litData is "+JSON.stringify(listData));
        var listHtml=listData.map((item,index)=>{
            return (<ListItem key={'listItem'+index} itemData={item}>

            </ListItem>)
        });
        console.log("itemHtml is "+listHtml);
     	return (
            <div className='hxq-lv-page'>
                {listHtml}
            </div>
        )
    }
    shouldComponentUpdate(nextProps,nextState){
       return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
    }

}
export default MyComponent;