export const authenticate = (data:any,next:any) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('strngr', JSON.stringify(data))
        next()

        
    }

}

export const isAuthenticated = () => {
    if(typeof window == 'undefined')  {
        return false
    }

    if (localStorage.getItem('strngr')){
        
        return (true)
        
    }else{
        return false;
    }
}