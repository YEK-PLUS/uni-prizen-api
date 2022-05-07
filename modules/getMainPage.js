const getUrl = require('./getUrl');

const getMainPage = async () => {
  const $ = await getUrl('https://www.uni-prizren.com');
  const slides = $('rs-slide');
  const data = [];
  slides.map((i, el) => {
    const title = $(el).data('title');
    const description = $(el).data('description');
    const link = $(el).data('link');
    const img = $(el).find('img').data('lazyload');
    return data.push({
      title,
      description,
      link,
      img,
    });
  });
  return data;
};
module.exports = getMainPage;
