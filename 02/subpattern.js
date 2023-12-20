function subpattern(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    let pattern = '';
    const restChars = a.substring(i);
    let lastInd = 0;
    
    for (let j = 0; j < restChars.length; j++) {
      const bCharInd = b.toLowerCase().indexOf(restChars[j].toLowerCase(), lastInd);

      if (bCharInd !== -1) {
        lastInd = bCharInd + 1;
        pattern += restChars[j];
      }
    }

    result.push(pattern);
  }
  
  return new Set(result.filter(val => val.length > 1));
}
