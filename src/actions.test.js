import * as actions from './actions';
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED  

} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

let mockStore;
let store;
beforeEach(() => {
    mockStore = configureMockStore([thunkMiddleware]);
    store = mockStore();
})
describe('setSearchField', () => {
    it('should create an action to search robots', ()=> {
        expect(actions.setSearchField('aaa')).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: 'aaa'
        })
    })
})

describe('requestRobots', () => {
    
    
    it('handles requesting robots API', () => {
        store.dispatch(actions.requestRobots())
        const action = store.getActions();
        //console.log(action)
        expect(action[0]).toEqual({
            type: REQUEST_ROBOTS_PENDING
        })
    })
})