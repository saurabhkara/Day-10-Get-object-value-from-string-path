const obj = {
  a: {
    b: {
      c: {
        d: 4,
        e: [9, 5, 6],
      },
    },
  },
};

function get(obj, path) {
  const excludes = [".", "[", "]"];
  let keys = [];
  let result = obj;
  for (let i = 0; i < path.length; i++) {
    if (!excludes.includes(path[i])) {
      keys.push(path[i]);
    }
  }
  for (let key of keys) {
    result = result[key];
  }
  return result;
}

console.log(get(obj, "a.b.c.d"));
console.log(get(obj, "a.b.c.e.0"));
console.log(get(obj, "a.b.c.e[1]"));
