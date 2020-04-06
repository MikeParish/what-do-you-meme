/* from github */
export default function myFetch(url) {
    return fetch(url, { })
        .then(x=> x.json() ); /* entire request object returned */
}