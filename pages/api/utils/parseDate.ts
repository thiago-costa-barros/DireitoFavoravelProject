export function parseDate(bigintDate: bigint): string {
  const date = new Date(Number(bigintDate)); // Converte o bigint para um objeto Date
  
  // Garantir que a data é válida
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format');
  }

  // Formatar a data no formato YYYY-MM-DD HH:mm:ss.SSS
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  }
  