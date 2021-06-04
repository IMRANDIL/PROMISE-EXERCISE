const container = document.querySelector('.img-container');
const btn = document.querySelector('.btn');

const url = 'https://source.unsplash.com/random';




btn.addEventListener('click', () => {
    randomImage(url).then((data) =>{
       container.appendChild(data);
    }).catch((err) =>{
        console.log(err);
    })
})


function randomImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load', () => {
            resolve(img);
        })

        img.addEventListener('error', () => {
            reject(new Error(`Oh no something is wrong !`))
        })

        img.src = url;
    })
}