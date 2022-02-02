function getStudentByCours(id_cours) {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/avocat/business/" + id_cours;
    $.ajax({
        dataType: 'json',
        url: baseUrl,
        success: function (data) {
            $('#student-' + id_cours).empty();
            if (data.student.length > 0) {
                var object = data.student;
                for (var i in object) {
                    $('#student-' + id_cours).append('<h4>Nom et prénom: ' + object[i]['firstName'] + '' + object[i]['lastName'] + '<h4><br>');
                }
            }
            else {
                $('#student-' + id_cours).append('aucun inscris');

            }
        }
    });
}
