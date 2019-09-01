$(document).ready(function() {
    //MAGNIFIC POPUP
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        //galery
        gallery : {enabled: true}
        // other options
    });
});