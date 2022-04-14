/* This is a function that is listening for the DOM to be ready. */
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  changeTheme();
  chart();
  sidebar();
};

// querySelectorAll function
function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// querySelector function
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

function chart() {
  const chart = qs("#chart").getContext("2d");
  // Create a new chart instance
  new Chart(chart, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
      ],
      datasets: [
        {
          label: "BTC",
          data: [
            12372, 45283, 64274, 94237, 31274, 23670, 21548, 34862, 23573,
            64529,
          ],
          borderColor: "red",
          borderWidth: 2,
        },
        {
          label: "ETH",
          data: [
            73607, 94004, 40963, 79240, 89111, 81917, 17009, 44647, 35110,
            40619,
          ],
          borderColor: "blue",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}

function sidebar() {
  const menuBtn = qs("#menuBtn");
  const closeBtn = qs("#closeBtn");
  const aside = qs("#aside");

  menuBtn.addEventListener("click", () => {
    aside.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    aside.style.display = "none";
  });
}

function changeTheme() {
  const changeTheme = qs("#changeTheme");
  changeTheme.addEventListener("click", () => {
    document.body.classList.toggle("darkTheme");
    qs("span:first-child").classList.toggle("active");
    qs("span:last-child").classList.toggle("active");
  });
}
