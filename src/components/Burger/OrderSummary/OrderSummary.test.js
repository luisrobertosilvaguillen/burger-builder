import React from 'react'
import { render, screen, within, cleanup } from '@testing-library/react'
import OrderSummary from './OrderSummary';

describe('<OrderSummary />', () => {
    afterEach(cleanup);

    it('should show totalPrice fixed to 2 decimals and render all the ingredients with their name and quantity', async () => {
        const props = {
            totalPrice: 12.349555855988,
            ingredients: [
                { type: 'meat', name: 'Meat', quantity: 3},
                { type: 'bacon', name: 'Bacon', quantity: 5},
                { type: 'salad', name: 'Salad', quantity: 2},
            ]
        };
        const { getByTestId, getByText } = render(<OrderSummary { ...props } />);
        
        const totalPriceElement = getByTestId('total-price');

        expect(totalPriceElement.textContent).toEqual('12.35');

        props.ingredients.forEach((ingredient) => {
            const li = screen.getByText(`${ingredient.name} : ${ingredient.quantity}`).closest("li");
            expect(li).toBeInTheDocument();
        });

    });
});


