import React from 'react'
import { render, cleanup } from '@testing-library/react'
import BuildControl from './BuildControl';


describe('<BuildControl />', () => {
    
    afterEach(cleanup);

    it('should show Meat as label', async () => {

        const { getByTestId } = render(<BuildControl label="Meat" />);
        
        const labelElement = getByTestId('ing-label');

        expect(labelElement.textContent).toEqual('Meat');
    });

});