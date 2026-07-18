document.addEventListener("DOMContentLoaded", () => {

    const currentYear = new Date().getFullYear();
    const today = new Date();

    const tables = document.querySelectorAll("main table");

    tables.forEach((table, monthIndex) => {

        // Update Year Heading
        const headingCells = table.querySelectorAll(".tableheading th");

        if (headingCells.length >= 2) {
            headingCells[1].textContent = currentYear;
        }

        // Remove previously generated date rows
        const rows = table.querySelectorAll("tr");

        while (table.rows.length > 2) {
            table.deleteRow(2);
        }

        // Get first day of month
        let firstDay = new Date(currentYear, monthIndex, 1).getDay();

        // Convert Sunday-first to Monday-first
        firstDay = firstDay === 0 ? 6 : firstDay - 1;

        // Total days in month
        const totalDays = new Date(
            currentYear,
            monthIndex + 1,
            0
        ).getDate();

        let dayCounter = 1;

        // Generate 6 calendar rows
        for (let row = 0; row < 6; row++) {

            const tr = document.createElement("tr");

            for (let col = 0; col < 7; col++) {

                const td = document.createElement("td");

                if (
                    row === 0 &&
                    col < firstDay
                ) {
                    td.innerHTML = "";
                }
                else if (dayCounter > totalDays) {
                    td.innerHTML = "";
                }
                else {

                    td.textContent = dayCounter;

                    // Highlight today's date
                    if (
                        dayCounter === today.getDate() &&
                        monthIndex === today.getMonth() &&
                        currentYear === today.getFullYear()
                    ) {
                        td.style.background = "#c77dff";
                        td.style.color = "#fff";
                        td.style.fontWeight = "bold";
                        td.style.borderRadius = "8px";
                    }

                    dayCounter++;
                }

                tr.appendChild(td);
            }

            table.appendChild(tr);

            // Stop if month completed
            if (dayCounter > totalDays) {
                break;
            }
        }
    });

});


// Calculator and its button's functioning and working logic
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".button button");
const themeToggle = document.getElementById("theme-toggle");

let expression = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        let value = button.innerText;
        if (value === "AC") {
            expression = "";
            result.value = "";
        }

        else if (value === "Del") {
            expression = expression.slice(0, -1);
            result.value = expression;
        }

        // ===== CALCULATE RESULT =====
        else if (value === "=") {
            try {
                let finalExpression = expression.replace(/x/g, "*");
                let answer = eval(finalExpression);
                result.value = answer;
                expression = answer.toString();
            } catch (error) {
                result.value = "Error";
                expression = "";
            }
        }

        else if (value === "()") {
            let openBracket =
                (expression.match(/\(/g) || []).length;

            let closeBracket =
                (expression.match(/\)/g) || []).length;

            if (openBracket === closeBracket || expression.endsWith("(")) {
                expression += "(";
            } else {
                expression += ")";
            }
            result.value = expression;
        }

        else {
            expression += value;
            result.value = expression;
        }
    });
});

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key)) {
        expression += key;
    }

    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%" ||
        key === "."
    ) {
        expression += key;
    }

    else if (key === "Enter") {
        try {
            let finalExpression =
                expression.replace(/x/g, "*");

            let answer = eval(finalExpression);
            result.value = answer;
            expression = answer.toString();
        } catch {
            result.value = "Error";
            expression = "";
        }
        return;
    }

    else if (key === "Backspace") {
        expression = expression.slice(0, -1);
    }

    else if (key === "Escape") {
        expression = "";
    }
    else if (key === "(" || key === ")") {
        expression += key;
    }
    else {
        return;
    }
    result.value = expression;
});

// Light and dark mode switching logic and functioning
let darkMode = false;
themeToggle.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.style.background = "#121212";
        document.querySelector(".options").style.background =
            "rgba(25,25,25,0.95)";
        document.querySelector(".options").style.borderBottom =
            "1px solid #2d2d2d";
        document.querySelector(".options h3").style.color =
            "#d7a6ff";
        themeToggle.innerText = "☀️";
        themeToggle.style.background = "#2c2c2c";
        themeToggle.style.color = "#ffffff";
        result.style.background = "#1e1e1e";
        result.style.color = "#ffffff";
        buttons.forEach((btn, index) => {
            btn.style.background = "#242424";
            btn.style.color = "#ffffff";
            if (
                index === 0 ||
                index === 1 ||
                index === 2 ||
                index === 3 ||
                index === 7 ||
                index === 11 ||
                index === 15
            ) 
            {
                btn.style.background = "#3a2545";
                btn.style.color = "#d7a6ff";
            }

            if (index === 19) {
                btn.style.background = "#8a4ca2";
                btn.style.color = "#ffffff";
            }
        });
    }

    else {
        document.body.style.background = "#f5f5f5";
        document.querySelector(".options").style.background =
            "rgba(255,255,255,0.95)";
        document.querySelector(".options").style.borderBottom =
            "1px solid #e5e5e5";
        document.querySelector(".options h3").style.color =
            "#8a4ca2";
        themeToggle.innerText = "🌙";
        themeToggle.style.background = "#eed8f0";
        themeToggle.style.color = "#8a4ca2";
        result.style.background = "#ffffff";
        result.style.color = "#222";
        buttons.forEach((btn, index) => {
            btn.style.background = "#ebebeb";
            btn.style.color = "#222";
            if (
                index === 0 ||
                index === 1 ||
                index === 2 ||
                index === 3 ||
                index === 7 ||
                index === 11 ||
                index === 15
            ) 
            {
                btn.style.background = "#eed8f0";
                btn.style.color = "#8a4ca2";
            }
            if (index === 19) {
                btn.style.background = "#8a4ca2";
                btn.style.color = "#ffffff";
            }
        });
    }
});