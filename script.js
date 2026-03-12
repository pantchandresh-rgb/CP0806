// HomeCare Health - Healthcare Service Website
// JavaScript file for interactive features

document.addEventListener("DOMContentLoaded", function () {

    // ============================================
    // 1. Mobile Navigation Toggle
    // ============================================

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active");
        });

        const navItems = navLinks.querySelectorAll("a");
        navItems.forEach(item => {
            item.addEventListener("click", function () {
                navLinks.classList.remove("active");
                hamburger.classList.remove("active");
            });
        });
    }


    // ============================================
    // 2. Smooth Scroll
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });
    });


    // ============================================
    // 3. Booking Form
    // ============================================

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const city = document.getElementById("city").value;
            const service = document.getElementById("service").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;

            if (!name || !phone || !city || !service || !date || !time) {

                showNotification("Please fill all fields", "error");
                return;

            }

            if (phone.length !== 10) {

                showNotification("Enter valid phone number", "error");
                return;

            }

            const message =
                "Hello, I want to book a home healthcare service.\n\n" +
                "Name: " + name + "\n" +
                "Phone: " + phone + "\n" +
                "City: " + city + "\n" +
                "Service: " + service + "\n" +
                "Date: " + date + "\n" +
                "Time: " + time;

            const phoneNumber = "919818185270";

            const url =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(message);

            window.open(url, "_blank");

            showNotification("Redirecting to WhatsApp...", "success");

            bookingForm.reset();

        });

    }


    // ============================================
    // 4. Sticky Navbar
    // ============================================

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
        }
        else {
            navbar.classList.remove("scrolled");
        }

    });


    // ============================================
    // 5. Back To Top Button
    // ============================================

    const backToTop = document.createElement("button");

    backToTop.className = "back-to-top";
    backToTop.innerHTML = "↑";

    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        }
        else {
            backToTop.classList.remove("show");
        }

    });


    // ============================================
    // 6. Notification System
    // ============================================

    function showNotification(message, type = "success") {

        const old = document.querySelector(".notification");

        if (old) old.remove();

        const box = document.createElement("div");

        box.className = "notification " + type;

        box.innerText = message;

        document.body.appendChild(box);

        setTimeout(function () {

            box.remove();

        }, 3000);

    }


    // ============================================
    // 7. Date Limit
    // ============================================

    const dateInput = document.getElementById("date");

    if (dateInput) {

        const today = new Date().toISOString().split("T")[0];

        dateInput.setAttribute("min", today);

    }


    // ============================================
    // 8. Phone Input Validation
    // ============================================

    const phoneInput = document.getElementById("phone");

    if (phoneInput) {

        phoneInput.addEventListener("input", function () {

            this.value = this.value.replace(/[^0-9]/g, "");

            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }

        });

    }


    // ============================================
    // 9. Floating WhatsApp
    // ============================================

    const floatingWhatsapp =
        document.querySelector(".floating-whatsapp");

    if (floatingWhatsapp) {

        floatingWhatsapp.addEventListener("click", function (e) {

            e.preventDefault();

            const phone = "919818185270";

            const message =
                "Hello, I want to book a home healthcare service.";

            const url =
                "https://wa.me/" +
                phone +
                "?text=" +
                encodeURIComponent(message);

            window.open(url, "_blank");

        });

    }


    // ============================================
    // 10. Performance Log
    // ============================================

    window.addEventListener("load", function () {

        const loadTime = performance.now();

        console.log("Page loaded in " + Math.round(loadTime) + " ms");

    });

});


// ============================================
// PRICE CALCULATOR (GLOBAL FUNCTION)
// ============================================

function calculatePrice() {

    const service =
        Number(document.getElementById("estService").value);

    const urgency =
        Number(document.getElementById("urgency").value);

    if (!service) {

        document.getElementById("estimateResult").innerText =
            "Please select a service";

        return;

    }

    const price = service * urgency;

    document.getElementById("estimateResult").innerText =
        "Estimated Price: ₹" + price;

}