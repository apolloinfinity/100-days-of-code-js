const count = document.querySelector(".count");

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    // console.log("adding");
    count.innerHTML++;
    setColor();
  }

  if (e.target.classList.contains("subtract")) {
    // console.log("subtracting");
    count.innerHTML--;
    setColor();
  }

  if (e.target.classList.contains("reset")) {
    // console.log("0");
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "white";
  }
}

/**
 *
 * This was the old way to do a simple app but since it is now common practice to use 'event delegation pattern
 * like the code above.
 */

// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");

// add.addEventListener("click", () => {
//   count.innerHTML++;
// });

// sub.addEventListener("click", () => {
//   count.innerHTML--;
// });

// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });
