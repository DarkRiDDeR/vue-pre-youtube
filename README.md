[![GitHub stars](https://img.shields.io/github/stars/DarkRiDDeR/vue-pre-youtube.svg?style=flat-square)](https://github.com/DarkRiDDeR/vue-pre-youtube/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/DarkRiDDeR/vue-pre-youtube.svg?style=flat-square)](https://github.com/DarkRiDDeR/vue-pre-youtube/issues)
[![npm](https://img.shields.io/npm/v/vue-pre-youtube.svg?style=flat)](https://www.npmjs.com/package/vue-pre-youtube)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/DarkRiDDeR/vue-pre-youtube)


# Vue Pre Youtube
A Vue.JS component for animating YouTube thumbnails.

## Install
Install module using npm:

``npm install js-table-cell-selector``

or using yarn:

``yarn add js-table-cell-selector``

and import:

### Example

```javascript

import PreYoutube from "vue-pre-youtube";


```


## Options

| Name      | Type     | Default                    | Description                                   |
|-----------|----------|----------------------------|-----------------------------------------------|
| id        | String   | -                          | Id of video in Youtube
| interval  | Number   | 500                        | The number of milliseconds between frames
| mode      | Number   | 1                          | Image change mode
| format    | String   | default                    | Image format type: size, resolition, bars
| src       | String   | ""                         | The path to the first picture preview
| imgClass  | String   | "pre-youtube"              | CSS class of image
| alt       | String   | ""                         | "alt" attribute of image
| title     | String   | ""                         | "title" attribute of image
| fnStart   | Function | <a href="#f1">Note 1</a>   | Start animation function frame
| fnStop    | Function | <a href="#f1">Note 2</a>   | Stop animation function frame

<sup>[1](#f1)</sup> Function **fnStart**:
```javascript
function () {
    if (this.mode !== modeTypes.constant) {
        this.loop = setInterval(this.fnLoop, this.interval);
    }
}

```

<sup>[2](#f2)</sup> Function **fnStop**:
```javascript
function () {
    if (this.mode !== modeTypes.constant) {
        clearInterval(this.loop);
    }
}

```

### Mode types

#### constant



**Caution!**
	

#### hover


### Format types

| Format     	| Size 	                                                                                               | Resolution       | 16×9 Bars | Default Image |
|---------------|------------------------------------------------------------------------------------------------------|------------------|-----------|---------------|
| f0            | 480x360                                                                                              | High             | Yes       | Yes           |
| f1            | 120x90                                                                                               | Low              | Yes       | No            |
| f2            | 120x90                                                                                               | Low              | Yes       | No            |
| f3            | 120x90                                                                                               | Low              | Yes       | No            |
| default       | 120x90                                                                                               | Low              | Yes       | Yes           |
| mqdefault 	| 320x180                                                                                              | Medium           | No        | Yes           |
| hqdefault 	| 480x360                                                                                              | High             | Yes       | Yes           |
| sddefault 	| 640x480                                                                                              | High             | Yes       | Yes           |
| maxresdefault | Matches the resolution of the uploaded video. **NOTE:** May not be available for non-highres videos. / Highest possible | No 	      | Yes           |
	
## Recipe for removing the 16×9 Bars

You can use CSS to crop off the top and bottom bars:

# License
MIT
