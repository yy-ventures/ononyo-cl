const sendMail = (params) => {
    let tempParams = {
        from_name: document.getElementById("yourName").value.trim(),
        subject: document.getElementById("yourSubject").value.trim(),
        from_email: document.getElementById("yourEmail").value.trim(),
        message: document.getElementById("yourMessage").value.trim()
    }
    emailjs.send("service_1yea738", "template_2tcp08m", tempParams)
        .then(res => {
            if(res.status){
                alert("We Have Received Your Text!")
            }
        })
}

const form = document.getElementById("contact-form")

form.addEventListener("submit", e => {
    e.preventDefault()
    sendMail()
    document.getElementById("yourName").value = ""
    document.getElementById("yourSubject").value = ""
    document.getElementById("yourEmail").value = ""
    document.getElementById("yourMessage").value = ""
})