const body = document.body;

const scheduleRegex = /^https:\/\/ais.usvisa-info.com\/.*\/niv\/schedule\/(\d+).*$/;
const appointmentPageRegex = /^https:\/\/ais.usvisa-info.com\/.*\/niv\/schedule\/\d+\/appointment$/;
const appointmentJsonRegex = /^https:\/\/ais.usvisa-info.com\/.*\/niv\/schedule\/\d+\/appointment\/days\/\d+\.json\?appointments\[expedite\]\=false$/;

function sleep(n) {
  return new Promise(r => setTimeout(r, n));
}

async function awaitJson() {
  while (true) {
    try {
      if (json) return;
    } catch (error) { }
    await sleep(200);
  }
}

function sendMessage(data) {
  return new Promise(resolve => {
    const callbackId = Math.random().toString(16).substring(2);
    const callbackListener = event => {
      if (event.data.issuer !== 'usvisa-content') return;
      if (event.data.callbackId !== callbackId) return;
      window.removeEventListener('message', callbackListener);
      resolve(event.data.result);
    }
    window.addEventListener('message', callbackListener);
    window.postMessage({ issuer: 'usvisa-script', callbackId, ...data });
  });
}

(async () => {
  const { href } = location;
  const isOnSchedule = href.match(scheduleRegex);
  if (!isOnSchedule) return false;
  const [ , userId ] = isOnSchedule;
  await sendMessage({ type: 'setUserId', options: { value: userId } });
  if (href.match(appointmentPageRegex)) {
    const consularSectionDropdown = document.getElementById('appointments_consulate_appointment_facility_id');
    consularSectionDropdown.addEventListener('change', element => {
      sendMessage({ type: 'setConsularSection', options: { value: element.target.value } });
    });
    const consularSection = await sendMessage({ type: 'getConsularSection' });
    if (consularSection) {
      consularSectionDropdown.value = consularSection;
      consularSectionDropdown.dispatchEvent(new Event('change'));
    }
  } else if (href.match(appointmentJsonRegex)) {
    console.log(new Date().toLocaleString());
    const alertDate = (await sendMessage({ type: 'getAlertDate' })) || '2023-06-01';
    console.log(`Alerting if before ${alertDate}`);
    const rawJson = body.innerText.replace(/^RawParsed/, '').replace(/\s/g, '');
    const json = JSON.parse(rawJson);
    const first = json[0].date;
    console.log('First date', new Date(first).toDateString());
    if (first < alertDate) body.style.backgroundColor = 'red';
    else {
      await sleep(5 * 60 * 1000 + (Math.random() - 0.5) * 60 * 1000);
      location.reload();
    }
  }
})()
.then(() => console.log('Done!'))
.catch(console.error);
