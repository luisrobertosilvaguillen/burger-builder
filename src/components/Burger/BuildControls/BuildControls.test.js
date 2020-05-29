import React from 'react'
import { render, cleanup } from '@testing-library/react'
import BuildControls from './BuildControls';



describe('<BuildControls />', () => {

    const props = {
        totalPrice: 12.34934234234234,
        isAuth: false,
        controls: [
            { type: 'meat', name: 'Meat', quantity: 3},
            { type: 'bacon', name: 'Bacon', quantity: 5},
            { type: 'salad', name: 'Salad', quantity: 2},
        ]
    };

    afterEach(cleanup);

    it('should show ORDER NOW as label for order-button if authenticated', async () => {
        props.isAuth = true;
        const { getByTestId } = render(<BuildControls { ...props } />);
        
        const orderButtonElement = getByTestId('order-button');

        expect(orderButtonElement.textContent).toEqual('ORDER NOW');
    });


    it('should show SIGN UP TO ORDER as label for order-button if NOT authenticated', async () => {
        props.isAuth = false;

        const { getByTestId } = render(<BuildControls { ...props } />);
        
        const orderButtonElement = getByTestId('order-button');

        expect(orderButtonElement.textContent).toEqual('SIGN UP TO ORDER');
    });


    it('should show price fixed to 2 decimals', async () => {

        const { getByTestId } = render(<BuildControls { ...props } />);
        
        const totalPriceElement = getByTestId('total-price');

        expect(totalPriceElement.textContent).toEqual('12.35');
    });


    it('should render all the controls ', async () => {

        const { getAllByTestId } = render(<BuildControls { ...props } />);
        
        const buildControlElements = getAllByTestId('build-control');

        expect(buildControlElements.length).toEqual(3);
    });

});