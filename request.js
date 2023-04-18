const request = require("request");
const cheerio = require("cheerio");
//const chalk = require("chalk");
request ('https://www.worldometers.info/coronavirus/', cb);

function cb(error, response, html){
    if(error){
        console.log('error', error);
    }else{
        handleHtml(html)
    }

    function handleHtml(html){

        let selTool = cheerio.load(html);
        let contentArr = selTool('#maincounter-wrap span');

        let total = selTool(contentArr[0]).text();
        let death = selTool(contentArr[1]).text();
        let recover = selTool(contentArr[2]).text();

        console.log("Total case", total);
        console.log("Total case", death);
        console.log("Total case", recover);


        //console.log(chalk.gray("Total case", +total));
        // console.log(chalk.red("Total case", +death));
        // console.log(chalk.gray("Total case", +recover));


    }
    //console.log('statusCode', response.statusCode);
    //console.log('body', body);


}