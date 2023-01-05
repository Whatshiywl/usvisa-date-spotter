const consularSections = [
  {
    display: 'Brasilia',
    value: 54
  },
  {
    display: 'Porto Alegre',
    value: 128
  },
  {
    display: 'Recife',
    value: 57
  },
  {
    display: 'Rio de Janeiro',
    value: 55
  },
  {
    display: 'Sao Paulo',
    value: 56
  },
];

function openSchedulePage() {
  chrome.runtime.sendMessage({ type: 'openSchedulePage' });
}

function openScheduleJson() {
  chrome.runtime.sendMessage({ type: 'openScheduleJson' });
}

function alertDateChange(event) {
  chrome.runtime.sendMessage({ type: 'setAlertDate', options: { value: event.target.value } });
}

window.onload = () => {
  chrome.runtime.sendMessage({ type: 'getAlertDate' }, alertDate => {
    const alertDatePicker = document.getElementById('alert-date');
    alertDatePicker.value = alertDate;
  })

  chrome.runtime.sendMessage({ type: 'getUserId' }, userId => {
    const userIdElement = document.getElementById('user-id');
    userIdElement.innerText = userId;
  });

  const consularDropdown = document.getElementById('consular-dropdown');
  chrome.runtime.sendMessage({ type: 'getConsularSection' }, consularSection => {
    consularDropdown.value = consularSection;
  });

  for (const { display, value } of consularSections) {
    const option = document.createElement('option');
    option.innerText = display;
    option.value = value;
    consularDropdown.appendChild(option);
  }
  consularDropdown.addEventListener('change', event => {
    chrome.runtime.sendMessage({ type: 'setConsularSection', options: { value: event.target.value } });
  });

  document.getElementById('alert-date').addEventListener('change', alertDateChange);

  document.getElementById('open-schedule-page').addEventListener('click', openSchedulePage);
  document.getElementById('open-schedule-json').addEventListener('click', openScheduleJson);
};
