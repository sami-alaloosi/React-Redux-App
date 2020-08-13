import React from "react"
import {useSelector} from "react-redux"

import {axiosCall} from "../store/githubUsers"



import {valueChanger} from "../store/githubUsers"
import {valueClearing} from "../store/githubUsers"
import store from "../store/store"

const Form = () => {
    
    const text = useSelector(state => state.text)
        
    const onChange = (event) => {
        const {value} = event.target
       
        store.dispatch(valueChanger(value))
    }
    console.log(text)

    const onSubmit = (event) => {
        event.preventDefault()
        store.dispatch(axiosCall(text.inputvalue))
        store.dispatch(valueClearing())
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="text">
                    <input
                        type="text"
                        id="text"
                        name="text"
                        placeholder="Enter Github Username"
                        onChange ={onChange}
                        value={text.inputvalue}
                     />
                </label>
                <button type="submit">Search!</button>
            </form>
        </div>
    )
}




export default (Form);

