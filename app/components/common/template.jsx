import React,{Component,PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import * as action from '../../Redux/Action/action';

const Template = setting => { 
    let set={
    	id:'',
    	url:'',
    	data:{},
    	component:<div></div>,
    };
   // console.log("setting is "+JSON.stringify(setting));
    for(let key in setting){
    	set[key]=setting[key];
    }
    class Index extends Component{
    	static defaultProps={set};
    	constructor(props,context){
    		super(props,context);
    	}
    	render(){
    		return (
                    <div className='hxq-pageview'>
                        <this.props.set.component {...this.props} state={this.props.state.toJS()} />
                    </div>
                )
    	}
    	componentDidMount(){
    		if(this.props.set.url){
    			this.props.fetchPosts(this.props.set.url,this.props.set.data);
    		}
    	}
    	componentWillReceiveProps(nextProps){
            // console.log("componentWillReceiveProps is ");
    	}
    	shouldComponentUpdate(nextProps,nextState){
    		if(nextProps.state.get('isFetching')){
    			return false;
    		}
    		return !is(fromJS(this.props),fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState));
    	}

    }
    return connect(state=>{
        //console.log("state is "+JSON.stringify(state));
        let {MainRecord}=state;
         return {
            state:state['fetchData'],
            MainRecord
         }
    },action)(Index);

}
export default Template;