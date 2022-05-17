import { OrdersTop } from './OrdersTop';
import { render, screen } from '@testing-library/react';
import { OrderContent } from './OrderContent';
import { OrdersBottom } from './OrdersBottom';


describe('Test should', () => {
    it('render Order Top', () => {
        render(<OrdersTop />)
    })

    it('confirm that dropdown list is loaded', () => {
        render(<OrdersTop />)
        screen.getByRole('button', {name: 'This Month'})
    })

    it('render Order Content', () => {
        render(<OrderContent />)
    })

    it('render Order Bottom', () => {
        render(<OrdersBottom />)
    })
})