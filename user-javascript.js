    if(window.location.host=="cn.bing.com"){
        var link=document.createElement('link');
        link.rel="stylesheet";
        link.type="text/css";
        link.href='https://cdn.jsdelivr.net/china/gh/0xarch/epiphany_css/css_bing.css';
        document.querySelector("head").appendChild(link);
        console.log("UPLOAD BING CSS");
    }
    if(window.location.host.includes(".bilibili.com")){
        var link=document.createElement('link');
        link.rel="stylesheet";
        link.type="text/css";
        link.href='https://cdn.jsdelivr.net/china/gh/0xarch/epiphany_css/css_bili.css';
        document.querySelector("head").appendChild(link);
        console.log("UPLOAD BILI CSS");
    }
