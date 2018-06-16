somePromise
.then(result => add5(result))
.then(add5Result => multiplyBySelf(add5Result))

function add5(val){
	return val+5
}
	
function multiplyBySelf(val{
	return val * val
})


somePromise
.then(add5)
.then(multiplyBySelf)
