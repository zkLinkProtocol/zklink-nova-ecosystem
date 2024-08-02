<template>
  <div className="footer">
      <div className="footer-content">
        <img src="/assets/image/NOVA.svg" alt="" class="logo"/>

        <div className="social-media">
          <a
            href="https://discord.gg/zklink"
            target="_blank"
            className="social-media-link"
          >
            <img
              alt=""
              src="/assets/image/icon-discord.svg"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://github.com/zkLinkProtocol"
            target="_blank"
            className="social-media-link"
          >
            <img
              alt=""
              src="/assets/image/icon-github.svg"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://twitter.com/zkLink_Official"
            target="_blank"
            className="social-media-link"
          >
            <img
              alt=""
              src="/assets/image/icon-twitter.svg"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://medium.com/zklinkdefi"
            target="_blank"
            className="social-media-link"
          >
            <img
              alt=""
              src="/assets/image/icon-medium.svg"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://t.me/zkLinkorg"
            target="_blank"
            className="social-media-link"
          >
            <img
              alt=""
              src="/assets/image/icon-telegram.svg"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className="nav">
          <div>
            <div className="nav-title">zkLink Nova</div>
            <div className="nav-list">
              <a
                className="nav-item"
                href="https://docs.zklink.io"
                target="_blank"
              >
                Documentation
              </a>
              <a
                className="nav-item"
                href="https://portal.zklink.io"
                target="_blank"
              >
                Bridge
              </a>
              <a
                className="nav-item"
                href="https://explorer.zklink.io"
                target="_blank"
              >
                Explorer
              </a>
              <a
                className="nav-item"
                href="https://docs.zklink.io/additional-resources/github"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
          <div>
            <div className="nav-title">zkLink X</div>
            <div className="nav-list">
              <a
                className="nav-item"
                href="https://zk.link/X"
                target="_blank"
              >
              Product
              </a>
              <a
                className="nav-item"
                href="https://docs.zk.link/welcome/readme"
                target="_blank"
              >
              Documentation
              </a>
              <a
                className="nav-item"
                href="https://zk.link/orderbook"
                target="_blank"
              >
              Orderbook DEX
              </a>
              <a
                className="nav-item"
                href="https://zk.link/amm"
                target="_blank"
              >
              AMM
              </a>
              <a
                className="nav-item"
                href="https://zk.link/zkLink-whitepaper.pdf"
                target="_blank"
              >
              Whitepaper
              </a>
              <a
                className="nav-item"
                href="https://scan.zk.link"
                target="_blank"
              >
              zkLink X Scan
              </a>
            </div>
          </div>
          <div>
            <div className="nav-title">Community</div>
            <div className="nav-list">
              <a
                href="https://medium.com/zklinkdefi"
                target="_blank"
                className="nav-item"
              >
                Blog
              </a>
              <a
                href="https://twitter.com/zkLink_Official"
                target="_blank"
                className="nav-item"
              >
                Twitter
              </a>
              <a
                href="https://discord.gg/zklink"
                target="_blank"
                className="nav-item"
              >
                Discord
              </a>
              <a
                href="https://t.me/zkLinkorg"
                target="_blank"
                className="nav-item"
              >
                Telegram
              </a>
              <a
                href="https://zk.link/pioneer"
                target="_blank"
                className="nav-item"
              >
                Pioneer Program
              </a>
            </div>
          </div>
          <div>
            <div className="nav-title">General</div>
            <div className="nav-list">
              <a
                href="https://docs.zk.link/appendix/audits"
                target="_blank"
                className="nav-item"
              >
                Audits
              </a>
              <a
                href="https://zklink.notion.site/Shape-the-multi-chain-future-at-zkLink-fcfeefcce77a426c865b2206c4628064"
                target="_blank"
                className="nav-item"
              >
                Career
              </a>
              <a
                href="https://zk.link/brandResources"
                target="_blank"
                className="nav-item"
              >
                Brand Resources
              </a>
              <a
                href="mailto:contact@zklink.org"
                target="_blank"
                className="nav-item"
              >
                Contact
              </a>
              <a
                href="/airdrop-terms-and-conditions"
                target="_blank"
                className="nav-item"
              >
                Airdrop terms and conditions
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2024 zkLink Labs. All rights reserved.
        </div>
      </div>
      <div className="bg-img">
        <img src="/assets/image/footer.png" alt="" className="footer-bg" />
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
.logo{
  max-width: 220px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
  .footer {
    // background-color: #000;
    position: relative;
    .footer-content {
      position: relative;
      margin: 0 auto;
      padding: 24px 0;
      max-width: 315px;
      overflow: hidden;
      z-index: 1;
    }

    .logo {
      img {
        margin: 0 auto;
        display: block;
        width: 160px;
      }
    }
    .social-media {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      margin-top: 14px;
      margin-bottom: 30px;
    }

    .line {
      display: none;
    }
    .line-mobile {
      margin: 16px auto;
      display: block;
      max-width: 315px;
    }
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;

    .nav-title {
      margin-bottom: 16px;
      display: block;
      color: #fff;
      font-family: "Chakra Petch";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .nav-item {
      display: block;
      color: rgba(255, 255, 255, 0.8);
      font-family: "Open Sans";
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 219.4%; /* 26.328px */
    }
  }
  .copyright {
    margin: 0 auto;
    text-align: center;
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .bg-img {
    display: none;
  }
  .footer-bg-mobile,
  .footer-shadow-mobile {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 0;
  }
}

@media screen and (min-width: 769px) {
  .footer {
    position: relative;
    padding-top: 67px;
    // background-color: #000;

    .footer-content {
      position: relative;
      margin: 0 auto;
      width: 1137px;
      z-index: 1;
    }
    .logo {
      display: flex;
      justify-content: center;
    }

    .social-media {
      margin-top: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      margin-bottom: 30px;

      .social-media-link {
        width: 32px;
        height: 32px;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }

    .line img {
      display: block;
      margin: 26px auto;
      width: 1114px;
      height: 21px;
    }

    .line-mobile {
      display: none;
    }

    .nav {
      width: 1137px;
      display: flex;
      justify-content: space-around;

      .nav-title {
        color: #fff;
        font-family: "Chakra Petch";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      .nav-list {
        margin-top: 24px;
        .nav-item {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          font-family: "Open Sans";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 184.4%; /* 29.504px */
        }
      }
    }

    .copyright {
      margin: 0 auto;
      padding: 67px 0;
      text-align: center;
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      z-index: 9;
    }

    .footer-bg,
    .footer-shadow {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 0;
    }
  }
  .bg-img-mobile {
    display: none;
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// const scrolled = ref(false)
// const isOpenBar = ref(false)
// const isOpen = ref(false)
// const handleScroll = () => {
//   scrolled.value = window.scrollY > 0
// }
// const toggleBtn = () => {
//   isOpenBar.value = !isOpenBar.value
// }

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll)
// })
// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll)
// })
</script>
