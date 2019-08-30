removeStringByReplace:(info, nouse) => {
  return info.replace(nouse, "");
};
removeStringBySplit:(info, nouse) => {
  return info.split(nouse).join("");
};
interceptStringBySubstring:(info, nouse) => {
  return info.substring(0, info.lastIndexOf(nouse));
}
interceptStringBySubstr:(info, startNum, endNum) => {
  return info.substr(startNum, endNum);
}
interceptStringBySubstring:(info, startNum, endNum) => {
  return info.substring(startNum, endNum);
}
objectConcat:(obj1, obj2) => {
  return obj1.concat(obj2);
}
newDateTime:() => {
  let myDate = new Date();
  let dateTime = myDate.getFullYear() + "年" + myDate.getMonth() + "月" + myDate.getDate() + "日" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒";
  return dateTime;
}
newTimeStamp:() => {
  return new Date().getTime() % 2 == 0 ? (new Date()).valueOf() : Date.parse(new Date());
}
