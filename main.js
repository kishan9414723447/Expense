let container = document.getElementById('container');
let submitItem = document.getElementById('submitBtn');

submitItem.addEventListener("click",(e) => {
    e.preventDefault();

    let num=document.getElementById("number").value;
    let des=document.getElementById("des").value;
    let category=document.getElementById("category");
    let cat=category.options[category.selectedIndex].value;

    let userObj={
        Amount : num,
        Description : des,
        Category :cat
    };
    var userObj_searlized=JSON.stringify(userObj);
    localStorage.setItem(des,userObj_searlized);
    
    var li = document.createElement('li');
    var textNode=document.createTextNode(`${num}-${des}-${cat}`);
    var button=document.createElement('button');
    var deleteText=document.createTextNode('Delete Expenses');
    var span=document.createElement('span');
    var editBtn=document.createElement('button');
    var editText=document.createTextNode('EDIT Expenses');

    li.appendChild(textNode);
    button.appendChild(deleteText);
    editBtn.appendChild(editText);
    span.appendChild(li);
    span.appendChild(button);
    span.appendChild(editBtn);
    container.appendChild(span);


    button.addEventListener('click',(e)=> {
        e.preventDefault();
        var parentEle=button.parentElement;
        parentEle.remove();        
        var str =parentEle.firstElementChild.innerText;
        const arr=str.split('-');
        localStorage.removeItem(arr[1]);        

    })


    editBtn.addEventListener('click',(e)=> {
        e.preventDefault();
        var parentOfEdit=editBtn.parentElement;
        
        document.getElementById("number").value=num;
        document.getElementById("des").value=des;
        category.options[category.selectedIndex].value=cat;
        parentOfEdit.remove();
    })



});