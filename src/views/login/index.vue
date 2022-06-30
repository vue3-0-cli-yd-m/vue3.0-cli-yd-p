<template>
  <div class="toggle" @click="toggle">
    <el-button>{{ shouldScale ? 'System' : 'H5' }}</el-button>
  </div>

  <div class="warp" id="warp" :class="shouldScale ? 'warp_scale' : ''">
    <div class="container">
      <el-form ref="submitRef">
        <div class="title">管理员登录</div>

        <div class="username from">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </div>

        <div class="password from">
          <el-input
            v-model="password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </div>

        <div class="submit from">
          <el-button size="large" @click="submit">登录</el-button>
        </div>

        <div class="remember from">
          <el-switch
            v-model="switchRemember"
            inactive-text="记住账号密码"
          ></el-switch>
        </div>
      </el-form>
    </div>
  </div>

  <div
    class="warp2"
    @mousewheel="handleMouseWheel"
    :class="shouldScale ? 'warp2_scale' : ''"
  >
    <div
      class="picture_box"
      :style="`transform: translate3d(${img_trans?.x}px, ${img_trans?.y}px, 0px)`"
    >
      <img id="img" src="../../assets/images/bac1.jpg"  alt=""/>
    </div>

    <div
      id="top_warp"
      class="top_warp"
      :style="`transform: translate3d(${top_warp_trans?.x}px, ${top_warp_trans?.y}px, 0px)`"
    >
      <div
        class="selection1"
        :class="navShow ? 'showC' : 'hideC'"
        id="selection1"
      >
        <div class="selection1_left">
          <span class="exo">exo</span>
          <span class="ape">ape</span>
        </div>

        <div class="selection1_right">
          <div class="line_p">
            <span>Work</span>
            <div class="line_c"></div>
          </div>

          <div class="line_p">
            <span>Studio</span>
            <div class="line_c"></div>
          </div>

          <div class="line_p">
            <span>News</span>
            <div class="line_c"></div>
          </div>

          <div class="line_p">
            <span>Contact</span>
            <div class="line_c"></div>
          </div>
        </div>
      </div>

      <div class="selection2" id="selection2">
        <div class="t_t">Intrigued by beauty,fascinated by technology</div>
        <div class="t_t">
          and fuelled with an everlasting devotion to digital
        </div>
        <div class="t_t">craftsmanship and meaningful aesthetics</div>

        <div class="big_t">
          <div>Digital</div>
          <div>Design</div>
          <div>Experience</div>
        </div>

        <div class="selection2_info">
          White-glove digital experiences, engaging content and impactful design
          solutions that inspire, affect and delight. We carefully wrap
          emotionally rich aesthetics around strategic concepts to deliver
          award-winning digital design that exceeds expectations.
        </div>

        <div class="selection2_footer">
          <div class="audio">The Studio</div>
          <div class="selection2_footer_right">
            <div class="selection2_footer_right_nav">
              <div class="line_p">
                <span>Work</span>
                <div class="line_c"></div>
              </div>

              <div class="line_p">
                <span>Studio</span>
                <div class="line_c"></div>
              </div>

              <div class="line_p">
                <span>News</span>
                <div class="line_c"></div>
              </div>

              <div class="line_p">
                <span>Contact</span>
                <div class="line_c"></div>
              </div>
            </div>

            <div class="selection2_footer_right_connect">
              <div class="line_p">
                <span>1292867089@qq.com</span>
                <div class="line_c"></div>
              </div>

              <div class="line_p">
                <span>+8615052901933</span>
                <div class="line_c"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="selection3" id="selection3">
        <div class="big_work_warp">
          <div class="big_work" :class="workShow ? 'big_work_trans' : ''">
            Work
          </div>
        </div>

        <div class="selection3_studio">
          <div
            class="selection3_studio_img"
            @mouseenter="handleMouseenter(1)"
            @mouseleave="handleMouseleave(1)"
          >
            <img
              :style="`opacity:${videoOpacity1 ? 0 : 1}`"
              class="selection3_studio_image"
              src="../../assets/images/img1.jpg"
              alt=""
            />

            <video
              loop
              muted
              id="videoId1"
              :style="`opacity:${videoOpacity1}`"
              class="video_selection3"
              src="../../assets/images/video1.mp4"
            ></video>
          </div>

          <div class="selection3_studio_right">
            <div class="selection3_studio_right_top">
              <span>☆</span>
              <span class="Featured" style="margin-left: 20px">
                Featured Projects
              </span>
            </div>

            <div class="Highlights">
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </div>

            <div class="selection3_studio_right_studio">
              <div
                class="selection3_studio_img2"
                @mouseenter="handleMouseenter(2)"
                @mouseleave="handleMouseleave(2)"
              >
                <img
                  :style="`opacity:${videoOpacity2 ? 0 : 1}`"
                  class="selection3_studio_image2"
                  src="../../assets/images/img2.webp"
                  alt=""
                />

                <video
                  loop
                  muted
                  id="videoId2"
                  :style="`opacity:${videoOpacity2}`"
                  class="video_selection4"
                  src="../../assets/images/video2.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>

        <div class="studio4">
          <div
            class="studio4_audio1"
            @mouseenter="handleMouseenter(3)"
            @mouseleave="handleMouseleave(3)"
          >
            <img
              :style="`opacity:${videoOpacity3 ? 0 : 1}`"
              class="studio4_audio1_img"
              src="../../assets/images/img3.webp"
              alt=""
            />

            <video
              loop
              muted
              id="videoId3"
              :style="`opacity:${videoOpacity3}`"
              class="studio4_audio1_video"
              src="../../assets/images/video3.mp4"
            ></video>
          </div>

          <div
            class="studio4_audio2"
            @mouseenter="handleMouseenter(4)"
            @mouseleave="handleMouseleave(4)"
          >
            <img
              :style="`opacity:${videoOpacity4 ? 0 : 1}`"
              class="studio4_audio2_img"
              src="../../assets/images/img4.webp"
              alt=""
            />

            <video
              loop
              muted
              id="videoId4"
              :style="`opacity:${videoOpacity4}`"
              class="studio4_audio2_video"
              src="../../assets/images/video4.mp4"
            ></video>
          </div>
        </div>
      </div>

      <!-- 黑色区域 -->
      <div class="black" id="black">
        <video
          loop
          muted
          autoplay
          id="videoId5"
          class="black_video"
          src="../../assets/images/video5.mp4"
          :style="`transform: scale(${video_scale?.x}, ${video_scale?.y})`"
        ></video>

        <div class="title-mask young" :style="`left:${word?.left}px`">
          Young
        </div>
        <div class="title-mask dan" :style="`right:${word?.left}px`">Dan</div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { router } from '@/router'
import { ElMessage } from 'element-plus'
import { defineComponent, reactive, toRefs, onMounted, watch } from 'vue'

import Enums from '@/utils/cache/enums'
import base64 from 'yd_base64_kiko'
import drawCanvas from '@/assets/canvas/canvas'

export default defineComponent({
  name: 'LoginIndex',
  props: {},
  components: {},
  setup() {
    interface stateTS<T> {
      password: T
      username: T
      switchRemember: boolean
      submitRef: any
      shouldScale: boolean
      navShow: boolean
      lock: boolean
      top_warp_trans: {
        x: number
        y: number
        z: number
      }
      img_trans: {
        x: number
        y: number
        z: number
      }
      workShow: boolean
      videoOpacity1: number
      videoOpacity2: number
      videoOpacity3: number
      videoOpacity4: number
      video_scale: {
        x: number
        y: number
      }
      word: {
        left: number
        right: number
      }
    }

    const state: stateTS<string> = reactive({
      password: '',
      username: '',
      switchRemember: false,
      submitRef: null,
      shouldScale: false,

      navShow: true,
      lock: false, //页面的滚动锁🔐 在不需要滚动的时候置为true 锁定页面
      top_warp_trans: {
        x: 0,
        y: 0,
        z: 0,
      }, //滚定数据对象
      img_trans: {
        x: 0,
        y: 0,
        z: 0,
      },
      workShow: false,
      videoOpacity1: 0,
      videoOpacity2: 0,
      videoOpacity3: 0,
      videoOpacity4: 0,
      video_scale: {
        x: 0.25,
        y: 0.25,
      },
      word: {
        left: 100,
        right: 100,
      },
    })

    const judge = () => {
      if (!state.username) return ElMessage.warning('请输入用户名') && false
      if (!state.password) return ElMessage.warning('请输入密码') && false

      return true
    }

    const submit = () => {
      if (!judge()) return
      try {
        youngDanStorage.set('TOKEN', '通行证')

        if (state.switchRemember) {
          setInfo()
        }

        router.push({ name: 'HomeIndex' })
      } catch (error) {
        console.log(error)
      }
    }

    const toggle = () => {
      state.shouldScale = !state.shouldScale
    }

    const initSubmit = () => {
      let json = youngDanStorage.get(Enums.REMEMBERSUBMIT)
      if (json) {
        let info = JSON.parse(base64.baseDecode(json))
        if (info?.isRemember) {
          state.username = info.username
          state.password = info.password
          state.switchRemember = true
        } else {
          state.username = ''
          state.password = ''
          state.switchRemember = false
        }
      }
    }

    const setInfo = () => {
      let jsonStr = JSON.stringify({
        username: state.username,
        password: state.password,
        isRemember: state.switchRemember,
      })
      // 此处可以自定义算法加密
      youngDanStorage.set(Enums.REMEMBERSUBMIT, base64.baseEncode(jsonStr))
    }

    watch(
      () => state.switchRemember,
      (newV) => {
        if (newV) {
          if (!judge()) return (state.switchRemember = false)

          setInfo()
        } else {
          youngDanStorage.remove(Enums.REMEMBERSUBMIT)
        }
      },
    )

    onMounted(() => {
      drawCanvas(document.getElementById('warp'))
      initSubmit()
    })

    const handleTopWarp = (e) => {
      if (e?.wheelDeltaY > 0 && state?.top_warp_trans?.y >= 0) {
        state.navShow = true
        return
      }

      let height1 = document.getElementById('selection1')?.clientHeight as any
      let height2 = document.getElementById('selection2')?.clientHeight
      let height3 = document.getElementById('selection3')?.clientHeight
      let height4 = document.getElementById('black')?.clientHeight

      state.navShow = false

      let b = Math.abs(e?.wheelDeltaY / 120)

      // e?.wheelDeltaY大于0 滚轮向上
      if (e?.wheelDeltaY > 0) {
        if (
          Math.abs(state.top_warp_trans.y) >=
            height1 + height2 + height3 + 50 &&
          Math.abs(state.top_warp_trans.y) <=
            height4 + height1 + height2 + height3 + 50 &&
          state.video_scale.x !== 0.25
        ) {
          state.top_warp_trans.y = -(height1 + height2 + height3 + 50)
          state.lock = true
        } else {
          state.lock = false

          if (
            Math.abs(state.top_warp_trans.y) <
            height1 + height2 + height3 + 50
          ) {
            if (state.word.left <= 100) {
              state.word.left = 100
              state.word.right = 100
            }

            if (state.video_scale.x < 0.25) {
              state.video_scale.x = 0.25
              state.video_scale.y = 0.25
            }
          }
        }
      } else {
        // &&
        //   Math.abs(state.top_warp_trans.y) <=
        //     height4 + height1 + height2 + height3 + 50
        if (
          Math.abs(state.top_warp_trans.y) >=
            height1 + height2 + height3 + 50 &&
          state.video_scale.x !== 1
        ) {
          state.top_warp_trans.y = -(height1 + height2 + height3 + 50)
          state.lock = true
        } else {
          state.lock = false

          if (
            Math.abs(state.top_warp_trans.y) <=
            height4 + height1 + height2 + height3 + 50
          ) {
            if (state.video_scale.x > 1) {
              state.video_scale.x = 1
              state.video_scale.y = 1
            }

            if (state.word.left >= 580) {
              state.word.left = 580
              state.word.right = 580
            }
          }
        }
      }

      if (!state.lock) {
        state.top_warp_trans.y += e?.wheelDeltaY < 0 ? -50 * b : 50 * b

        if (state?.top_warp_trans?.y >= 0) {
          state.top_warp_trans.y = 0
        }
      } else {
        // 负数时要变大 正数时要变小
        if (e?.wheelDeltaY <= 0) {
          if (state.video_scale.x < 1) {
            state.video_scale.x += 0.05 * b
            state.video_scale.y += 0.05 * b
            state.word.left += 50 * b
            state.word.right += 50 * b

            if (state.word.left >= 580) {
              state.word.left = 580
              state.word.right = 580
            }

            if (state.video_scale.x > 1) {
              state.video_scale.x = 1
              state.video_scale.y = 1
            }
          }
        } else {
          if (state.video_scale.x > 0.25) {
            state.video_scale.x -= 0.05 * b
            state.video_scale.y -= 0.05 * b
            state.word.left -= 50 * b
            state.word.right -= 50 * b

            if (state.word.left <= 100) {
              state.word.left = 100
              state.word.right = 100
            }

            if (state.video_scale.x < 0.25) {
              state.video_scale.x = 0.25
              state.video_scale.y = 0.25
            }
          }
        }
      }

      let heightT = document.getElementById('top_warp')?.clientHeight as any
      if (Math.abs(state.top_warp_trans.y) > heightT - window.innerHeight) {
        state.top_warp_trans.y = window.innerHeight - heightT
      }
    }

    const handleImg = (e) => {
      if (e?.wheelDeltaY > 0 && state?.img_trans?.y >= 0) {
        state.navShow = true
        return
      }

      let heightT = document.getElementById('top_warp')?.clientHeight as any
      if (Math.abs(state.top_warp_trans.y) >= heightT - window.innerHeight) {
        return
      }

      state.navShow = false

      if (!state.lock) {
        let b = Math.abs(e?.wheelDeltaY / 120)

        state.img_trans.y += e?.wheelDeltaY < 0 ? -10 * b : 10 * b

        if (state?.img_trans?.y >= 0) {
          state.img_trans.y = 0
        }
      }
    }

    const handleSelection3 = () => {
      let height1 = document.getElementById('selection1')?.clientHeight as any
      let height2 = document.getElementById('selection2')?.clientHeight

      if (Math.abs(state.top_warp_trans?.y) >= height2 + height1 + 50 + 200) {
        state.workShow = true
      }
    }

    const handleMouseWheel = (e) => {
      handleTopWarp(e)
      handleImg(e)
      handleSelection3(e)
    }

    const handleMouseenter = (type: number) => {
      state[`videoOpacity${type}`] = 1
      let videoElement = document.getElementById(`videoId${type}`) as any
      videoElement.play() // 视频播放
    }

    const handleMouseleave = (type: number) => {
      state[`videoOpacity${type}`] = 0
    }

    const methods = {
      submit,
      toggle,
      handleMouseWheel,
      handleMouseenter,
      handleMouseleave,
    }

    return {
      ...methods,
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
@import './warp.scss';
@import './warp2.scss';
</style>
