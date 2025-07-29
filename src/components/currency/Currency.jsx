import { useState } from "react";
import { Input } from "./Input";
import useCurrency from "../../hooks/useCurrency";

export const Currency = () => {
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [amount, setAmount] = useState(0)
    const [convertedAmount, setConvertedAmount] = useState(0)
    const currency =  useCurrency(from)

    const convert = () => {
        setConvertedAmount(amount * currency[to])
    }
    return(
        <>
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-blue-600 rounded-lg p-5  bg-blue-300">
                    <div className="w-100 mb-4">
                        <Input label='From' amount={amount} options={currency} selectedCurrency={from}  onCurrencyChange={(curr) => {setFrom(curr)}} onAmountChange={(amt) => {setAmount(amt)}}/>
                    </div>
                    
                        <div className="relative w-full h-0.5">
                            <button type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer">
                                Swap
                            </button>
                        </div>
                    <div className="w-100 mb-4">
                        <Input label='To' amount={convertedAmount} options={currency} selectedCurrency={to}  onCurrencyChange={(curr) => {setTo(curr)}} amountDisable />
                    </div>
                    
                    
                        <button onClick={convert} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center cursor-pointer">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                 
                </div>
            </div>
            
        </>
    ) 
}