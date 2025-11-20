import {createStore} from 'redux';

//inital state
export const initalState = {
    user: {
        username: "Rukmini",
        balance: 25000
    }
};

//Action: add money
export const addmoney = (amt) => ({
    type: "addMoney",
    payload: amt
});

//action: remove money
export const removemoney = (amt) => ({
    type: "removeMoney",
    payload: amt
});


//reducer state:reducer state is a function
export function reducer(state = initalState, action){
switch(action.type) {
    case 'addMoney':
        return {
            user :{
                username : state.user.username,
                balance: state.user.balance + action.payload,
            }
        };
        case 'removeMoney':
            return {
                user : {
                    username :state.user.username,
                    balance: state.user.balance - action.payload,
                }
            }
        default:
            return state
}
}

const store = createStore(reducer);
export default store;