import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';
import './niceCell.less';

class MyComponent extends Component{
    static defaultProps={
    	niceCellData:[
            {imgSrc:'./app/img/10066.png',imgText:'移动报销',id:0},
            {imgSrc:'./app/img/88888.png',imgText:'移动审批',id:1},
            {imgSrc:'./app/img/88888.png',imgText:'移动下单',id:2},
            {imgSrc:'./app/img/10066.png',imgText:'应收款',id:3},
            {imgSrc:'./app/img/88888.png',imgText:'库存查询',id:4},
            {imgSrc:'./app/img/10066.png',imgText:'移动BOS',id:5},
            {imgSrc:'./app/img/88888.png',imgText:'WMS',id:6},
            {imgSrc:'./app/img/10066.png',imgText:'智慧工厂',id:7},
            {imgSrc:'./app/img/88888.png',imgText:'移动报表',id:8},
            {imgSrc:'./app/img/88888.png',imgText:'Tabbar',id:9},
            {imgSrc:'./app/img/10066.png',imgText:'Repeat',id:10},
            {imgSrc:'./app/img/88888.png',imgText:'Widget',id:11},
            {imgSrc:'./app/img/88888.png',imgText:'DatePicker',id:12},
            {imgSrc:'./app/img/10066.png',imgText:'Repeat1',id:13},
            {imgSrc:'./app/img/88888.png',imgText:'Widget1',id:14}
    	]
    }
    constructor(props,context){
        super(props,context);
        this.niceCellHtml=[];
        this.rowCount=4;
    }
    componentWillMount(){
        for(let i=0,len=this.props.niceCellData.length;i<len;i++){
             var niceCellItem=this.props.niceCellData[i];
             this.niceCellHtml.push(
                 <div className='hxq-nc-item' key={'niceCell'+i} style={{width:'93px',height:'93px'}}>
                     <img src={niceCellItem['imgSrc']} className='hxq-nc-img'/>
                     <span className='hxq-nc-text'>{niceCellItem['imgText']}</span>
                 </div>
             );
        }
    }
    componentDidMount(){

    }
    shouldComponentUpdate(nextProps,nextState){
         return !is(fromJS(this.props),fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState));
    }
    render(){
    	return (
           <div className='hxq-nc-wrapper' data-com='nicecell'>
               {this.niceCellHtml}
           </div>
    	)
    }
}

export default MyComponent;