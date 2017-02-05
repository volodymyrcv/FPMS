submit.addEventListener('click',
    function(e){
        e.preventDefault();
        ajax("POST");
    });
reset.addEventListener('click',
    function(){
        if(autoComplete.checked){
            autoComplete.checked=false;
        }
    });
autoComplete.addEventListener('change',
    function() {
        if (autoComplete.checked) {
           ajax("GET"); 
        } else {
           eMail.value = "";
           telePhone.value = "";
           fName.value = "";
           theme.value = "quest";
           comment.value = "";
           submit.style.borderColor="lightgray";
        }});
function ajax(method) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (method === "GET"){
                var formData = JSON.parse(xhr.responseText);
                eMail.value = formData.email;
                telePhone.value = formData.tel;
                fName.value = formData.name;
                theme.value = formData.theme;
                comment.value = formData.comment;
            } else {
                alert(xhr.responseText);
            }
            submit.style.borderColor="green";
        } else {
            submit.style.borderColor="red";
        }
    }
    if (method === "GET") {
        xhr.open('GET', 'js/example.json',true);
        xhr.send();
    } else {
        xhr.open('POST', 'https://formspree.io/gameundercover@bk.ru', true);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send('email:'+eMail.value+',telephone:'+telePhone.value+',name:'+fName+',theme:'+theme.value+',comment:'+comment.value);
    }
}