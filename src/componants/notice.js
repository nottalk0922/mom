const axios = require("axios");
const cheerio = require("cheerio");

async function getHTML() {
    try {
        return await axios.get("http://www.xn--xz2b58vb0a.com/bbs/board.php?bo_table=m05_02");
    } catch (error) {
        console.error(error);
    }
}

getHTML()
    .then((html) => {
        let titleList = [];
        const $ = cheerio.load(html.data);
        const bodyList = $("").children("div");

        bodyList.each(function (i, elem) {
            titleList[i] = {
                url: $(this).find("div div div div div a").attr('href'),
                bodyText: $(this).find("div div a").text(),
                date: $(this).find("div div div div span").text()
            };
        });
        return titleList;
    })
    .then((res) => console.log(res));