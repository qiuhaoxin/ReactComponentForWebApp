import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import './listView.less'

class ListItem extends Component{

}
class List extends Component{

}
class MyComponent extends Component{
    constructor(props,context){
        super(props,context);
    }
    componentDidMount(){

    }
    render(){
        <List>

        </List>
    }
    shouldComponentUpdate(nextProps,nextState){
       return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
    }

}
export default MyComponent;