

function changetext(event) {
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "How are you"
}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click',changetext);

// fpara.removeEventListener('click',changetext) // the function name must be same as in addEnevt to remove 


// Phases of Event:
/*


Window
  |
  | (Capturing Phase ↓)
  |
  V
<html>
  |
  V
<body>
  |
  V
<div id="outer">
  |
  V
<div id="inner"> ← Target Element
  |
  ^ (Bubbling Phase ↑)
  |
</div>
  |
</div>
  |
</body>
  |
</html>
  |
Window


In JavaScript, **Event Hierarchy** (or **Event Propagation**) refers to the order in which events are received on the **DOM** when an event occurs. The three main phases are:

---

### ✅ **1. Capturing Phase (Capture / Trickle Down)**

The event starts at the **window** and travels **down** the DOM tree to the **target element**.

### ✅ **2. Target Phase**

The event reaches the **target element** — the one where the event occurred.

### ✅ **3. Bubbling Phase (Bubble / Trickle Up)**

The event **bubbles up** from the target element back up to the **window**.

---

## 🧠 Visualizing the Flow

Assume a click on `#inner`. Here's the sequence:

1. **Capture Phase**:
   `window → html → body → #outer → #inner`

2. **Target Phase**:
   Event handled at `#inner`

3. **Bubbling Phase**:
   `#inner → #outer → body → html → window`

---

## ⚙️ Code Example

```javascript
document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer Div");
}, false); // bubbling phase

document.getElementById("inner").addEventListener("click", () => {
  console.log("Inner Div");
}, true); // capturing phase
```

* The `true` indicates **capturing phase**
* The `false` (or default) indicates **bubbling phase**

---
##########  By default the addEvent is applied in Bubbling phase

## 📝 Summary

| Phase     | Description                  | Controlled via `addEventListener(..., useCapture)` |
| --------- | ---------------------------- | -------------------------------------------------- |
| Capturing | Top → Down, before target    | `true`                                             |
| Target    | Event reaches target element | (Handled normally)                                 |
| Bubbling  | Bottom → Up, after target    | `false` (default)                                  |

---

*/




/// Remove Default action:

let anchorElement = document.getElementById('fanchor');

anchorElement.addEventListener('click',function (event) {
    event.preventDefault();
    anchorElement.textContent = "Click done"
})