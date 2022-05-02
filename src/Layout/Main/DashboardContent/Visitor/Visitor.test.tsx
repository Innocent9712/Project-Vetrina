import { render, screen } from '@testing-library/react';
import { VisitorBottom } from './VisitorBottom';
import { VisitorContent } from './VisitorContent';
import { VisitorTop } from './VisitorTop';

describe('Test should', () => {
    it('render Visitor Top', () => {
        render(<VisitorTop />)
    })

    it('render Visitor Content', () => {
        render(<VisitorContent />)
    })

    it('render Visitor Bottom', () => {
        render(<VisitorBottom />)
    })
})