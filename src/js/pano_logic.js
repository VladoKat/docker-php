// небесен куб - конструктор
var pictureGroupName;
var colorStep = 1/255;
Skybox = function(center,size)
{	
    // върхове
    var v = [ [+5,-5,-5], [+5,+5,-5],
                [-5,+5,-5], [-5,-5,-5],
                [+5,-5,+5], [+5,+5,+5],
                [-5,+5,+5], [-5,-5,+5] ];
                
    // общ списък на съвпадащи координати на връх и тексел		
    var dataTex = [].concat(
                v[0], v[1], v[4], // предна стена
                v[4], v[1], v[5],
                v[6], v[2], v[7], // задна стена
                v[7], v[2], v[3], 
                v[5], v[1], v[6], // дясна стена 
                v[6], v[1], v[2], 
                v[4], v[7], v[0], // лява стена 
                v[0], v[7], v[3], 
                v[4], v[5], v[7], // горна стена
                v[7], v[5], v[6], 
                v[0], v[3], v[1], // долна стена 
                v[1], v[3], v[2] ); 
        
    
    var data = [];
    var step = 10/120;
    this.positions = new Map();
    
    var r = 0;
    var g = 0;
    var b = 0;
    
    //back side
    for(var i = 5; i > -5; i -= step)
    {
        for(var j = -5; j < +5; j += step)
        {
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [(3*j + step)/3, 5, (3*i - 2*step)/3]);
            data.push(j, 5, i - step, 0, -1, 0, r, g, b);
            data.push(j + step, 5, i - step, 0, -1, 0, r, g, b);
            data.push(j, 5, i, 0, -1, 0, r, g, b);
            
            //console.log(r*255, g*255, b*255);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    r += colorStep;
                }
            }
            
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [(3*j + 2*step)/3, 5, (3*i - step)/3]);
            data.push(j, 5, i, 0, -1, 0, r, g, b);
            data.push(j + step, 5, i - step, 0, -1, 0, r, g, b);
            data.push(j + step, 5, i, 0, -1, 0, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    r += colorStep;
                }
            }
        }
    }
    
    
    //front side
    for(var i = 5; i > -5; i -= step)
    {
        for(var j = -5; j < +5; j += step)
        {
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [(3*j + step)/3, -5, (3*i - 2*step)/3]);
            data.push(j, -5, i - step, 0, 1, 0, r, g, b);
            data.push(j + step, -5, i - step, 0, 1, 0, r, g, b);
            data.push(j, -5, i, 0, 1, 0, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    g = 0;
                    r += colorStep;
                }
            }
            
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [(3*j + 2*step)/3, -5, (3*i - step)/3]);
            data.push(j, -5, i, 0, 1, 0, r, g, b);
            data.push(j + step, -5, i - step, 0, 1, 0, r, g, b);
            data.push(j + step, -5, i, 0, 1, 0, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    g = 0;
                    r += colorStep;
                }
            }
        }
    }
    
    //right side
    for(var i = 5; i > -5; i -= step)
    {
        for(var j = -5; j < +5; j += step)
        {
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [5, (3*j + step)/3, (3*i - 2*step)/3]);
            data.push(5, j, i - step, -1, 0, 0, r, g, b);
            data.push(5, j + step, i - step, -1, 0, 0, r, g, b);
            data.push(5, j, i, -1, 0, 0, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    g = 0;
                    r += colorStep;
                }
            }
            
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [5, (3*j + 2*step)/3, (3*i - step)/3]);
            data.push(5, j, i, -1, 0, 0, r, g, b);
            data.push(5, j + step, i - step, -1, 0, 0, r, g, b);
            data.push(5, j + step, i, -1, 0, 0, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    g = 0;
                    r += colorStep;
                }
            }
        }
    }
    
    // left side
    for(var i = 5; i > -5; i -= step)
    {
        for(var j = 5; j > -5; j -= step)
        {
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [-5, (3*j - step)/3, (3*i - 2*step)/3]);
            data.push(-5, j, i - step, 1, 0, 0, r, g, b);
            data.push(-5, j - step, i - step, 1, 0, 0, r, g, b);
            data.push(-5, j, i, 1, 0, 0, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    g = 0;
                    r += colorStep;
                }
            }
            
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [-5, (3*j - 2*step)/3, (3*i - step)/3]);
            data.push(-5, j, i, 1, 0, 0, r, g, b);
            data.push(-5, j - step, i - step, 1, 0, 0, r, g, b);
            data.push(-5, j - step, i, 1, 0, 0, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    g = 0;
                    r += colorStep;
                }
            }
        }
    }
    
    
    //top side
    for(var i = 5; i > -5; i -= step)
    {
        for(var j = -5; j < +5; j += step)
        {
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [(3*j + step)/3, (3*i - 2*step)/3, 5]);
            data.push(j, i - step, 5, 0, 0, -1, r, g, b);
            data.push(j + step, i - step, 5, 0, 0, -1, r, g, b);
            data.push(j, i, 5, 0, 0, -1, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    g = 0;
                    r += colorStep;
                }
            }
            
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [(3*j + 2*step)/3, (3*i - step)/3, 5]);
            data.push(j, i, 5, 0, 0, -1, r, g, b);
            data.push(j + step, i - step, 5, 0, 0, -1, r, g, b);
            data.push(j + step, i, 5, 0, 0, -1, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    g = 0;
                    r += colorStep;
                }
            }
        }
    }
    
    
    //bottom side
    for(var i = 5; i > -5; i -= step)
    {
        for(var j = -5; j < +5; j += step)
        {
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [(3*j + step)/3, (3*i - 2*step)/3, -5]);
            data.push(j, i - step, -5, 0, 0, 0, r, g, b);
            data.push(j + step, i - step, -5, 0, 0, 0, r, g, b);
            data.push(j, i, -5, 0, 0, 0, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    g = 0;
                    r += colorStep;
                }
            }
            
            this.positions.set(Math.round(r*255) << 16 | Math.round(g*255) << 8 | Math.round(b*255), [(3*j + 2*step)/3, (3*i - step)/3, -5]);
            data.push(j, i, -5, 0, 0, 0, r, g, b);
            data.push(j + step, i - step, -5, 0, 0, 0, r, g, b);
            data.push(j + step, i, -5, 0, 0, 0, r, g, b);
            
            b += colorStep;
            if(b > 1.0)
            {
                b = 0;
                g += colorStep;
                if(g > 1.0)
                {
                    g = 0;
                    r += colorStep;
                }
            }
        }
    }
                
    globalV = v;
    globalData = data;
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    var buf1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,buf1);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(dataTex), gl.STATIC_DRAW);
    this.buf = buf;
    this.buf1 = buf1;
    this.center = center;
    this.size = size;
    this.texture = undefined; // неизвестна текстура
    this.trianglePoints = data.length;
    console.log(data.length);
}

// небесен куб - метод за рисуване
Skybox.prototype.draw = function(flag)
{	
    pushMatrix();
        translate(this.center);
        scale([this.size,this.size,this.size]);
        xRotate(-90);
        useMatrix();
        
        //gl.vertexAttrib3fv(aColor,[1, 0, 0]);
        //gl.bindBuffer(gl.ARRAY_BUFFER,this.buf);
        gl.enableVertexAttribArray(aXYZ);
        if(flag)
        {
            gl.bindBuffer(gl.ARRAY_BUFFER,this.buf);
            gl.uniform1i(uUseTexture,false);
            gl.vertexAttribPointer(aXYZ,3,gl.FLOAT,false,9*FLOATS,0*FLOATS);
            gl.enableVertexAttribArray(aNormal);
            gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 9*FLOATS, 3*FLOATS);
            gl.enableVertexAttribArray(aColor);
            gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 9*FLOATS, 6*FLOATS);
            gl.drawArrays(gl.TRIANGLES, 0, this.trianglePoints / 9);
            gl.disableVertexAttribArray(aNormal);
            gl.disableVertexAttribArray(aColor);
        }
        else
        {
            gl.bindBuffer(gl.ARRAY_BUFFER,this.buf1);
            gl.uniform1i(uUseTexture,true);
            // казваме къде са текстурите, ако всичките 6 са вече заредени
            gl.vertexAttribPointer(aXYZ,3,gl.FLOAT,false,3*FLOATS,0*FLOATS);
            if (gl.isTexture(this.texture) && !this.texture.count)
            {
                gl.bindTexture(gl.TEXTURE_CUBE_MAP,this.texture);
                gl.drawArrays(gl.TRIANGLES,0,36);
            }
        }
        /*
        //gl.vertexAttribPointer(aXYZ,3,gl.FLOAT,false,3*FLOATS,0*FLOATS);
        gl.vertexAttribPointer(aXYZ,3,gl.FLOAT,false,9*FLOATS,0*FLOATS);
        gl.enableVertexAttribArray(aNormal);
        gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 9*FLOATS, 3*FLOATS);
        gl.enableVertexAttribArray(aColor);
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 9*FLOATS, 6*FLOATS);
        // казваме къде са текстурите, ако всичките 6 са вече заредени
        //if (gl.isTexture(this.texture) && !this.texture.count)
        //{
        //	gl.bindTexture(gl.TEXTURE_CUBE_MAP,this.texture);
        //	gl.drawArrays(gl.TRIANGLES,0,36);
        //}
        gl.drawArrays(gl.TRIANGLES, 0, this.trianglePoints / 9);*/
    popMatrix();
}

// създаване на празна кубична текстура
function texture3D()
{
    var texture = gl.createTexture();
    texture.count = 6;
    return texture;
}

// заявка за зареждане на една от 6-те текстури на кубична подтекстура
function loadTexture3D(texture,side,url)
{
    var image = new Image();
    image.onload = function()
    {
        imageLoaded3D(texture,image,side);
    };
    image.src = url;
}
    
// функция, която се извиква при зареждането на кубична текстура
function imageLoaded3D(texture,image,side)
{
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
//			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
    gl.texImage2D(side, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    texture.count--;
    if (texture.count==0)
    {
        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    }
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
}

function start(folderPath, annotations)
{
    let folderPathArray = folderPath.split('/');
    console.log(folderPathArray + "sss");
    
    pictureGroupName = folderPathArray[folderPathArray.length-1]
    console.log("group name: " + pictureGroupName);
    
    var	canvas = document.getElementById("picasso");
    canvas.addEventListener('webglcontextlost',function(event){event.preventDefault();},false);
    canvas.addEventListener('webglcontextrestored',function(){init();},false);

    init(folderPath, annotations);
    drawFrame();
}

function init(folderPath, annotations)
{
    console.log("init called");
    
    gl = getContext("picasso");
    glprog = getProgram(vShader,fShader);
    getVariables();

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(1,1,1,1);

    identity();
    gl.canvas.width = gl.canvas.offsetWidth;
    gl.canvas.height = gl.canvas.offsetHeight;
    gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
    perspective(30,gl.canvas.width/gl.canvas.height,1,40000);
    gl.uniform1i(uUseNormalMatrix,false);
    gl.uniform3f(uAmbientColor,1,1,1);

    // използваме модул №0 за текстури
    gl.activeTexture(gl.TEXTURE0);
    gl.uniform1i(uTexUnit, 0);

    // дефиниране на небесен куб 
    sky = new Skybox([0,0,0],1);
    
    // зареждане на 6-те текстури
    
    sky.texture = texture3D();
    loadTexture3D(sky.texture,gl.TEXTURE_CUBE_MAP_POSITIVE_X, folderPath + '/posx.jpg');
    loadTexture3D(sky.texture,gl.TEXTURE_CUBE_MAP_NEGATIVE_X, folderPath + '/negx.jpg');
    loadTexture3D(sky.texture,gl.TEXTURE_CUBE_MAP_POSITIVE_Y, folderPath + '/posy.jpg');
    loadTexture3D(sky.texture,gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, folderPath + '/negy.jpg');
    loadTexture3D(sky.texture,gl.TEXTURE_CUBE_MAP_POSITIVE_Z, folderPath + '/posz.jpg');
    loadTexture3D(sky.texture,gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, folderPath + '/negz.jpg'); 

    gl.canvas.addEventListener("mousemove", mouseMove);
    gl.canvas.addEventListener("mousedown", mouseDown);
    gl.canvas.addEventListener("mouseup", mouseUp);
    gl.canvas.addEventListener("dblclick", mouse2Click);
    
    
}


var a=0, b=0, dA=0, dB=0;
var viewA = 0, realA = 0;
var viewB = 0, realB = 0;
var mouseX = 0;
var mouseY = 0;
var mouseZ = 0;
var viewVector = [0, 0, 0];
//var viewD = 30, realD = 10;
var drag = false;
var mousePosition = [];
function mouseMove(event)
{
    dA = (gl.canvas.width/2-(event.clientX-gl.canvas.offsetLeft))/400;
    dB = (gl.canvas.height/2-(event.clientY-gl.canvas.offsetTop))/300;
    // игнорираме движение, ако не влачим
    if (!drag) return;

    var dX = startX-getX(event);
    var dY = startY-getY(event);
    
    if (event.buttons==1)
    {
        // ляв бутон - въртене с ограничение
        viewA -= dX/1150;
        viewB -= dY/1150;
    }
    
    startX = getX(event);
    startY = getY(event);
    //viewA = -(gl.canvas.width/2-(event.clientX-gl.canvas.offsetLeft))/400;
    //viewB = (gl.canvas.height/2-(event.clientY-gl.canvas.offsetTop))/300;
}
function mouseDown(event)
{
    gl.canvas.style.cursor = 'move';
    startX = getX(event);
    startY = getY(event);
    drag = true;
}

function mouseUp(event)
{
    gl.canvas.style.cursor = 'default';
    drag = false;
}

var drawData = [];
var toPickAColor = false;

function mouse2Click(e)
{
    
    mouseX = getX(event)+Math.round(gl.canvas.width/2);
    mouseY = getY(event)+Math.round(gl.canvas.height/2);			
    toPickAColor = true;
}

var globalIndex = 0;
var pinsCoords = [];
var pinsText = [];

function makeHtmlElement (pos)
{
    
    pinsCoords.push([pos, false]);
    var viewMat = viewMatrix([0, 0, 0], viewVector, [0, 0, 1]);
    var projMat = perspMatrix(30,gl.canvas.width/gl.canvas.height,1,40000);
    var m = multiplyMatrix(projMat,viewMat);
    var c=pos;
    var x=m[0]*c[0]+m[4]*c[1]+m[8]*c[2]+m[12];
    var y=m[1]*c[0]+m[5]*c[1]+m[9]*c[2]+m[13];
    var w=m[3]*c[0]+m[7]*c[1]+m[11]*c[2]+m[15];
    var p= gl.canvas;
    var br=p.getBoundingClientRect();
    x=x*p.width/w/2;
    y=y*p.height/w/2;
    var pos2 = [br.left+x+p.width/2+scrollLeft(),br.top-y+p.height/2+scrollTop()];
    
    console.log(pos2);
    
    var div = document.createElement("div");
    
    var txt = document.createElement("textarea");
    var button = document.createElement("button");
    txt.setAttribute("id", "text" + globalIndex);
    button.setAttribute("id", "button" + globalIndex);
    div.setAttribute("id", "div" + globalIndex);
    
    var element = document.getElementById("annotations");
    element.appendChild(div);
    
    div.appendChild(txt);
    div.appendChild(button);
    
    div.style.position = "absolute";
    div.style.left = pos2[0].toString() + 'px';
    div.style.top = pos2[1].toString() + 'px';
    txt.style.color = "black";
    txt.style.fontSize = "18px";
    txt.style.display = "block";
    
    button.style.width = "80px";
    button.style.height = "25px";
    button.textContent = "save";
    button.addEventListener("click", clickSave);

    ++globalIndex;
}

function moveHtlmElements(pos, index, flag)
{
    var viewMat = viewMatrix([0, 0, 0], viewVector, [0, 0, 1]);
    var projMat = perspMatrix(30,gl.canvas.width/gl.canvas.height,1,40000);
    var m = multiplyMatrix(projMat,viewMat);
    var c=pos;
    var x=m[0]*c[0]+m[4]*c[1]+m[8]*c[2]+m[12];
    var y=m[1]*c[0]+m[5]*c[1]+m[9]*c[2]+m[13];
    var z=m[2]*c[0]+m[6]*c[1]+m[10]*c[2]+m[14];
    var w=m[3]*c[0]+m[7]*c[1]+m[11]*c[2]+m[15];
    var p= gl.canvas;
    var br=p.getBoundingClientRect();
    x=x*p.width/w/2;
    y=y*p.height/w/2;
    var pos2 = [br.left+x+p.width/2+scrollLeft(),br.top-y+p.height/2+scrollTop()];
    //console.log(pos2);
    
    var div = document.getElementById("div" + index);
    if(flag || z <= 0 || pos2[0] < p.offsetLeft || pos2[0] > p.offsetLeft + p.width || pos2[1] < p.offsetTop || pos2[1] > p.offsetHeight)
    {
        div.style.visibility = "hidden";
        //console.log("here");
    }
    else
    {
        div.style.visibility = "visible";
        div.style.left = pos2[0].toString() + 'px';
        div.style.top = pos2[1].toString() + 'px';
    }
}

function clickSave(event)
{
    var id = event.target.id;
    var index = id.substring(6, id.length);
    
    var textArea = document.getElementById("text"+index);
    var string = textArea.value;
    var div = document.getElementById("div"+index);
    div.removeChild(textArea);
    div.removeChild(event.target);
    
    var para = document.createElement("div");
    para.setAttribute("id", "text" + index);
    var node = document.createTextNode(string);
    para.appendChild(node);
    div.appendChild(para);
    
    para.style.maxWidth = "200px";
    para.style.color = "black";
    para.style.fontSize = "20px";
    para.style.display = "block";
    para.style.padding = "5px";
    para.style.paddingLeft = "10px";
    para.style.paddingRight = "10px";
    para.style.background = "rgb(255,191,0)";
    para.style.border = "2px solid black";
    para.style.borderRadius = "5px";
    
    pinsText.push(string);
    
    var pos = pinsCoords[index];
    console.log(pos);
    
    var text = pinsText[index];
    savePinToDatabase(pos[0][0], pos[0][1], pos[0][2], text);
}

function savePinToDatabase(x, y, z, text)
{
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '../php/save_pin.php', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("successful pin save");
        }
    }
    console.log("fileGroupName="+ pictureGroupName 
    + "&annotationText=" + text 
    + "&x=" + x
    + "&y=" + y
    + "&z=" + z);
    
    xhr.send("fileGroupName="+ pictureGroupName 
    + "&annotationText=" + text 
    + "&x=" + x
    + "&y=" + y
    + "&z=" + z);
}

var hiddenColorBlue = 0;
var pinMap = new Map();

function loadPin(pos, text)
{
    console.log(pos);
    
    var pin = new Sphere(pos, 0.05);
    pin.hiddenColor[2] = hiddenColorBlue;
    hiddenColorBlue += colorStep;
    drawData.push(pin);
    pinMap.set(Math.round(pin.hiddenColor[0]*255) << 16 | Math.round(pin.hiddenColor[1]*255) << 8 | Math.round(pin.hiddenColor[2]*255), drawData.length - 1);
    //makeHtmlElement(pos);
    pinsCoords.push([pos, false]);
    var viewMat = viewMatrix([0, 0, 0], viewVector, [0, 0, 1]);
    var projMat = perspMatrix(30,gl.canvas.width/gl.canvas.height,1,40000);
    var m = multiplyMatrix(projMat,viewMat);
    var c=pos;
    var x=m[0]*c[0]+m[4]*c[1]+m[8]*c[2]+m[12];
    var y=m[1]*c[0]+m[5]*c[1]+m[9]*c[2]+m[13];
    var w=m[3]*c[0]+m[7]*c[1]+m[11]*c[2]+m[15];
    var p= gl.canvas;
    var br=p.getBoundingClientRect();
    x=x*p.width/w/2;
    y=y*p.height/w/2;
    var pos2 = [br.left+x+p.width/2+scrollLeft(),br.top-y+p.height/2+scrollTop()];
    
    //console.log(pos2);
    
    var div = document.createElement("div");
    
    div.setAttribute("id", "div" + globalIndex);
    
    var element = document.getElementById("annotations");
    element.appendChild(div);
    
    div.style.position = "absolute";
    div.style.left = pos2[0].toString() + 'px';
    div.style.top = pos2[1].toString() + 'px';
    
    var para = document.createElement("div");
    para.setAttribute("id", "text" + globalIndex);
    var node = document.createTextNode(text);
    para.appendChild(node);
    div.appendChild(para);
    
    para.style.maxWidth = "200px";
    para.style.color = "black";
    para.style.fontSize = "20px";
    para.style.display = "block";
    para.style.padding = "5px";
    para.style.paddingLeft = "10px";
    para.style.paddingRight = "10px";
    para.style.background = "rgb(255,191,0)";
    para.style.border = "2px solid black";
    para.style.borderRadius = "5px";
    
    pinsText.push(text);
    
    ++globalIndex;
}

var time = now();
var dT = 0;
function now() { return (new Date()).getTime()/1000; }


//var d=30, toD=0;
var pixelValues = new Uint8Array(4*4);

function drawFrame()
{
    var oldTime = time;
    time = now();
    dT = time-oldTime;
    gl.clear(gl.COLOR_BUFFER_BIT+gl.DEPTH_BUFFER_BIT);
    
    if (viewB>1.5) viewB=1.5;   // вертикално сме винаги в диапазона
    if (viewB<-1.5) viewB=-1.5; // от около -пи/2 до пи/2
    
    var k = 1;
    realA = viewA;
    realB = viewB;
    
    viewVector[0] = -1*cos(realA)*cos(realB);
    viewVector[1] = -1*sin(realA)*cos(realB);
    viewVector[2] = -1*sin(realB);
    
    var scaleFactor = Math.sin(time * 4) / 100 + 0.06;
    
    lookAt([0, 0, 0],[viewVector[0],viewVector[1],viewVector[2]],[0,0,1]);
    //lookAt([-30*cos(a)*cos(b),-30*sin(a)*cos(b),-30*sin(b)],[0, 0, 0],[0,0,1]);
    
    //sky.draw(true);
    if(toPickAColor)
    {
        for(var i = 0; i < drawData.length; ++i)
        {
            drawData[i].draw(scaleFactor, true);
        }
        sky.draw(true);
        gl.readPixels(mouseX, mouseY, 2, 2, gl.RGBA, gl.UNSIGNED_BYTE, pixelValues);
    
        // намираме кой обект е закодиран и в 4-те пиксела
        if (pixelValues[0]==pixelValues[4] && pixelValues[0]==pixelValues[8] && pixelValues[0]==pixelValues[12])
        {
            
            if(pixelValues[0] == 255)
            {
                var index = pinMap.get(pixelValues[0] << 16 | pixelValues[1] << 8 | pixelValues[2]);
                pinsCoords[index][1] = !pinsCoords[index][1];
            }
            else 
            {
                var pos = sky.positions.get(pixelValues[0] << 16 | pixelValues[1] << 8 | pixelValues[2]);
                var xMat = xRotateMatrix(-90);
                pos = transformPoint(xMat, pos);
                var pin = new Sphere(pos, 0.05);
                pin.hiddenColor[2] = hiddenColorBlue;
                hiddenColorBlue += colorStep;
                drawData.push(pin);
                pinMap.set(Math.round(pin.hiddenColor[0]*255) << 16 | Math.round(pin.hiddenColor[1]*255) << 8 | Math.round(pin.hiddenColor[2]*255), drawData.length - 1);
                makeHtmlElement(pos);
            }
            /*
            var pos = sky.positions.get(pixelValues[0] << 16 | pixelValues[1] << 8 | pixelValues[2]);
            var xMat = xRotateMatrix(-90);
            pos = transformPoint(xMat, pos);
            var pin = new Sphere(pos, 0.05);
            pin.hiddenColor[2] = hiddenColorBlue;
            hiddenColorBlue += colorStep;
            drawData.push(pin);
            pinMap.set(Math.round(pin.hiddenColor[0]*255) << 16 | Math.round(pin.hiddenColor[1]*255) << 8 | Math.round(pin.hiddenColor[2]*255), drawData.length - 1);
            makeHtmlElement(pos);*/
            
        }
        else console.log("not all are the same");
        gl.clear(gl.COLOR_BUFFER_BIT+gl.DEPTH_BUFFER_BIT);
            
        toPickAColor = false;
        
    }
    
    // рисуване на куба
    sky.draw(false);
    for(var i = 0; i < drawData.length; ++i)
    {
        drawData[i].draw(scaleFactor, false);
        moveHtlmElements(pinsCoords[i][0], i, pinsCoords[i][1]);
    }
    
    
    requestAnimationFrame(drawFrame);
}