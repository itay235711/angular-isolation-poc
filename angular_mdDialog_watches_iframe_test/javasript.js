(function(){
  window.onload = (function(pre) {
    return function(){
      pre && pre.apply(this,arguments);

      // template 1
      var iframe = document.createElement('iframe');
      iframe.setAttribute("id", "template1Iframe");
      var html = document.getElementById("template1").innerHTML.replace(/&lt;/g, '<');
      iframe.style.width = "500px";
      iframe.style.height = "500px";
      iframe.style.position = "absolute";
      iframe.style.top = "0";
      iframe.style.left = "0"; 
      var teamComponentContainer = document.getElementById("iframe1Container");
      teamComponentContainer.appendChild(iframe);
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(html);
      iframe.contentWindow.document.close();

      // template 2
      var iframe = document.createElement('iframe');
      iframe.setAttribute("id", "template2Iframe");
      var html = document.getElementById("template2").innerHTML.replace(/&lt;/g, '<');
      iframe.style.width = "240px";
      iframe.style.height = "350px";
      iframe.frameBorder = "0";      
      var teamComponentContainer = document.getElementById("iframe2Container");
      teamComponentContainer.appendChild(iframe);      
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(html);
      iframe.contentWindow.document.close();
      iframe.style.backgroundColor = "transparent";
      iframe.allowtransparency= "true";
      teamComponentContainer.style.zIndex = "-1"; 
    }
  })();
})();