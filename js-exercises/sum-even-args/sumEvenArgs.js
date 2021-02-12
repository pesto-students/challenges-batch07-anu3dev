const sumEvenArgs = (...args) =>
{
    const evennumber = args.filter(function(number)
    {
        if (number % 2 === 0 || number ===0 )
        {
            return number;
        }
    });
    const sumofevennumber = evennumber.reduce((a, b) => a + b, 0);
    return sumofevennumber;
};

export { sumEvenArgs };
