import React from 'react'
import { render, cleanup } from '@testing-library/react'
import BurgerIngredient from './BurgerIngredient';

describe('<BurgerIngredient />', () => {
    afterEach(cleanup);

    it('should render Bread Bottom div if type is bread-bottom', async () => {

        const { getByTestId } = render(<BurgerIngredient type="bread-bottom" />);
        
        const element = getByTestId('bread-bottom');

        expect(element).toBeInTheDocument();
    });

    it('should render Bread Top div if type is bread-top', async () => {

        const { getByTestId } = render(<BurgerIngredient type="bread-top" />);
        
        const element = getByTestId('bread-top');

        expect(element).toBeInTheDocument();
    });

    it('should render Meat div if type is meat', async () => {

        const { getByTestId } = render(<BurgerIngredient type="meat" />);
        
        const element = getByTestId('meat');

        expect(element).toBeInTheDocument();
    });

    it('should render Cheese div if type is cheese', async () => {

        const { getByTestId } = render(<BurgerIngredient type="cheese" />);
        
        const element = getByTestId('cheese');

        expect(element).toBeInTheDocument();
    });

    it('should render Bacon div if type is bacon', async () => {

        const { getByTestId } = render(<BurgerIngredient type="bacon" />);
        
        const element = getByTestId('bacon');

        expect(element).toBeInTheDocument();
    });

    it('should render Salad div if type is salad', async () => {

        const { getByTestId } = render(<BurgerIngredient type="salad" />);
        
        const element = getByTestId('salad');

        expect(element).toBeInTheDocument();
    });

    it('should return null if type is diferente to: bread-top && bread-bottom && meat && cheese && bacon && salad', async () => {

        const { container } = render(<BurgerIngredient type="" />);

        expect(container.firstChild).toBeNull();
    });
});