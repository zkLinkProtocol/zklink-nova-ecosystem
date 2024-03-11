<template>
  <div :class="{ header: true, scrolled: scrolled }">
    <div class="container">
      <nav class="nav">
        <a href="/">
          <img class="logo" src="/assets/image/NOVA.svg" alt="zkLink Navo" />
        </a>
        <div
          class="flex toggle-btn"
          :style="{ display: isOpenBar ? 'none' : 'block' }"
          @click="toggleBtn"
        >
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#fff">
              <rect height="2" rx="1" width="17" x="4" y="6"></rect>
              <rect height="2" rx="1" width="17" x="4" y="11"></rect>
              <rect height="2" rx="1" width="17" x="4" y="16"></rect>
            </g>
          </svg>
        </div>
        <div
          class="btn-close"
          :style="{ display: isOpenBar ? 'block' : 'none' }"
          @click="isOpenBar = false"
        >
          <svg
            width="14px"
            height="14px"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
              <g transform="translate(-346.000000, -100.000000)" stroke="#8096B5" strokeWidth="2">
                <g transform="translate(347.234977, 101.397712)">
                  <line x1="0" y1="0" x2="11.4586865" y2="11.5866198"></line>
                  <line
                    x1="0"
                    y1="0"
                    x2="11.4586865"
                    y2="11.5866198"
                    transform="translate(5.729343, 5.793310) scale(-1, 1) translate(-5.729343, -5.793310) "
                  ></line>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div :class="{ 'header-right': true, show: isOpenBar }">
          <ul class="flex items-center navlist">
            <li class="navItem">
              <RouterLink to="/">Ecosystem</RouterLink>
            </li>
            <li class="navItem">
              <a href="https://portal.zklink.io/" target="\_blank"> Bridge </a>
            </li>
            <li class="navItem">
              <a class="disabled">Status</a>
            </li>
            <li class="navItem">
              <a href="https://explorer.zklink.io/" target="\_blank"> Explorer </a>
            </li>
            <li class="navItem guoBnD" @click="isOpen = !isOpen">
              <span :class="{ bgColor: isOpen }">
                Developer
                <svg
                  height="6"
                  viewBox="0 0 9 6"
                  width="9"
                  xmlns="http://www.w3.org/2000/svg"
                  class="arrow"
                  stroke="#a6abb9"
                >
                  <path
                    d="m1 1 3.35858 3.35858c.0781.0781.20474.0781.28284 0l3.35858-3.35858"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1.2"
                  ></path>
                </svg>
              </span>
              <div :class="{ dropdown: true, action: isOpen }">
                <ul>
                  <li>
                    <a href="https://docs.zklink.io/" target="_blank"> Documentation </a>
                  </li>
                  <li>
                    <a href="https://docs.zklink.io/additional-resources/github" target="_blank">
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/zkLinkProtocol/zklink-audit-report/blob/master/zklink_Nova_Secure3_Audit_Report.pdf"
                      target="_blank"
                    >
                      Audit
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.zklink.io/additional-resources/help" target="_blank">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="flex items-center iconList">
            <a target="_blank" class="icons" href="https://medium.com/zklinkdefi">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#fff">
                  <path
                    d="m13.5374 11.8277c0 3.7707-3.0305 6.8275-6.76856 6.8275-3.73811 0-6.76884-3.0575-6.76884-6.8275 0-3.77003 3.0305-6.8277 6.76884-6.8277 3.73836 0 6.76856 3.05698 6.76856 6.8277z"
                  ></path>
                  <path
                    d="m20.9627 11.8277c0 3.5493-1.5153 6.4277-3.3844 6.4277-1.8692 0-3.3845-2.8784-3.3845-6.4277 0-3.54936 1.5151-6.4278 3.3842-6.4278 1.8692 0 3.3845 2.87752 3.3845 6.4278"
                  ></path>
                  <path
                    d="m24 11.8276c0 3.1793-.5328 5.7582-1.1903 5.7582s-1.1901-2.5782-1.1901-5.7582c0-3.18002.5329-5.75826 1.1901-5.75826.6573 0 1.1903 2.57801 1.1903 5.75826z"
                  ></path>
                </g>
              </svg>
            </a>
            <a target="_blank" class="icons" href="https://discord.gg/zklink">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m20.3483 4.52022c-.0067-.01272-.0178-.02269-.0312-.02812-1.5561-.70278-3.1982-1.20392-4.8852-1.49087-.0153-.00281-.0311-.00078-.0452.00578-.0141.00657-.0257.01734-.0333.03078-.2236.39949-.4265.80984-.6081 1.22947-1.8185-.27174-3.6683-.27174-5.48682 0-.18279-.4207-.38902-.83114-.61776-1.22947-.00785-.01315-.01953-.02367-.03354-.0302-.01401-.00652-.02969-.00873-.04499-.00636-1.6872.28635-3.32939.78752-4.88524 1.49091-.01332.00556-.02456.01505-.03217.02716-3.111396 4.57386-3.963726 9.0353-3.5456016 13.4414.0011766.0108.0045466.0213.0099106.0308s.012613.0178.021314.0245c1.811737 1.3205 3.838187 2.3284 5.992877 2.9808.01517.0045.03138.0043.04643-.0006.01506-.0049.02824-.0141.03778-.0266.46278-.6198.87283-1.2762 1.226-1.9624.00485-.0094.00762-.0197.00813-.0303.00051-.0105-.00127-.0211-.00519-.0309-.00393-.0098-.00993-.0187-.01761-.0261-.00767-.0073-.01685-.013-.02692-.0167-.64663-.2435-1.27265-.5371-1.87217-.878-.01089-.0063-.02004-.0151-.02663-.0257-.0066-.0107-.01044-.0227-.01119-.0351-.00074-.0124.00163-.0248.00691-.0361.00527-.0113.0133-.0212.02336-.0287.12615-.0928.25012-.1884.37179-.2867.01068-.0087.02359-.0142.03729-.0161.0137-.0018.02765.0002.04027.0058 3.92772 1.7645 8.18007 1.7645 12.06127 0 .0126-.006.0267-.0082.0406-.0066.0139.0017.0271.0072.0379.0159.1218.0989.2461.1949.3728.2877.0101.0075.0182.0172.0235.0285.0054.0112.0079.0236.0072.036-.0007.0125-.0044.0245-.0109.0352-.0065.0106-.0156.0195-.0265.0259-.5981.3438-1.2247.6372-1.873.8771-.0101.0038-.0192.0096-.0269.0171-.0076.0075-.0135.0165-.0174.0264-.0038.0099-.0055.0205-.0049.0311.0006.0105.0034.0209.0084.0303.359.6824.7685 1.3379 1.225 1.9613.0093.0128.0224.0224.0375.0275.0151.005.0315.0053.0467.0007 2.1586-.6502 4.1886-1.6582 6.0026-2.9807.0088-.0064.0162-.0145.0216-.0239.0053-.0093.0086-.0197.0096-.0305.5006-5.0939-.838-9.51877-3.5483-13.44138zm-12.32824 10.75758c-1.18253 0-2.1569-1.0682-2.1569-2.3801s.95547-2.3802 2.1569-2.3802c1.21082 0 2.17574 1.0775 2.15684 2.3801 0 1.312-.95549 2.3802-2.15684 2.3802zm7.97474 0c-1.1825 0-2.1569-1.0682-2.1569-2.3801s.9555-2.3802 2.1569-2.3802c1.2109 0 2.1758 1.0775 2.1569 2.3801 0 1.312-.946 2.3802-2.1569 2.3802z"
                  fill="#fff"
                ></path>
              </svg>
            </a>
            <a target="_blank" class="icons" href="https://t.me/zkLinkorg">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m2.51239 10.7489c5.90556-2.54023 9.84351-4.2149 11.81391-5.02401 5.6258-2.31019 6.7948-2.7115 7.5567-2.72475.1676-.00291.5423.03809.785.23253.205.16418.2614.38596.2883.54162.027.15566.0606.51026.0339.78734-.3048 3.16247-1.624 10.83697-2.2951 14.37897-.284 1.4988-.8431 2.0013-1.3844 2.0505-1.1764.1069-2.0698-.7676-3.2092-1.505-1.7829-1.1538-2.7902-1.8721-4.5208-2.9981-2.00012-1.3012-.7035-2.0164.4363-3.1853.2983-.3058 5.4816-4.96044 5.5819-5.38269.0126-.0528.0242-.24965-.0943-.35359-.1184-.10394-.2932-.0684-.4194-.04013-.1788.04007-3.0271 1.89872-8.54485 5.57591-.80848.5481-1.54077.8152-2.19688.8012-.72331-.0154-2.11467-.4038-3.149-.7357-1.26864-.4071-2.27694-.6224-2.18914-1.3138.04573-.3602.54808-.7285 1.50706-1.105z"
                  fill="#fff"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
            <a target="_blank" class="icons" href="https://twitter.com/zkLink_Official">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <clipPath id="a">
                  <path d="m0 0h24v24h-24z"></path>
                </clipPath>
                <g clipPath="url(#a)">
                  <path
                    d="m7.55016 21.75c9.05434 0 14.00814-7.5033 14.00814-14.00814 0-.21094-.0047-.42656-.0141-.6375.9637-.6969 1.7953-1.56011 2.4558-2.54906-.8975.3993-1.8504.66008-2.8261.77344 1.0274-.61583 1.7966-1.58327 2.1652-2.72297-.9665.57279-2.0235.97684-3.1257 1.19484-.7426-.78905-1.7244-1.31149-2.7937-1.48656-1.0693-.17506-2.1665.007-3.122.51805-.9554.51104-1.7159 1.32261-2.1639 2.30921-.4479.98661-.5584 2.0933-.3143 3.14899-1.95701-.09821-3.87156-.6066-5.61952-1.4922-1.74795-.88561-3.29029-2.12866-4.52701-3.64858-.62857 1.08372-.820913 2.36612-.53794 3.58657.28297 1.22045 1.02003 2.28736 2.06138 2.9839-.78178-.02483-1.54643-.23531-2.230785-.61407v.06094c-.0007 1.13724.392475 2.23974 1.112685 3.11994s1.72301 1.4838 2.83794 1.7082c-.72419.1981-1.48427.227-2.22141.0844.31461.978.92673 1.8335 1.75093 2.4469.8242.6135 1.81935.9543 2.84657.9749-1.74392 1.3699-3.89817 2.1129-6.11578 2.1094-.393273-.0006-.786161-.0247-1.17656-.0722 2.25286 1.4453 4.87353 2.213 7.55016 2.2116z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
            </a>
            <a target="_blank" class="icons" href="https://github.com/zkLinkProtocol">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#fff">
                  <path
                    clipRule="evenodd"
                    d="m12.5599 1c-2.69276.0014-5.2972.95511-7.34764 2.6906-2.05044 1.7355-3.41317 4.1396-3.84453 6.7824-.431364 2.6429.09677 5.3521 1.48998 7.6433s3.56063 4.0149 6.11472 4.863c.56347.1046.77571-.2447.77571-.5416s-.01127-1.1579-.01503-2.0991c-3.15544.6816-3.82222-1.3316-3.82222-1.3316-.51463-1.3073-1.25842-1.6509-1.25842-1.6509-1.02927-.6985.07702-.6854.07702-.6854 1.14009.0803 1.73925 1.1635 1.73925 1.1635 1.01049 1.7237 2.65394 1.2251 3.30006.9337.10142-.7302.3963-1.2269.7212-1.5089-2.52055-.2839-5.16888-1.2513-5.16888-5.5728-.01562-1.1208.40266-2.20465 1.16828-3.02734-.11645-.28387-.50526-1.43055.11081-2.9881 0 0 .95227-.30254 3.11976 1.15602 1.85913-.50552 3.82063-.50552 5.67983 0 2.1656-1.45856 3.116-1.15602 3.116-1.15602.6179 1.55381.2291 2.70049.1127 2.9881.768.82282 1.1872 1.90854 1.1701 3.03104 0 4.3309-2.6539 5.2852-5.1783 5.5635.4057.3511.7682 1.0365.7682 2.0898 0 1.5089-.0131 2.7229-.0131 3.0945 0 .3007.2047.6518.7794.5416 2.5544-.8482 4.722-2.5722 6.1152-4.8638s1.9211-5.0012 1.4892-7.6443c-.4318-2.64308-1.7952-5.04721-3.8464-6.78241-2.0511-1.73519-4.6561-2.68828-7.3492-2.68879z"
                    fillRule="evenodd"
                  ></path>
                  <path
                    d="m5.29792 17.2607c-.02442.056-.11458.0728-.18783.0336s-.12771-.1121-.10142-.17c.0263-.0579.11457-.0728.18782-.0336.07326.0392.1296.1139.10143.17z"
                  ></path>
                  <path
                    d="m5.75853 17.7707c-.0389.0195-.0834.0249-.12589.0154-.04248-.0096-.08031-.0335-.10701-.0677-.07325-.0785-.08829-.1868-.03194-.2353.05635-.0486.15778-.0262.23103.0523.07325.0784.09016.1867.03381.2353z"
                  ></path>
                  <path
                    d="m6.20558 18.4185c-.06949.0486-.18783 0-.25357-.0971-.01818-.0174-.03263-.0383-.04251-.0614-.00987-.0231-.01497-.048-.01497-.0731s.0051-.0499.01497-.073c.00988-.0231.02433-.044.04251-.0614.0695-.0467.18783 0 .25357.0952s.06762.2222 0 .2708z"
                  ></path>
                  <path
                    d="m6.81196 19.0459c-.06198.0691-.18782.0504-.29113-.043-.1033-.0933-.12772-.2203-.06574-.2876.06198-.0672.18782-.0485.29488.043s.12773.2204.06199.2876z"
                  ></path>
                  <path
                    d="m7.66265 19.4121c-.02817.0878-.15589.127-.28361.0896-.12772-.0373-.21224-.1419-.18783-.2315.02442-.0897.15402-.1308.28362-.0897s.21224.1401.18782.2316z"
                  ></path>
                  <path
                    d="m8.59046 19.4754c0 .0915-.10517.17-.24041.1718-.13523.0019-.24605-.0728-.24605-.1643s.10518-.17.24041-.1718c.13524-.0019.24605.0709.24605.1643z"
                  ></path>
                  <path
                    d="m9.45483 19.3318c.0169.0915-.07701.1868-.21224.2092-.13524.0224-.25357-.0318-.27047-.1214-.01691-.0897.08076-.1868.21224-.211.13148-.0243.25356.0317.27047.1232z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.header .router-link-active{
  background-color: rgb(27, 28, 28);
  color: rgb(3, 212, 152);
}
</style>
<style lang="scss" scoped>
.container {
  max-width: 1280px;
}
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 87px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 9999;
  a {
    color: #fff;
  }
  // transition: all 0.2s ease-in-out;
  &.scrolled {
    background: rgba(22, 22, 22, 0.88);
  }

  .header-right {
    display: flex;
  }
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    max-width: 220px;
    height: auto;
  }
  .navlist {
    .navItem {
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: -0.5px;
      white-space: nowrap;
      & > a {
        border-radius: 8px;
        padding: 6px 20px;
        transition: all ease-in-out 0.2s;
      }
      &:hover {
        & > a {
          color: $primary-color;
        }
      }
      .disabled {
        cursor: not-allowed;
      }
    }
    .guoBnD {
      position: relative;
      display: block;
      border-radius: 8px;
      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: 400;
      letter-spacing: -0.5px;
      white-space: nowrap;
      .arrow {
        stroke: rgb(255, 255, 255);
        margin-left: 8px;
      }
    }
  }
  .icons {
    margin-left: 21px;
  }
  .toggle-btn {
    display: block;
  }
  .btn-close {
    display: none;
  }
  .dropdown {
    position: relative;
    display: none;
    border-radius: 8px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.5px;
    white-space: nowrap;
    ul {
      margin: 0px;
      border-radius: 8px;
    }
    li {
      a {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        color: rgb(169, 169, 169);
        border-radius: 6px;
        &:hover {
          color: rgb(8, 192, 139);
          background-color: rgb(19, 19, 19);
        }
      }
    }
  }
}
@media screen and (max-width: 959px) {
  .header {
    justify-content: center;
    height: 76px;
    .logo {
      max-width: 140px;
    }
    .header-right {
      position: fixed;
      top: 76px;
      left: 0px;
      height: calc(100vh - 56px);
      width: 100%;
      background: rgb(26, 26, 26);
      padding: 0 20px;
      display: none;
      &.show {
        display: block;
      }
      ul {
        flex-direction: column;
        margin-bottom: 20px;
        li {
          width: 100%;
          align-items: center;
          padding: 14px 20px;
          margin: 0;
        }
      }
      .iconList {
        justify-content: center;
      }
      .icons {
        margin: 0 20px 0 0;
      }
    }
    .navlist {
      .guoBnD {
        span {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 14px 20px;
          &.bgColor {
            color: rgb(255, 255, 255);
            background-color: rgb(3, 212, 152);
            border-radius: 6px;
            .arrow {
              fill: transparent;
              stroke: rgb(255, 255, 255);
              transform: rotate(180deg);
            }
          }
        }
      }
    }
    .dropdown {
      display: none;
      &.action {
        display: block;
      }
      margin-top: 10px;
    }
  }
}
@media screen and (min-width: 959px) {
  .header {
    .toggle-btn {
      display: none !important;
    }
    .header-right {
      flex-basis: 70%;
      justify-content: space-between;
    }
  }
}
@media screen and (min-width: 769px) and (max-width: 990px) {
  .header {
    .logo {
      max-width: 120px;
    }
    .navlist {
      .navItem {
        margin-left: 12px;
      }
    }
    .icons {
      margin-left: 12px;
    }
  }
}
@media screen and (min-width: 960px) {
  .header .navlist {
    & > .navItem:hover {
      & > a {
        background-color: rgb(27, 28, 28);
      }
      .dropdown {
        display: block;
      }
    }
    .dropdown {
      display: none;
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: transparent;
      padding-top: 30px;
      max-height: 0px;
      ul {
        background-color: rgb(26, 26, 26);
        box-shadow: rgba(1, 1, 7, 0.23) 0px 2px 8px 0px;
        padding: 24px;
      }
    }
    .guoBnD {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 6px 20px;
      &:hover {
        background-color: rgb(27, 28, 28);
        color: rgb(8, 192, 139);
      }
      .arrow {
        transition: transform 0.3s ease-in-out 0s;
        transform: translateY(0px);
      }
      &:hover {
        .arrow {
          stroke: rgb(8, 192, 139);
          transform: translateY(2px);
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const isOpenBar = ref(false)
const isOpen = ref(false)
const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}
const toggleBtn = () => {
  isOpenBar.value = !isOpenBar.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
