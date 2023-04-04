import * as actionTypes from './types';

const productCategories = [
    {
        id:1,
        category: 'Kids',
        subCategory: [
            {
                Id:1,
                Name: 'Dresses'
            },
            {
                Id:2,
                Name: 'Jackets'
            }
        ]
    },
    {
        id:1,
        category: 'Men',
        subCategory: [
            {
                Id:1,
                Name: 'T-Shirts'
            },
            {
                Id:2,
                Name: 'Jackets'
            }
        ]
    }
]

const products = [
    {
        id:1,
        imageSrc: require('../../../assets/images/coat.jpg'),
        name: 'Product1',
        price: '$10.00'
    },
    {
        id:2,
        imageSrc: require('../../../assets/images/coat2.jpg'),
        name: 'Product2',
        price: '$10.00'
    },
    {
        id:3,
        imageSrc: require('../../../assets/images/coat3.jpg'),
        name: 'Product1',
        price: '$10.00'
    },
    {
        id:4,
        imageSrc: require('../../../assets/images/coat4.jpg'),
        name: 'Product1',
        price: '$10.00'
    }
]
export const getProductCategories = ()=> async (dispatch) => {
    dispatch({
        type: actionTypes.PRODUCT_CATEGORY,
        data: productCategories
    })
}

export const getProducts = ()=> async (dispatch) => {
    dispatch({
        type: actionTypes.PRODUCT,
        data: products
    })
}