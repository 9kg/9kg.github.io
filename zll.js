var cols = [
  // { key: "id", label: "唯一标识"},
  { key: "title", label: "标题"},
  { key: "status", label: "状态"},
  { key: "initialPrice", label: "初始价"},
  { key: "currentPrice", label: "当前价"},
  { key: "consultPrice", label: "评估价"},
  // { key: "marketPrice", label: "市场价"},
  { key: "finalPrice", label: "成交价"},
  { key: "sellOff", label: "是否变卖"},
  { key: "viewerCount", label: "围观人次"},
  { key: "bidCount", label: "出价次数"},
  { key: "applyCount", label: "报名人次"},
  { key: "subscribersNum", label: "设置提醒人次"},
  { key: "xmppVersion", label: "竞价引起的数据变更次数"},
  { key: "buyRestrictions", label: "不限购"},
  { key: "supportLoans", label: "可贷款"},
  { key: "supportOrgLoan", label: "一键贷款"},
  { key: "start", label: "开始时间"},
  { key: "end", label: "结束时间"},
  { key: "timeToStart", label: "还有多久开始"},
  { key: "timeToEnd", label: "还有多久结束"},
  { key: "delayCount", label: "delayCount"},
  { key: "catNames", label: "catNames"},
  { key: "collateralCatName", label: "collateralCatName"},
  { key: "picUrl", label: "图片地址"},
  { key: "itemUrl", label: "详情页地址"},
  { key: "mnNotice", label: "mnNotice"},
  { key: "credit", label: "credit"},
]

var statusMapping = {
  todo: '即将开始',
  doing: '正在进行',
  done: '已结束',
  break: '中止',
  revocation: '撤回',
}

function getSubscribersNum(ids){
  return new Promise(resolve => {
    const callbackName = `__cb__${Math.random().toString(32).slice(2)}`
    const srcpt2 = document.createElement('script')
    window[callbackName] = function(data){
        resolve(data)
    }
    srcpt2.src = `https://paimai.taobao.com/json/getSubscribersNum?itemIds=${ids}&callback=${callbackName}`
    document.body.appendChild(srcpt2)
    setTimeout(() => {
      document.body.removeChild(srcpt2)
    }, 500)
  })
}

var { data = []} = JSON.parse(document.getElementById('sf-item-list-data').innerHTML)

data = data.map(item => {
  return {
    ...item,
    status: statusMapping[item.status],
    start: formatDate(item.start),
    end: formatDate(item.end),
    timeToStart: formatTimeTo(item.timeToStart),
    timeToEnd: formatTimeTo(item.timeToEnd),
    buyRestrictions: getBoolDesc(item.buyRestrictions),
    supportLoans: getBoolDesc(item.supportLoans),
    supportOrgLoan: getBoolDesc(item.supportOrgLoan),
    initialPrice: formatPrice(item.initialPrice),
    currentPrice: formatPrice(item.currentPrice),
    consultPrice: item.consultPrice ? formatPrice(item.consultPrice) : formatPrice(item.marketPrice),
    marketPrice: formatPrice(item.marketPrice),
    sellOff: getBoolDesc(item.sellOff),
  }
})

getSubscribersNum(data.slice(0,20).map(item => item.id).join(',')).then(nums => {
  nums.forEach(obj => {
    let cur = data.find(item => item.id === obj.itemId)
    cur.subscribersNum = obj.subscribersNum
  })
  getSubscribersNum(data.slice(20).map(item => item.id).join(',')).then(nums => {
    nums.forEach(obj => {
      let cur = data.find(item => item.id === obj.itemId)
      cur.subscribersNum = obj.subscribersNum
    })
    console.log(data)
    const script = document.createElement('script')
    script.src = 'https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'
    script.onload = () => {
        tableHtml = createTable(data)
        tableToExcel(tableHtml)
    }
    document.body.appendChild(script)
  })
})



var tableToExcel = (function() {  
  var uri = 'data:application/vnd.ms-excel;base64,',  
  template = '<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>',  
  base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) },  
  format = function(s, c) {  
      return s.replace(/{(\w+)}/g,  
              function(m, p) { return c[p]; }) }  
  return function(table, name) {  
      if (!table.nodeType) table = document.getElementById(table)  
      var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}  
      window.location.href = uri + base64(format(template, ctx))  
  }  
})()

function formatDate(date){
  let time = new Date(date)
  let  minutes = time.getMinutes()
  minutes = minutes < 10 ? `0${minutes}` : minutes
  return `${time.getMonth()+1}月${time.getDate()}日 ${time.getHours()}:${minutes}`
}
function getBoolDesc(bool){
  return !!bool ? '是' : '否'
}
function formatTimeTo(time){
  const desc = (time/1000/60/60).toFixed(2)
  return `${desc}小时`
}
function formatPrice(money){
  return `${(money/10000).toFixed(2)}万元`
}
function createTable(data){
  var table = $('<table></table>');
  var th = $('<tr></tr>');

  var index = 0;

  for(var i = 0; i < data.length; i++){

      var tr = $('<tr height="200"></tr>');
      var values = data[i];

      for(var j = 0; j < cols.length; j++){
          const col = cols[j]
          let value = values[col.key]
          var td;
          if(col.key === 'picUrl'){
            td = $(`<td width="280">< img height="180" src="https:${value}"/></td>`);
          }else if(col.key === 'itemUrl'){
            td = $(`<td width="100"><a href="https:${value}">https:${value}</a ></td>`);
          }else if(col.key === 'finalPrice'){
            value = values.bidCount > 0 ? values.currentPrice : '-'
            td = $(`<td width="100">${value}</td>`);
          }else{
            td = $(`<td>${value}</td>`)
          }
          if(index == 0){
              th.append($(`<td>${col.label}</td>`));
          }

          tr.append(td);
      }
      if(index == 0){
          table.append(th);
      }
      table.append(tr);
      index++;
  }
  return table.html()
}
var tableToExcel = (function() {  
  var uri = 'data:application/vnd.ms-excel;base64,',  
  template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->'+
  ' <style type="text/css">'+
  '.excelTable  {'+
  'border-collapse:collapse;'+
  ' border:thin solid #999; '+
  '}'+
  '   .excelTable  th {'+
  '   border: thin solid #999;'+
  '  padding:20px;'+
  '  text-align: center;'+
  '  border-top: thin solid #999;'+
  ' '+
  '  }'+
  ' .excelTable  td{'+
  ' border:thin solid #999;'+
  '  padding:2px 5px;'+
  '  text-align: center;'+
  ' }</style>'+'</head><body><table border="1">{table}</table></body></html>',  
  base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) },  
  format = function(s, c) {  
      return s.replace(/{(\w+)}/g,  
              function(m, p) { return c[p]; }) }  
  return function(table, name) {  
      var ctx = {worksheet: name || 'Worksheet', table}  
      window.location.href = uri + base64(format(template, ctx))  
  }  
})()


// const srcpt2 = document.createElement('script')
// window.xxxc2 = function(data){
//     console.log(data);
// }
// srcpt2.src = 'https://paimai.taobao.com/json/getSubscribersNum?itemIds=665151746544&callback=xxxc2'
// document.body.appendChild(srcpt2)
