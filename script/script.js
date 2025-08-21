// memberishkan
window.onbeforeunload = ()=>{
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
};

// responsif nav
const navSlide = () =>{
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")
    burger.addEventListener("click",() => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toogle-burger")
    });
};

navSlide();

document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname;
    let page = path.split("/").pop().split(".")[0];

    // Hapus semua class active terlebih dahulu
    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
    });

    // Tambahkan class active ke menu yang sesuai
    if (page === "" || page === "index") {
        document.getElementById("beranda").classList.add("active");
    } else {
        let activeLink = document.getElementById(page);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
  // Ambil semua link navbar yang menuju section
  const navLinks = document.querySelectorAll('.nav ul li a');
  const sections = [];

  navLinks.forEach(link => {
    const id = link.getAttribute('href');
    if (id.startsWith('#')) {
      const section = document.querySelector(id);
      if (section) sections.push(section);
    }
  });

  function activateLink() {
    let index = sections.length;

    while (--index >= 0) {
      // 80 = offset jika navbarmu fixed. Ubah sesuai tinggi nav.
      if (window.scrollY + 90 >= sections[index].offsetTop) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
        break;
      }
    }
  }

  window.addEventListener('scroll', activateLink);
  // Jalankan sekali saat load
  activateLink();
});

