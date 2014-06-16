Interactive-eBay-Listing-Template
=================================

A small custom JavaScript framework and HTML/CSS template for custom, interactive eBay listings.

It is of course possible to include jQuery in an eBay listing if you're clever, but it's also explicitly in violation of their policies. jQuery is also probably overkill for something as simple as an eBay listing. This little framework makes writing behaviors in vanilla JS a bit easier, and doesn't violate any of eBay's policies.

See a working example of the here: http://jsfiddle.net/CyJW9/
Full-screen example here: http://jsfiddle.net/CyJW9/embedded/result/

Using iQuery methods defined in iQuery.js:

iq.id('elementID') // document.getElementById('id')

iq.tag('tagName') // document.getElementsByTagName(;'tagName');

iq.sel('selector') // document.querySelector('selector');

iq.selAll('selector') // document.querySelectorAll('selector');

iq.hide(iq.sel('selector')) // element.style.display = 'none';

iq.show(iq.sel('selector')) // element.style.display = 'block';

iq.fadeOut(timeInMilliseconds, iq.sel('selector')) // returns function decreasing opacity incrementally

iq.fadeIn(timeInMilliseconds, iq.sel('selector'))

iq.click('selector', handler) // returns a function that adds a click event listener on an element or group of elements

iq.hasClass(iq.sel('selector'), className) // same syntax for .addClass(), .removeClass() and .addOrRemoveClass()

iq.map('tagName', 'attribute') // loops through an array of chosen tags and returns chosen attribute for each index

iq.scrollWindow('selector'); // returns a function that scrolls the window to top of chosen element
