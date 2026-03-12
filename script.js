// HomeCare Health - Healthcare Service Website
// JavaScript file for interactive features

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. Mobile Navigation Toggle
    // ============================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // ============================================
    // 2. Smooth Scrolling for Navigation Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // 3. Booking Form Submission to WhatsApp
    // ============================================
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const city = document.getElementById('city').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            
            // Validate form
            if (!name || !phone || !city || !service || !date || !time) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            // Validate phone number (10 digits)
            if (phone.length !== 10) {
                showNotification('Please enter a valid 10-digit phone number', 'error');
                return;
            }
            
            // Create WhatsApp message
            const message = `Hello, I want to book a home healthcare service.%0A%0A` +
                           `Name: ${name}%0A` +
                           `Phone: ${phone}%0A` +
                           `City: ${city}%0A` +
                           `Service: ${service}%0A` +
                           `Preferred Date: ${date}%0A` +
                           `Preferred Time: ${time}`;
            
            // WhatsApp number (replace with actual number)
            const whatsappNumber = '919818185270';
            
            // Open WhatsApp
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
            
            // Show success notification
            showNotification('Redirecting to WhatsApp to confirm your booking...', 'success');
            
            // Reset form
            bookingForm.reset();
        });
    }
    
    // ============================================
    // 4. Sticky Navbar Effect
    // ============================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ============================================
    // 5. Service Cards Hover Effect
    // ============================================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ============================================
    // 6. Back to Top Button
    // ============================================
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    // ============================================
    // 7. Notification System
    // ============================================
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Add to body
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // ============================================
    // 8. Set Minimum Date for Booking
    // ============================================
    const dateInput = document.getElementById('date');
    
    if (dateInput) {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // ============================================
    // 9. Phone Number Validation
    // ============================================
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');
            
            // Limit to 10 digits
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });
    }
    
    // ============================================
    // 10. Console Welcome Message
    // ============================================
    console.log('%c Welcome to HomeCare Health! ', 'background: #2196F3; color: white; font-size: 16px; padding: 10px;');
    console.log('Thank you for visiting our healthcare services website.');
    console.log('For support, please contact us at support@homecarehealth.com');
    
    // ============================================
    // 11. Form Field Focus Effects
    // ============================================
    const formInputs = document.querySelectorAll('.booking-form input, .booking-form select');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // ============================================
    // 12. Smooth Scroll to Top on Logo Click
    // ============================================
    const logo = document.querySelector('.logo');
    
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ============================================
    // 13. Add Active State to Navigation
    // ============================================
    const navSections = document.querySelectorAll('section[id]');
    const navMenuLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        navSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ============================================
    // 14. Form Validation on Submit
    // ============================================
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const city = document.getElementById('city').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            
            // Validate phone number (10 digits)
            if (phone.length !== 10) {
                showNotification('Please enter a valid 10-digit phone number', 'error');
                return;
            }
            
            // Validate date is not in the past
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                showNotification('Please select a future date', 'error');
                return;
            }
            
            // All validations passed
            showNotification('Form validated successfully!', 'success');
        });
    }
    
    // ============================================
    // 15. Add Ripple Effect to Buttons
    // ============================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // ============================================
    // 16. Add Page Load Animation
    // ============================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // ============================================
    // 17. WhatsApp Float Button
    // ============================================
    const whatsappFloat = document.querySelector('.whatsapp-float');
    
    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', function(e) {
            e.preventDefault();
            const phoneNumber = '919818185270';
            const message = 'Hello! I would like to book a home healthcare service.';
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    }
    
    // ============================================
    // 18. Payment Button Click
    // ============================================
    const paymentButton = document.querySelector('.payment-action .btn');
    
    if (paymentButton) {
        paymentButton.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Payment gateway will open here. Please integrate Razorpay/Stripe.', 'info');
        });
    }
    
    // ============================================
    // 19. City Dropdown Change Handler
    // ============================================
    const citySelect = document.getElementById('city');
    
    if (citySelect) {
        citySelect.addEventListener('change', function() {
            const selectedCity = this.value;
            console.log('Selected city:', selectedCity);
        });
    }
    
    // ============================================
    // 20. Service Dropdown Change Handler
    // ============================================
    const serviceSelect = document.getElementById('service');
    
    if (serviceSelect) {
        serviceSelect.addEventListener('change', function() {
            const selectedService = this.value;
            console.log('Selected service:', selectedService);
        });
    }
    
    // ============================================
    // 21. Add Loading State to Form
    // ============================================
    const submitButton = bookingForm?.querySelector('button[type="submit"]');
    
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            this.disabled = true;
        });
    }
    
    // ============================================
    // 22. Add Keyboard Navigation
    // ============================================
    document.addEventListener('keydown', function(e) {
        // Press Tab to focus on next element
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });
    
    // ============================================
    // 23. Add Accessibility Features
    // ============================================
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');// Continue Accessibility Features
interactiveElements.forEach(element => {
    if (!element.getAttribute('aria-label') && element.textContent.trim() !== '') {
        element.setAttribute('aria-label', element.textContent.trim());
    }
});

// ============================================
// 24. Price Estimator Function
// ============================================

<!-- function calculatePrice() {

const service = Number(document.getElementById("estService").value);
const urgency = Number(document.getElementById("urgency").value);

if (!service) {
document.getElementById("estimateResult").innerText =
"Please select a service";
return;
}

const price = service * urgency;

document.getElementById("estimateResult").innerText =
"Estimated Price: ₹" + price.toFixed(0);

}

-->

// ============================================
// 25. Floating WhatsApp Button
// ============================================

const floatingWhatsapp = document.querySelector('.floating-whatsapp');

if (floatingWhatsapp) {

    floatingWhatsapp.addEventListener('click', function(e) {

        e.preventDefault();

        const phoneNumber = "919818185270";
        const message = "Hello, I want to book a home healthcare service.";

        const url =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(url, "_blank");

    });

}


// ============================================
// 26. Emergency Call Button Tracking
// ============================================

const emergencyButtons = document.querySelectorAll('.emergency-bar a');

emergencyButtons.forEach(btn => {

    btn.addEventListener('click', function() {

        console.log("Emergency contact clicked");

    });

});

// ============================================
// 27. Simple Page Performance Log
// ============================================

window.addEventListener("load", function () {

    const loadTime = performance.now();

    console.log("Page loaded in " + Math.round(loadTime) + " ms");

});


// ============================================
// 28. Price Estimator
// ============================================

function calculatePrice() {

const service = Number(document.getElementById("estService").value);
const urgency = Number(document.getElementById("urgency").value);

if (!service) {
document.getElementById("estimateResult").innerText =
"Please select a service";
return;
}

const price = service * urgency;

document.getElementById("estimateResult").innerText =
"Estimated Price: ₹" + price.toFixed(0);

}