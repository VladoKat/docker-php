
function onSubmit(event){
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '../php/multiple_file_upload.php', true);
    const FD = new FormData( event.target );
    console.log(event.target);
    
    console.log(FD);
    
    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("successful pin save");
        }
    }
    xhr.send(FD);
}

function listImages() {
    // AJAX CALL
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
           var pathToFolder = '../uploads/' + groupName;
           console.log(pathToFolder);
           console.log(xhr.responseText);
           generate360Picture(pathToFolder, xhr.responseText.split('\n'));
        }
    }
    console.log(groupName);
    xhr.open('GET', '../php/get_img_annotations.php?groupName=' + groupName, true);
    xhr.send(null);
}

function generate360Picture(pathToFolder, annotations){
    console.log("Doing loadin");
    console.log(pathToFolder);
    console.log(annotations);
    document.getElementById("index").style.display = "none";
    document.getElementById("picture").style.display = "block";
    start(pathToFolder);
    for(var i = 0 ; i < annotations.length - 1; i++){
        annotationMeta = annotations[i].split(';');
        annotationText = annotationMeta[0];
        annotationX = annotationMeta[1];
        annotationY = annotationMeta[2];
        annotationZ = annotationMeta[3];
        
        loadPin([parseFloat(annotationX), parseFloat(annotationY), parseFloat(annotationZ)], annotationText);
    }
    
    console.log("after init");
}

function changeVisibility(){
    document.getElementById("index").style.display = "block";
    document.getElementById("picture").style.display = "none";
    removeAllAnnotations();
}

function removeAllAnnotations()
{
    var element = document.getElementById("annotations");
    while(element.firstChild)
    {
        element.removeChild(element.firstChild);
    }
    globalIndex = 0;
    drawData = [];
    pinsCoords = [];
    pinsText = [];
}