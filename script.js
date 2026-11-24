
emailjs.init({
    publicKey: "JI7Jc3jhJnApfUgsk"
});

const result = document.getElementById("result");
const statusText = document.getElementById("status");
const buttons = document.querySelectorAll("button");

function yes() {
    result.textContent = "Kam fast! 🔥";
    result.className = "success";

    sendEmail("YES", "Kam fast!");
}

function no() {
    result.textContent = "Vondami bad dia game a asho! 😂";
    result.className = "error";

    sendEmail("NO", "Vondami bad dia game a asho!");
}

async function sendEmail(answer, message) {

    buttons.forEach(button => {
        button.disabled = true;
    });

    statusText.textContent = "Sending...";

    try {
        await emailjs.send(
            "service_trj5562",
            "template_is286rc",
            {
                name: "Ashraful",
                answer: answer,
                message: message,
                time: new Date().toLocaleString("en-GB", {
                    timeZone: "Asia/Tokyo"
                })
            }
        );

        statusText.textContent = "Answer sent successfully!";

    } catch (error) {

        statusText.textContent = "Failed to send!";
        console.log(error);

        buttons.forEach(button => {
            button.disabled = false;
        });
    }
}
