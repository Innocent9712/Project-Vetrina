import { render, screen } from '@testing-library/react';
import { VisitorBottom } from '../Layout/Main/DashboardContent/Visitor/VisitorBottom';
import { VisitorContent } from '../Layout/Main/DashboardContent/Visitor/VisitorContent';
import { VisitorTop } from '../Layout/Main/DashboardContent/Visitor/VisitorTop';
import {CardBody} from './CardBody'
import { StatisticCard } from './StatisticCard';


test('should render the card body components', () => { 
    render(
        <CardBody>
            <StatisticCard top={<VisitorTop />} content={<VisitorContent />} bottom={<VisitorBottom />} />
        </CardBody>
    )

    /* eslint-disable no-debugger */
    screen.debug() // eslint-disable-line no-debugger
    /* eslint-enable no-debugger */
})