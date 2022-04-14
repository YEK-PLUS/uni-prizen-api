const getMainPage = require('./modules/getMainPage');

(async () => {
  const data = await getMainPage();
  console.log(data);
})();
