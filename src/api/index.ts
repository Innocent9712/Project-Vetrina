import { ResponseInterface } from "../interfaces";

const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
		'X-RapidAPI-Key': '2e4602c497mshe1d72ab11a5b78cp12126cjsn6f9788d3e6b4'
	}
};

const getRandomReadTime = (): string => {
        const rand = Math.floor(Math.random() * (12 - 3)) + 3;
        return `Estimated reading: ${rand} mins`
}

export const bingApi = async (setStateFnc: React.Dispatch<React.SetStateAction<ResponseInterface[]>>, api: string) => {

    try {
        const arr: ResponseInterface[] = []
        const response = await fetch(api, options)
        const headlines = await response.json()
        headlines?.value?.forEach((element: any) => {
            const tempObj: ResponseInterface = {
                img: element?.image?.url ?? 'no image', 
                title: element?.name ?? 'no name',
                description: element?.query?.text ?? 'no description',
                url: element?.webSearchUrl ?? 'no url',
                readTime: getRandomReadTime()
            };

                arr.push(tempObj)
            });
                setStateFnc(arr);
    } catch (err) {
        // console.error(err)
    }
}