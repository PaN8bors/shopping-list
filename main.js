import input from 'input';

async function main() {
    const shopping = [];
    let finished = false;

while (!finished) {
    const resp = await input.text('Enter an item (or "finish")');

    if (resp.toLowerCase() == "finish") {
        finished = true;
            console.log('Here is your shopping list.');
            console.log(shopping);
    } else {
        shopping.push(resp)
    }
    }
}
main();