import React from 'react'
import { Router } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import NavigationItems from './NavigationItems';
import { createMemoryHistory } from 'history'

const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return { 
    ...render (
    <Router history={history}>
        {component}
    </Router>
    )
  }
}
describe('<NavigationItems />', () => {
    afterEach(cleanup);

    it('should render Burger Build and Authenticate menu if not authenticated', async () => {

        const { queryByText } = renderWithRouter(<NavigationItems />);
        
        const burgerBuild = queryByText('Burger Build');
        const orders = queryByText('Orders');
        const auth = queryByText('Authenticate');
        const logout = queryByText('Logout');

        expect(burgerBuild).toBeInTheDocument();
        expect(auth).toBeInTheDocument();
        
        expect(orders).not.toBeInTheDocument();
        expect(logout).not.toBeInTheDocument();
    });

    it('should not render Authenticate menu if authenticated', async () => {

        const { queryByText } = renderWithRouter(<NavigationItems isAuthenticated />);
        
        const burgerBuild = queryByText('Burger Build');
        const orders = queryByText('Orders');
        const auth = queryByText('Authenticate');
        const logout = queryByText('Logout');

        expect(orders).toBeInTheDocument();
        expect(logout).toBeInTheDocument();
        expect(burgerBuild).toBeInTheDocument();

        expect(auth).not.toBeInTheDocument();
    });
});