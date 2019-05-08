<template>
    <img
            :src="dataSrc"
            :alt="alt"
            :title="title"
            :class="imgClass"
            @mouseenter="onMouseEnter()"
            @mouseleave="onMouseLeave()"
    >
</template>

<script>
    export const modeTypes = {
        constant: 0,
        hover: 1
    };
    export const formatTypes = {
        f0: 0, // 480 x 360
        f1: 1, // 120 x 90
        f2: 2, // 120 x 90
        f3: 3, // 120 x 90
        default: "default", // 120 x 90
        mqdefault: "mqdefault", // 320 x 180
        hqdefault: "hqdefault", // 480 x 360
        sddefault: "sddefault", // 640 x 480
        maxresdefault: "maxresdefault" // Matches the resolution of the uploaded video. NOTE: May not be available for non-highres videos.
    };

    export default {
        name: 'PreYoutube',
        props: {
            id: String,
            interval: {
                type: Number,
                default: 500
            },
            mode: {
                type: Number,
                default: modeTypes.hover
            },
            format: {
                type: String,
                default: formatTypes.default
            },
            src: {
                type: String,
                default: ""
            },
            imgClass: {
                type: String,
                default: "pre-youtube"
            },
            alt: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            },
            fnStart: {
                type: Function,
                default: function () {
                    if (this.mode !== modeTypes.constant) {
                        this.loop = setInterval(this.fnLoop, this.interval);
                    }
                }
            },
            fnStop: {
                type: Function,
                default: function () {
                    if (this.mode !== modeTypes.constant) {
                        clearInterval(this.loop);
                    }
                }
            },
        },
        data() {
            return {
                loop: null,
                fnLoop: () => {
                    if (++this.num > 3) {
                        this.num = 1;
                    }
                    this.dataSrc = this.genUrl(this.id, this.num);
                },
                num: 0,
                dataSrc: this.src
            };
        },
        mounted() {
            this.dataSrc = this.dataSrc.trim();

            if (!this.dataSrc.length) {
                this.dataSrc = this.genUrl(this.id, this.format);
            }

            if (this.mode === modeTypes.constant) {
                this.dataSrc = this.genUrl(this.id, this.format);
            }
        },
        methods: {
            genUrl(id, name) {
                return "https://img.youtube.com/vi/" + id + "/" + name + ".jpg";
            },
            onMouseEnter() {
                this.fnStart();
            },
            onMouseLeave() {
                this.fnStop();
            }
        }
    };
</script>
