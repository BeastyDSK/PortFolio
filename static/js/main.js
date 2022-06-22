window.onload = (e) => {
    let header = document.querySelector(".header");
    let heading = document.querySelector(".section-heading");
    let skills = document.querySelector("#skills");
    let about = document.querySelector("#about-me");
    let projects = document.querySelector("#projects");
    let headingSpecial = document.querySelector(".heading-special");
    let menu = document.querySelector(".menu-box");
    let navigation = document.querySelector(".navigation");

    // Scrolling Effect
    let observer = new IntersectionObserver(
        (entry, observer) => {
            let [firstEntry] = entry;
            let targetElement = firstEntry.target;
            if (targetElement === heading) {
                if (firstEntry.isIntersecting) header.classList.remove("sticky-nav");
                else header.classList.add("sticky-nav");
            } else {
                targetElement.style.animation = "goUp 1.4s ease-in";
            }
        },
        {
            root: null,
            threshold: 0,
            rootMargin: "40px",
        }
    );

    observer.observe(heading);
    observer.observe(skills);
    observer.observe(about);
    observer.observe(projects);

    let timer = function (timingFunction, timing) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                timingFunction(resolve);
            }, timing);
        });
    };

    // Heading Text Effect
    const data = ["a Web Developer", "krishnaprasanth"];
    let i = 0;
    setInterval(() => {
        headingSpecial.classList.add("heading-special-tog");
        setTimeout(() => {
            headingSpecial.textContent = data[i];
        }, 400);

        setTimeout(() => {
            headingSpecial.classList.remove("heading-special-tog");
            i = i + 1 < data.length ? i + 1 : 0;
        }, 500);
    }, 3000);

    // Menu Effect
    menu.addEventListener("click", (e) => {
        navigation.classList.toggle("navigation-active");
    });

    window.onresize = (e) => {
        if (window.innerWidth > 899 && navigation.classList.contains("navigation-active")) {
            navigation.classList.remove("navigation-active");
            menu.checked = false;
        }
    };
};
