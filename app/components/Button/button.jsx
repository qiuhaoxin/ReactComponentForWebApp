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
    transformStyle=(style)=>{
    	var wrapperClass='';
        switch(style){
            case 'borderTop':
	            wrapperClass="btn-border-top";
	            break;
            case 'borderRight':
	            wrapperClass="btn-border-right";
	            break;
            case 'borderLeft':
	            wrapperClass="btn-border-left";
	            break;
            case 'borderBottom':
	            wrapperClass="btn-border-bottom";
	            break;
        }
        return wrapperClass;
    }
	render(){
		//
		let {btn}=this.props;
		var listArr=[],
		    btnList=btn.btnList,
		    btnCallBack=btn['btnCallBack'],
		    btnStyle=btn['btnStyle'],wrapperClass='';
		if(btnStyle){
			wrapperClass=this.transformStyle(btnStyle['border']);
		}    
		for(let i=0,len=btnList.length;i<len;i++){
			var btnItem=btnList[i],borderStyle=btnItem['border'],borderClass=this.transformStyle(borderStyle);
            listArr.push(
                <div key={'btn-'+i} className={'hxq-btn-item '+borderClass} style={btnItem['btnStyle']} 
                onClick={this.handleBtnClick.bind(this,btnCallBack,btnItem['key'])}>
                    {btnItem['btnText']}
                </div>
            );
		} 
		return (
           <div className={'hxq-component-btn '+wrapperClass}>
                {listArr}
           </div>
		)
	}
}
export default MyComponent