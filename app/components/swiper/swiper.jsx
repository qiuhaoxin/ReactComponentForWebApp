import React,{Component,PropsType} from 'react';
import {is,fromJS} from 'immutable';

import './swiper.less'


var screenWidth=window.innerWidth;


class MyComponent extends Component{
	constructor(props,context){
		super(props,context);
		this.imgArr=[
           'http://img12.360buyimg.com/da/jfs/t2857/68/2087348828/95010/c1e9b654/575641c6N67df4824.jpg',
           "http://m.360buyimg.com/n12/jfs/t2029/67/2768267263/165446/527e91fb/56f24597Nd8fae481.jpg!q70.jpg",
           "http://pics.sc.chinaz.com/files/pic/pic9/201603/apic19296.jpg",
           "http://pics.sc.chinaz.com/files/pic/pic9/201605/fpic1033.jpg",
           "http://pics.sc.chinaz.com/files/pic/pic9/201605/apic20739.jpg",
           "http://pics.sc.chinaz.com/files/pic/pic9/201605/apic20588.jpg"
		];
		this.isNeedAnimate=true;
        this.state={offsetLeft:this.imgArr.length==1?0:-screenWidth};
        this.touchStart=this.touchStart.bind(this);
        this.touchMove=this.touchMove.bind(this);
        this.touchEnd=this.touchEnd.bind(this);
        this.startTimer=this.startTimer.bind(this);
        this.diff=0;
        this.curImgIdx=0;// current img index;
        this.arr=this.getArrByImagIndex(this.curImgIdx);
        this.isInTransition=false;
        this.during=300;
	}
	timer:null
	timerout:null
	touchX:0
	curOffsetLeft:0
	touchStart(e){
        if(this.timer){
        	clearInterval(this.timer);
        	this.timer=null;
        }
        this.isNeedAnimate=false;
        this.touchX=e.nativeEvent.touches[0].pageX;
        if(this.isInTransition){
        	e.preventDefault();
        	e.stopPropagation();
        	e.nativeEvent.stopImmediatePropagation();
        	return false;
        }
        this.diff=0;
        this.curOffsetLeft=this.state.offsetLeft
	}
	touchMove(e){
         e.preventDefault();
         e.stopPropagation();
         e.nativeEvent.stopImmediatePropagation();
         if(this.isInTransition){
         	return false;
         }
         var curTouchX=e.nativeEvent.touches[0].pageX;
         this.diff=curTouchX - this.touchX;
         var left=this.curOffsetLeft + this.diff;
         this.setState({offsetLeft:left});
	}
	touchEnd(e){
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.startTimer();
        if(this.isInTransition){
        	return false;
        }
        this.isInTransition=true;
        this.isNeedAnimate=true;
        var left=0;
        if(this.imgArr.length==1){
        	this.setState({offsetLeft:0});
        	this.isInTransition=false;
        	this.isNeedAnimate=false;
        	return;
        }
        if(this.diff>0){
        	this.setState({offsetLeft:0 * screenWidth});
        }else if(this.diff<0){
        	this.setState({offsetLeft:2 * -screenWidth});
        }else{
        	this.isInTransition=false;
        	this.isNeedAnimate=false;
        }
        this.setTransitionEnd();
	}
	startTimer(){
		if(this.timer){
			return;
		}
		if(this.imgArr.length<=1){
			return;
		}
		this.timer=setInterval(()=>{
            
            this.isNeedAnimate=true;
            this.diff=-1;
            this.isInTransition=true;
            this.setState({offsetLeft:2 * -screenWidth});
            this.setTransitionEnd();

		},3000);
	}
	setTransitionEnd(){
		if(this.timerout){
			clearTimeout(this.timerout);
			this.timerout=null;
		}
		this.timerout=setTimeout(()=>{
             this.transitionEnd();
		},this.during)
	}
	transitionEnd(){
        this.isInTransition=false;
        this.isNeedAnimate=false;
        if(this.imgArr.length<=1)return;
        if(this.diff>0){
             this.curImgIdx=(this.curImgIdx<=0);
             this.arr=this.getArrByImagIndex(this.curImgIdx);
        }else if(this.diff<0){//go left 
             this.curImgIdx=(this.curImgIdx>=this.imgArr.length-1?0:this.curImgIdx+1);
             this.arr=this.getArrByImagIndex(this.curImgIdx);
        }
        this.setState({offsetLeft:-screenWidth});
	}
	componentWillUnmount(){
		console.log("hei umMoiunt");
		if(this.timer){
			clearInterval(this.timer);
			this.timer=null;
		}
		if(this.timerout){
			clearTimeout(this.timerout);
			this.timerout=null;
		}
	}
	getArrByImagIndex(index){
	    var len = this.imgArr.length;
	    if(len==1){
	      return [index];
	    }
	    var re = [index];
	    var next = index+1;
	    if(next>len-1){
	      if(index!=0){
	        re = re.concat([0]);
	      }
	    }else{
	      re = re.concat([next]);
	    }
	    var pre = index - 1;
	    if(pre>=0){
	      re = [pre].concat(re);
	    }else{
	      if(pre<0){
	          re = [len-1].concat(re);
	      }else{
	        re = [pre].concat(re);
	      }
	    }
	    return re;
  }
	componentWillMount(){

	}
	componentDidMount(){
       this.startTimer();
	}
	shouldComponentUpdate(nextProps,nextState){
          return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
	}
	render(){
	    let imgArrHtml=[];
	    for(let i=0,len=this.arr.length;i<len;i++){
	    	 var index=this.arr[i];
	    	 var left="translate3d("+(i * screenWidth + this.state.offsetLeft)+"px,0,0)";
	    	 var a=this.isNeedAnimate ? {transform:left,transition:("transform "+this.during+"ms ease ")} : {transform:left};
             imgArrHtml.push(
                <div className='hxq-scroll-item'  style={a} key={'item'+i}>
                    <img style={{height:'100%',width:'100%',position:'relative'}} src={this.imgArr[index]}/>
                </div>
             )
	    }
	    var indicators=[];
	    var  selectedIndicatorStyle={
			width:'8px',
			height:'8px',
			borderRadius:'4px',
			backgroundColor:"orange",
			marginLeft:'8px'
		};
		var normalStyle={
				width:'6px',height:'6px',borderRadius:'3px',position:'relative',background:'#fff',marginLeft:'8px'
		}
	    for(let i=0,len=this.imgArr.length;i<len;i++){
	    	var style=this.curImgIdx==i?selectedIndicatorStyle:normalStyle;
	    	indicators.push(
               <div key={"indicator"+i} style={style}>

               </div>
	    	)
	    }	
		return (
                <div className='hxq-scroll-wrapper' onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={this.touchEnd} ref='scrolldiv'>
                    <div>
                      {imgArrHtml}
                    </div>
                    <div className="hxq-scroll-indicator">
                       {indicators}
                    </div>
                </div>
		)
	}
}
export default MyComponent;