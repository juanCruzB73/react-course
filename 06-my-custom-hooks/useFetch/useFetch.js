import { useState,useEffect } from "react";
const localCache={}
export const useFetch = (url) => {


    const [state, setState] = useState(
        {
            data:null,
            isLoading:true,
            hasError:false,
            error:null,
        }
    )
    
    useEffect(()=>{
        getFetch()
    },[url]);

    const setLoadingState=()=>{
        setState({
            data:null,
            isLoading:true,
            hasError:false,
            error:null,
        })
    };

    const getFetch=async()=>{

        if( localCache[url] ){
            console.log("usando cache")
            setState({
                data:localCache[url],
                isLoading:false,
                hasError:false,
                error:null
            })
            return
        }

        setLoadingState();
        const answ = await fetch(url);
        await new Promise(resolve=>setTimeout(resolve,1500))
        if(!answ.ok){
            setState({
                data:null,
                isLoading:false,
                hasError:true,
                error:{
                    code: answ.status,
                    message:answ.status,
                },
            })
            //si hay un error corta la ejecucion
            return;
        }
        const data = await answ.json();

        setState({
            data:data,
            isLoading:false,
            hasError:false,
            error:false,
        });

        //manejo del cache
        localCache[url]=data;

    }
    

    return {
        data:state.data,
        isLoading:state.isLoading,
        hasError:state.hasError,
    }
}
