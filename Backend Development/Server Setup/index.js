const http = require('http');

const server = http.createServer(/* callback function */ (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); // For every request the response's content will be in html or plain text
    res.write(`
    <head>
        <title>Basic server setup in NodeJS</title>
    </head>
    `); // What ever is given to write method will be the content of web page

    const { url } = req;
    if(url === '/'){
        res.write(`
        <body>
            <h1>Home page</h1>
            <p>Welcome to my nodejs application.</p>
        </body>
        `); // You can use write method as many times as you want, but you can't after end method.
    }
    else if(url === '/about'){
        res.write(`
        <body>
            <h1>About page</h1>
            <p>Want to know about my web page! It's built in NodeJS.</p>
        </body>
        `);
    }
    else if(url === '/contact'){
        res.write(`
        <body>
            <h1>Contact page</h1>
            <p>You can reach me at me@email.com.</p>
        </body>
        `);
    }
    else {
        res.write(`
        <body>
            <h1>404, page not found</h1>
        </body>
        `);
    }

    res.end(); // end function is important for every request and response cycle to complete, else browser will be loading the response infinitely until the timeout. 
});

server.listen(/* port */ 3000,  /* callback function */ function() { // The server listens on port 3000, when ready the callback function will be executed
    console.log('Server listening on port 3000.... navigate to http://localhost:3000/');
});