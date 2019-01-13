let userArray = process.argv.slice(2);
var ob = {};
[ob.username,ob.email] = userArray.slice(1,3);
    // what goes here?

    console.log(ob); // {username: "jdoe", email: "john@doe.com"}