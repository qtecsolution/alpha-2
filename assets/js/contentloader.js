
let contentLoader=document.getElementsByClassName('ph-item');
let loadedContent=document.getElementsByClassName('loaded-content'); 
let aside=document.getElementsByTagName('aside');

for(item of aside) {
    item.classList.add('bg-white')
    item.classList.remove("bg-[url('../../assets/images/home/sidebarbg.png')]");
}

// Hide content loader after 3 second
setTimeout(skeletoHide, 1500); 
//  hide content loader when window is loaded 
// window.addEventListener('DOMContentLoaded', (event) => {
//     skeletoHide()
// });


for(item of loadedContent) {
    item.style.display='none'
}


function skeletoHide () {
    for(item of contentLoader) {
    item.style.display='none'
} 
for(item of loadedContent) {
    item.style.display='block'
} 
for(item of aside) {
    item.classList.add("bg-[url('../../assets/images/home/sidebarbg.png')]")
    item.classList.remove("bg-white");
}

}
