var firetemperature = document.getElementById('temperature_view');
var firehumidty = document.getElementById('humidty_view');

var firebase_temperature = firebase.database().ref().child('suhu/temperature');
var firebase_humidty = firebase.database().ref().child('suhu/humidty');
// *** tampilan temperature dari firebase database ke tampil web
firebase_temperature.on('value', function(datasnapshot){
    firetemperature.innerHTML = datasnapshot.val();

    if(firetemperature.innerHTML >= 27 && firetemperature.innerHTML <= 32){
        var nTheme = 'success';
        var nTitle = 'Suhu Aman';
        var nMessage = 'Suhu saat ini ' + firetemperature.innerHTML + ' °C'
    }

    if(firetemperature.innerHTML < 27){
        var nTheme = 'error';
        var nTitle = 'Suhu Terlalu Dingin';
        var nMessage = 'Suhu saat ini ' + firetemperature.innerHTML + ' °C'
    }

    if(firetemperature.innerHTML > 32){
        var nTheme = 'error';
        var nTitle = 'Suhu Terlalu Panas';
        var nMessage = 'Suhu saat ini ' + firetemperature.innerHTML + ' °C'
    }

    window.createNotification({
        closeOnClick: 'Close on click',
        displayCloseButton: 'Display close button',
        positionClass: 'nfc-top-right',
        showDuration: 3000,
        theme: nTheme
    })({
        title: nTitle,
        message: nMessage
    });
});
// *** tampilan kelembabpan dari firebase database ke tampilan web
firebase_humidty.on('value', function(datasnapshot){
    firehumidty.innerHTML = datasnapshot.val();

    window.createNotification({
        closeOnClick: 'Close on click',
        displayCloseButton: 'Display close button',
        positionClass: 'nfc-top-right',
        showDuration: 3000,
        theme: 'info'
    })({
        title: 'Info Kelembaban',
        message: 'Kelembaban saat ini ' + firehumidty.innerHTML + ' °C'
    });
});