
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('body').toggleClass('night')
    })
});

var referencesphoto = document.getElementById("referencesphoto");
        
        referencesphoto.addEventListener("click",function(){
            var imgSrc=referencesphoto.getAttribute("src");
            if (imgSrc==="images/clientbackground.jpg"){
                referencesphoto.setAttribute("src","images/client2background.jpg");
            }
            else if (imgSrc==="images/client2background.jpg")
            {
                referencesphoto.setAttribute("src", "images/client3background.jpg");
            } else if (imgSrc==="images/client3background.jpg") {
                referencesphoto.setAttribute("src", "images/client4background.jpg");
            } else {
                referencesphoto.setAttribute("src","images/clientbackground.jpg");}
        })


