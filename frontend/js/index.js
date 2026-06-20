let isMale = true;

function toggleUser() {

    const img = document.getElementById("userImage");
    const name = document.getElementById("userName");
    const gender = document.getElementById("userGender");

    if (isMale) {
        img.src = "/images/jane.png";
        name.innerHTML = "Jane Doe";
        gender.innerHTML = "Female";
    } else {
        img.src = "/images/john.png";
        name.innerHTML = "John Doe";
        gender.innerHTML = "Male";
    }

    isMale = !isMale;
}