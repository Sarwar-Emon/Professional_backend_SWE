// 


function orderPizza() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("🍕 Pizza is ready!");
        }, 3000);

    });
}
// console.log(orderPizza());

async function eatPizza() {

    console.log("Ordering pizza...");

    const pizza = await orderPizza();

    console.log(pizza);

    console.log("Eating pizza 😋");
}
eatPizza();
console.log("📱 I can use my phone while waiting");