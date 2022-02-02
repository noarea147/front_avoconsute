$('#blog_imageFile_file').removeAttr('required');



if($('#blog_categorie').val()!='')
{
    get_sub_categorie($('#blog_categorie').val());

}
$('#blog_categorie').change(function (){
    get_sub_categorie($(this).val());
})
function get_sub_categorie(category)
{
    $('#blog_subCategorie').empty();

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
                var option='<option value="" disabled>selecgtionner sous categorie</option>';
                for(var i in data.data)
                {
                    var id=data.data[i]['id'];
                    var libelle_ar=data.data[i]['libelle_ar'];
                    var libelle_ar=data.data[i]['libelle_fr'];

                    option+='<option value="'+id+'">'+libelle_ar+'</option>'
                }
            }
            $('#blog_subCategorie').append(option);
        }
    });
    }
