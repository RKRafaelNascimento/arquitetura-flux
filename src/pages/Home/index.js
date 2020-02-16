import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './style';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/28/HZM-1864-028/HZM-1864-028_zoom2.jpg?ims=100x"
                    alt="Tênis"
                />
                <strong>Tênis Nike</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/28/HZM-1864-028/HZM-1864-028_zoom2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis Nike</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/28/HZM-1864-028/HZM-1864-028_zoom2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis Nike</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/28/HZM-1864-028/HZM-1864-028_zoom2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis Nike</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/28/HZM-1864-028/HZM-1864-028_zoom2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis Nike</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/28/HZM-1864-028/HZM-1864-028_zoom2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis Nike</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}
