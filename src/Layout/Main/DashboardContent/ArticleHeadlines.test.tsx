import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { DefaultRequestBody, rest } from 'msw'
import { setupServer } from 'msw/node'
import { ResponseInterface } from '../../../interfaces'
import { ArticleHeadlines } from './ArticleHeadlines';

type SampleInterface = {
    id: string;
    title: string;
    img: string;
    description: string;
    url: string;
    readTime: string;
    error? : string;
} | {id: string; error: string}

let resourceStatus = true;


const server = setupServer(
    rest.get<DefaultRequestBody, SampleInterface>('https://bing-news-search1.p.rapidapi.com/news/trendingtopics',(req, res, ctx) => {
        // req.url.searchParams.getAll('textFormat=Raw&safeSearch=Off')
        return res(
            ctx.status(200),
            ctx.json({
                id: '1',
                title: 'Fake Title',
                img: 'https://fakeImage.com',
                description: 'Fake description',
                url: 'http://fakeUrl.com',
                readTime: 'Estimated reading: 5 mins'
            })
        )
    })
)

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Mount Article Headline component and', () => { 
    beforeEach(()=> {
        render(<ArticleHeadlines />)
    })
    it('check that the skeleton loading placeholder is there',async () => {
        screen.queryByTestId(/skeleton/i)
    })

    it('checks that api response is received', () => {
        // await waitForElementToBeRemoved(screen.queryByTestId(/skeleton/i))
        expect(screen.getByText('Fake Title')).toBeInTheDocument()
    })
 })