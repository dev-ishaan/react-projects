export default reducer = (state=0, action) =>{
    if(action.type ===  'WITHDRAW_MONEY') {
        return state - action.payload;
    }
    if (action.type === 'DEPOSIT_MONEY'){
        return state + action.payload;
    } 
    else{
        return state
    }
}