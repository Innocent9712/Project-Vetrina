import { render, screen } from '@testing-library/react';
import { ExtensionBottom } from './ExtensionBottom';
import { ExtensionContent } from './ExtensionContent';
import { ExtensionTop } from './ExtensionTop';


describe('Test', () => {
    describe('for top should', () => {
        it('render Extension Top', () => {
            render(<ExtensionTop />)
        })
    })

    describe('for content should', () => {
        it('render Extension Content', () => {
            render(<ExtensionContent />)
        })
    })

    describe('for bottom should', () => {
        it('render Extension Bottom', () => {
            render(<ExtensionBottom />)
        })

        it('make sure link is loaded', () => {
            render(<ExtensionBottom />)
            screen.getByRole('button', {name: 'Discover all extensions'})
        })
    })

})