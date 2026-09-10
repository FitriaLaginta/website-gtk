/* =================================
   SAPAAN BERDASARKAN WAKTU
================================= */

function tampilkanSapaan() {
  const jam = new Date().getHours();

  const welcome = document.querySelector(".welcome");

  if (!welcome) return;

  if (jam >= 5 && jam < 12) {
    welcome.textContent = "SELAMAT PAGI";
  } else if (jam >= 12 && jam < 18) {
    welcome.textContent = "SELAMAT SIANG";
  } else {
    welcome.textContent = "SELAMAT MALAM";
  }
}

tampilkanSapaan();

/* =================================
   SMOOTH SCROLL BUTTON
================================= */

const btnLayanan = document.querySelector(".btn-primary");

const btnInformasi = document.querySelector(".btn-secondary");

if (btnLayanan) {
  btnLayanan.addEventListener("click", function (event) {
    event.preventDefault();

    const layanan = document.querySelector("#layanan");

    layanan.scrollIntoView({
      behavior: "smooth",
    });
  });
}

if (btnInformasi) {
  btnInformasi.addEventListener("click", function (event) {
    event.preventDefault();

    const informasi = document.querySelector("#informasi");

    informasi.scrollIntoView({
      behavior: "smooth",
    });
  });
}

/* =================================
   ANIMASI CARD
================================= */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

cards.forEach(function (card) {
  observer.observe(card);
});

/* =================================
   TAHUN OTOMATIS
================================= */

const copyright = document.querySelector(".copyright");

if (copyright) {
  const tahun = new Date().getFullYear();

  copyright.textContent = `© ${tahun} Portal GTK. All Rights Reserved.`;
}

/* =================================
   TOMBOL LAYANAN
================================= */

const serviceButtons = document.querySelectorAll(".service-btn");

serviceButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert(
      "Layanan GTK sedang dikembangkan. " +
        "Silakan cek kembali untuk informasi terbaru.",
    );
  });
});

/* =================================
   TOMBOL BERITA
================================= */

const newsButtons = document.querySelectorAll(".news-btn");

newsButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("Informasi selengkapnya " + "akan tersedia di halaman berita.");
  });
});

/* =================================
   MENU NAVBAR AKTIF
================================= */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menuLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});
