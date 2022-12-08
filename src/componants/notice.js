const axios = require("axios");
const cheerio = require("cheerio");

export async function getHTML() {
    try {
        axios.get("http://www.xn--xz2b58vb0a.com/bbs/board.php?bo_table=m05_02").then((html) => {
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
    } catch (error) {
        console.error(error);
    }
}
