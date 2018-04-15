$(function () {
	var cats = [{
			clickCount: 0,
			name: 'Tabby',
			imgSrc: 'img/cat_picture1.jpg',
			imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568'
		},
		{
			clickCount: 0,
			name: 'Tiger',
			imgSrc: 'img/cat_picture2.jpeg',
			imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904'
		},
		{
			clickCount: 0,
			name: 'Scaredy',
			imgSrc: 'img/cat_picture3.jpeg',
			imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709'
		},
		{
			clickCount: 0,
			name: 'Shadow',
			imgSrc: 'img/cat_picture4.jpeg',
			imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559'
		},
		{
			clickCount: 0,
			name: 'Sleepy',
			imgSrc: 'img/cat_picture5.jpeg',
			imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288'
		}
	];

	var controller = {
		init() {
			this.currentCat = cats[0];
			catList.init();
			catDetail.init();
		},
		updateCat(data) {
			this.currentCat.name = data.name;
			this.currentCat.imgAttribution = data.url;
			this.currentCat.clickCount = data.clicks;
			catDetail.render();
		},
		clickCat() {
			this.currentCat.clickCount += 1;
			catDetail.render();
		},
		getChooseCat() {
			return this.currentCat;
		},
		chooseCat(cat) {
			this.currentCat = cat;
			catDetail.render();
		},
		getCats() {
			return this.currentCat;
		}
	};

	var catList = {
		init: function () {
			this.catListElem = $('#catlist');
			this.render();
		},
		render() {
			this.catListElem.innerHTML = '';
			for (let i = 0; i < cats.length; i++) {
				const cat = cats[i];
				const button = $(`<button class="catChoose">cat ${i+1}</button>`);
				button.click(function (catCopy) {
					return function () {
						controller.chooseCat(catCopy);
					}
				}(cat));
				this.catListElem.append(button);
			}
		}
	};

	var catDetail = {
		init() {
			// cat detail elements
			this.catClicker = $('.cat > .clicker');
			this.catCounter = $('.cat > .counter');
			// admin buttons
			this.catAdminArea = $('#id_admin_area');
			this.catAdmin = $('.cat > #id_admin');
			this.catAdminCancle = $('.cat #id_admin_cancle');
			this.catAdminSave = $('.cat #id_admin_save');
			// cat data
			this.catAdminName = $('.cat #id_admin_name');
			this.catAdminUrl = $('.cat #id_admin_url');
			this.catAdminClickCount = $('.cat #id_admin_click_count');

			// cat detail elements event
			this.catClicker.click(function (e) {
				controller.clickCat();
			});
			// admin buttons event
			this.catAdmin.click(e => {
				this.catAdminArea.show();
			});
			this.catAdminCancle.click(e => {
				this.catAdminArea.hide();
			});
			this.catAdminSave.click(e => {
				controller.updateCat({
					name: this.catAdminName.val(),
					url: this.catAdminUrl.val(),
					clicks: parseInt(this.catAdminClickCount.val())
				});
			});
			this.render();
		},
		render() {
			const cat = controller.getChooseCat();
			this.catCounter.text(cat.clickCount);
			this.catClicker.attr('src', cat.imgSrc);
			this.catAdminName.val(cat.name);
			this.catAdminUrl.val(cat.imgAttribution);
			this.catAdminClickCount.val(cat.clickCount);
		}
	};

	controller.init();
});