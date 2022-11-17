const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
const itemTemplate = `<a href="" 
class="example" 
data-rbox-image="{{url}}" 
data-rbox-caption="{{title}}"
data-rbox-series="gallery">
<img src="{{thumbnailUrl}}"  alt="{{title}}"/>
</a> `;
const containerEl = $('.container');
let itemsList = [];

fetchItems();


function fetchItems() {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
        itemsList = data;
        renderList(itemsList);
        initGallery();
    });
}


function initGallery(){
    $(".example").rbox({
        'type': 'image',
      })
    
}

function renderList(list) {
    
    const html = list.map(generateItemHtml).join('');
    return containerEl.append(html);
}

function generateItemHtml(item) {
    return interpolate(itemTemplate, item)
}









