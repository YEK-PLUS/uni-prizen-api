const getUrl = require('./getUrl');

const getMainPage = async () => {
  const $ = await getUrl('https://www.uni-prizren.com');
  const slides = $('rs-slide');
  const data = [];
  slides.map((i, el) => {
    const subTitle = $(el).find('a[style*="z-index:10"]').text().trim();
    const title = $(el).find('a[style*="z-index:9"]').text().trim();
    const link = $(el).find('a[style*="z-index:9"]').attr('href').trim();
    const img = $(el).find('img').attr('src').trim();
    return data.push({
      title,
      subTitle,
      link,
      img,
    });
  });
  return data;
};
module.exports = getMainPage;
