const getUrl = require('./getUrl');

const getNews = async () => {
  const $ = await getUrl('https://www.uni-prizren.com/upz/lajme/');
  const news = $('.recent-posts article');
  const data = [];
  news.map((i, el) => {
    const title = $(el).find('.post-content a').text().trim();
    const date = $(el).find('time').text().trim();
    const link = $(el).find('.post-content a').attr('href').trim();
    const img = $(el).find('.mini-post-img img').attr('data-src');
    return data.push({
      title,
      date,
      link,
      img,
    });
  });
  return data;
};
module.exports = getNews;
