const parser = require('../parser/parser')

function requestHandler(req, res)
{
    const url = req.url;
    const method = req.method;
    if (url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Welcome to my page</title><head>');
        res.write('<body><h1>Add a user</h1>');
        res.write('<body><form action = "/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Send</button></input></form></body>')
        res.write('</html>');
        return res.end()
    }
    if (url === '/users')
    {
        res.write('<html>');
        res.write('<head><title>List of users</title><head>');
        res.write('<ul><li>User 1</li></ul>');
        res.write('<ul><li>User 2</li></ul>');
        res.write('<ul><li>User 3</li></ul>');
        res.write('<ul><li>User 4</li></ul>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST')
    {
        const body = [];
        user = "";
        req.on('data', (chunk) => {
            body.push(chunk)
            parser.parser(body);
        })
        res.write('<html>');
        res.write('<head><title>POST</title><head>');
        res.write('<body><h1>POST successfully completed</h1>');
        res.write('</html>');
        return res.end();
    }
}

module.exports = 
{
    handler: requestHandler
}