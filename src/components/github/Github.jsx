import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Parasdheeraj')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    return(
        
        <div> 
            <img src={data?.avatar_url} alt="Git picture" width={300} /><span className='text-center m-4  p-4 text-3xl'> {data?.login}</span>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}</div>
        </div>
  
    )
}

export default Github

export const GetGitHubData = async() => {
    const resp = await fetch('https://api.github.com/users/Parasdheeraj')
    return resp.json()
}
