const displayCurrency = (num, cur) => {
  if (cur === "Rupee") {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });
    return formatter.format(num);
  } else {
    const formatter = new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
      minimumFractionDigits: 2, // 2 ทิศนิยม 100.25
    });
    return formatter.format(num);
  }
};

export default displayCurrency;
