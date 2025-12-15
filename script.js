

        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
            });
        }, observerOptions);


        document.querySelectorAll('.slide-left, .slide-right, .slide-up, .slide-down').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });



        let index = 0;

const data = [
    {
        main: "imgs1/signture b.png",
        circles: ["imgs1/fruit.png",
         "imgs1/vegan.png",
        "imgs1/bowls.png",
        "imgs1/protien.png",
    "imgs1/build.png"],
        title: "Fresh Choices, Just for You !",
        subtitle: "Signature Salads",
        desc: "Our chef-crafted creations are perfectly balanced with fresh, high-quality ingredients. Each bowl is made to deliver the ideal mix of taste, texture, and nutrition — ready to brighten your day with every bite."},
    {
        main: "imgs1/protin b.png",
        circles: ["imgs1/bowls.png",
         "imgs1/fruit.png",
        "imgs1/build.png",
        "imgs1/vegan.png",
        "imgs1/signture.png"],
        title: "Fresh Choices, Just for You !",
        subtitle: "Protein Boost Salads",
        desc: "Fuel your body with fresh, protein-rich bowls made with chicken, tuna, eggs, or plant-based options. These hearty salads are both satisfying and energizing — ideal for active lifestyles."
    },
    {
        main: "imgs1/vegan b.png",
        circles: ["imgs1/build.png",
         "imgs1/bowls.png",
        "imgs1/signture.png",
        "imgs1/fruit.png",
    "imgs1/protien.png"],
        title: "Fresh Choices, Just for You !",
        subtitle: "Vegan & Plant-Based",
        desc: "Purely natural, 100% plant-based ingredients freshly prepared for you. These salads celebrate the flavors of nature — wholesome, clean, and full of color."
    },
        {
        main: "imgs1/fruit b.png",
        circles: ["imgs1/signture.png",
         "imgs1/build.png",
        "imgs1/protien.png",
        "imgs1/bowls.png",
    "imgs1/vegan.png"],
        title: "Fresh Choices, Just for You !",
        subtitle: "Fruit Mixes",
        desc: "A refreshing blend of nature’s sweetest offerings. Our fruit salads are light, colorful, and packed with vitamins — perfect for a healthy treat any time of the day."
    },
        {
        main: "imgs1/salad bowls b.png",
        circles: ["imgs1/protien.png",
         "imgs1/signture.png",
        "imgs1/vegan.png",
        "imgs1/build.png",
    "imgs1/fruit.png"],
        title: "Fresh Choices, Just for You !",
        subtitle: "Salad Bowls & Sides",
        desc: "Complement your main meal with light and refreshing side salads. From small bowls to shareable bites, they’re the perfect balance of flavor and freshness."
    },
            {
        main: "imgs1/build b.png",
        circles: ["imgs1/vegan.png",
         "imgs1/protien.png",
        "imgs1/fruit.png",
        "imgs1/signture.png",
    "imgs1/bowls.png"],
        title: "Fresh Choices, Just for You !",
        subtitle: "Build Your Own",
        desc: "Design your dream salad exactly the way you like it. Choose your favorite greens, toppings, proteins, and dressing — your creativity makes every bowl uniquely yours."
    }
];

function updateSlider() {
    const item = data[index];

    document.getElementById("mainImage").src = item.main;

    document.getElementById("c1").src = item.circles[0];
    document.getElementById("c2").src = item.circles[1];
    document.getElementById("c3").src = item.circles[2];
    document.getElementById("c4").src = item.circles[3];
     document.getElementById("c5").src = item.circles[4];

    document.getElementById("title").innerHTML = item.title;
    document.getElementById("subtitle").innerHTML = item.subtitle;
    document.getElementById("desc").innerHTML = item.desc;

  
    document.getElementById("mainImage").style.transform = "scale(1.1)";
    setTimeout(() => {
        document.getElementById("mainImage").style.transform = "scale(1)";
    }, 300);
}

function nextSlide() {
    index = (index + 1) % data.length;
    updateSlider();
}

function prevSlide() {
    index = (index - 1 + data.length) % data.length;
    updateSlider();
}

updateSlider();


const section = document.getElementById("saladSection");
const menuBar = document.getElementById("menuBar");
const saladImg = document.getElementById("saladImg");


section.addEventListener("mouseenter", () => {
menuBar.classList.add("animate-menu");
saladImg.classList.add("animate-salad");
});

const ctaSection = document.querySelector('.cta-section');

ctaSection.addEventListener('mouseenter', () => {
  ctaSection.classList.add('hover-active');
});

ctaSection.addEventListener('mouseleave', () => {
  ctaSection.classList.remove('hover-active');
});

