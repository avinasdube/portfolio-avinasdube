import { useEffect } from "react";

const ScrollAnimation = () => {
    useEffect(() => {
        const cards = document.querySelectorAll(".projectCard");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        // Remove class when out of view to allow re-animation
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.4 } // Adjust threshold as needed
        );

        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);
};

export default ScrollAnimation;
