export const getFormattedAmount = (amount, currency) => {
    const formattedAmount = amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return currency + formattedAmount;
};
