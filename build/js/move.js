!function(){"use strict";var a=document,b=a.getElementById("streambox");return null===b?void console.log("%cStreambox is null","color:#abb;"):0===b.getElementsByTagName("iframe").length?void console.log("%cStreambox iframe is null","color:#abb;"):(console.log("%cStreambox moving","color:#abb;"),void(location.href=b.getElementsByTagName("iframe")[0].getAttribute("src")))}();