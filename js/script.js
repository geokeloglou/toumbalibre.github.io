const ageModal = document.getElementById("ageModal");
const body = document.body;

function showModal() {
  ageModal.style.display = "flex";
  body.classList.add("modal-open");
}

function hideModal() {
  ageModal.style.display = "none";
  body.classList.remove("modal-open");
}

function enterSite() {
  localStorage.setItem("toumba-age-ok", "yes");
  hideModal();
}

function leaveSite() {
  window.location.href = "https://www.google.com";
}

const ageOk = localStorage.getItem("toumba-age-ok");
if (ageOk === "yes") {
  hideModal();
} else {
  showModal();
}

const bottle = document.querySelector(".bottle");
let latestScroll = 0;
let ticking = false;

function onScroll() {
  latestScroll = window.scrollY || 0;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (bottle) {
        bottle.style.transform = `translateY(${latestScroll * 0.3}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener("scroll", onScroll, { passive: true });

const distForm = document.getElementById("distForm");
if (distForm) {
  distForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const company = distForm.querySelector("[name='company']").value.trim();
    const email = distForm.querySelector("[name='email']").value.trim();
    const address = distForm.querySelector("[name='address']").value.trim();
    const phone = distForm.querySelector("[name='phone']").value.trim();

    const subject = encodeURIComponent(`Νέα παραγγελία από ${company}`);
    const body = encodeURIComponent(
      `Επωνυμία: ${company}\nEmail: ${email}\nΤηλέφωνο: ${phone}\nΔιεύθυνση: ${address}\n`
    );

    window.location.href = `mailto:info@toumbalibre.com?subject=${subject}&body=${body}`;
  });
}

const logoLink = document.getElementById("logoLink");
if (logoLink) {
  logoLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", "index.html#top");
  });
}
