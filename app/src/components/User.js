import React from "react"
import {useSelector} from "react-redux"

 const User =() => {
     const githubUser = useSelector(state => state.githubUser)
    //  console.log(githubUser)
    //  console.log(githubUser.login)
return(
    <div className={githubUser.login !== undefined? "show" : "noShow"}>
    <img src={githubUser.avatar_url} alt={githubUser.login} />
        <div>Name: {githubUser.login} </div>
        <div>followers: {githubUser.followers}</div>
        <div>following: {githubUser.following}</div>

    </div>
)

}


export default User