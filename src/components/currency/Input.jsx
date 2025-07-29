export const Input = (
    {
        label,
        amount,
        options = [],
        selectedCurrency = 'usd',
        onAmountChange,
        onCurrencyChange,
        amountDisable = false,
        currencyDisable = false
    }) => {
    return(
        <>
            <div className="bg-white rounded-lg text-sm flex p-3">
                <div className="w-1/2" >
                    <div className="text-black/40 mb-2 inline-block">{label}</div>
                     <input type="number"  className="outline-none w-full bg-transparent py-1.5"
                        value={amount} 
                        disabled={amountDisable} 
                        style={{padding: '5px'}} 
                        onChange={(e) => {onAmountChange(Number(e.target.value))}}/>
                    
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right" >
                    <div className="text-black/40 mb-2 w-full">Currency Type</div>
                    <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                        value={selectedCurrency} 
                        disabled={currencyDisable} 
                        onChange={(e) => {onCurrencyChange(e.target.value)}}>

                        {options && Object.keys(options).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
            </div>
        </>
    )
}