import axios from "axios"


// actions

const CALL_SUCCESS = "CALL_SUCCESS"
const FITCHING_START = "FITCHING_START"
const CALL_FAILURE = "CALL_FAILURE"

const VALUE_CHANGER = "VALUE_CHANGER"

const VALUE_CLEAR = "VALUE_CLEAR"


// action creatores

 export const axiosCall =(inputvalue) => dispatch => {
    


    dispatch({type: FITCHING_START})

    axios.get(`https://api.github.com/users/${inputvalue}`)
    .then(res =>{
        
        dispatch({type: CALL_SUCCESS, paylaod: res.data})
    })
    .catch(e => {
        console.log( "here's the message",e)

        dispatch({type: CALL_FAILURE})
        
        // nee to conclelog the resulet
    })

}



export const valueChanger = (values) => {
    return {
        type: VALUE_CHANGER,
         payload: values
    }
}

export const valueClearing = () => {
    return {
        type: VALUE_CLEAR
    }
}

// initailstate 

const initailstate = {
    githubUser: {},
    error: "",
    isFetchiong: false,
    text:{inputvalue: ""}
}


//resucer

const githubReducer = (state = initailstate, action ) => {

    switch(action.type){
        case FITCHING_START: 
        return {
            ...state,
            error: '',
            isFetchiong: true,
            githubUser: {}

        }
        case CALL_SUCCESS:
            return {
                ...state,
                error: '',
                isFetchiong: false,
                githubUser: action.paylaod
            }

            case CALL_FAILURE:
                return {
                    ...state,
                    isFetchiong: false,
                    error: "Request failed with status code 404",
                    githubUser: {}
                }


                case VALUE_CHANGER: 
                return {
                    ...state, 
                    text: {...state.text, inputvalue: action.payload}
                    
                    
                }

                case VALUE_CLEAR: 
                return {
                    ...state,
                    text: {...state.text, inputvalue: "" }
                }

                default: return state
    }
}


export default githubReducer;