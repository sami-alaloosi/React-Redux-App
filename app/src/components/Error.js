import React from "react"
import {useSelector} from "react-redux"

const Error = () => {
    const error = useSelector(state=> state.error )
    

  
    return (
        <div className={error === ""? "noShow" : "erroShow" }>
            <div>{error}</div>
        </div>
    )
}
export default Error