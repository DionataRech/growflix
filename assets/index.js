// var cardHover = document.getElementById("cardHover");

// cardHover.addEventListener("mouseover", function () {
//   var modal = new bootstrap.Modal(document.getElementById("modalExemplo"));
//   modal.show();
// });

const rowGrowdev = document.getElementById("row-growcast");
const growFlutter = document.getElementById("row-growFlutter");
const groUxUi = document.getElementById("row-growUX/UI");
const growDiversos = document.getElementById("row-growDiversos");

function addCard(item) {
  const htmlCard = `<div class="card col-md-3 show-body  col-3 m-1 bg-black text-light " style="width: 20rem">

      <div class="card-body  ">

      <div class="card-4 ">

          <img src="https://img.youtube.com/vi/${item.code}/sddefault.jpg" class="card-img-top" alt="..." />

          <h5 class="card-title  ">${item.title}</h5>

                    

                      <svg
                      class="svg-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      fill="white"
                      class="bi bi-play-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      ></path>
                      <path
                        d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
                      ></path>
                      </svg>
                      ${item.description}
                     

          <a href="https://www.youtube.com/watch?v=${item.code}" target="_blank" class="btn "></a>

               </div>
        </div>
      <div>
        `;

  if (item.category === "GrowCast") {
    rowGrowdev.innerHTML += htmlCard;
  }
  if (item.category === "growFlutter") {
    growFlutter.innerHTML += htmlCard;
  }
  if (item.category === "growUxui") {
    groUxUi.innerHTML += htmlCard;
  }
  if (item.category === "growDiversos") {
    growDiversos.innerHTML += htmlCard;
  } else {
    console.log("EROOOOOOOOOO");
  }
}

movies.forEach((item) => {
  addCard(item);
});
