// createOrder;
// proceedToPayment;
// showOrderSummary;
// updateWallet;

let earPhoneCost = 1000;
let shaverCost = 1300;
let toyCost = 500;

let cart = [`earPhone: ${earPhoneCost}`, `shaver: ${shaverCost}`, `toy: ${toyCost}`];
let cartId = [2342, 4482, 9728, 9827, 5677];

function submit() {
    createOrder(cart)
        .then(function (userCartId) {
            console.log(userCartId);
            return proceedToPayment(userCartId);
        })
        .catch((err) => {
            console.log(err);
        })
        .then(function (userCartId) {
            return showOrderSummary(userCartId, cart);
        })
        .then(function (userCartId) {
            return updateWallet(userCartId);
        })
        .catch((err) => {
            console.log(err);
        })

    function createOrder(cart) {

        const pr = new Promise((resolve, reject) => {

            if (cartValid(cart)) {
                const err = new Error("cart not valid");
                reject(err);
            }
            let randomIndex = Math.floor(Math.random() * 5);
            let userCartId = cartId[randomIndex];
            resolve(userCartId);
        })


        return pr;
    }

    function proceedToPayment(userCartId){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Data required for payment fetched in 5sec");
                resolve(userCartId);
            }, 5000);
        })
    }

    function showOrderSummary(userCartId, cart){
        return new Promise((resolve, reject) => {
            console.log("your Cart Id: ", userCartId);
            cart.forEach(element => {
                console.log(element)
            });
            // console.log(cart);
            console.log(`total: ${earPhoneCost + shaverCost + toyCost}`);
            resolve(userCartId);
        })
    }

    function updateWallet(userCartId){
        let accNo = 21347981628;
        return new Promise((resolve, reject) => {
            if(!validateAccNo(accNo)){
                let err = new Error("Invalid account No");
                reject(err);
            }
            setTimeout(() => {
                console.log("payment Done");
                resolve(userCartId, accNo);
            },3000)
        })
    }

    function validateAccNo(accNo){
        return true;
    }

    function cartValid(cart) {
        if (cart.lenght > 0) {
            return true;
        }
    }
}