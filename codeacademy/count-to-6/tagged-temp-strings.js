console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    function html(s,a,b) {
        a=a.replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
        b=b.replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
        return s[0]+a+s[1]+b+s[2];
    }