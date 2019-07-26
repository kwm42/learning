const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const dbUtils = require('../database/dbUtils');

function parseInfo(html) {
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
    // fs.writeFileSync('./houseArray.txt', JSON.stringify(houseArray));
    return houseArray;
}

exports.gethouseInfo = async function () {
    for (var i = 1; i < 10; ++i) {
        // let data = await superagent.get('https://fz.anjuke.com/sale/minhou/?from=SearchBar');
        let data = await superagent.get(`https://fz.anjuke.com/sale/minhou/p${i}/#filtersort`);
        
        let houseArray = parseInfo(data.text);
        dbUtils.saveMany(houseArray);
    }
    return true;
}

exports.findAll = async function () {
    let data = await dbUtils.findAll();
    return data;
}
