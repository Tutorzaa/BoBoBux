document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
  });
});

document.querySelectorAll(".not-ready").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "ยังไม่พร้อมใช้งาน",
      text: "กดไปเหอะไม่มีอะไรหรอก / Just click it, nothing's gonna happen lol.",
      confirmButtonText: "ตกลง / OK"
    });
  });
});

function screenRecommend() {
  if (window.innerWidth < 1200) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "ขนาดหน้าจอของคุณไม่เหมาะสมกับเว็บไซต์ ควรปรับขนาดความกว้างหน้าจอเป็น 1200px ขึ้นไป"
    });
  }
}

window.onload = screenRecommend;