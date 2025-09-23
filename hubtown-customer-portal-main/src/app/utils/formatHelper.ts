// export default Number(value : any) {
//     return parseInt(value).toLocaleString("en-IN")
//   }

export default function formatToINRCurrency(value: any): string {
  const numberValue = parseFloat(value);
  if (isNaN(numberValue)) {
    return '-';
  }

  return numberValue.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
