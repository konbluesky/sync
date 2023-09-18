/*
有道云笔记去广告
https://silk.lx.netease.com/api/web/advertWeb/getAdvertResources
hostname: silk.lx.netease.com
*/


let obj = JSON.parse($response.body);
obj.data.itemList = []
$done({body: JSON.stringify(obj)});