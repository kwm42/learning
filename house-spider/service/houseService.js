const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');

function parseInfo(html){
    let $ = cheerio.load(html);
    let houseArray = [];

    var img, details, title, proPrice, priceDet, unitPrice, commonAddress, detailsItem, detailLink;

    $('.list-item').each((index, item) => {
        img = $(item).children('.item-img').children('img').attr('src');
        details = $(item).children('.house-details');
        title = $(details).children('.house-title').children('a').attr('title');
        detailLink = $(details).children('.house-title').children('a').attr('href');
        commonAddress = $(details).find('.comm-address').attr('title');
        detailsItem = $(details).find('.details-item').text().replace(/\s/g, '');
        proPrice = $(item).children('.pro-price');
        priceDet = $(proPrice).children('.price-det').children('strong').text();
        unitPrice = $(proPrice).find('.unit-price').text();
        houseArray.push({
            img: img,
            title: title,
            priceDet: priceDet,
            unitPrice: unitPrice,
            commonAddress: commonAddress,
            detailsItem: detailsItem,
            detailLink: detailLink
        });
    });
    fs.writeFileSync('./houseArray.txt', JSON.stringify(houseArray));
}

exports.gethouseInfo = function(){
    superagent
        // .get('https://github.com/visionmedia/superagent')
        .get('https://fz.anjuke.com/sale/minhou/?from=SearchBar')
        .query({})
        .end((err, res) => {
            fs.writeFileSync('./resullt.txt', res.text);
            parseInfo(res.text);
        });
}
