import { render, screen } from '@testing-library/react';
import { VisitorBottom } from '../Layout/Main/DashboardContent/Visitor/VisitorBottom';
import { VisitorContent } from '../Layout/Main/DashboardContent/Visitor/VisitorContent';
import { VisitorTop } from '../Layout/Main/DashboardContent/Visitor/VisitorTop';
import {CardBody} from './CardBody'

test('should render the card body components', () => { 
    render(
        <CardBody>
            {/* Re write the test */}
        </CardBody>
    )

    /* eslint-disable no-debugger */
    screen.debug() // eslint-disable-line no-debugger
    /* eslint-enable no-debugger */
})