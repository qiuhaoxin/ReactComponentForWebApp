//配置rem作为移动适配解决方案 
//以iPhone6为标准
((doc,win)=>{
    const docEl=doc.documentElement,
    resizeEvent='orientationchange' in win ? 'orientationchange' : 'resize',
    recalc=()=>{
    	let clientWidth=docEl.clientWidth;
    	if(!clientWidth)return;
    	docEl.style['font-size']=20 * (clientWidth / 375) + "px";
    }
    if(!doc.addEventListener)return;
    win.addEventListener(resizeEvent,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window);


//client system of phone
const system=(()=>{

	let u=navigator.userAgent;
	let isAndroid=u.indexOf('Android')>-1 || u.indexOf('Linux')>-1;
	let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    let system;
    if(isAndroid){
    	system='Android';
    }
    if(isIOS){
    	system='IOS';
    }
    return system;
})();
console.log("process .env .node_env is "+process.env.NODE_ENV);
const target=(process.env.NODE_ENV=='production'?'':'http://172.20.109.184');
console.log("target is "+target);
export {target,system};

