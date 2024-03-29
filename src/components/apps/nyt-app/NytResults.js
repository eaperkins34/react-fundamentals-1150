import React from 'react';

const NytResults = (props) => {
    return (
        <div>
            {props.results.map(result => {
                return (
                    <div key={result._id}>
                        <h2>{result.headline.main}</h2>
                        {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                        <p>
                            {result.snippet}
                            <br />
                            {result.keywords.length > 0 ? ' Keywords: ' : ''}
                        </p>
                        <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                        </ul>                        
                        <a href={result.web_url}><button>Read It</button></a>
                    </div>
                )
            })}
            <div>
                <button onClick={e => props.changePage(e, 'down')}>Previous 10</button>
                <button onClick={e => props.changePage(e, 'up')}>Next 10</button>
            </div>
        </div>
    )}



export default NytResults

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.map((el, i) => {
//     return el + 2;
// }) 

// console.log(newArr);  // map performs the exact same process on each element(el) in the array
