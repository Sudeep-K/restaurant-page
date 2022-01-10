function pageone () {
    let body = document.querySelector('body');

    let head = document.querySelector('head');
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
    head.appendChild(link);

    let pageone_div = document.createElement('div');
    pageone_div.className = 'page-1';

    /*
     * navigation section
     */

    let navigation_div = document.createElement('div');
    navigation_div.className = 'navigation';

    /* logo div */
    let logo_div = document.createElement('div');
    logo_div.className = 'logo';

    let logoone_span = document.createElement('span');
    logoone_span.className = 'logo-1';
    logoone_span.textContent = 'duna';

    let logotwo_span = document.createElement('span');
    logotwo_span.className = 'logo-2';
    logotwo_span.textContent = 'kitchen';

    logo_div.appendChild(logoone_span);
    logo_div.appendChild(logotwo_span);

    navigation_div.appendChild(logo_div);

    /* hyperlinks div */
    let hyperlinks_div = document.createElement('div');
    hyperlinks_div.className = 'hyperlinks';

    let ul = document.createElement('ul');

    let menu_li = document.createElement('li');
    let about_li = document.createElement('li');
    let specials_li = document.createElement('li');
    let locations_li = document.createElement('li');

    menu_li.textContent = 'menu';
    about_li.textContent = 'about us';
    specials_li.textContent = 'our specials';
    locations_li.textContent = 'our locations';

    ul.appendChild(menu_li);
    ul.appendChild(about_li);
    ul.appendChild(specials_li);
    ul.appendChild(locations_li);

    hyperlinks_div.appendChild(ul);

    navigation_div.appendChild(hyperlinks_div);

    /* socialmedia links div */
    let socialmedia_div = document.createElement('div');
    socialmedia_div.className = 'socialmedia-links';

    let ul_socialmedia = document.createElement('ul');    

    let facebook_li = document.createElement('li');
    let instagram_li = document.createElement('li');

    facebook_li.innerHTML = '<a class="fb-icon" href="https://www.facebook.com/Duna-Kitchen-Butwal-105202908097955"  target="_blank"></a>';
    instagram_li.innerHTML = '<a class="insta-icon" href="https://www.instagram.com/sudip_kaucha/"  target="_blank"></a>';

    ul_socialmedia.appendChild(facebook_li);
    ul_socialmedia.appendChild(instagram_li);

    socialmedia_div.appendChild(ul_socialmedia);

    navigation_div.appendChild(socialmedia_div);

    pageone_div.appendChild(navigation_div);
    
    /*
     * body section page one
     */

    let bodypageone_div = document.createElement('div');
    bodypageone_div.className = 'body-section';

    /* display food */
    let displayfoodpageone_div = document.createElement('div');
    displayfoodpageone_div.className = 'display-food';

    /* display food introduction */
    let displayfoodintro_div = document.createElement('div');
    displayfoodintro_div.className = 'display-food-introduction';

    /* introduction notice */
    let introductionnotice_div = document.createElement('div');
    introductionnotice_div.className = 'introduction-notice';
    introductionnotice_div.textContent = 'NOW TAKING ONLINE ORDERS';

    /* main item */
    let mainitem_div = document.createElement('div');
    mainitem_div.className = 'main-item';

    let mainitemtitle_div = document.createElement('div');
    mainitemtitle_div.className = 'main-item-title-div';

    let mainitemtitle_span = document.createElement('span');
    mainitemtitle_span.className = 'main-item-title';
    mainitemtitle_span.textContent = 'mutton biryani';

    let mainitem_price = document.createElement('div');
    mainitem_price.className = 'main-item-price-div';

    let mainitem_unit = document.createElement('span');
    mainitem_unit.className = 'main-item-unit';
    mainitem_unit.textContent = 'rs';

    let mainitemprice_span = document.createElement('span');
    mainitemprice_span.className = 'main-item-price';
    mainitemprice_span.textContent = '550';

    displayfoodintro_div.appendChild(introductionnotice_div);

    mainitemtitle_div.appendChild(mainitemtitle_span);
    mainitem_div.appendChild(mainitemtitle_div);

    mainitem_price.appendChild(mainitem_unit);
    mainitem_price.appendChild(mainitemprice_span);

    mainitem_div.appendChild(mainitem_price);

    displayfoodintro_div.appendChild(mainitem_div);

    /* main item explanation */
    let mainitemexplain_div = document.createElement('div');
    mainitemexplain_div.className = 'main-item-explanation';
    mainitemexplain_div.textContent = 'Be it a dinner, party or any celebratory occasion, biryani seems to ba an ideal main dish to serve along with a spicy salad or refreshing raita.';

    displayfoodintro_div.appendChild(mainitemexplain_div);

    /* order buttons */
    let orderbtn_div = document.createElement('div');
    orderbtn_div.className = 'order-btns';

    let buttonone = document.createElement('button');
    buttonone.className = 'button-1';
    buttonone.innerHTML = '<span>Add to Cart</span>';

    let buttontwo = document.createElement('button');
    buttontwo.className = 'button-2';
    buttontwo.innerHTML = '<span>Book a Table</span>';

    orderbtn_div.appendChild(buttonone);
    orderbtn_div.appendChild(buttontwo);

    displayfoodintro_div.appendChild(orderbtn_div);

    displayfoodpageone_div.appendChild(displayfoodintro_div);

    bodypageone_div.appendChild(displayfoodintro_div);

    /* food picture div */
    let foodpic_div = document.createElement('div');
    foodpic_div.className = 'food-picture';

    bodypageone_div.appendChild(foodpic_div);
    pageone_div.appendChild(bodypageone_div);

    /* timing section */
    let timing_div = document.createElement('div');
    timing_div.className = 'timing';

    let opens_div = document.createElement('div');
    opens_div.className = 'opens';
    opens_div.textContent = 'Opens';

    timing_div.appendChild(opens_div);

    let opentime_div = document.createElement('div');
    opentime_div.className = 'open-time';
    opentime_div.textContent = '6:00-10:00pm';

    timing_div.appendChild(opentime_div);

    pageone_div.appendChild(timing_div);
    body.appendChild(pageone_div);

    return;
}

function pagetwo () {
    let body = document.querySelector('body');

    let pagetwo_div = document.createElement('div');
    pagetwo_div.className = 'page-2';

    /* header section page two */
    let pagetwoheader_div = document.createElement('div');
    pagetwoheader_div.className = 'page-2-header';

    let pagetwoheader_one = document.createElement('span');
    pagetwoheader_one.className = 'page-2-header-1';
    pagetwoheader_one.textContent = 'ONLINE STORE';

    pagetwoheader_div.appendChild(pagetwoheader_one);

    let pagetwoheader_two = document.createElement('span');
    pagetwoheader_two.className = 'page-2-header-2';
    pagetwoheader_two.textContent = 'Our Specials';

    pagetwoheader_div.appendChild(pagetwoheader_two);

    pagetwo_div.appendChild(pagetwoheader_div);

    /* special items section */
    let specialitem_div = document.createElement('div');
    specialitem_div.className = 'special-items';

    /*
    *  spring roll section
    */
    let springroll_div = document.createElement('div');
    springroll_div.className = 'spring-roll';

    let springrollimg_div = document.createElement('div');
    springrollimg_div.className = 'spring-roll-img';

    springroll_div.appendChild(springrollimg_div);

    /* stars created here */
    let onestars_div = document.createElement('div');
    onestars_div.className = 'stars';

    let onestarone = document.createElement('span');
    onestarone.className = 'fa fa-star checked';
    let onestartwo = document.createElement('span');
    onestartwo.className = 'fa fa-star checked';
    let onestarthree = document.createElement('span');
    onestarthree.className = 'fa fa-star checked';
    let onestarfour = document.createElement('span');
    onestarfour.className = 'fa fa-star checked';
    let onestarfive = document.createElement('span');
    onestarfive.className = 'fa fa-star checked';

    onestars_div.appendChild(onestarone);
    onestars_div.appendChild(onestartwo);
    onestars_div.appendChild(onestarthree);
    onestars_div.appendChild(onestarfour);
    onestars_div.appendChild(onestarfive);

    springroll_div.appendChild(onestars_div);

    /* origin and explanation */
    let springrollorigin = document.createElement('div');
    springrollorigin.className = 'spring-roll-origin';
    springrollorigin.textContent = 'Chinese';

    let springrolltitle = document.createElement('div');
    springrolltitle.className = 'spring-roll-title';
    springrolltitle.textContent = 'Spring roll';

    springroll_div.appendChild(springrollorigin);
    springroll_div.appendChild(springrolltitle);

    /* button to add to cart */
    let addspringrollbtn = document.createElement('button');
    addspringrollbtn.className = 'add';
    addspringrollbtn.innerHTML = '<span>Add to Cart rs.180</span>';

    springroll_div.appendChild(addspringrollbtn);

    specialitem_div.appendChild(springroll_div);

    /*
    *  khana set section
    */
    let khanaset_div = document.createElement('div');
    khanaset_div.className = 'khana-set';

    let khanasetimg_div = document.createElement('div');
    khanasetimg_div.className = 'khana-set-img';

    khanaset_div.appendChild(khanasetimg_div);

    /* stars created here */
    let twostars_div = document.createElement('div');
    twostars_div.className = 'stars';

    let twostarone = document.createElement('span');
    twostarone.className = 'fa fa-star checked';
    let twostartwo = document.createElement('span');
    twostartwo.className = 'fa fa-star checked';
    let twostarthree = document.createElement('span');
    twostarthree.className = 'fa fa-star checked';
    let twostarfour = document.createElement('span');
    twostarfour.className = 'fa fa-star checked';
    let twostarfive = document.createElement('span');
    twostarfive.className = 'fa fa-star checked';

    twostars_div.appendChild(twostarone);
    twostars_div.appendChild(twostartwo);
    twostars_div.appendChild(twostarthree);
    twostars_div.appendChild(twostarfour);
    twostars_div.appendChild(twostarfive);

    khanaset_div.appendChild(twostars_div);

    /* origin and explanation */
    let khanasetorigin = document.createElement('div');
    khanasetorigin.className = 'khana-set-origin';
    khanasetorigin.textContent = 'Nepali Authentic';

    let khanasettitle = document.createElement('div');
    khanasettitle.className = 'khana-set-title';
    khanasettitle.textContent = 'Khana set';

    khanaset_div.appendChild(khanasetorigin);
    khanaset_div.appendChild(khanasettitle);

    /* button to add to cart */
    let addkhanasetbtn = document.createElement('button');
    addkhanasetbtn.className = 'add';
    addkhanasetbtn.innerHTML = '<span>Add to Cart rs.350</span>';

    khanaset_div.appendChild(addkhanasetbtn);

    specialitem_div.appendChild(khanaset_div);

    /*
    *  bhutan section
    */
    let bhutan_div = document.createElement('div');
    bhutan_div.className = 'bhutan';

    let bhutanimg_div = document.createElement('div');
    bhutanimg_div.className = 'bhutan-img';

    bhutan_div.appendChild(bhutanimg_div);

    /* stars created here */
    let threestars_div = document.createElement('div');
    threestars_div.className = 'stars';

    let threestarone = document.createElement('span');
    threestarone.className = 'fa fa-star checked';
    let threestartwo = document.createElement('span');
    threestartwo.className = 'fa fa-star checked';
    let threestarthree = document.createElement('span');
    threestarthree.className = 'fa fa-star checked';
    let threestarfour = document.createElement('span');
    threestarfour.className = 'fa fa-star checked';
    let threestarfive = document.createElement('span');
    threestarfive.className = 'fa fa-star checked';

    threestars_div.appendChild(threestarone);
    threestars_div.appendChild(threestartwo);
    threestars_div.appendChild(threestarthree);
    threestars_div.appendChild(threestarfour);
    threestars_div.appendChild(threestarfive);

    bhutan_div.appendChild(threestars_div);

    /* origin and explanation */
    let bhutanorigin = document.createElement('div');
    bhutanorigin.className = 'bhutan-origin';
    bhutanorigin.textContent = 'Nepali Authentic';

    let bhutantitle = document.createElement('div');
    bhutantitle.className = 'bhutan-title';
    bhutantitle.textContent = 'Bhutan';

    bhutan_div.appendChild(bhutanorigin);
    bhutan_div.appendChild(bhutantitle);

    /* button to add to cart */
    let addbhutanbtn = document.createElement('button');
    addbhutanbtn.className = 'add';
    addbhutanbtn.innerHTML = '<span>Add to Cart rs.250</span>';

    bhutan_div.appendChild(addbhutanbtn);

    specialitem_div.appendChild(bhutan_div);

    /*
    *  selroti section
    */
    let selroti_div = document.createElement('div');
    selroti_div.className = 'selroti';

    let selrotiimg_div = document.createElement('div');
    selrotiimg_div.className = 'selroti-img';

    selroti_div.appendChild(selrotiimg_div);

    /* stars created here */
    let fourstars_div = document.createElement('div');
    fourstars_div.className = 'stars';

    let fourstarone = document.createElement('span');
    fourstarone.className = 'fa fa-star checked';
    let fourstartwo = document.createElement('span');
    fourstartwo.className = 'fa fa-star checked';
    let fourstarthree = document.createElement('span');
    fourstarthree.className = 'fa fa-star checked';
    let fourstarfour = document.createElement('span');
    fourstarfour.className = 'fa fa-star checked';
    let fourstarfive = document.createElement('span');
    fourstarfive.className = 'fa fa-star checked';

    fourstars_div.appendChild(fourstarone);
    fourstars_div.appendChild(fourstartwo);
    fourstars_div.appendChild(fourstarthree);
    fourstars_div.appendChild(fourstarfour);
    fourstars_div.appendChild(fourstarfive);

    selroti_div.appendChild(fourstars_div);

    /* origin and explanation */
    let selrotiorigin = document.createElement('div');
    selrotiorigin.className = 'selroti-origin';
    selrotiorigin.textContent = 'Nepali Authentic';

    let selrotititle = document.createElement('div');
    selrotititle.className = 'selroti-title';
    selrotititle.textContent = 'Selroti';

    selroti_div.appendChild(selrotiorigin);
    selroti_div.appendChild(selrotititle);

    /* button to add to cart */
    let addselrotibtn = document.createElement('button');
    addselrotibtn.className = 'add';
    addselrotibtn.innerHTML = '<span>Add to Cart rs.150</span>';

    selroti_div.appendChild(addselrotibtn);

    specialitem_div.appendChild(selroti_div);  

    /* append page two -> body */
    pagetwo_div.appendChild(pagetwoheader_div);
    /* append special items div -> page two */
    pagetwo_div.appendChild(specialitem_div);
    pagetwo_div.appendChild(specialitem_div);
    body.appendChild(pagetwo_div);
    return;
}

function pagethree () {
    let body = document.querySelector('body');
    console.log("i am here");
    let pagefour_div = document.createElement('div');
    pagefour_div.className = 'page-4';

    /* header for page four */
    let pagefour_header = document.createElement('div');
    pagefour_header.className = 'header-page-4';

    let header_one = document.createElement('div');
    header_one.className = 'header-page-4-1';
    header_one.textContent = 'POPULAR MENU';

    pagefour_header.appendChild(header_one);

    let header_two = document.createElement('div');
    header_two.className = 'header-page-4-2';
    header_two.textContent = 'Amazing Food Served With Delicacy';

    pagefour_header.appendChild(header_two);

    /* body section for page four */
    let pagefourbody_div = document.createElement('div');
    pagefourbody_div.className = 'body-page-4';

    /* row one */
    let rowone_div = document.createElement('div');
    rowone_div.className = 'row-1';

    /*
     * handi chicken section 
    */
    let handichick_div = document.createElement('div');
    handichick_div.className = 'handi-chicken';

    let handichick_img = document.createElement('div');
    handichick_img.className = 'handi-chicken-img';

    handichick_div.appendChild(handichick_img);

    /* stars created here */
    let onestars_div = document.createElement('div');
    onestars_div.className = 'stars';

    let onestarone = document.createElement('span');
    onestarone.className = 'fa fa-star checked';
    let onestartwo = document.createElement('span');
    onestartwo.className = 'fa fa-star checked';
    let onestarthree = document.createElement('span');
    onestarthree.className = 'fa fa-star checked';
    let onestarfour = document.createElement('span');
    onestarfour.className = 'fa fa-star checked';
    let onestarfive = document.createElement('span');
    onestarfive.className = 'fa fa-star checked';

    onestars_div.appendChild(onestarone);
    onestars_div.appendChild(onestartwo);
    onestars_div.appendChild(onestarthree);
    onestars_div.appendChild(onestarfour);
    onestars_div.appendChild(onestarfive);

    handichick_div.appendChild(onestars_div);

    /* title of handi chick */
    let handichick_title = document.createElement('div');
    handichick_title.className = 'title';
    handichick_title.textContent = 'Handi Chicken';

    handichick_div.appendChild(handichick_title);

    /* handichick explained */
    let handichick_explain = document.createElement('div');
    handichick_explain.className = 'explaination';
    handichick_explain.textContent = 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.';

    handichick_div.appendChild(handichick_explain);

    /* price of handichick section */
    let handichickprice_sec = document.createElement('div');
    handichickprice_sec.className = 'price-section';

    let handichickprice = document.createElement('span');
    handichickprice.className = 'price';
    handichickprice.textContent = 'rs.550';

    handichickprice_sec.appendChild(handichickprice);

    /* love element */
    let onelove = document.createElement('span');
    onelove.className = 'love';

    handichickprice_sec.appendChild(onelove);
    
    /* share element */
    let oneshare = document.createElement('span');
    oneshare.className = 'share';

    handichickprice_sec.appendChild(oneshare);

    handichick_div.appendChild(handichickprice_sec);

    rowone_div.appendChild(handichick_div);

    /* 
     * paneer naan section 
    */
    let paneernaan_div = document.createElement('div');
    paneernaan_div.className = 'paneer-naan';

    let paneernaan_img = document.createElement('div');
    paneernaan_img.className = 'paneer-naan-img';

    paneernaan_div.appendChild(paneernaan_img);

    /* stars created here */
    let twostars_div = document.createElement('div');
    twostars_div.className = 'stars';

    let twostarone = document.createElement('span');
    twostarone.className = 'fa fa-star checked';
    let twostartwo = document.createElement('span');
    twostartwo.className = 'fa fa-star checked';
    let twostarthree = document.createElement('span');
    twostarthree.className = 'fa fa-star checked';
    let twostarfour = document.createElement('span');
    twostarfour.className = 'fa fa-star checked';
    let twostarfive = document.createElement('span');
    twostarfive.className = 'fa fa-star checked';

    twostars_div.appendChild(twostarone);
    twostars_div.appendChild(twostartwo);
    twostars_div.appendChild(twostarthree);
    twostars_div.appendChild(twostarfour);
    twostars_div.appendChild(twostarfive);

    paneernaan_div.appendChild(twostars_div);

    /* title of paneer naan */
    let paneernaan_title = document.createElement('div');
    paneernaan_title.className = 'title';
    paneernaan_title.textContent = 'Paneer Nann';

    paneernaan_div.appendChild(paneernaan_title);

    /* paneernaan explained */
    let paneernaan_explain = document.createElement('div');
    paneernaan_explain.className = 'explaination';
    paneernaan_explain.textContent = 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.';

    paneernaan_div.appendChild(paneernaan_explain);

    /* price of paneernaan section */
    let paneernaanprice_sec = document.createElement('div');
    paneernaanprice_sec.className = 'price-section';

    let paneernaanprice = document.createElement('span');
    paneernaanprice.className = 'price';
    paneernaanprice.textContent = 'rs.250';

    paneernaanprice_sec.appendChild(paneernaanprice);

    /* love element */
    let twolove = document.createElement('span');
    twolove.className = 'love';

    paneernaanprice_sec.appendChild(twolove);

    /* share element */
    let twoshare = document.createElement('span');
    twoshare.className = 'share';

    paneernaanprice_sec.appendChild(twoshare);


    paneernaan_div.appendChild(paneernaanprice_sec);

    rowone_div.appendChild(paneernaan_div);

    /* 
     * thukpa section 
    */
    let thukpa_div = document.createElement('div');
    thukpa_div.className = 'thukpa';

    let thukpa_img = document.createElement('div');
    thukpa_img.className = 'thukpa-img';

    thukpa_div.appendChild(thukpa_img);

    /* stars created here */
    let threestars_div = document.createElement('div');
    threestars_div.className = 'stars';

    let threestarone = document.createElement('span');
    threestarone.className = 'fa fa-star checked';
    let threestartwo = document.createElement('span');
    threestartwo.className = 'fa fa-star checked';
    let threestarthree = document.createElement('span');
    threestarthree.className = 'fa fa-star checked';
    let threestarfour = document.createElement('span');
    threestarfour.className = 'fa fa-star checked';
    let threestarfive = document.createElement('span');
    threestarfive.className = 'fa fa-star checked';

    threestars_div.appendChild(threestarone);
    threestars_div.appendChild(threestartwo);
    threestars_div.appendChild(threestarthree);
    threestars_div.appendChild(threestarfour);
    threestars_div.appendChild(threestarfive);

    thukpa_div.appendChild(threestars_div);

    /* title of paneer naan */
    let thukpa_title = document.createElement('div');
    thukpa_title.className = 'title';
    thukpa_title.textContent = 'Thukpa';

    thukpa_div.appendChild(thukpa_title);

    /* paneernaan explained */
    let thukpa_explain = document.createElement('div');
    thukpa_explain.className = 'explaination';
    thukpa_explain.textContent = 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.';

    thukpa_div.appendChild(thukpa_explain);

    /* price of paneernaan section */
    let thukpaprice_sec = document.createElement('div');
    thukpaprice_sec.className = 'price-section';

    let thukpaprice = document.createElement('span');
    thukpaprice.className = 'price';
    thukpaprice.textContent = 'rs.250';

    thukpaprice_sec.appendChild(thukpaprice);

    /* love element */
    let threelove = document.createElement('span');
    threelove.className = 'love';

    thukpaprice_sec.appendChild(threelove);
    
    /* share element */
    let threeshare = document.createElement('span');
    threeshare.className = 'share';

    thukpaprice_sec.appendChild(threeshare);


    thukpa_div.appendChild(thukpaprice_sec);

    rowone_div.appendChild(thukpa_div);
    
    /* add row one to body section of page 4 */
    pagefourbody_div.appendChild(rowone_div);


    /* row two */
    let rowtwo_div = document.createElement('div');
    rowtwo_div.className = 'row-2';

    /*
     * crispy momo section 
    */
    let crispymomo_div = document.createElement('div');
    crispymomo_div.className = 'crispy-momo';

    let crispymomo_img = document.createElement('div');
    crispymomo_img.className = 'crispy-momo-img';

    crispymomo_div.appendChild(crispymomo_img);

    /* stars created here */
    let fourstars_div = document.createElement('div');
    fourstars_div.className = 'stars';

    let fourstarone = document.createElement('span');
    fourstarone.className = 'fa fa-star checked';
    let fourstartwo = document.createElement('span');
    fourstartwo.className = 'fa fa-star checked';
    let fourstarthree = document.createElement('span');
    fourstarthree.className = 'fa fa-star checked';
    let fourstarfour = document.createElement('span');
    fourstarfour.className = 'fa fa-star checked';
    let fourstarfive = document.createElement('span');
    fourstarfive.className = 'fa fa-star checked';

    fourstars_div.appendChild(fourstarone);
    fourstars_div.appendChild(fourstartwo);
    fourstars_div.appendChild(fourstarthree);
    fourstars_div.appendChild(fourstarfour);
    fourstars_div.appendChild(fourstarfive);

    crispymomo_div.appendChild(fourstars_div);

    /* title of handi chick */
    let crispymomo_title = document.createElement('div');
    crispymomo_title.className = 'title';
    crispymomo_title.textContent = 'Crispy Momo';

    crispymomo_div.appendChild(crispymomo_title);

    /* handichick explained */
    let crispymomo_explain = document.createElement('div');
    crispymomo_explain.className = 'explaination';
    crispymomo_explain.textContent = 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.';

    crispymomo_div.appendChild(crispymomo_explain);

    /* price of handichick section */
    let crispymomoprice_sec = document.createElement('div');
    crispymomoprice_sec.className = 'price-section';

    let crispymomoprice = document.createElement('span');
    crispymomoprice.className = 'price';
    crispymomoprice.textContent = 'rs.190';

    crispymomoprice_sec.appendChild(crispymomoprice);

    /* love element */
    let fourlove = document.createElement('span');
    fourlove.className = 'love';

    crispymomoprice_sec.appendChild(fourlove);
    
    /* share element */
    let fourshare = document.createElement('span');
    fourshare.className = 'share';

    crispymomoprice_sec.appendChild(fourshare);


    crispymomo_div.appendChild(crispymomoprice_sec);

    rowtwo_div.appendChild(crispymomo_div);

    /* 
     * kimchi section 
    */
    let kimchi_div = document.createElement('div');
    kimchi_div.className = 'kimchi';

    let kimchi_img = document.createElement('div');
    kimchi_img.className = 'kimchi-img';

    kimchi_div.appendChild(kimchi_img);

    /* stars created here */
    let fivestars_div = document.createElement('div');
    fivestars_div.className = 'stars';

    let fivestarone = document.createElement('span');
    fivestarone.className = 'fa fa-star checked';
    let fivestartwo = document.createElement('span');
    fivestartwo.className = 'fa fa-star checked';
    let fivestarthree = document.createElement('span');
    fivestarthree.className = 'fa fa-star checked';
    let fivestarfour = document.createElement('span');
    fivestarfour.className = 'fa fa-star checked';
    let fivestarfive = document.createElement('span');
    fivestarfive.className = 'fa fa-star checked';

    fivestars_div.appendChild(fivestarone);
    fivestars_div.appendChild(fivestartwo);
    fivestars_div.appendChild(fivestarthree);
    fivestars_div.appendChild(fivestarfour);
    fivestars_div.appendChild(fivestarfive);

    kimchi_div.appendChild(fivestars_div);

    /* title of paneer naan */
    let kimchi_title = document.createElement('div');
    kimchi_title.className = 'title';
    kimchi_title.textContent = 'Kimchi';

    kimchi_div.appendChild(kimchi_title);

    /* paneernaan explained */
    let kimchi_explain = document.createElement('div');
    kimchi_explain.className = 'explaination';
    kimchi_explain.textContent = 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.';

    kimchi_div.appendChild(kimchi_explain);

    /* price of paneernaan section */
    let kimchiprice_sec = document.createElement('div');
    kimchiprice_sec.className = 'price-section';

    let kimchiprice = document.createElement('span');
    kimchiprice.className = 'price';
    kimchiprice.textContent = 'rs.150';

    kimchiprice_sec.appendChild(kimchiprice);

    /* love element */
    let fivelove = document.createElement('span');
    fivelove.className = 'love';

    kimchiprice_sec.appendChild(fivelove);
    
    /* share element */
    let fiveshare = document.createElement('span');
    fiveshare.className = 'share';

    kimchiprice_sec.appendChild(fiveshare);

    kimchi_div.appendChild(kimchiprice_sec);

    rowtwo_div.appendChild(kimchi_div);

    /* 
     * mutton taas section 
    */
    let muttontaas_div = document.createElement('div');
    muttontaas_div.className = 'mutton-taas';

    let muttontaas_img = document.createElement('div');
    muttontaas_img.className = 'mutton-taas-img';

    muttontaas_div.appendChild(muttontaas_img);

    /* stars created here */
    let sixstars_div = document.createElement('div');
    sixstars_div.className = 'stars';

    let sixstarone = document.createElement('span');
    sixstarone.className = 'fa fa-star checked';
    let sixstartwo = document.createElement('span');
    sixstartwo.className = 'fa fa-star checked';
    let sixstarthree = document.createElement('span');
    sixstarthree.className = 'fa fa-star checked';
    let sixstarfour = document.createElement('span');
    sixstarfour.className = 'fa fa-star checked';
    let sixstarfive = document.createElement('span');
    sixstarfive.className = 'fa fa-star checked';

    sixstars_div.appendChild(sixstarone);
    sixstars_div.appendChild(sixstartwo);
    sixstars_div.appendChild(sixstarthree);
    sixstars_div.appendChild(sixstarfour);
    sixstars_div.appendChild(sixstarfive);

    muttontaas_div.appendChild(sixstars_div);

    /* title of paneer naan */
    let muttontaas_title = document.createElement('div');
    muttontaas_title.className = 'title';
    muttontaas_title.textContent = 'Mutton Taas';

    muttontaas_div.appendChild(muttontaas_title);

    /* paneernaan explained */
    let muttontaas_explain = document.createElement('div');
    muttontaas_explain.className = 'explaination';
    muttontaas_explain.textContent = 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.';

    muttontaas_div.appendChild(muttontaas_explain);

    /* price of paneernaan section */
    let muttontaasprice_sec = document.createElement('div');
    muttontaasprice_sec.className = 'price-section';

    let muttontaasprice = document.createElement('span');
    muttontaasprice.className = 'price';
    muttontaasprice.textContent = 'rs.250';

    muttontaasprice_sec.appendChild(muttontaasprice);

    /* love element */
    let sixlove = document.createElement('span');
    sixlove.className = 'love';

    muttontaasprice_sec.appendChild(fourlove);
    
    /* share element */
    let sixshare = document.createElement('span');
    sixshare.className = 'share';

    muttontaasprice_sec.appendChild(sixshare);

    muttontaas_div.appendChild(muttontaasprice_sec);

    rowtwo_div.appendChild(muttontaas_div);
    
    /* add row one to body section of page 4 */
    pagefourbody_div.appendChild(rowone_div);

    /* add row two to body section of page 4 */
    pagefourbody_div.appendChild(rowtwo_div);

    /* append header -> page four */
    pagefour_div.appendChild(pagefour_header);
    pagefour_div.appendChild(pagefourbody_div);
    body.appendChild(pagefour_div);
}

function pagefour () {
    let body = document.querySelector('body');

    let getintouch_div = document.createElement('div');
    getintouch_div.className = 'get-in-touch';

    /* header section for page five */
    let header_pagefive = document.createElement('div');
    header_pagefive.className = 'page5-header';
    header_pagefive.setAttribute('id', 'locations');
    header_pagefive.innerHTML = '<span>GET IN TOUCH WITH US</span>';

    getintouch_div.appendChild(header_pagefive);

    /* image for the map */
    let imagemap_div = document.createElement('div');
    imagemap_div.className = 'map-img';

    getintouch_div.appendChild(imagemap_div);

    /* location coordinate for map */
    let location_div = document.createElement('div');
    location_div.className = 'location-cord';

    let placename_loc = document.createElement('span');
    placename_loc.className = 'makemebold';
    placename_loc.innerText = 'Duna Kitchen/';

    location_div.appendChild(placename_loc);

    let location_cord = document.createElement('span');
    location_cord.innerText = '27.681508489078922, 83.46191769889448';

    location_div.appendChild(location_cord);

    getintouch_div.appendChild(location_div);

    /* response briefing section */
    let responsebrief_div = document.createElement('div');
    responsebrief_div.className = 'response-breifing';
    responsebrief_div.setAttribute('id', 'contacts');

    /*
     * chat section
     */
    let chatresp_div = document.createElement('div');
    chatresp_div.className = 'chat-response';

    let header_chat = document.createElement('span');
    header_chat.className = 'header-chat';
    header_chat.innerText = 'Chat';

    chatresp_div.appendChild(header_chat);

    let explain_chat = document.createElement('span');
    explain_chat.className = 'chat-explain';
    explain_chat.innerText = 'Response time Approx. 10 minutes everyday, from 8:00 to 9:00pm';

    chatresp_div.appendChild(explain_chat);

    responsebrief_div.appendChild(chatresp_div);


    /*
     * telephone section
     */
    let teleresp_div = document.createElement('div');
    teleresp_div.className = 'telephone-response';

    let header_tele = document.createElement('span');
    header_tele.className = 'header-telephone';
    header_tele.innerText = 'Telephone';

    teleresp_div.appendChild(header_tele);

    let tele_address = document.createElement('span');
    tele_address.className = 'telephone-no';
    tele_address.innerText = '+977 9857029379';

    teleresp_div.appendChild(tele_address);

    let explain_tele = document.createElement('span');
    explain_tele.className = 'telephone-explain';
    explain_tele.innerText = 'Response time Approx. 10 minutes everyday, from 8:00 to 9:00pm';

    teleresp_div.appendChild(explain_tele);

    responsebrief_div.appendChild(teleresp_div);


    /*
     * mailing section
     */
    let mailresp_div = document.createElement('div');
    mailresp_div.className = 'mail-response';

    let header_mail = document.createElement('span');
    header_mail.className = 'header-mail';
    header_mail.innerText = 'Telephone';

    mailresp_div.appendChild(header_mail);

    let mail_address = document.createElement('span');
    mail_address.className = 'mail-address';
    mail_address.innerText = 'pong32btl@gmail.com';

    mailresp_div.appendChild(mail_address);

    let explain_mail = document.createElement('span');
    explain_mail.className = 'mail-explain';
    explain_mail.innerText = 'Response time Approx. 7 weekdays everyday, from 8:00 to 9:00pm';

    mailresp_div.appendChild(explain_mail);

    responsebrief_div.appendChild(mailresp_div);

    getintouch_div.appendChild(responsebrief_div);

    body.appendChild(getintouch_div);
}

export {pageone, pagetwo, pagethree, pagefour};