console.log("Paymet Processing...");

let paymentpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Payment Successful");
    },4000);
});

paymentpromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
