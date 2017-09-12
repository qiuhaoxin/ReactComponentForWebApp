import React,{Component,PropsType} from 'react';
import './button.less'


class MyComponent extends Component{
	//btnMode 1 
    static defaultProps={
    	btnMode:1,
    }
	constructor(props){
		super(props);
        
	}
	componentWillMount(){

	}
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
          return false;
	}
    handleBtnClick(btnCB,key){
        btnCB(key);
    }
	render(){
		//
		let {btn}=this.props;
		var listArr=[];
		var btnList=btn.btnList;
		var btnCallBack=btn['btnCallBack'];
		for(let i=0,len=btnList.length;i<len;i++){
			var btnItem=btnList[i];
            listArr.push(
                <div key={'btn-'+i} className='hxq-btn-item' style={btnItem['btnStyle']} 
                onClick={this.handleBtnClick.bind(this,btnCallBack,btnItem['key'])}>
                    {btnItem['btnText']}
                </div>
            );
		} 
		return (
           <div className='hxq-component-btn'>
                {listArr}
           </div>
		)
	}
}
export default MyComponent