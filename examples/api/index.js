var xhrObject = new XMLHttpRequest();

xhrObject.onreadystatechange = function() {
  if (xhrObject.readyState === 4) {
    if (xhrObject.status === 200 || xhrObject.status === 304) {
      
      console.log(xhrObject.responseText); 
      document.body.innerHTML = xhrObject.responseText;
      
    }
  }
};

xhrObject.open(
  "GET", 
  "https://en.wikipedia.org/w/api.php?action=query&titles=San_Francisco&prop=images&imlimit=20&format=jsonfm", 
  true
);
xhrObject.send();
