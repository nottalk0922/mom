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
        const bodyList = $("div.list-group").children("a");

        bodyList.each(function (i, elem) {
            titleList[i] = {
                title: $(this).find("a strong.black").text(),
                url: $(this).attr('href'),
                date: $(this).find("a span.hidden-xs").text()
            };
        });
        return titleList;
    })
    .then((res) => console.log(res));
