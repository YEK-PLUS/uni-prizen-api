const getUrl = require('./getUrl');

const getExamTimeTable = async () => {
  const $ = await getUrl(
    'https://fshk.uni-prizren.com/bachelor/tit-tur/sinav-takvimi-tit-tur/',
  );
  const currentTimeTable = $('.wpb_wrapper .aio-icon-component');
  const data = [];
  currentTimeTable.map((i, el) => {
    const title = $(el).find('.aio-icon-header h3').text().trim();
    const link = $(el).find('a').attr('href').trim();
    return data.push({
      title,
      link,
    });
  });
  return data;
};
module.exports = getExamTimeTable;
