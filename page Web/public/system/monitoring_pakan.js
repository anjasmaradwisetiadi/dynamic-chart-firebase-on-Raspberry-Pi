$(function() {
    var firebase_status_feeding_sedang = firebase.database().ref().child('home/status_feeding_sedang');
    var firebase_status_feeding_habis = firebase.database().ref().child('home/status_feeding_habis');

   

    

    firebase_status_feeding_habis.on('value', function(dataSnapshot) {
         nilai_status_feeding_habis_1 = dataSnapshot.val();


    

    firebase_status_feeding_sedang.on('value', function(dataSnapshot) {
         nilai_status_feeding_sedang_1 = dataSnapshot.val();

    
    /*
    window.alert('nilai nilai_status_feeding_habis_1 = ' + nilai_status_feeding_habis_1)
    window.alert('nilai nilai_status_feeding_sedang_1 = ' + nilai_status_feeding_sedang_1)
	*/
    if (nilai_status_feeding_habis_1 <= 150 && nilai_status_feeding_sedang_1 <= 150) {
        var nTheme = 'error';
        var nTitle = 'habis pakan';
        var nMessage = 'data satu  ' + (nilai_status_feeding_sedang_1) + 'data dua ' + (nilai_status_feeding_habis_1)
    } else if (nilai_status_feeding_sedang_1 < 151 && nilai_status_feeding_habis_1>151) {
        var nTheme = 'info';
        var nTitle = 'pakan tinggal setengah';
        var nMessage = 'data satu  ' + nilai_status_feeding_sedang_1 + 'data dua ' + (nilai_status_feeding_habis_1)
    } else {
        var nTheme = 'success';
        var nTitle = 'pakan masih banyak';
        var nMessage = 'data satu  ' + (nilai_status_feeding_sedang_1) + 'data dua ' + (nilai_status_feeding_habis_1)
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


    });

})