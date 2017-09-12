import React,{Component,PropsType} from 'react';
import './line.less'

class MyComponent extends Component{
	constructor(props,context){
         super(props,context);
	}
	componentWillMount(){

	}
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
        return false;
	}
	render(){
		return (
            <div className='hxq-line'>
       
            </div>
		)
	}
}
export default MyComponent;