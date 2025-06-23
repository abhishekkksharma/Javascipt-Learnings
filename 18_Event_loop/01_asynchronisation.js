console.log("start");

function saymyname() {
    console.log("This is function call");
}

setTimeout(saymyname,5000);

console.log("End");


//Output :
// start
// End
// This is function call // printed after 5 secs



/*                ┌──────────────────────┐
                │      JavaScript      │
                │      Engine          │
                └──────────────────────┘
                          │
                          ▼
                    ┌────────────┐
                    │ Call Stack│◄─────┐
                    └────────────┘      │
                          │             │
  ┌──────────────────┐    │             │
  │ Web APIs (Timer) │────┘             │
  └──────────────────┘                  │
                          ▼             │
                ┌──────────────────────┐│
                │  Callback Queue      │┘
                └──────────────────────┘
                          │
                    Event Loop
                          ▼
                    Pushes callback
                    to Call Stack when
                    stack is empty
*/

/*
JavaScript has:

Call Stack – executes function calls.

Web APIs – handles async tasks (setTimeout, DOM events, etc.)

Callback Queue – stores callbacks from Web APIs (like from setTimeout).

Microtask Queue – stores Promise callbacks (like .then, async/await).
*/

