const sign_in_btn = document.querySelector("#sign-in-btn");
const barcode_btn = document.querySelector("#barcode-btn");
const container = document.querySelector(".container");

barcode_btn.addEventListener('click', ()=>{
    container.classList.add("barcode-mode");
});

sign_in_btn.addEventListener('click', ()=>{
    container.classList.remove("barcode-mode");
});