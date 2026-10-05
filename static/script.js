



async function rollDice(){
    const response = await fetch(`/api/static`);
    const {die1, die2, total} = await response.json();

    document.getElementById("die1_value").value = die1;
    document.getElementById("die2_value").value = die2;
    document.getElementById("total_value").value = total;

    document.getElementById("message").textContent =
        `You rolled ${die1} and ${die2}. Total: ${total}`;

}

