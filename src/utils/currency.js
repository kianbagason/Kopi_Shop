export const formatPeso = (value) => {
  try{
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(value);
  }catch(e){
    return '₱' + value;
  }
};
