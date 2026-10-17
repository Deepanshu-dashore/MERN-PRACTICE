const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value;
    alert(`Thank you, ${name}! Your message has been received.`);
    contactForm.reset();
});
