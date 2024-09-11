import __vite__cjsImport0_react_jsxDevRuntime from "/dashboard/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=628b2c34"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import "/dashboard/node_modules/@radix-ui/themes/styles.css";
import "/dashboard/node_modules/@rainbow-me/rainbowkit/dist/index.css";
import "/dashboard/src/assets/styles/global.scss?t=1724932143204";
import __vite__cjsImport4_react from "/dashboard/node_modules/.vite/deps/react.js?v=628b2c34"; const Suspense = __vite__cjsImport4_react["Suspense"];
import __vite__cjsImport5_reactDom_client from "/dashboard/node_modules/.vite/deps/react-dom_client.js?v=628b2c34"; const createRoot = __vite__cjsImport5_reactDom_client["createRoot"];
import { RouterProvider, createBrowserRouter } from "/dashboard/node_modules/.vite/deps/react-router-dom.js?v=628b2c34";
import { WagmiProvider } from "/dashboard/node_modules/.vite/deps/wagmi.js?v=628b2c34";
import { wagmiDefaultConfig } from "/dashboard/src/constants/networks.ts";
import { RainbowKitProvider } from "/dashboard/node_modules/.vite/deps/@rainbow-me_rainbowkit.js?v=628b2c34";
import { QueryClient, QueryClientProvider } from "/dashboard/node_modules/.vite/deps/@tanstack_react-query.js?v=628b2c34";
import { Theme } from "/dashboard/node_modules/.vite/deps/@radix-ui_themes.js?v=628b2c34";
import routeConfig from "/dashboard/src/router/index.ts?t=1724932143204";
import Loading from "/dashboard/src/components/Loading/index.tsx";
const router = createBrowserRouter(routeConfig);
const root = createRoot(document.querySelector("#app"));
const queryClient = new QueryClient();
root.render(
  /* @__PURE__ */ jsxDEV(WagmiProvider, { config: wagmiDefaultConfig, children: /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(RainbowKitProvider, { children: /* @__PURE__ */ jsxDEV(Theme, { appearance: "dark", accentColor: "green", children: /* @__PURE__ */ jsxDEV(
    Suspense,
    {
      fallback: /* @__PURE__ */ jsxDEV("div", { className: "fixed top-0 bottom-0 left-0 right-0", children: /* @__PURE__ */ jsxDEV(Loading, {}, void 0, false, {
        fileName: "/Users/mac/Documents/work/passkey-app/src/main.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/Users/mac/Documents/work/passkey-app/src/main.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
        fileName: "/Users/mac/Documents/work/passkey-app/src/main.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/mac/Documents/work/passkey-app/src/main.tsx",
      lineNumber: 24,
      columnNumber: 11
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/mac/Documents/work/passkey-app/src/main.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/Users/mac/Documents/work/passkey-app/src/main.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/mac/Documents/work/passkey-app/src/main.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/Users/mac/Documents/work/passkey-app/src/main.tsx",
    lineNumber: 20,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBMEJnQjtBQTFCaEIsT0FBTztBQUNQLE9BQU87QUFDUCxPQUFPO0FBQ1AsU0FBU0EsZ0JBQWdCO0FBQ3pCLFNBQVNDLGtCQUFrQjtBQUMzQixTQUFTQyxnQkFBZ0JDLDJCQUEyQjtBQUNwRCxTQUFTQyxxQkFBcUI7QUFDOUIsU0FBU0MsMEJBQTBCO0FBQ25DLFNBQVNDLDBCQUEwQjtBQUNuQyxTQUFTQyxhQUFhQywyQkFBMkI7QUFDakQsU0FBU0MsYUFBYTtBQUN0QixPQUFPQyxpQkFBaUI7QUFDeEIsT0FBT0MsYUFBYTtBQUVwQixNQUFNQyxTQUFTVCxvQkFBb0JPLFdBQVc7QUFDOUMsTUFBTUcsT0FBT1osV0FBV2EsU0FBU0MsY0FBYyxNQUFNLENBQUU7QUFDdkQsTUFBTUMsY0FBYyxJQUFJVCxZQUFZO0FBRXBDTSxLQUFLSTtBQUFBQSxFQUNILHVCQUFDLGlCQUFjLFFBQVFaLG9CQUNyQixpQ0FBQyx1QkFBb0IsUUFBUVcsYUFDM0IsaUNBQUMsc0JBQ0MsaUNBQUMsU0FBTSxZQUFXLFFBQU8sYUFBWSxTQUNuQztBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsVUFDRSx1QkFBQyxTQUFJLFdBQVUsdUNBQ2IsaUNBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVEsS0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxNQUdGLGlDQUFDLGtCQUFlLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBK0I7QUFBQTtBQUFBLElBUGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLEtBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVVBLEtBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVlBLEtBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWNBLEtBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWdCQTtBQUNGIiwibmFtZXMiOlsiU3VzcGVuc2UiLCJjcmVhdGVSb290IiwiUm91dGVyUHJvdmlkZXIiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiV2FnbWlQcm92aWRlciIsIndhZ21pRGVmYXVsdENvbmZpZyIsIlJhaW5ib3dLaXRQcm92aWRlciIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlRoZW1lIiwicm91dGVDb25maWciLCJMb2FkaW5nIiwicm91dGVyIiwicm9vdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5Q2xpZW50IiwicmVuZGVyIl0sInNvdXJjZXMiOlsibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAcmFkaXgtdWkvdGhlbWVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgeyBSb3V0ZXJQcm92aWRlciwgY3JlYXRlQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgV2FnbWlQcm92aWRlciB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IHdhZ21pRGVmYXVsdENvbmZpZyB9IGZyb20gJy4vY29uc3RhbnRzL25ldHdvcmtzJztcbmltcG9ydCB7IFJhaW5ib3dLaXRQcm92aWRlciB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAcmFkaXgtdWkvdGhlbWVzJztcbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2NvbXBvbmVudHMvTG9hZGluZyc7XG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIocm91dGVDb25maWcpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpISk7XG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5yb290LnJlbmRlcihcbiAgPFdhZ21pUHJvdmlkZXIgY29uZmlnPXt3YWdtaURlZmF1bHRDb25maWd9PlxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlcj5cbiAgICAgICAgPFRoZW1lIGFwcGVhcmFuY2U9XCJkYXJrXCIgYWNjZW50Q29sb3I9XCJncmVlblwiPlxuICAgICAgICAgIDxTdXNwZW5zZVxuICAgICAgICAgICAgZmFsbGJhY2s9e1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wXCI+XG4gICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvVGhlbWU+XG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gIDwvV2FnbWlQcm92aWRlcj4sXG4pO1xuIl0sImZpbGUiOiIvVXNlcnMvbWFjL0RvY3VtZW50cy93b3JrL3Bhc3NrZXktYXBwL3NyYy9tYWluLnRzeCJ9