var compressjs = require('compressjs');
var fs = require('fs');
var algorithm = compressjs.Bzip2;
var data = new Buffer('This is not an honest face?', 'utf8');

var compressed = algorithm.compressFile(data);
fs.writeFileSync('example',  new Buffer(compressed)    );
//
var decompressedData = fs.readFileSync('example');

var decompressed = algorithm.decompressFile(decompressedData);
// convert from array back to string
var data2 = new Buffer(decompressed).toString('utf8');
console.log(data2);


decompressedData =new Buffer('QlpoNDFBWSZTWeE9fuAAAA+QekABAxAAAIBCsiAAYCAAIaTRo002UKYAAmh7kwmQYOa6VFl2XxdyRThQkOE9fuA=','base64');
decompressed = algorithm.decompressFile(decompressedData);
var data2 = new Buffer(decompressed).toString('utf8');
fs.writeFileSync('example_ar',data2);

//var compressedData = fs.readFileSync('example.bz2');
//fs.writeFileSync('example', data);

