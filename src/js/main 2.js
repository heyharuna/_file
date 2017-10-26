
// jquery
$(function(){

    $('#homeVideo').vide("video/timetodoyou.mp4");

    $(".openMenu").click(function() {
        //$(".overlay").addClass("menu_overlay");
        $(".mobile_menu").removeClass("slideOut");
        $(".mobile_menu").css({"transform":"translate(0, 0)"});
        //$(".mobile_menu_show").fadeIn(800,"swing");
    })

    $(".closeMenu").click(function() {
        $(".mobile_menu").addClass("slideOut");
        $(".mobile_menu").css({"transform":"translate(-100%, 0)"});
        //$(".overlay").removeClass("menu_overlay");
    })
    $(".showModal").click(function() {
      $(".modal").addClass("is-active");
    });

    $(".modal-close").click(function() {
       $(".modal").removeClass("is-active");
    });
    $(".modalCancel").click(function() {
       $(".modal").removeClass("is-active");
    });

    //     var itemImg = $(".eachProductImg").data("img");
    //     var itemName = $(".eachProductName").data("title");
    //     var itemPrice = $(".eachProductPrice").data("price");
    //     var itemDescription = $(".eachProductDescription").data("description");
    //
    //     $(".modalImage").attr("src", itemImg);
    //     $(".modalTitle").text(itemName);
    //     $(".modalPrice").text(itemPrice + " CAD");
    //     $(".modalDescription").text(itemDescription);

    // create object constructor
    function productObject(pName, pPrice, pDescription, pImg) {
        this.name = pName;
        this.price = pPrice;
        this.description = pDescription;
        this.img = pImg;
    }

    // Array to store new object
    var proArray = [];

    // function when user click the button of items
    $(".addCart").click(function() {

        //show Bag the number od items and total at menuBar
        $(".hideBag").addClass("shoppingBagDetail");

        //counter of shopping bag
        $(".itemNumber").val(proArray.length+1);
        $(".itemCount").text(proArray.length+1);

        // get data attr of items
        var itemImg = $(this).data("img");
        var itemName = $(this).data("title");
        var itemPrice = $(this).data("price");
        var itemDescription = $(this).data("description");

        var newProduct = new productObject(itemName, itemPrice, itemDescription, itemImg);
        proArray.push(newProduct);
        console.log(proArray);

        for(var i=0; i<proArray.length; i+=1) {
            eachItem = document.createElement("section");
            //eachItem = "";
            eachItem.className = "modal-card-body";
            eachItem.innerHTML = "<section><article class='media'><div class='media-left'><figure class='image is-128x128'><img class='modalImage' src='"+proArray[i]['img']+"' alt='image'></figure></div><div class='media-content'><div class='content'><h3 class='modalTitle'>"+proArray[i]['name']+"</h3><h5 class='modalPrice'>$ "+proArray[i]['price']+" CAD</h5><p class='modalDescription'>"+proArray[i]['description']+"</p><p class='modalIcon'><span class='icon is-medium'><i class='fa fa-lg fa-trash-o' aria-hidden='true'></i></span><span>Remove</span></p></div></div></article></section>";
        }
        $(".showItemCards").append(eachItem);
    });

    $(".colorLabel").click(function() {
        $(this).toggleClass("productBorder");
    });

});
