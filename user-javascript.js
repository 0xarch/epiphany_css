var link=document.createElement('link');
link.rel="stylesheet";
link.type="text/css";
if(window.location.host=="cn.bing.com"){
        //var link=document.createElement('link');
        //link.rel="stylesheet";
        //link.type="text/css";
        link.href='https://cdn.jsdelivr.net/china/gh/0xarch/epiphany_css/css_bing.css';
        document.querySelector("head").appendChild(link);
        console.log("UPLOAD BING CSS");
    }
else if(window.location.host.includes(".bilibili.com")){
        //var link=document.createElement('link');
        //link.rel="stylesheet";
        //link.type="text/css";
        link.href='https://cdn.jsdelivr.net/china/gh/0xarch/epiphany_css/css_bili.css';
        document.querySelector("head").appendChild(link);
        console.log("UPLOAD BILI CSS");
    }
else if(window.location.host.inclues(".zhihu.com")){
        link.href='https://cdn.jsdelivr.net/china/gh/0xarch/epiphany_css/css_zhihu.css';
        document.querySelector("head").appendChild(link);
        console.log("UPLOAD ZHIHU CSS");
}
	
