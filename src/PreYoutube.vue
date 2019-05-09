<template>
    <img
            :src="dataSrc"
            :alt="alt"
            :title="title"
            :class="imgClass"
            @mouseenter="initHandler ? $emit('mouseenter') : ''"
            @mouseleave="initHandler ? $emit('mouseleave') : ''"
    >
</template>

<script>
    export const modeTypes = {
        constant: "constant",
        hover: "hover"
    };
    export const formatTypes = {
        "0": 0, // 480 x 360
        "1": 1, // 120 x 90
        "2": 2, // 120 x 90
        "3": 3, // 120 x 90
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
                type: String,
                default: modeTypes.hover
            },
            format: {
                type: String,
                default: formatTypes.default
            },
            initHandler: {
                type: Boolean,
                default: true,
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
                default: function (mode, setFramesInterval) {
                    if (mode !== modeTypes.constant) {
                        setFramesInterval();
                    }
                }
            },
            fnStop: {
                type: Function,
                default: function (mode, clearFramesInterval) {
                    if (mode !== modeTypes.constant) {
                        clearFramesInterval();
                    }
                }
            },
        },
        data() {
            return {
                loop: null,
                setFramesInterval: () => {
                    this.loop = setInterval(() => {
                        if (++this.num > 3) {
                            this.num = 1;
                        }
                        this.dataSrc = this.genUrl(this.id, this.num);
                    }, this.interval);
                },
                clearFramesInterval: () => {
                    clearInterval(this.loop);
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

            this.$on('mouseenter', () => {
                this.fnStart(this.mode, this.setFramesInterval);
            });
            this.$on('mouseleave', () => {
                this.fnStop(this.mode, this.clearFramesInterval);
            });
        },
        methods: {
            genUrl(id, name) {
                return "https://img.youtube.com/vi/" + id + "/" + name + ".jpg";
            }
        }
    };
</script>