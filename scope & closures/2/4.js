var obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log( obj.a, obj.b, obj.c);

obj.a = 2;
obj.b = 3;
obj.c = 4;
console.log( obj.a, obj.b, obj.c);

with (obj) {
    a = 3;
    b = 4;
    c = 5;
}
console.log( obj.a, obj.b, obj.c);