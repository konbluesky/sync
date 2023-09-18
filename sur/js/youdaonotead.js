/*
有道云笔记去广告
https://silk.lx.netease.com/api/web/advertWeb/getAdvertResources
hostname: silk.lx.netease.com
*/


let obj = JSON.parse($response.body);
if (obj.data.itemList && obj.data.itemList.length > 0) {
  obj.data.itemList[0].advertResourceList = [];
}
$done({body: JSON.stringify(obj)});