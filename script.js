const button = document.querySelector('button');
const icone = document.querySelector('i');

button.addEventListener('mouseover', ()=> {
    icone.style.marginLeft = '14px';
    button.style.color = 'orange';
    button.style.backgroundColor = 'rgb(70 70 70)';
    button.style.borderRadius = '10px';
    button.style.border = '2px solid orange';
})

button.addEventListener('mouseout', ()=> {
    icone.style.marginLeft = '0px';
    button.style.color = 'white';
    button.style.backgroundColor = '#9B9B9B';
    button.style.borderRadius = '0px';
    button.style.border = 'none';
})

