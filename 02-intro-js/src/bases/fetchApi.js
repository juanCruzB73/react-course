const apiKey='ZOUs6vfJgSd5SotrY4oHj3zfKsDCgiZ3';

const httpCall=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall.then(res=>res.json())
        .then(({data})=>{
            const {url}=data.images.original;
            
            const img=document.createElement('img');
            img.src=url

            document.body.append(img)
        })
