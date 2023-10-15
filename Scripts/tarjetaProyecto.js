const miDiv = document.getElementById("proj_moustache");
const botones = miDiv.querySelectorAll(".botonMoustache");

miDiv.addEventListener('mouseenter', () => {
    miDiv.style.filter = 'blur(5px)';
    botones.forEach(boton => boton.style.display = 'block');
});

miDiv.addEventListener('mouseleave', () => {
    miDiv.style.filter = 'blur(0)';
    botones.forEach(boton => boton.style.display = 'none');
});
