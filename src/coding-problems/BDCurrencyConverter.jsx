import { useState } from "react";

const BDCurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  let exchangeRate = 0.0091;

  const handleConvert = () => {
    if (amount && !isNaN(amount)) {
      const result = parseFloat(amount) * exchangeRate;
      setConvertedAmount(result.toFixed(2));
    } else {
      setConvertedAmount("Invalid Amount");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #000",
        margin: "10px 0",
      }}
    >
      <h2>Currency Converter</h2>
      <label>
        Enter amount in BD:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter your amount"
        />
      </label>
      <button onClick={handleConvert}> Convert</button>
      <p>
        {amount && !isNaN(amount)
          ? ` ${amount} TK is approximately $${convertedAmount} USD`
          : "Please enter a valid amount"}
      </p>
    </div>
  );
};

export default BDCurrencyConverter;
