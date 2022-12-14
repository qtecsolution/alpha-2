
//     const hamburger=document.getElementById('hamburger');
// const sidebar=document.getElementById('sidebar');
// const items=document.querySelectorAll('a .text');
// const logo=document.getElementById("sidebarlogo");
// const li=document.querySelectorAll('ul li')
// hamburger.addEventListener('click',()=>{ 

//     // shrink sidebar 
//     if (sidebar.classList.contains('w-72')) {
//         sidebar.classList.remove('w-72');
//         sidebar.classList.add("w-20");
//                 for (item of items) {
//                     item.style.opacity='0'
//                     item.style.display='none'
//                     item.style.visibility = "hidden";
//                     logo.style.display='none'
//         } 

//         for(item of li ) {
//     if(item.classList.contains('mr-6')){
//         item.classList.remove('mr-6')
//     }
// }

        
//     } else {

//         // expand sidebar 
//         sidebar.classList.remove('w-20');
//         sidebar.classList.add('w-72');
//         for (item of items) {
//             item.style.opacity='1'
//             item.style.display='flex'
            
//             item.style.visibility = "visible";
//             logo.style.display='flex'
//         }
//         for(item of li ) {
//     if(item.classList.contains('mr-6')==false){
//         item.classList.add('mr-6')
//     }
// }
//     }
// })


// // default if full sidebar 
// if(sidebar.classList.contains('w-72')) {
//     for (item of items) {
//              item.style.opacity='1'
//              item.style.visibility = "visible";
//              logo.style.display='block'
//         }
// } else {
// //   if half sidebar 
//     for (item of items) {
//                 item.style.opacity='0'
//                 item.style.visibility = "hidden";
//                 logo.style.display='none'
                
//         } 

//         for(item of li ) {
//     if(item.classList.contains('mr-6')){
//         item.classList.remove('mr-6')
//     }
// }
// } 


function accordion() {
    return {
        selected: null
    }
}
