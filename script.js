
const overlay = document.getElementById("overlay");

const titleEl = document.getElementById("eventTitle");
const dateEl = document.getElementById("eventDate");
const descEl = document.getElementById("eventDesc");

document.querySelectorAll(".event-day").forEach(day => {

  day.addEventListener("click", () => {

    titleEl.textContent = day.dataset.title;
    dateEl.textContent = day.dataset.date;
    descEl.textContent = day.dataset.desc;

    overlay.classList.add("active");

  });

});

document.getElementById("closeBtn").addEventListener("click", () => {

  overlay.classList.remove("active");

});

overlay.addEventListener("click", e => {

  if(e.target === overlay){
    overlay.classList.remove("active");
  }

});

document.addEventListener("keydown", e => {

  if(e.key === "Escape"){
    overlay.classList.remove("active");
  }

});
