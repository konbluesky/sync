console.log($response)
console.log($response.body)
let body = $response.body.replace(/\?NO/g, "?YES")
console.log(body)
	$done({
    	response: {
      		status: 200,
      		body: body
    	}
	})
