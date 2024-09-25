export const getGifs= async (category)=>{
    
    const httpCall = `https://api.giphy.com/v1/gifs/search?api_key=JUmOlqeUHLdfI0fJrBTDjq9QPPtQXRwk&q=${category}&limit=10`;
    const answer=await fetch(httpCall);
    const {data}=await answer.json();
    const gifs=data.map(({id,title,images})=>({
        id: id,
        title: title,
        url: images.downsized_medium.url,
    }))
    return gifs
    //console.log(gifs)
}
