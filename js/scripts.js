$(document).ready(function() {
    //MAGNIFIC POPUP
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        //galery
        gallery:{enabled:true},
    });
});



const size = document.getElementsById('size')
const crust = document.getElementsById('crust')
const form = document.getElementsById('form')
const errorElement = document.getElementsById('error')



form.addEventlistener('submit', (e) => {
    let messages = []
    if (size.value === '' || size.value == null) {
        messages.push('rada')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }   
});
