import { render, screen } from '@testing-library/react';
import { InviteBottom } from './InviteBottom';
import { InviteContent } from './InviteContent';
import { InviteTop } from './InviteTop';

describe('Test should', () => {
    it('render Invite Top', () => {
        render(<InviteTop />)
    })

    it('render Invite Content', () => {
        render(<InviteContent />)
    })

    it('render Invite Bottom', () => {
        render(<InviteBottom />)
    })
})