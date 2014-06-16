window.iq = (function(){
	return {
		id: function(id) {
			return document.getElementById(id);
		},

		tag: function(tag) {
			return document.getElementsByTagName(tag);
		},

		sel: function(sel) {
			return document.querySelector(sel);
		},

		selAll: function(sel) {
			return document.querySelectorAll(sel);
		},

		hide: function(el) {
			return el.style.display = 'none';
		},

		show: function(el) {
			return el.style.display = 'block';
		},

		fadeOut: function(ms, el) {
			var opacity = 1,
			interval = 50,
			gap = interval / ms;

			function func() {
				opacity -= gap;
				el.style.opacity = opacity;

				if(opacity <= 0) {
					window.clearInterval(fading);
					el.style.display = 'none';
					el.style.opacity = 1;
				}
			}
			var fading = window.setInterval(func, interval);
		},

		fadeIn: function(ms, el) {
			var opacity = 0,
			interval = 50,
			gap = interval / ms;

			el.style.display = 'block';
			el.style.opacity = opacity;

			function func() {
				opacity += gap;
				el.style.opacity = opacity;

				if(opacity >= 1) {
					window.clearInterval(fading);
				}
			}
			var fading = window.setInterval(func, interval);
		},

		click: function(el, handler) {
			return [].forEach.call(iq.selAll(el), function(el) {
				el.addEventListener('click', handler, false);
			});
		},

		hasClass: function(el, cls) {
			return el.classList.contains(cls);
		},

		addClass: function(el, cls) {
			return el.classList.add(cls)
		},

		removeClass: function(el, cls) {
			return el.classList.remove(cls);
		},

		addOrRemoveClass: function(el, cls) {
			if (iq.hasClass(el, cls)) {
				return el.classList.remove(cls);
			} else {
				return el.classList.add(cls);
			}
		},

		map: function(el, attr) {
			var arr = [];
			el = iq.tag(el);
			for (i = 0; i < el.length; i++) {
				var x = el[i].getAttribute(attr);
				arr.push(x);
			}
			return arr;
		},

		scrollWindow: function(el) {
			el = iq.sel(el);

			window.scrollTo(0, findPos(el));

			function findPos(obj) {
				var curtop = 0;
				if (obj.offsetParent) {
					do {
					    curtop += obj.offsetTop;
					} while (obj = obj.offsetParent);
					return [curtop];
				}
			}
		}
	};
})();
