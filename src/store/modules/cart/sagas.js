import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateFromCart } from './action';

function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    if (productExists) {
        const amount = productExists.amount + 1;
        yield put(updateFromCart(id, amount));
    } else {
        const response = yield call(api.get, `products/${id}`);
        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };
        yield put(addToCartSuccess(data));
    }
}

export default all([takeLatest('@Cart/ADD_REQUEST', addToCart)]);
