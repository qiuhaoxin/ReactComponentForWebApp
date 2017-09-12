import Immutable from 'immutable'
import {RECEIVE_POSTS,REQUEST_POSTS} from '../Action/action'

const defaultState=Immutable.fromJS({data:{},isFetching:false})

export const fetchData=(state=defaultState,action={})=>{
	switch(action.type){
		case REQUEST_POSTS:
             return state.set('isFetching',true);
        case RECEIVE_POSTS:
             return Immutable.Map({'data':action.json,'isFetching':false});//return a new state
        default:
              return state;
	}
}