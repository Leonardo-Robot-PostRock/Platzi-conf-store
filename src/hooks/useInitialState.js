import { useState } from 'react';
import initialState from '../useInitialState';


const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => { return (item.id !== payload.id) })
        })
    }

    return {
        addToCart,
        removeFromCart,
        state
    }
}


export default useInitialState;