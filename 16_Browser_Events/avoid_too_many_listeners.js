function Alertpara(event){
    if(event.target.nodeName === 'SPAN'){
        alert("You have clicked on para:" + event.target.textContent);
        }
}

// let paras = document.querySelectorAll('p');
// for (let i = 0; i < paras.length; i++) {
//        let para = paras[i];
//        para.addEventListener('click',Alertpara) 
// }

// More optimal solution:
let mydiv = document.getElementById('wrapper');
document.addEventListener('click', Alertpara);

