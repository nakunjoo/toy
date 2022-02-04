<template>
  <div class="movieSelection_wrap">
    <div class="contents">
      <div class="video_wrap">
        <video
          ref="videoPlayer"
          autoplay
          muted
          @ended="setVideoPlay"
        >
          <source src="https://adimg.cgv.co.kr/images/202201/Batman/Batman_1080x608.mp4">
        </video>
        <strong class="movieSelection_title">더 배트맨</strong>
        <span class="movieSelection_txt">
          어둠을 뚫고 그가 온다 <br> 3월 IMAX 대개봉
        </span>

        <div class="movieSelection_video_controller_wrap">
          <a
            href=""
            class="btn_movieSelection_detailView"
          >상세보기</a>
          <a
            href="#none"
            class="btn_movieSelection_playStop"
            :class="{'pause':video_status === 'pause'}"
            @click="videoPlayStop"
          />
          <a
            href="#none"
            class="btn_movieSelection_soundOnOff"
            :class="{'on':sound_status === 'on'}"
            @click="videoSoundOnOff"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
type videoStatus = 'play'|'pause'
type soundStatus = 'on'|'off'
export default defineComponent({
    data() {
        return {
          video_status: 'play' as videoStatus,
          sound_status: 'off' as soundStatus,
        }
    },
    methods: {
        videoPlayStop() {
            let video:any
            video = this.$refs.videoPlayer
            if (this.video_status === 'play') {
                video.pause()
                this.video_status = 'pause'
            } else {
                video.play()
                this.video_status = 'play'
            }
        },
        videoSoundOnOff() {
          let video:any
            video = this.$refs.videoPlayer
            if (this.sound_status === 'on') {
                video.muted = true
                this.sound_status = 'off'
            } else {
                video.muted = false
                this.sound_status = 'on'
            }
        },
        setVideoPlay() {
          this.video_status = 'pause'
        }
    }
})
</script>

<style scoped lang="scss">
.movieSelection_wrap {
    position: relative;
    height: 498px;
    background-color: #000;
    border-top: 2px solid #fb4357;

    > .contents {
        width: 980px;
        height: 100%;
        margin: 0 auto;

        > .video_wrap {
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 100%;

            &::before {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background-image: linear-gradient(to right, #000 0%, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 50%,rgba(0, 0, 0, 0.25) 75%, #000 100%);
                z-index: 2
            }

            > video {
                position: relative;
                width: 100%;
                height: 100%;
                transform: scale(1.35);
                z-index: 1;
            }

            > .movieSelection_title {
                position: absolute;
                top: 170px;
                left: 0;
                font-weight: 700;
                font-size: 40px;
                color: #fff;
                line-height: 1.450em;
                text-shadow: 2px 2px 4px rgb(0 0 0 / 72%);
                z-index: 2;
                pointer-events: none;
            }

            > .movieSelection_txt {
                display: -webkit-box;
                overflow: hidden;
                position: absolute;
                top: 239px;
                left: 0;
                max-width: 100%;
                font-size: 20px;
                color: #fff;
                line-height: 1.450em;
                text-overflow: ellipsis;
                z-index: 3;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                pointer-events: none;
            }

            > .movieSelection_video_controller_wrap {
                display: inline-flex;
                position: absolute;
                top: 315px;
                left: 3px;
                z-index: 4;

                > .btn_movieSelection_detailView {
                    display: block;
                    padding: 5px 30px 5px 18px;
                    font-size: 14px;
                    color: #343434;
                    line-height: 1.429em;
                    background: rgba(255, 255, 255, 0.8) url(../../assets/icon/arrowR_8x13.png) calc(100% - 11px) center/8px 13px scroll no-repeat;
                    border-radius: 15px;
                }

                > .btn_movieSelection_playStop {
                    display: block;
                    margin-left: 10px;
                    width: 28px;
                    height: 28px;
                    font-size: 0;
                    background: transparent url(../../assets/icon/pause.png) center/18px scroll no-repeat;
                    border: 1px solid #979797;
                    border-radius: 50%;

                    &.pause {
                      background: transparent url(../../assets/icon/play.png) center/18px scroll no-repeat;
                    }
                }

                > .btn_movieSelection_soundOnOff {
                    display: block;
                    margin-left: 10px;
                    width: 28px;
                    height: 28px;
                    font-size: 0;
                    background: transparent url(../../assets/icon/soundOff.png) center/18px scroll no-repeat;
                    border: 1px solid #979797;
                    border-radius: 50%;

                    &.on {
                      background: transparent url(../../assets/icon/soundOn.png) center/18px scroll no-repeat;
                    }
                }
            }
        }
    }
}
</style>