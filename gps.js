// GPS toggle only. The OUT dialog is handled by Bootstrap (data-bs-toggle="modal").
(function () {
    var banner     = document.getElementById('gps-banner');
    var bannerText = document.getElementById('gps-banner-text');
    var statusBtn  = document.getElementById('status-btn');
    var departure  = document.getElementById('departure');
    var lat        = document.getElementById('val-lat');
    var lng        = document.getElementById('val-lng');
    var sent       = document.getElementById('val-sent');

    function setGps(on) {
        banner.className = 'gps-banner ' + (on ? 'gps-on' : 'gps-off');
        bannerText.textContent = on ? 'GPS sharing: ON' : 'GPS sharing: OFF';

        statusBtn.className = 'status-btn ' + (on ? 'gps-on-btn' : 'gps-off-btn');
        statusBtn.textContent = on ? 'Status: Enabled' : 'Status: Disabled';
        statusBtn.setAttribute('aria-pressed', on);

        // Placeholder values
        lat.textContent  = on ? '14.2795'    : '---';
        lng.textContent  = on ? '121.1269'   : '---';
        sent.textContent = on ? '10 sec ago' : '---';

        departure.hidden = !on;
    }

    statusBtn.addEventListener('click', function () {
        setGps(statusBtn.getAttribute('aria-pressed') !== 'true');
    });
})();