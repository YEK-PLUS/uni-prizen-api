const getExamTimeTable = require('./getExamTimeTable');
const getMainPage = require('./getMainPage');
const getNews = require('./getNews');
const getTimeTable = require('./getTimeTable');

const getAll = async () => {
  const mainPage = await getMainPage();
  const news = await getNews();
  const timeTable = await getTimeTable();
  const examTimeTable = await getExamTimeTable();
  return {
    mainPage,
    news,
    timeTable,
    examTimeTable,
  };
};
module.exports = getAll;
