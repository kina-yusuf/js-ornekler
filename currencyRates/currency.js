class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_H343pL3ymT8iJeP778DeQsXjt34J9IUIlSaAqz1A&base_currency=";
    }
    async exchange(amount, firstCurrency, secondCurrency) {
        try {
            const response = await fetch(`${this.url}${firstCurrency}`);
    
            if (!response.ok) {
                throw new Error(`Döviz kurları getirme başarısız oldu. Durum: ${response.status}`);
            }
    
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Alınan yanıt JSON içermiyor.");
            }
    
            const result = await response.json();
            const exchangedResult = amount * result.data[secondCurrency];
            return exchangedResult; 
        } catch (error) {
            console.error("Döviz kurları getirme hatası:", error.message);
        }
    }
    
}