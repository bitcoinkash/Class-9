
const t = {'key 1':"user",'key 2':"Guest"}

console.log(t['key 2'])

var arr = new Map([
    ['key1', 'User'],
    ['key2', 'Guest'],
    ['key3', 'Admin'],
    ]);
    var res = arr.get('key2');
    console.log(res); // The value is 'Guest'
    const s = new Set()

    s.add(2)
    s.add(2)
    s.add(3)
    s.add(4)
    s.add(10)

    console.log(s)