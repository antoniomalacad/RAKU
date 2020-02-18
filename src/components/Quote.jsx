import React, { useState, useEffect } from "react";
import quotes from "../utils/quotes";

export default function Quote() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    quotes.get().then(quote => setQuote(quote));
  }, []);

  return (
    <div>
      {quote.quote}
      <div>- {quote.author}</div>
    </div>
  );
}
