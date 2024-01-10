content = tab('index.html') // https://petercastell.ca/editor

console.log("path: " + path);


if(path == "" || path == "index.html") {
	content = tab('index.html')
}
else if(path == "style.css") {
  content = tab("style.css")
}
else if(path == "test.html") {
  content = tab('test.html')//.replace("PROJNAME", proj_name)
}

else if(path == "PastW.html") {
  content = tab("PastW.html")
}

else if(path == "signup.html") {
  content = tab("signup.html")
}

else if(path == "contact.html") {
  content = tab("contact.html")
}
else if(path == "about.html") {
  content = tab("about.html")
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
