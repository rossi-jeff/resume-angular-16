export const RemoveBlanks = (obj: any) => {
  const sanitized: any = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      sanitized[key] = RemoveBlanks(obj[key]);
    } else if (obj[key] && obj[key] != '') {
      sanitized[key] = obj[key];
    }
  }
  return sanitized;
};
