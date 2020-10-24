module.exports = function check(str, bracketsConfig) {
  // your solution
    let stack = [];
    let strArray = str.split('');

    for (let j = 0; j < strArray.length; j++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            let item = bracketsConfig[i];

            if (stack.length && strArray[j] === item[1] && stack[stack.length - 1] === item[0]) {
                stack.pop();
                break;
            }
            if (strArray[j] === item[0]) {
                stack.push(strArray[j]);
                break;
            }
            if (stack.length === 0 && strArray[j] === item[1]) {
                return false;
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    };
};
