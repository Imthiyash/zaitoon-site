$("ul li").click(function(){
    var str = $(this).html();
    var str2 = "abc";
    var count = 0;
    var ii = 0;
    while(count<str.length){
        if(str[count]==='₹'){
            ii = count;
        }
        if(str[count]!=" "){
            str2 = str2+str[count];
        }
        else{
            str2 = str2+"_";
        }
        count++;
    }
    $(".flexn").append('<div class="'+str2+'">'+str+'</div>');
    var toad = str.slice(ii+1,str.length-4);
    var amo = $(".flex2 > .Price > .amount").html();
    amo = amo.slice(1,amo.length);
    amo = Number(amo)+Number(toad);
    $(".flex2 > .Price > .amount").html("₹"+amo);
})

$(".flexn").delegate("div","click",function(){
    var str = $(this).html();
    var count = 0;
    var ii = 0;
    var iii = 0;
    while(count<str.length){
        if(str[count]==='₹'){
            ii = count;
        }
        if(str[count]==="<"){
            iii = count;
        }
        count++;
    }
    $(this).remove();
    var toad = str.slice(ii+1,iii);
    var amo = $(".flex2 > .Price > .amount").html();
    amo = amo.slice(1,amo.length);
    amo = Number(amo)-Number(toad);
    $(".flex2 > .Price > .amount").html("₹"+amo);
})