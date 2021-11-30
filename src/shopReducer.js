var initialState={price:0}
function updateQuantity(state=initialState,action) {
    switch (action.type) {
        case 'INCREASE_QTY':
            var updatedState = Object.assign({}, state, { price: state.price + Number(action.data.unitPrice )})
            console.log(updatedState);
            return updatedState;
        case 'DECREASE_QTY': 
            var updatedState = Object.assign({}, state, { price: state.price - Number(action.data.unitPrice )})
            console.log(updatedState);
            return updatedState;
        default:
            return state;
    }
    
}
export default updateQuantity;