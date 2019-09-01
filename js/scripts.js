$(document).ready(function() {
    //MAGNIFIC POPUP
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        //gallery
        gallery : {enabled: true}
        // other options
    });
});