$(function () {
    let cats = [{
        name: 'cat1',
        images: './images/cat1.jpg'
    }, {
        name: 'cat2',
        images: './images/cat2.jpg'
    }];

    function init() {
        for (const cat of cats) {
            let click_num = 0;
            let catName = $(`<text>${cat.name}<text>`);
            let catDom = $(`<img class="cat" src="${cat.images}">`);
            let catClicks = $(`
                <text class="catClicks">0</text>`);
            catDom.click(function (e) {
                click_num += 1;
                catClicks.text(click_num);
            });
            catName.appendTo('body');
            $(`<br>`).appendTo('body');
            catDom.appendTo('body');
            $(`<br>`).appendTo('body');
            catClicks.appendTo('body');
            $(`<br>`).appendTo('body');
        }
    }


    init();
});