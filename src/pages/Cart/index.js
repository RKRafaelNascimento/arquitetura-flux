import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './style';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD </th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/28/HZM-1864-028/HZM-1864-028_zoom2.jpg?ims=100x"
                                alt="Tênis Nike"
                            />
                        </td>
                        <td>
                            <strong>Tênis Nike</strong>
                            <span>R$129,90</span>
                        </td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline
                                    size={20}
                                    color="#7159c1"
                                />
                            </button>
                            <input type="number" readOnly value={1} />
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1" />
                            </button>
                        </div>
                        <td />
                        <td>
                            <strong>R$258,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$1920,28</strong>
                </Total>
            </footer>
        </Container>
    );
}
