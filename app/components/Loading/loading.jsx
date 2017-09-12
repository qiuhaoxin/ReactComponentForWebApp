import React,{Component,PropsType} from 'react';

import {is,fromJS} from 'immutable';

import './loading.less';

class MyComponent extends Component{

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
		var leafDivs=[];let {desc,show}=this.props;var style={};
		console.log("show is "+show);
		if(show){
            style['visibility']='visible';
		}else{
			style['visibility']='hidden';
		}
		for(let i=0;i<12;i++){
			leafDivs.push(
				<div key={'loadingLeaf'+i} className={'hxq-loading-leaf loading-leaf-'+i}>
				</div>
			);
		}
		return (
           <div className='hxq-loading-wrapper' style={style}>
                <div className='hxq-loading'>
                     {leafDivs}
                </div>
                <p className='hxq-loading-tip'>{desc}</p>
           </div>
		)
	}

}
export default MyComponent;