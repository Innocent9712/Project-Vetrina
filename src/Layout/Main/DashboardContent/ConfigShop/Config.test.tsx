import { render, screen } from '@testing-library/react';
import { ConfigShopContent } from './ConfigShopContent';
import { ConfigShopTop } from './ConfigShopTop';

describe('Test should', () => {
    it('render ConfigShop Top', () => {
        render(<ConfigShopTop />)
    })

    it('render ConfigShop Content', () => {
        render(<ConfigShopContent />)
})

})