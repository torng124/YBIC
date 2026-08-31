// =========================================
// YBIC WEBSITE JAVASCRIPT
// =========================================


// ===============================
// MOBILE MENU
// ===============================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });

}


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

if (navLinks) {

    const links =
        navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

        });

    });

}


// ===============================
// DARK MODE
// ===============================

const darkModeBtn =
    document.getElementById("darkModeBtn");


if (localStorage.getItem("ybicDarkMode") === "true") {

    document.body.classList.add("dark");

}


if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");


        const isDark =
            document.body.classList.contains("dark");


        localStorage.setItem(
            "ybicDarkMode",
            isDark
        );


        if (isDark) {

            darkModeBtn.textContent = "☀️";

        } else {

            darkModeBtn.textContent = "🌙";

        }

    });

}


// ===============================
// LANGUAGE BUTTON
// ===============================

const languageBtn =
    document.getElementById("languageBtn");


let khmerMode = false;


if (languageBtn) {

    languageBtn.addEventListener("click", function () {

        khmerMode = !khmerMode;


        if (khmerMode) {

            document.body.classList.add("khmer");

            languageBtn.textContent = "English";


            alert(
                "ភាសាខ្មែរ\n\n" +
                "YBIC - Youth Bright Impact Club\n" +
                "ក្លឹបយុវជនបង្កើតផលប៉ះពាល់វិជ្ជមាន"
            );

        } else {

            document.body.classList.remove("khmer");

            languageBtn.textContent = "ខ្មែរ";

        }

    });

}


// ======================================
// YBIC CONTACT FORM
// ======================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const role =
                document.getElementById("role").value;

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !message) {

                alert(
                    "Please complete all required fields."
                );

                return;

            }


            const button =
                contactForm.querySelector("button");


            button.disabled = true;

            button.textContent =
                "Sending...";


            try {

                const response =
                    await fetch(
                        "http://localhost:3000/api/contact",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({

                                name: name,

                                email: email,

                                role: role,

                                message: message

                            })

                        }
                    );


                const data =
                    await response.json();


                if (data.success) {

                    alert(
                        "✅ Thank you, " +
                        name +
                        "! Your message has been sent to YBIC."
                    );


                    contactForm.reset();

                } else {

                    alert(
                        "❌ " +
                        data.message
                    );

                }


            } catch (error) {

                console.error(error);

                alert(
                    "❌ Cannot connect to YBIC server."
                );

            }


            button.disabled = false;

            button.textContent =
                "Send Message →";

        }
    );

}


// ===============================
// FOOTER YEAR
// ===============================

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}