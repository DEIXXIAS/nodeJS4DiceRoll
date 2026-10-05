const API_BASE = 'https://diceroller-bqc3begyeehgh0af.centralus-01.azurewebsites.net';

async function rollDice(){
    const response = await fetch(`${API_BASE}/api/static`);
    const {die1, die2, total} = await response.json();

    document.getElementById("die1_value").value = die1;
    document.getElementById("die2_value").value = die2;
    document.getElementById("total_value").value = total;

    document.getElementById("message").textContent =
        `You rolled ${die1} and ${die2}. Total: ${total}`;

}

