// server code runs here

function onRequest(path, query, body) {
  const proj_name = parent.document.getElementById("project-name").value
  
  console.log("path: " + path);
  
  if(path==""||path == "index.html") {
    return tab('index.html')
    
  }
  else if (path == "post") {
    if(query.password == "123") {
    		
    		
        save("save_state", body)
        return "Posted succ"
    	}
    else {
      return "Loser"
    } 
    
  }
  else if (path == "get") {
    return load("save_state", "{}")
    
  }
  else {
    return "404"
  }
  
  
  
  /*
		return tab('index.html')
		
  
  	if(path == "post") {
  		if(query.password == "123") {
    		
    		
        save("save_state", body)
        return
    	}
  	
		}
		else if(path == "get") {
      
  		load("save_state", "{}")
      
      return
  		
		}
    */
  	
}
