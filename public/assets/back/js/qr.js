$('#qr_reponse_reponse').removeAttr('required');

if($('#qr_reponse_categorie').val()!='')
{
    get_sub_categorie($('#qr_reponse_categorie').val());

}
$('#qr_reponse_categorie').change(function (){
    get_sub_categorie($(this).val());
})
function get_sub_categorie(category)
{
    $('#qr_reponse_subCategorie').empty();

    $.ajax({

        url: '/admin/sub/categorie/ajax',
        method: 'POST',
        data: {
            category: category,
        },
        dataType: 'json',
        success: function (data) {
            if(data.data.length>0)
            {
                var option='<option value="" disabled>selectionner sous categorie</option>';
                for(var i in data.data)
                {
                    var id=data.data[i]['id'];
                    var libelle_ar=data.data[i]['libelle_ar'];
                    var libelle_fr=data.data[i]['libelle_fr'];

                    option+='<option value="'+id+'">'+libelle_ar+'</option>'
                }
            }
            $('#qr_reponse_subCategorie').append(option);
        }
    });
}
