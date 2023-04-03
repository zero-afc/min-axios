// 当前环境
export const globalEnv = (() => {
  if (typeof uni !== 'undefined') {
    return uni;
  } else if (typeof wx !== 'undefined') {
    return wx;
  } else {
    throw new Error('This library requires uni-app or WeChat Mini Program to run.');
  }
})()