import axios from "axios"

export const getExchanges =async () => {
    try {
        return await axios.get(
            "https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1"
        )
    } catch (error) {
        console.log(error)
    }
}

export const getOneExchange =async (id: string) => {
    try {
        return await axios.get(
            `https://api.coingecko.com/api/v3/exchanges/${id}`
        )
    } catch (error) {
        console.log(error)
    }
}