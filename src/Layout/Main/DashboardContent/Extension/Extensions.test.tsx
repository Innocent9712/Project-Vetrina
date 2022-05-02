import { render, screen } from '@testing-library/react';
import { ExtensionBottom } from './ExtensionBottom';
import { ExtensionContent } from './ExtensionContent';
import { ExtensionTop } from './ExtensionTop';


describe('Test should', () => {
    it('render Extension Top', () => {
        render(<ExtensionTop />)
    })

    it('render Extension Content', () => {
        render(<ExtensionContent />)
    })

    it('render Extension Bottom', () => {
        render(<ExtensionBottom />)
    })
})