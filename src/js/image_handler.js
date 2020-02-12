function listImages() {
    // AJAX CALL
    var xhr = new XMLHttpRequest();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var list = document.getElementById('img_names_ul');
            list.innerHTML = '';
            var arrImgs = xhr.responseText.split("\n");
            console.log(arrImgs);
            
            arrImgs.forEach(imgText => {
                console.log(imgText);
                if(imgText != ""){
                    var entry = document.createElement('li');
                    entry.addEventListener("click", handleClickOnImg);
                    entry.innerHTML = imgText;
                    list.appendChild(entry);
                }
            });
        }
    }
    xhr.open('GET', '../php/get_img_names.php', true);
    xhr.send(null);
    console.log(xhr);
    
    return false;
}

function handleClickOnImg(event){
    console.log(event.srcElement.innerText);
    console.log(event);
    var groupName = event.srcElement.innerText.split('\n')[0];
    console.log(groupName);
    console.log(loadPictureWithGroupName(groupName));
}


function loadPictureWithGroupName(groupName){
    var xhr = new XMLHttpRequest();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
           console.log(xhr);
           var imgElement = document.getElementById('imgToLoad');
           var pathToFolder = 'uploads/' + xhr.responseText;
        //    imgElement.src = 
           console.log(pathToFolder);
        }
    }
    console.log(groupName);
    xhr.open('GET', '../php/get_img_annotations.php?groupName=' + groupName, true);
    xhr.send(null);
}