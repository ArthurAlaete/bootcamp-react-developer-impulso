const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const chageCatButton = document.querySelector('#change-cat');
const catIMG = document.querySelector('#cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL)
        console.log(data)
        const json = await data.json();
    
        return json.webpurl
    } catch (err) {
        console.log(err.message);
    }
}

const loadImg = async () => {
    catIMG.src = await getCats();
}

chageCatButton.addEventListener('click', loadImg);
loadImg();