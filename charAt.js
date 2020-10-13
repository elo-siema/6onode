var createCkey = function(id) {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  var template = "xxxxx_xxxxx_xxxx+xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  var result = "j";
  for(var i=0; i<template.length; i++)
  {
    if(template.charAt(i)=='x') result += chars.charAt(Math.floor(Math.random() * chars.length));
    else result += template.charAt(i);
  }
  console.log(result);
};

createCkey(5);
