"use strict";

class CalFlowClock {

    constructor() {

        /* Digital Clock */

        this.hourElement =
            document.querySelector(".hour span");

        this.minuteElement =
            document.querySelector(".minute span");

        this.secondElement =
            document.querySelector(".second span");

        this.meridiemElement =
            document.querySelector(".meridiem span");


        /* Analog Clock */

        this.hourHand =
            document.querySelector(".hour-hand");

        this.minuteHand =
            document.querySelector(".minute-hand");

        this.secondHand =
            document.querySelector(".second-hand");


        /* Modal */

        this.openWallClock =
            document.getElementById("openWallClock");

        this.closeWallClock =
            document.getElementById("closeWallClock");

        this.wallClockModal =
            document.getElementById("wallClockModal");


        this.initialize();
    }

    initialize() {

        /* Digital Clock */

        if (
            this.hourElement &&
            this.minuteElement &&
            this.secondElement &&
            this.meridiemElement
        ) {

            this.updateDigitalClock();

            setInterval(() => {
                this.updateDigitalClock();
            }, 1000);
        }


        /* Analog Clock */

        if (
            this.hourHand &&
            this.minuteHand &&
            this.secondHand
        ) {

            this.updateAnalogClock();

            setInterval(() => {
                this.updateAnalogClock();
            }, 1000);
        }


        /* Modal Events */

        if (
            this.openWallClock &&
            this.wallClockModal
        ) {

            this.openWallClock.addEventListener("click", (event) => {

                event.preventDefault();

                this.wallClockModal.classList.add("active");
            });
        }

        if (
            this.closeWallClock &&
            this.wallClockModal
        ) {

            this.closeWallClock.addEventListener("click", () => {

                this.wallClockModal.classList.remove("active");
            });
        }


        /* Close when clicking outside clock */

        if (this.wallClockModal) {

            this.wallClockModal.addEventListener("click", (event) => {

                if (event.target === this.wallClockModal) {

                    this.wallClockModal.classList.remove("active");
                }
            });
        }


        /* ESC Key Support */

        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape" &&
                this.wallClockModal
            ) {

                this.wallClockModal.classList.remove("active");
            }
        });
    }


    /* =========================
       DIGITAL CLOCK
    ========================= */

    updateDigitalClock() {

        const now = new Date();

        const hours =
            String(now.getHours()).padStart(2, "0");

        const minutes =
            String(now.getMinutes()).padStart(2, "0");

        const seconds =
            String(now.getSeconds()).padStart(2, "0");

        const meridiem =
            now.getHours() >= 12 ? "PM" : "AM";

        this.hourElement.textContent = hours;
        this.minuteElement.textContent = minutes;
        this.secondElement.textContent = seconds;
        this.meridiemElement.textContent = meridiem;
    }


    /* =========================
       ANALOG CLOCK
    ========================= */

    updateAnalogClock() {

        const now = new Date();

        const seconds =
            now.getSeconds();

        const minutes =
            now.getMinutes();

        const hours =
            now.getHours();

        const secondDegree =
            seconds * 6;

        const minuteDegree =
            (minutes * 6) + (seconds * 0.1);

        const hourDegree =
            ((hours % 12) * 30) + (minutes * 0.5);

        this.secondHand.style.transform =
            `translateX(-50%) rotate(${secondDegree}deg)`;

        this.minuteHand.style.transform =
            `translateX(-50%) rotate(${minuteDegree}deg)`;

        this.hourHand.style.transform =
            `translateX(-50%) rotate(${hourDegree}deg)`;
    }
}


/* =========================
   START APPLICATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

    new CalFlowClock();
});