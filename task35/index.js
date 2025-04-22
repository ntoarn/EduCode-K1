setInterval(() => {
    const now = new Date()
    document.close()
    document.write(`<p style = "font-size: 2em;
        font-family: Arial, sans-serif;
        text-align: center;
        margin-top: 50px;
        padding: 20px;
        background-color: #f0f0f0;
        border-radius: 10px;
        width: 300px;
        margin-left: auto;
        margin-right: auto;"> ${now.toLocaleTimeString()}</p>`)
},1000)



