function rollDice() {
    // Generate random numbers from 1 through 6.
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the total.
    const total = die1 + die2;

    // Display the random results.
    document.getElementById("die1_value").value = die1;
    document.getElementById("die2_value").value = die2;

    // Display the calculated total.
    document.getElementById("total_value").value = total;

    // Update the status message.
    document.getElementById("message").textContent =
        `You rolled ${die1} and ${die2}. Total: ${total}`;
}
