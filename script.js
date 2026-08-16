document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            faqItems.forEach((otherItem) => {

                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                otherAnswer.style.maxHeight = null;
            });

            if (!isActive) {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";
            }

        });

    });

});
