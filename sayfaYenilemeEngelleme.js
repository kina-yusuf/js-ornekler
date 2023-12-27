document.addEventListener("keydown",run);

function run(e){
    console.log(e.keyCode);
    if(e.keyCode == 116){
        alert("Sayfa yenileme işlemi engellendi!");
    }
    e.preventDefault();
}
