/*字符串替换*/
removeStringByReplace:(info, nouse) => {
  return info.replace(nouse, "");
};
/*字符串过滤*/
removeStringBySplit:(info, nouse) => {
  return info.split(nouse).join("");
};
/*字符串截取*/
interceptStringBySubstring:(info, nouse) => {
  return info.substring(0, info.lastIndexOf(nouse));
}
/*字符串截取*/
interceptStringBySubstr:(info, startNum, endNum) => {
  return info.substr(startNum, endNum);
}
/*字符串截取*/
interceptStringBySubstring:(info, startNum, endNum) => {
  return info.substring(startNum, endNum);
}
/*数组合并*/
arrayConcat:(array1, array2) => {
  return array1.concat(array2);
}
/*对象合并（浅拷贝）*/
objectConcat: (object1, object2) => {
  return Object.assign({}, object1, object2);
}
/*获取当前时间（格式）*/
newDateTime:() => {
  let myDate = new Date();
  let dateTime = myDate.getFullYear() + "年" + myDate.getMonth() + "月" + myDate.getDate() + "日" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒";
  return dateTime;
}
/*获取当前时间*/
newTimeStamp:() => {
  return new Date().getTime() % 2 == 0 ? (new Date()).valueOf() : Date.parse(new Date());
}
/*数组是否包含某值*/
isContain:(array, info) => {
  return array.concat(info) != -1 ? true : false;
}
/*Number四舍五入保留n位小数*/
keepDecimal:(float, n) => {
  return float.toFixed(n);
}
