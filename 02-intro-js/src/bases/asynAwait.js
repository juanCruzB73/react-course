const getImage=async()=>{
    try{
        const apiKey='ZOUs6vfJgSd5SotrY4oHj3zfKsDCgiZ3';
        const httpCall=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data}=await httpCall.json();
        const {url}=data.images.original;   
        const img=document.createElement('img');
        img.src=url
        document.body.append(img)
    }catch(error){
        console.log(error)
    }
}
getImage();