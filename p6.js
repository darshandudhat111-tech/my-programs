function checkResult(marks){
    return new Promise((resolve, reject) => {
        if (marks >= 35) {
            resolve("Student Pass");
        } else {
            reject("Student Fail");
        }
    });
}

let marks = 40;

checkResult(marks).then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});