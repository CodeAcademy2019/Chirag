async function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return await setImmediate(operation())
    return  await setImmediate(repeat(operation, --num))
  }

  module.exports = repeat;