document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".normal");
    const horrors = document.querySelectorAll(".horror");
    
    const observer = new IntersectionObserver((entries) => {
        if (Math.round(Math.random())) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(elements).indexOf(entry.target);
                    if (index !== -1 && horrors[index]) {
                        horrors[index].classList.remove("hide");

                        setTimeout(() => {
                            entry.target.classList.add("hide"); // normal 요소 숨김
                        }, Math.random() * 2000);
                    }
                }
            });
        }
    }, { threshold: 1 }); // 100% 보이면 작동
    
    elements.forEach((el) => observer.observe(el));
});
