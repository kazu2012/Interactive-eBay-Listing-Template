		// Elements to show on window load	
		iq.show(iq.sel('#mblSlide img:first-child'));
		iq.show(iq.sel('div[data-name="desc"]'));
		iq.sel('.mblUL li:first-child:not(.menu-trigger)').style.background = '#66e2e3';
		iq.sel('.mblUL li:first-child a').style.color = '#383838';
		iq.show(iq.sel('.mblUL li:first-child .triangle'));

		// Toggling Menu Items and Styles
		iq.click('li a', function(){
			var dn = iq.map('a', 'data-name');
			for (var i = 0; i < dn.length; i++) {
				if (this.getAttribute('data-name') === dn[i]) {
					var toHide = iq.selAll('.mblHide:not([data-name=' + dn[i] + '])');
					iq.fadeIn(500, iq.sel('.mblHide[data-name="' + dn[i] + '"]'));
					for (var j = 0; j < toHide.length; j++) {
						toHide[j].style.display = 'none';
					}

					// Highlight Selected Menu Item
					iq.sel('a[data-name="' + dn[i] + '"]').style.color = '#383838';
					iq.sel('a[data-name="' + dn[i] + '"]').parentNode.style.background = '#66e2e3';
					iq.sel('a[data-name="' + dn[i] + '"]').parentNode.children[1].style.display = 'block';

					// Un-Highlight Last Selected Menu Item
					var unHighlight = iq.selAll('.mblUL a:not([data-name="' + dn[i] + '"])');
					for (var k = 0; k < unHighlight.length; k++) {
						unHighlight[k].style.color = '';
						unHighlight[k].parentNode.style.background = '';
						unHighlight[k].parentNode.children[1].style.display = '';
					}
				}
			}
		});

		// Scrolling Window on Mobile Nav Click
		iq.click('.mblMM li a', function(){
			iq.hide(iq.sel('#mblMobile'));
			iq.fadeOut(100, iq.sel('.mblFadeWrapper'));
			iq.removeClass(iq.sel('.menu-trigger'), 'open');
			var dn = iq.map('a', 'data-name');
			for (var i = 0; i < dn.length; i++) {
				if (this.getAttribute('data-name') === dn[i]) {
					iq.scrollWindow('.mblHide[data-name="' + dn[i] + '"]');
				}
			}
		});

		// Back-To-Top Button
		iq.click('.mblBackToTop', function(){
			iq.scrollWindow('.mblWrpr');
		});

		// Toggling Images
		iq.click('#mblThumbs img', function(){
			var dn = iq.map('img', 'data-name');
			for (var i = 0; i < dn.length; i++) {
			    if (this.getAttribute('data-name') === dn[i]) {
			        var outs = iq.selAll('#mblSlide img:not([data-name="' + dn[i] + '"])');
			        for (var j = 0; j < outs.length; j++) {
			            iq.fadeOut(100, outs[j]);
			        }
			        iq.fadeIn(200, iq.sel('#mblSlide img[data-name="' + dn[i] + '"]'));
			    }
			}

		});

		// Toggling Mobile Menu and Fade Wrapper
		iq.click('.menu-trigger', function(){
			iq.addOrRemoveClass(this, 'open');
			if (iq.hasClass(this, 'open')) {
				iq.fadeIn(100, iq.sel('.mblFadeWrapper'));
				iq.fadeIn(200, iq.sel('#mblMobile'));
			} else {
				iq.fadeOut(100, iq.sel('#mblMobile'));
				iq.fadeOut(200, iq.sel('.mblFadeWrapper'));
			} 
		});

		iq.click('.mblFadeWrapper', function(){
			iq.fadeOut(100, this);
			iq.fadeOut(200, iq.sel('#mblMobile'));
			iq.removeClass(iq.sel('.menu-trigger'), 'open');
		});
