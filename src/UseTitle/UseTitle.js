import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -Sports Lens`
    }, [title])
}

export default useTitle