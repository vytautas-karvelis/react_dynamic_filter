import React, { forwardRef } from 'react'

const SearchInput = ({display, setDisplay, current, setKeyword}, ref) => {

    //when keyowrd changes, filter
    const filter = (keyword) => {
        let filtered = current.filter(item=>item.title.includes(keyword)).slice(0,10)
        setDisplay(filtered)

        setKeyword(keyword)
    }

    return (
        <input type="text" onChange={(e)=>filter(e.target.value)} ref={ref}>
            
        </input>
    )
}

export default forwardRef(SearchInput)
