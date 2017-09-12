import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import './dialog.less';

class MyComponent extends Component{
	 static defaultProps={
	 	mode:1
	 }
     constructor(props,context){
     	super(props,context);
     }
     getInitialState(){
     	this.state={
            show:false
     	}
     }
     componentWillMount(){

     }
     componentDidMount(){

     }
     shouldComponentUpdate(nextProps,nextState){
          return !is(fromJS(this.props,fromJS(nextProps)))||!is(fromJS(this.state),fromJS(nextState));
     }
     
     render(){
     	var {title,content,btns}=this.props;
     	title=title||'弹框提示';

     	<div className='hxq-dlg-wrapper displayflex'>
             <div className='hxq-dlg-body'>
                <div className='hxq-dlg-title'>
                 {title}
                </div>
                <div className='hxq-dlg-content'>
                   {content}
                </div>
                <div className='hxq-dlg-btns hxq-btns'>

                </div>
             </div>
     	</div>
     }

}
export default MyComponent;