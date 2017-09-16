
var utilility=(function(){
	function MyUtils(){

	}
	MyUtils.prototype={
        /* dom has className */
		hasClass:function(ele,targetClass){
           console.log("classList is "+ele.classList);
           var classList=ele.classList;
           return String(classList).search(targetClass)!==-1;
		},
		addClass:function(ele,className){
            if(ele && className){
            	ele.classList.add(className);
            }
		},
		removeClass:function(){

		}
	}
    return new MyUtils();
})()
export default utilility;