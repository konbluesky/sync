let replaceData = (data) => {
  return data.substring(data.indexOf('proxies:')+8, data.indexOf('proxy-groups:')).replace(/^\s*-$/g, '').replace(/name: /g, '').replace(/type: /g, '=').replace(/server:/g, '').replace(/port:/g, '').replace(/password: /g, 'password=').replace(/sni: /g, 'tls=true,sni=').replace(/\n/g, ',').replace(/\s/g, '').replace(/-,/g, '\n').replace(/'/g, '').replace(/,\n/g, '\n').replace(/,$/g, '').replace(/,=/g, '=').trim()
}

$httpClient.get('clashurl', (err, res, data) => {
	$done({
    response: {
      status: 200,
      body: replaceData(data)
    }
  })
})
