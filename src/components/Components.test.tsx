import { render, screen } from '@testing-library/react';
import { Visitor } from '../Layout/Main/DashboardContent/Visitor/Visitor';
import {CardBody} from './CardBody'

// test('should render the card body components', () => { 
//     render(
//         <CardBody>
//             {/* Re write the test */}
//         </CardBody>
//     )

//     /* eslint-disable no-debugger */
//     screen.debug() // eslint-disable-line no-debugger
//     /* eslint-enable no-debugger */
// })

describe('CardBody should render children components and check that', () => { 

    beforeEach(() => {
        render(
            <CardBody><Visitor /></CardBody>
        )      
    })

    let value;
    test('CardTop component renders properly', () => { 
        value = screen.getByText(/visitor/i)
        expect(value).toBeInTheDocument()
    })

    test('Card Content renders properly', () => { 
        value = screen.getByText(/1824/i)
        expect(value).toBeInTheDocument()
    })

    test('LinkOut component renders properly', () => { 
        value = screen.getByRole('button', {name: /visits/i})
        expect(value).toBeInTheDocument()
    })
})
