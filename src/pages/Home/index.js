import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/action';

import { ProductList } from './style';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('products');
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));
        this.setState({ products: data });
    }

    handlerAddCart = product => {
        const { addToCart } = this.props;

        addToCart(product);
    };

    render() {
        const { products } = this.state;

        return (
            <ProductList>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.price} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button
                            type="button"
                            onClick={() => this.handlerAddCart(product)}
                        >
                            <div>
                                <MdAddShoppingCart size={16} color="#FFF" /> 3
                            </div>
                            <span>ADICIONAR AO CARRINHO</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
