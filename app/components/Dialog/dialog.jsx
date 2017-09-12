import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import './dialog.less';
import Button from '../Button/button.jsx'

class MyComponent extends Component{
	 static defaultProps={
	 	mode:1
	 }
     constructor(props,context){
     	super(props,context);
     }
     componentWillMount(){

     }
     componentDidMount(){

     }
     shouldComponentUpdate(nextProps,nextState){
          return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
     }
     
     render(){
     	var {title,content,btns,showDialog}=this.props,style={};
     	title=title||'弹框提示';
        if(showDialog){
            style['visibility']='visible';
            style['zIndex']=100;
        }else{
            style['visibility']='hidden';
            style['zIndex']=0;
        }
        return (
            <div className='hxq-dlg-wrapper displayflex' style={style}>
                <div className='hxq-dlg-inner'>
                    <div className='hxq-dlg-body'>
                        <div className='hxq-dlg-title'>
                           {title}
                        </div>
                        <div className='hxq-dlg-content'>
                           <div className='hxq-dlg-content-text'>
                              {content}
                           </div>
                        </div>
                        <div className='hxq-dlg-btns hxq-btns'>
                              <Button btn={btns}></Button>
                        </div>
                    </div>
                </div>    
            </div>
        )
     
     }

}
export default MyComponent;