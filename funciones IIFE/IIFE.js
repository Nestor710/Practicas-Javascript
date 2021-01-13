// IIFE (Immedialy Invoked Function Expression)

// llamando una function sin IFFE

/* function subscribe(){
    console.log(`Subscribe to my channel`);
}
subscribe(); */

// Con IFFE

/* (function subscribe(){
    console.log(`Subscribe to my channel`);
})(); */

// function arrow co IIFE

/* ((nombre) =>{
    console.log(`Subscribe to my channel! ${nombre}`);
})('Nestor'); */