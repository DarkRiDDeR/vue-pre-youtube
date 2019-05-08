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

## Demo
See [demo](http://darkridder.github.io/vue-pre-youtube/).

## Example

```vue
import PreYoutube from "vue-pre-youtube";

<template>
    <div>
        <PreYoutube id="RK1K2bCg4J8" :interval="1000" />
    </div>
</template>

<script>
import PreYoutube from "vue-pre-youtube";

export default {
    components: {
        PreYoutube
    }
}
</script>

```

## Options

| Name      | Type     | Default                    | Description                                   |
|-----------|----------|----------------------------|-----------------------------------------------|
| id        | String   | -                          | Id of video in Youtube                        |
| interval  | Number   | 500                        | The number of milliseconds between frames     |
| mode      | Number   | hover                      | Image change mode                             |
| format    | String   | default                    | Image format type: size, resolition, bars     |
| src       | String   | ""                         | The path to the first picture preview         |
| imgClass  | String   | "pre-youtube"              | CSS class of image                            |
| alt       | String   | ""                         | "alt" attribute of image                      |
| title     | String   | ""                         | "title" attribute of image                    |
| fnStart   | Function | <a href="#f1">Note 1</a>   | Start animation function frame                |
| fnStop    | Function | <a href="#f1">Note 2</a>   | Stop animation function frame                 |


<a name="f1"></a> [Note 1] Function **fnStart**:
```javascript
function () {
    if (this.mode !== modeTypes.constant) {
        this.loop = setInterval(this.fnLoop, this.interval);
    }
}

```

<a name="f2"></a>[Note 2] Function **fnStop**:
```javascript
function () {
    if (this.mode !== modeTypes.constant) {
        clearInterval(this.loop);
    }
}

```

### Mode types

#### constant

Mode without frame animation
	
#### hover - default

Frame animation mode

**Caution!** This mode does not support setting the image format

### Format types

Some of the image formats add bars to the image  16×9.  The image is in a 4×3 aspect ratio (nearly square) yet the video it self is of a 16×9 aspect ratio (rectangular).  Because of this, black bars are added to the top and bottom of the 4×3 image where the 16×9 image leaves a void.

When a video is uploaded to YouTube, YouTube will generate 3 thumbnails and designates one of those as the default.  The owner of the video can choose one of the other 2 images as the default.  In addition, the owner can upload a custom thumbnail and use that as the default thumbnail.  In that scenario, images 1, 2, and 3 listed below are the three auto-generated images mentioned above, and image 0 would be the custom image uploaded (if set as default).

| Format     	| Size 	                                                                                               | Resolution       | 16×9 Bars | Default Image |
|---------------|------------------------------------------------------------------------------------------------------|------------------|-----------|---------------|
| 0             | 480x360                                                                                              | High             | Yes       | Yes           |
| 1             | 120x90                                                                                               | Low              | Yes       | No            |
| 2             | 120x90                                                                                               | Low              | Yes       | No            |
| 3             | 120x90                                                                                               | Low              | Yes       | No            |
| default       | 120x90                                                                                               | Low              | Yes       | Yes           |
| mqdefault 	| 320x180                                                                                              | Medium           | No        | Yes           |
| hqdefault 	| 480x360                                                                                              | High             | Yes       | Yes           |
| sddefault 	| 640x480                                                                                              | High             | Yes       | Yes           |
| maxresdefault | Matches the resolution of the uploaded video. **NOTE:** May not be available for non-highres videos. / Highest possible | No 	      | Yes           |
	
## Recipe for removing the 16×9 Bars

You can use CSS to crop off the top and bottom bars:

```html
<style>
    .not-bars {
        display: inline-block;
        overflow: hidden;
    }
    .not-bars img {
        margin: -9.375% 0;
    }
</style>
<div class="not-bars">
    <preyoutube id="RK1K2bCg4J8" mode="constant" format="hqdefault" />
</div>
```

# License
MIT
