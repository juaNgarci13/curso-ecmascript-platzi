function newUsers(name, age, country) {
    var name = name || "juan";
    var age = age || 19;
    var country = country || "CO";
    console.log(name, age, country);
}

newUsers()
newUsers("Jorge", 13, "MX")

function newAdmin(name = "José", age = 23, country = "CL") {
    console.log(name, age, country);
}


newAdmin()
newAdmin("Jorge", 13, "MX")


