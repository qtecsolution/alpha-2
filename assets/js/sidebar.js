// SIDEBAR EXPANDE FUNCTION
const toggleSidebar = () => { 
        
    document.body.classList.toggle("open")
    if(document.body.classList.contains('open')) {
        // SET BODY  OPEN CLASS IN LOCALSTORAGE
    localStorage.setItem('dmsclass','open') 
}else {
        // SET BODY EMPTY CLASS IN LOCALSTORAG
    localStorage.setItem('dmsclass','empty') 

}
}

let bodyclass=localStorage.getItem('dmsclass');
document.body.classList.replace(document.body.classList[0],bodyclass)

function accordion() {
    return {
        selected: null
    }
}
