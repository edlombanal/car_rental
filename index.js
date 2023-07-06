const app = require('./app');
const port = 3001;

const main = async () => {
    app.listen(port, ()=> {
        console.log("Backend listening in port " + port);
    });
};

main();