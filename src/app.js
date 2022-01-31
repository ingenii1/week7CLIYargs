const yargs = require("yargs");

const {Movie, movieArr} = require("./utils");

const app = (args) => {
    if(args.add) {
        const movie = new Movie(args.movie, args.actor);
        movie.add()
        console.log(movieArr);
    } 
    else if(args.addMany){
        console.log("add many commad");
    }
    else{console.log("incorrect command")}
};

app(yargs.argv);