let hasCompletedCourse = true
let givesCertificate = true

// & --> Logical Operator (AND). If both conditions are true (in this case)
if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}


