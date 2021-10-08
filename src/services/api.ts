

export const fetcher =  (url:string) => {
    return fetch(process.env['REACT_APP_BASE_URL'] + url);
}