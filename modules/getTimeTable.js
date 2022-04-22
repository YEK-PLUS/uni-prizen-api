const getUrl = require('./getUrl');

const getTimeTable = async () => {
  const $ = await getUrl('https://fshk.uni-prizren.com/bachelor/tit-tur/ders-programi-tit-tur/');
  const currentTimeTable = $('.wpb_wrapper .aio-icon-component');
  const data = {
    title: $(currentTimeTable).find('.aio-icon-header h3').text().trim(),
    link: $(currentTimeTable).find('a').attr('href').trim(),
  };
  return data;
};
module.exports = getTimeTable;
