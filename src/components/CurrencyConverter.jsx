/* eslint-disable no-unused-vars */
import { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const exchangeRate = 0.85; // Hard-coded exchange rate (1 USD to EUR)

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    setAmount(inputAmount);
    convertCurrency(inputAmount);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    convertCurrency(amount, e.target.value, toCurrency);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
    convertCurrency(amount, fromCurrency, e.target.value);
  };

  const convertCurrency = (
    inputAmount,
    from = fromCurrency,
    to = toCurrency
  ) => {
    const converted = inputAmount * exchangeRate;
    setConvertedAmount(converted.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <label>
        Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <br />
      <label>
        From Currency:
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </label>
      <br />
      <label>
        To Currency:
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </label>
      <br />
      <p>
        Converted Amount: {convertedAmount} {toCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
