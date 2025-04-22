setInterval(() => {
    const now = new Date()
    document.close()
    document.write(`<p style = "background: #eee ; width: 100px; text-align: center; margin: 15px 250px; padding: 15px 0 "> ${now.toLocaleTimeString()}</p>`)
},1000)



