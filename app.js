
const URL = "https://random.dog/woof.json"

const button = document.getElementById("button");
const contenedor = document.getElementById("contenedor");


const fetchData = async(api)=>{
    const res = await fetch(api);
    const data = await res.json();
    return data;
}

const getCharacter = async()=> {
const data = await fetchData(URL);

console.log(data);
const tarjeta = document.createElement('div');
const imagen = document.createElement('img');
const video = document.createElement('video');

if (/.(jpg)$/i.test(data.url)) {
    imagen.setAttribute('src',data.url);
    imagen.setAttribute('alt',data.fileSizeBytes);
    tarjeta.appendChild(imagen);
    contenedor.appendChild(tarjeta);
}
else if (/.(mp4)$/i.test(data.url)) {
    video.setAttribute('src',data.url);
    video.setAttribute('alt',data.fileSizeBytes);
    video.setAttribute('Autoplay',true)
    video.setAttribute('Loop',true)
    tarjeta.appendChild(video);
    contenedor.appendChild(tarjeta);
}
else if (/.(png)$/i.test(data.url)) {
    imagen.setAttribute('src',data.url);
    imagen.setAttribute('alt',data.fileSizeBytes);
    tarjeta.appendChild(imagen);
    contenedor.appendChild(tarjeta);
}

tarjeta.setAttribute('class',"tarjetas");

}

button.addEventListener('click',getCharacter);


