const Area = document.getElementById('area');
const Button = document.getElementById('button');
const Input = document.getElementById('files');
const url = document.getElementById('imgurl');
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
let archivos
Button.addEventListener('click', (e) => {
    Input.click();
});
url.addEventListener('keypress', (e) => {
    //elimina el valor de url
    const img = `
            <div class="hover:scale-110">
                <img src="${url.value}" >
                
            </div>
        `;
    Area.innerHTML = Area.innerHTML + img;
    console.log(e.value);
    if (e.key === 'Enter') {
        url.value = '';
    }
});
Input.addEventListener('change', (e) => {
    //mostrar la imagen en un div
    archivos = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(archivos[0]);
    

    if(titulo.value.length > 10){
        console.log('titulo');
    }
    console.log(titulo.value.length);
    reader.onload = function (e) {
        if (titulo.value != '' && descripcion.value != '') {
            const img = `
            <div class=" grid grid-cols-5 bg-gray-400 hover:scale-110 h-55 rounded-lg">
                <img src="${e.target.result}" alt="" class="col-start-1 col-end-5 rounded-l-lg">
                <div class="col-start-5 mx-5 ">
                    <h1 class="text-4xl mt-2 mb-3 underline font-sans break-all"  >${titulo.value}</h1>
                    <h2 class="break-all">${descripcion.value}</h2>
                </div>
                
            </div>
            `;
            Area.innerHTML = img+ Area.innerHTML ;

            titulo.value = '';
            descripcion.value = '';
        } else {
            alert('Faltan datos');
        }
    }

});