function telephoneCheck(str) {
    let regularExp = /^(1?\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/gm;
    let validation = regularExp.test(str);
    return validation;
  }
  
  let result = telephoneCheck("555-555-5555");
  console.log(result);
