window.onload=function(){
    var btn= document.getElementById("contact");
    var form= document.getElementById("form_contact");
btn.onclick = function(){
    if (form.style.display==="none"){
        form.style.display="flex";
    }
    else{
        form.style.display="none";
    }
    };
};
