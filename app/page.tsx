import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Explorepopularprints from "./components/explorepopularprints";
import Main from "./components/main";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="home wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-21 wp-theme-aestheta theme-aestheta qi-blocks-1.4 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-no-js qodef-qi--no-touch qi-addons-for-elementor-1.9.2 qi-watermark-1.4.9 qodef-back-to-top--enabled  qodef-header--standard-extended qodef-header-appearance--sticky qodef-mobile-header--standard qodef-drop-down-second--full-width qodef-drop-down-second--default aestheta-core-1.0 qode-quick-view-for-woocommerce-1.1.2 qqvfw--no-touch qode-wishlist-for-woocommerce-1.2.7 qwfw--no-touch aestheta-1.0 qodef-content-grid-1400 qodef-product-single--layout qodef-search--fullscreen elementor-default elementor-kit-4 elementor-page elementor-page-21">
      <Header />

      <div id="qodef-page-outer">
        <div id="qodef-page-inner" className="qodef-content-full-width">
          <main
            id="qodef-page-content"
            className="qodef-grid qodef-layout--template qodef-grid-template--12 "
            role="main"
          >
            <div className="qodef-grid-inner">
              <div className="qodef-grid-item qodef-page-content-section qodef-col--content">
                <div
                  data-elementor-type="wp-page"
                  data-elementor-id="21"
                  className="elementor elementor-21"
                >
                  <Hero />
                  <Explorepopularprints />
                  <Main />
                 

                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
       <Footer />
    </div>
  );
}
