document.addEventListener("DOMContentLoaded", () => {

    const result = document.getElementById("result");
    const buttons = document.querySelectorAll(".button button");

    if (!result || buttons.length === 0) {
        console.error("Calculator elements not found.");
        return;
    }

    let expression = "";
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent.trim();
            switch (value) {
                case "AC":
                    expression = "";
                    result.value = "";
                    break;

                case "Del":
                    expression = expression.slice(0, -1);
                    result.value = expression;
                    break;

                case "()":
                    const openCount =
                        (expression.match(/\(/g) || []).length;
                    const closeCount =
                        (expression.match(/\)/g) || []).length;
                    if (
                        openCount === closeCount ||
                        expression.endsWith("(")
                    ) {
                        expression += "(";
                    }
                    else {
                        expression += ")";
                    }

                    result.value = expression;
                    break;

                case "=":
                    try {
                        const finalExpression =
                            expression.replace(/x/g, "*");
                        const answer = eval(finalExpression);
                        result.value = answer;
                        expression = answer.toString();
                    }
                    catch {
                        result.value = "Error";
                        expression = "";
                    }

                    break;
                default:
                    expression += value;
                    result.value = expression;
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        const key = event.key;
        if (/[0-9]/.test(key)) {
            expression += key;
        }

        else if (
            key === "+" ||
            key === "-" ||
            key === "*" ||
            key === "/" ||
            key === "%" ||
            key === "." ||
            key === "(" ||
            key === ")"
        ) {
            expression += key;
        }

        else if (key === "Backspace") {
            expression = expression.slice(0, -1);
        }
        else if (key === "Escape") {
            expression = "";
        }

        else if (key === "Enter") {
            try {
                const finalExpression =
                    expression.replace(/x/g, "*");
                const answer = eval(finalExpression)
                result.value = answer;
                expression = answer.toString();
            }
            catch {
                result.value = "Error";
                expression = "";
            }
            return;
        }
        else {
            return;
        }
        result.value = expression;
    });
});