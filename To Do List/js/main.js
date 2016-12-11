var takeInput;
var DATA = [];
load();
var checkbox;
function insertItem(){
    takeInput = document.getElementById('item').value;

    DATA.push(takeInput);
    renderJson(DATA);
    document.getElementById('item').value = "";
}

function renderJson(data){
	document.getElementById('container').innerHTML = "";
	
    for(var i in data){
        container.innerHTML = container.innerHTML + "<div id=" + i + " onclick='removeItem(this.id)'><input type='checkbox'/><label>"+data[i]+"</label></div>";
    }
    save();
}

function removeItem(Id){
    var itemId = document.getElementById(Id);
    if(itemId.childNodes[0].checked==true){
       var arr_ind = DATA.indexOf(itemId.childNodes[1].innerText);
    DATA.splice(arr_ind,1);
    
    itemId.parentNode.removeChild(itemId);
    save();
      
    }
   
    
}

function save(){
    localStorage.myList = JSON.stringify(DATA);
}

function load(){
    DATA = JSON.parse(localStorage.myList);
    renderJson(DATA);
}

