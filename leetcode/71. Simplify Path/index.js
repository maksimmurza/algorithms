/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const pathArray = path.split('/').filter(path => path !== '' && path !== '.');
  const stack = [];

  for (let i = 0; i < pathArray.length; i++) {
    if (pathArray[i] === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else  {
      stack.push(pathArray[i]);
    }
  }

  return '/' + stack.join('/')
};

console.log(simplifyPath('/home/../etc///bin/./scripts')); // = /etc/bit/scripts