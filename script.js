function goTo(id){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function startLoading(){
    goTo("loading");

    // Loading duration
    setTimeout(()=>{
        goTo("result");

        updateReflectionImage();

        setTimeout(()=>{
            goTo("final");
        },5000);

    },6000);
}

function updateReflectionImage() {
    const fileInput = document.querySelector('#fileInput');
    const img = document.getElementById('result-img');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        img.src = "";
    }
}
