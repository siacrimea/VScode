let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj) {
    for (let qqq in obj) {
        typeof obj[qqq] === "number" ? (obj[qqq] *= 2) : (obj[qqq] = obj[qqq]);
        alert(obj[qqq]);
    }
}

multiplyNumeric(menu);