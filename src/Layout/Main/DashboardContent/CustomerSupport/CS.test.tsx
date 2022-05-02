import { render, screen } from '@testing-library/react';
import { CSContent } from './CSContent';
import { CStop } from './CStop';


describe('Test should', () => {
    it('render Customer Support Top', () => {
        render(<CStop />)
    })

    it('render Customer Support Content', () => {
        render(<CSContent />)
    })
})