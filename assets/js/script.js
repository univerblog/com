/*LEAD REACTOR*/
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = document.getElementsByTagName("html")[0].getAttribute("lang");
  const dateNodes = document.querySelectorAll('.js-publish-date');
  const currentDateNode = document.querySelector('.js-current-date');
  const commTimeNodes = document.querySelectorAll('.js-comm-time');
  const currentYearNode = document.querySelectorAll('.js-current-year');

  moment.locale(currentLang);

  var publish = moment().subtract(3, 'days');
  var now = moment();

  dateNodes.forEach(node => {
    node.innerHTML = publish.format('ll');
  });

  if (currentDateNode) {
    currentDateNode.innerHTML = now.format('L');
  }

  currentYearNode.forEach(node => {
    node.innerHTML = now.format('YYYY');
  });

  /*Время для блока комментов*/
  var index;
  var hoursToSubtract = 3;
  for (index = 0; index < commTimeNodes.length; ++index) {
    commTimeNodes[index].innerHTML = now.subtract(hoursToSubtract, 'hours').format('L');
  }
});