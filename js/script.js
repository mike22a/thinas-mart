// function tambahMenu () {
//     return '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+data.gambar+' "class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5>Rp. '+ data.harga +',00</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
// }

// function allCategory () {
//     $.getJSON('data/getData.php?case=category', function (data) {
//         let category = data;
//         let content = '';
//         console.log(category);
//         $.each(category, function (i, data) {
//             content += ('<a class="nav-item nav-link" href="#">'+ data.category_name +'</a>');
            
//             // ('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+data.gambar+' "class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5>Rp. '+ data.harga +',00</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
            
//         });
//         $('#listCategory').append(content);
//     });
// };
    
// allCategory();

// function allItem () {
//     $.getJSON('data/getData.php?case=item', function (data) {        
//         let item = data;
//         let content = '';
//         console.log(item);
//         $.each(item, function (i, data) {
//             content += ('<div class="col-md-4"><div class="card mb-3"><img src="img/item/'+data.picture+' "class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.name +'</h5><p class="card-text">'+ data.description +'</p><h5>Rp. '+ data.price +',00</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
            
//         });
//         $('#daftar-item').html(content);
//     });
// };
    
// allItem();

$(document).ready(function(){
    function allCategory () {
        $.getJSON('data/getData.php?case=category', function (data) {
            let category = data;
            let content = '';
            $.each(category, function (i, data) {
                content += ('<a class="nav-item nav-link" href="#">'+ data.category_name +'</a>');
                
                // ('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+data.gambar+' "class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5>Rp. '+ data.harga +',00</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
                
            });
            $('#listCategory').append(content);
        });
    };
    
    function allItem () {
        $.getJSON('data/getData.php?case=item', function (data) {        
            let item = data;
            let content = '';
            $.each(item, function (i, data) {
                content += ('<div class="col-md-4"><div class="card mb-3"><img src="img/item/'+data.picture+' "class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.name +'</h5><p class="card-text">'+ data.description +'</p><h5>Rp. '+ data.price +',00</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
                
            });
            $('#daftar-item').html(content);
        });
    };
    allCategory();
    allItem();
    $(document).on('click', '.nav-link', function(e) {
        
    // })
    // $('.nav-link').click(function(e){
        e.preventDefault();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');

        let category = $(this).html();
        $('h1').html(category);
    
        if (category == 'All Item') {
            allItem();
            return;
        }

        $.getJSON('data/getData.php?case=item', function (data) {
            console.log(data);
            let content = '';
            let item = data;
            
            $.each(item, function (i,data) {
                if (data.category_name == category) {
                    content += ('<div class="col-md-4"><div class="card mb-3"><img src="img/item/'+data.picture+' "class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.name +'</h5><p class="card-text">'+ data.description +'</p><h5>Rp. '+ data.price +',00</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
                };
            });

            $('#daftar-item').html(content);
        });

    });
  });


// function tampilkanSemuaMenu () {
//     $.getJSON('data/pizza.json', function (data) {
//         let menu = data.menu;
//         let content = '';
//         $.each(menu, function (i, data) {
//             content += ('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+data.gambar+' "class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5>Rp. '+ data.harga +',00</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
            
//         });
//         $('#daftar-menu').html(content);
//     });
// };
    
// tampilkanSemuaMenu();

// $('.nav-link').on('click', function () {
//     $('.nav-link').removeClass('active');
//     $(this).addClass('active');

//     let kategori = $(this).html();
//     $('h1').html(kategori);

//     if (kategori == 'All Menu') {
//         tampilkanSemuaMenu();
//         return;
//     }

//     $.getJSON('data/pizza.json', function (data) {
//         let content = '';
//         let menu = data.menu;
        
//         $.each(menu, function (i,data) {
//             if (data.kategori == kategori.toLowerCase()) {
//                 content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+ data.gambar +'"class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><pclass="card-text">'+ data.deskripsi +'</p><h5>Rp. '+ data.harga +',00</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
//             };
//         });

//         $('#daftar-menu').html(content);
//     });

    




// });