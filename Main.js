content = tab('index.html') // https://petercastell.ca/editor

console.log("path: " + path);

const proj_name = document.getElementById("project-name").value

if(path == "") {
	content = tab('index.html').replace("PROJNAME", proj_name)
}
else if(path == "test.html") {
  content = tab('test.html').replace("PROJNAME", proj_name)
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
