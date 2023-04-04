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
export const getProductCategories = ()=> async (dispatch) => {
    dispatch({
        type: actionTypes.PRODUCT_CATEGORY,
        data: productCategories
    })
}