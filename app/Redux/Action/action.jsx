import fetch from 'isomorphic-fetch';
import {target} from '../../Config/config'

export const REQUEST_POSTS="REQUEST_POSTS";
export const RECEIVE_POSTS="RECEIVE_POSTS";

const requestPosts=(path)=>{
	return {
		type:REQUEST_POSTS,
		path
	}
}
const receivePost=(path,json)=>{
	return {
		type:RECEIVE_POSTS,
		path,
		json
	}
}


export const fetchPosts=(path,postData)=>{
	let formData=new FormData();
    for(let key in postData){
    	formData.append(key,postData[key]);
    }
	let url=target+"/"+path;
	//console.log("postData is "+JSON.stringify(postData));
	return dispatch=>{
         dispatch(requestPosts(path));
         return fetch(url,{
            method:'POST',
            body:formData,
         	mode:'cors',
         	'Content-Type':'application/json'
         })
         .then(response=>{
         	if(response.ok){
         		response.json().then(json=>dispatch(receivePost(path,json)));
         	}else{
         		console.log("status is "+response.status);
         	}
         }).catch(error=>console.log(error))
	}
}

export const clickMainPage=()=>{
	console.log("console");
}