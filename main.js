$(function() {

    var STATISTICS_TEMPLATE = $(".product-left").html();
    var STATISTICS_LIST = $(".product-left-list");
    var STATISTICS_BOUGHT_LIST = $(".product-bought-list");
    var ITEM_TEMPLATE = $(".productlistr").html();
    var LIST = $(".product-list");

    initialize();


    $("#submit-button").click(function(){
        submitInput();
    });

    $(document).keypress(function(e) {
        if(e.which == 13 && $(".submit-input").is(":focus")) {
            submitInput();
        }
    });


    function submitInput(){

        var input = $(".submit-input");
        var value = input.val();
        addItem(value);
        $(".submit-input").val("");
        $(".submit-input").focus();
    }


    function addItem(title){


        if(title){
            var node = $('<div class="product-list-row"></div>').append($(ITEM_TEMPLATE));
            var statsNode = $('<div class="product-left"></div>').append($(STATISTICS_TEMPLATE));


            node.find(".product-name").text(title);
            node.find(".change-product-name").val(title);
            statsNode.find(".product-left-name").text(title);


            node.find(".product-bought").click(function(){
                if(node.hasClass("state-bought")){
                    $(node).removeClass("state-bought");
                    $(node).find(".product-bought").text("Куплено");
                    $(statsNode).remove();
                    STATISTICS_LIST.append(statsNode);
                }
                else{
                    $(node).addClass("state-bought");
                    $(node).find(".product-bought").text("Не куплено");
                    $(statsNode).remove();
                    STATISTICS_BOUGHT_LIST.append(statsNode);
                }
            });


            node.find(".product-delete").click(function(){
                $(node).remove();
                $(statsNode).remove();
            });

            if( productnumberis1)
            node.find(".product-minus").click(function(){
                var pdtNumber = parseInt($(node).find(".townumber").text());
                pdtNumber--;
                $(node).find(".townumber").text(pdtNumber);
                $(statsNode).find(".product-left-number").text(pdtNumber);
                if(pdtNumber === 1){
                    node.find(".product-minus").addClass("not-active");
                }
            });

            if (itisunactive)
            node.find(".product-plus").click(function(){
                var pdtNumber = parseInt($(node).find(".townumber").text());
                if(pdtNumber === 1){
                    node.find(".product-minus").removeClass("not-active");
                }
                pdtNumber++;
                $(node).find(".townumber").text(pdtNumber);
                $(statsNode).find(".product-left-number").text(pdtNumber);
            });

            if (productisnotbought)
            node.find(".product-name").click(function(event){
                if(!node.hasClass("state-bought")){
                    event.stopPropagation();
                    node.find(".product-name").addClass("hidden");
                    node.find(".change-product-name").removeClass("hidden");
                    node.find(".change-product-name").focus();
                }
            });


            $(document).click(function(){

                node.find(".product-name").removeClass("hidden");


                var pnVal = node.find(".change-product-name").val();
                node.find(".product-name").text(pnVal);
                $(statsNode).find(".product-left-name").text(pnVal);
            });


            LIST.append(node);
            STATISTICS_LIST.append(statsNode);
        }
    }


    function initialize(){
        addItem("Помідори");
        addItem("Картопля");
        addItem("помідорu");
    }
});