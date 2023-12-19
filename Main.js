content = tab('index.html') // https://petercastell.ca/editor

console.log("path: " + path);

if(path == "") {
	content = tab('index.html')
}
else if(path == "post") {
  	if(query.password == "123") {
    	content = "Posted succesfully"
    	save("save_state", body)
    }
  	else {
    	content = "Wrong Password Loser"
    }
}
else if(path == "get") {
  content = load("save_state", "{}")
  console.log(content)
}
else {
  content = "404"
}
