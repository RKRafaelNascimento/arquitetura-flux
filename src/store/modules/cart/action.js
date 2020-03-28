export function addToCartRequest(id) {
    return {
        type: '@Cart/ADD_REQUEST',
        id,
    };
}

export function addToCartSuccess(product) {
    return {
        type: '@Cart/ADD_SUCCESS',
        product,
    };
}

export function removeFromCart(id) {
    return {
        type: '@Cart/REMOVE',
        id,
    };
}

export function updateFromCartRequest(id, amount) {
    return {
        type: '@Cart/UPDATE_AMOUNT_REQUEST',
        id,
        amount,
    };
}

export function updateFromCartSucess(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT_SUCESS',
        id,
        amount,
    };
}
