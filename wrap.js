const wrap = (input, lineLength) => {
  if (input.length === 0) return "";
  if (lineLength <= 0 || lineLength > input.length) return input;

  const words = input.split(" ");
  let returnStr = [[words[0]]];
  let index = 0;

  for (let i = 1; i < words.length; i++) {
    if (words[i].length + returnStr[index].join(" ").length > lineLength) {
      returnStr.push([[words[i]]]);
      index++;
    } else {
      returnStr[index].push(words[i]);
    }
  }

  returnStr.forEach((line, idx) => {
    returnStr[idx] = line.join(" ");
  });

  return returnStr.join("\n");
};

module.exports = wrap;
