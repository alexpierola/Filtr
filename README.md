# filtrr
Filtrr helps you to show and hide the elements of your web site, it's customizable and easy to use.

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | No |

## Usage
### JavaScript
You can use filtrr in two ways, in the case of using a framework like React JS or Angular you should import the file:
```
npm install filtrr
```
```js
import { filtrr } from 'filtrr';
```

Or in case of Vanilla JS you should add the script tag:
```html
<head>
    <!-- it sets the constant filtrr -->
    <script src="filtrrBrowser.min.js"></script>
    <!-- or use the CDN -->
    <script src="https://cdn.jsdelivr.net/npm/filtrr@1.0.1/bin/filtrrBrowser.js"></script>
</head>
```

And for both cases, you need to call to filtrr and you can customize it or just use it:
\* Note: to use transitions is required to import [animate.css](https://github.com/daneden/animate.css)
```js
// OPTIONAL
filtrr.load({
    // active or deactivate the transitions
    useTransitions: true,
    // transitions in effect
    transitionIn: 'fadeInUp',
    // transitions out effect
    transitionOut: 'fadeOutDown',
    // duration of the transitions in ms.
    duration: 800
});

// REQUIRED
filtrr.fire();
```

### HTML
All the controls that manage what elements to show, must be inside of element with 'controls' class. To identify the filters is necessary that they have the 'filtrr-btn' class.
\* Note: '-' in the 'data-filter' attribute is the ONLY way to make that filtrr shows everything.
```html
<div class="controls">
    <button class="filtrr-btn button" data-filtrr="-">All</button>
    <button class="filtrr-btn button" data-filtrr="animal">Animal</button>
    <button class="filtrr-btn button" data-filtrr="people">People</button>
    <button class="filtrr-btn button" data-filtrr="art">Art</button>
</div>
```

To relate the filters to the elements, the elements to filter must have the class 'filtrr-elem' and their 'data-elem' must be equal to the 'data-filtrr' of the control.
```html
<img class="filtrr-elem" data-elem="animal" src="image.jpg" alt="cat">
<img class="filtrr-elem" data-elem="animal" src="image.jpg" alt="fox">
<img class="filtrr-elem" data-elem="people" src="image.jpg" alt="friends">
```
## License
Licensed under [MIT license](https://opensource.org/licenses/MIT).
