async function getRandomUser() {

    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();

    const user = data.results[0];

    document.getElementById("randImg").src = user.picture.large;
    document.getElementById("randName").innerHTML =
        user.name.first + " " + user.name.last;

    document.getElementById("randGender").innerHTML =
        user.gender;
}