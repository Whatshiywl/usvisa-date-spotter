let alertDate = '';
let userId = '';
let consularSection = 0;

chrome.runtime.onMessage.addListener(async (request, sender, callback) => {
  let url;
  let tab;
  switch (request.type) {
    case 'setAlertDate':
      alertDate = request.options.value;
      break;
    case 'getAlertDate':
      return callback(alertDate);
    case 'setUserId':
      userId = request.options.value;
      break;
    case 'getUserId':
      return callback(userId);
    case 'setConsularSection':
      consularSection = request.options.value;
      break;
    case 'getConsularSection':
      return callback(consularSection);
    case 'openSchedulePage':
      if (!userId) return;
      url = `https://ais.usvisa-info.com/pt-br/niv/schedule/${userId}/appointment`;
      tab = await chrome.tabs.query({ active: true, currentWindow: true });
      await chrome.tabs.update(tab.id, { url })
      break;
    case 'openScheduleJson':
      if (!userId || !consularSection) return;
      url = `https://ais.usvisa-info.com/pt-br/niv/schedule/${userId}/appointment/days/${consularSection}.json?appointments[expedite]=false`;
      tab = await chrome.tabs.query({ active: true, currentWindow: true });
      await chrome.tabs.update(tab.id, { url })
      break;
  }
  callback();
});
