var lala = [{ "id": 1, "first_name": "Allyn", "last_name": "Kleis", "email": "akleis0@de.vu", "gender": "Male" },
        { "id": 2, "first_name": "Lyssa", "last_name": "Gradly", "email": "lgradly1@ed.gov", "gender": "Female" },
        { "id": 3, "first_name": "Sheena", "last_name": "Theodore", "email": "stheodore2@lulu.com", "gender": "Female" },
        { "id": 4, "first_name": "Rasia", "last_name": "Bearham", "email": "rbearham3@slate.com", "gender": "Female" },
        { "id": 5, "first_name": "Conrade", "last_name": "Alten", "email": "calten4@intel.com", "gender": "Male" },
        { "id": 6, "first_name": "Dolley", "last_name": "Janny", "email": "djanny5@chronoengine.com", "gender": "Female" },
        { "id": 7, "first_name": "Cornie", "last_name": "Wines", "email": "cwines6@abc.net.au", "gender": "Male" },
        { "id": 8, "first_name": "Lawrence", "last_name": "Bertelet", "email": "lbertelet7@gnu.org", "gender": "Male" },
        { "id": 9, "first_name": "Pen", "last_name": "Avery", "email": "pavery8@ucla.edu", "gender": "Male" },
        { "id": 10, "first_name": "Kristel", "last_name": "Orringe", "email": "korringe9@toplist.cz", "gender": "Female" },
        { "id": 11, "first_name": "Rowen", "last_name": "Pecey", "email": "rpeceya@devhub.com", "gender": "Male" },
        { "id": 12, "first_name": "Alford", "last_name": "Gaynesford", "email": "agaynesfordb@e-recht24.de", "gender": "Male" },
        { "id": 13, "first_name": "Shena", "last_name": "Tollady", "email": "stolladyc@engadget.com", "gender": "Female" },
        { "id": 14, "first_name": "Valdemar", "last_name": "McKeefry", "email": "vmckeefryd@elegantthemes.com", "gender": "Male" },
        { "id": 15, "first_name": "Maureene", "last_name": "MacMeeking", "email": "mmacmeekinge@wordpress.com", "gender": "Female" }];

var titles = ['id','first_name','last_name','email','gender'];

$(document).ready(function(){
    var $table = $('<table />').attr('border','1');
    var $tr = $('<tr />')
    titles.forEach(function(o){
        $tr.append($('<th/>').text(o));
    });
    $('#show').append($table.append($tr));

    //데이터영역
    lala.forEach(function(o){
        $tr = $('<tr />').mouseenter(mouseenterFunc)
                        .mouseout(mouseoutFunc);
                        
        titles.forEach(function(f){
            $tr.append($('<td/>').text(o[f]));
        })
        $tr.append($('<td/>').append($('<button></button').text('Click').click(mouserclick).mouseout(mouseup)));
        $table.append($tr);
    })
    $('#show').append($table.append($tr));
})

function mouseup(){
    $(this).css('background','');
}

function mouserclick(){
    $(this).css('background','black');
}
function mouseenterFunc(){
    $(this).css('background','red');
}
function mouseoutFunc(){
    $(this).css('background','');
}