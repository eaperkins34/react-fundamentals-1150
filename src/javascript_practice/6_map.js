//.map() is everywhere and even asked about in interviews. Check the MDC
//document. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var kvArray = [
    {key: 1, value: 10 },
    {key: 2, value: 20 },
    {key: 3, value: 30 }
];

console.log(kvArray);

var reformmatedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})