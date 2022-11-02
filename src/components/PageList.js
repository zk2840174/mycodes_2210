import React from 'react';

function PageList ({data, setSearchParam})  {

    const {prev,next, start, end, page, size} = data

    const pageNumberArr = []

    if(prev) {
        pageNumberArr.push(<span key={start -1} onClick={() => setSearchParam({page:start-1, size:size})}> PREV </span>)
    }

    for(let i = start; i <= end; i++){
        pageNumberArr.push(<span key={i} onClick={() => setSearchParam({page:i, size:size})}> {i} </span>)
    }

    if(next) {
        pageNumberArr.push(<span key={end +1 } onClick={() => setSearchParam({page:end +1, size:size})}> NEXT </span>)
    }

    return pageNumberArr
}

export default PageList;