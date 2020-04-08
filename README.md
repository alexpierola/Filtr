# filtr
Filtr helps you to show and hide the elements of your web site, it's customizable and easy to use.

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | No |

## Usage
### JavaScript
You can use filtr in two ways, in the case of using a framework like React JS or Angular you should import the file:
```js
import { filtr } from './filtr';
```

Or in case of Vanilla JS you should add the script tag:
```html
<head>
    <!-- it sets the constant filtr -->
    <script src="filtrBrowser.min.js"></script>
</head>
```

And for both cases, you need to call to filtr and you can customize it or just use it:
\* Note: to use transitions is required to import [animate.css](https://github.com/daneden/animate.css)
```js
// OPTIONAL
filtr.load({
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
filtr.fire();
```

### HTML
All the controls that manage what elements to show, must be inside of element with 'controls' class. To identify the filters is necessary that they have the 'filtr-btn' class.
\* Note: '-' in the 'data-filter' attribute is the ONLY way to make that filtr shows everything.
```html
<div class="controls">
    <button class="filtr-btn button" data-filtr="-">All</button>
    <button class="filtr-btn button" data-filtr="animal">Animal</button>
    <button class="filtr-btn button" data-filtr="people">People</button>
    <button class="filtr-btn button" data-filtr="art">Art</button>
</div>
```

To relate the filters to the elements, the elements to filter must have the class 'filtr-elem' and their 'data-elem' must be equal to the 'data-filtr' of the control.
```html
<img class="filtr-elem" data-elem="animal" src="image.jpg" alt="cat">
<img class="filtr-elem" data-elem="animal" src="image.jpg" alt="fox">
<img class="filtr-elem" data-elem="people" src="image.jpg" alt="friends">
```
## License
Licensed under [MIT license](https://opensource.org/licenses/MIT).