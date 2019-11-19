
export default class GalleryService {

    getPhotos = async(page, id) => {
        const typeUrl = id? "collections/3330452/" : "";
        return await new Promise ( (resolve) => {
            setTimeout( async() => {
                const res =  await fetch(`https://api.unsplash.com/${typeUrl}photos?page=${page}&per_page=20`, {
                    method: "get",
                    headers: {
                        "Authorization": "Client-ID 99aa29721be8725cd51cb5638abd4b5b3e5d6c0cebbf5dea3541ecffc3212ac7"
                    }
                });
                const result = await res.json();
                resolve(result)
            }, 0)
        })
    }
}

// const service = new GalleryService();

// service.getPhotos()
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// collections/3330452/