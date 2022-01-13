const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery')

const galleryItems = images
  .map(item => {
    const pictureItem = document.createElement('li');
    pictureItem.setAttribute('class', 'gallery-item');
        pictureItem.insertAdjacentHTML(
            'beforeend',
            `<img src="${item.url}" alt="${item.alt}" width="250">`,
        );
        

        return pictureItem;
  });
    console.log(galleryItems)

gallery.append(...galleryItems);
     
gallery.style.display = "flex";
gallery.style.listStyle = "none";
gallery.style.justifyContent = "space-between";
gallery.style.alignItems = "center";


