function parser(array)
{
    const parsedBody = Buffer.concat(array).toString();
    const message = parsedBody.split('create-user=')[1];
    //console.log(message);
    return message;
}

module.exports = 
{
    parser: parser
}