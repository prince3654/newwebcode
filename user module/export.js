const add = (a,b)=> {
    return a+b;
}
const sub= (a,b)=>{
    return a-b;
}
const name = 'ram';
// module.exports =add;
// module.exports = sub;
// above two not working in the case of two exports
// module.exports.add = add;
// module.exports.sub = sub;

module.exports = {add, sub, name};