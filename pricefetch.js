// Function to fetch the current price of Pepe (or any coin by ID)
export async function getCryptoPrice(cryptoId = 'pepe') {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`;
    let price = 0;

    try {
        // Fetch the data from the CoinGecko API
        const response = await fetch(url);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response JSON
        const data = await response.json();

        // Extract the price of Pepe in USD (or any currency you choose)
        price = data[cryptoId]?.usd;

        if (price) {
            console.log(`The current price of Pepe is $${price}`);
        } else {
            console.log('Could not retrieve price for Pepe.');
        }
    } catch (error) {
        console.error('There was an error fetching the price:', error);
    }
    return price;
}

// Example usage: Get the price of Pepe coin
//getCryptoPrice('pepe');

