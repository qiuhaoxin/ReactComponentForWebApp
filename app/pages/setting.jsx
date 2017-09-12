import React,{Component,PropsType} from 'react';
import {Header,template} from '../components/common/minin';
import Masker from '../components/Masker/masker.jsx';
import {is,fromJS} from 'immutable';
import Loading from '../components/Loading/loading.jsx'

class Main extends Component{
     PropsType
     constructor(props,context){
     	super(props,context);
     	this.state={
     		showMasker:false,//masker status
            showLoading:false//loading status
     	}
     	this.handleMaskerClick=this.handleMaskerClick.bind(this);
     }
     shouldComponentUpdate(nextProps,nextState){
           return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
     }
     handleMaskerClick(){
        this.setState(preState=>({showMasker:!preState.showMasker}));
     }
     handleTestClick(){
         this.setState({showMasker:!this.state.showMasker,showLoading:true});
     }
     render(){
     	return (
            <div className='hxq-setting-page'>
                <div onClick={this.handleTestClick.bind(this)}>click show or hide masker</div>
                <Masker maskerClick={this.handleMaskerClick} maskerStatus={this.state.showMasker} maskerCallBack={this.handleMaskerClick}></Masker>
                <Loading desc={'数据加载中'} show={this.state.showLoading}></Loading>
            </div>
     	)
     }
}

export default template({
	id:'setting',
	component:Main,
	url:''
})