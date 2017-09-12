import React,{Component,PropsType} from 'react';


class baseComponent extends Component{
	constructor(props,context){
        super(props,context);
        this.onTouchStart=this.onTouchStart.bind(this);
        this.onTouchMove=this.onTouchMove.bind(this);
        this.onTouchEnd=this.onTouchEnd.bind(this);
        this.startTime=new Date() * 1;
        this.endTime=new Date() * 1;
        this.endPoint={x:0,y:0}
	}
	touchX:0
	touchY:0

	onTouchStart(e){
        e.preventDefault();
        e.stopPropagation();
        this.touchX=this.endPoint.x=e.nativeEvent.touches[0].pageX;
        this.touchY=this.endPoint.y=e.nativeEvent.touches[0].pageY;
        console.log("touchX is "+this.touchX+" and touchY is "+this.touchY);
	}
	onTouchMove(e){
        console.log("onToucheMove from superClass");
	}
	onTouchEnd(e){
        console.log("onToucheEnd from superClass");
	}
	testChange(){
		console.log("testChange!");
	}
}
export default baseComponent;