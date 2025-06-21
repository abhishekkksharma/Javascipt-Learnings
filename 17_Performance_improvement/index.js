// Code 1:
const t1 = performance.now();
for (let i = 1; i <=100 ; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para"+i;
    document.body.appendChild(para);
    
}

const t2 = performance.now();

console.log("Total time taken by code 1:"+(t2-t1));
// 100 reflows , 100 repainsts


// code 2:
const t3 =performance.now();
let mydiv = document.createElement('div');
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para-"+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("Total time taken by code 2:"+(t4-t3));
/*
1 reflows , 1 repainsts - the code is only appending
content in mydiv and at the end it reflows and 
repaints

*/
// The second code is faster 
//////////////////////BOTH of these are nice to use
// Best code 
let fragment = document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let para =document.createElement('p');
    para.textContent = "THIS IS PARA: "+i;
    // NO REFLOW AND REPAINT FOR THE BELOW LINE
    fragment.appendChild(para);
}
// THE BELOW LINE TAKES 1 REFLOW AND 1 REPAINT
document.body.appendChild(fragment);


/*

### 🔁 **Reflow vs Repaint in JavaScript**

* **Reflow**: Happens when the **layout/position/size** of elements changes.
  🔹 **Expensive**, affects the whole page or section.
  🔹 Triggered by changes like `width`, `height`, adding/removing elements, etc.

* **Repaint**: Happens when only **visual styles** change (not layout).
  🔹 Less costly than reflow.
  🔹 Triggered by changes like `color`, `background-color`, `visibility`.


*/