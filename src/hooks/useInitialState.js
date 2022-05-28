import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/index';
import initialState from '../initialState';

const apiStrapiPlatzi = config.strapiPlatzi;

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const [products, setProducts] = useState([]);
    const [image, setImage] = useState([]);
    const urlImgStrapi = 'http://localhost:1337/api/upload/files';

    useEffect(() => {
        const getData = async () => {
            const config= {
                url:{
                    url: ['url']
                }
            };
            try {
                axios.all([
                    axios.get(apiStrapiPlatzi),
                    axios.get(urlImgStrapi, config)
                ])
                    .then(response => {
                        setProducts(response[0].data.data);
                        setImage(response[1].data);
                    })
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    console.log(products);
    console.log("ver", image);


    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.cartId !== payload)
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        products,
        image,
        state
    }
}


export default useInitialState;