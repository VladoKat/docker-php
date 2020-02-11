function listImages() {
    // AJAX CALL
    var xhr = new XMLHttpRequest();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var list = document.getElementById('img_names_ul');
            var entry = document.createElement('li');
            entry.addEventListener("click", myScript);
            entry.innerHTML = xhr.responseText;
            list.appendChild(entry);
        }
    }
    xhr.open('GET', '../php/get_img_names.php', true);
    xhr.send(null);
    console.log(xhr);
    
    return false;
}

function myScript(){
    console.log("hello");
}