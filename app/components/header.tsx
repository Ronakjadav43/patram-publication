
import Image from "next/image";

export default function Header() {
  return (
  <div>
  <a className="skip-link screen-reader-text" href="#qodef-page-content">
    Skip to the content
  </a>
  <div className="" id="qodef-page-wrapper">
    <header id="qodef-page-header" role="banner">
      <div className="" id="qodef-page-header-inner">
        <div className="qodef-header-standard-extended ">
          <div className="qodef-header-section qodef--top">
            <div className="qodef-header-section--top-inner ">
              <a
                className="qodef-header-logo-link qodef-height--not-set qodef-source--image"
                href="index.html"
                itemProp="url"
                rel="home">
                {/* <img
                  alt="logo main"
                  className="qodef-header-logo-image qodef--main"
                  height="71"
                  itemProp="image"
                  loading="lazy"
                  src="wp-content/uploads/2024/10/logo-aestheta.png"
                  width="265"
                /> */}
                <h1 className="fnt1 clr1 bo m13 !text-[22px]">Patram Publication Private Limited</h1>
                <img
                  alt="logo dark"
                  className="qodef-header-logo-image qodef--dark"
                  height="71"
                  itemProp="image"
                  loading="lazy"
                  src="wp-content/uploads/2024/10/logo-aestheta.png"
                  width="265"
                />
                <img
                  alt="logo light"
                  className="qodef-header-logo-image qodef--light"
                  height="71"
                  itemProp="image"
                  loading="lazy"
                  src="wp-content/uploads/2025/04/light-logo-aestheta.png"
                  width="266"
                />
              </a>
              <div className="qodef-widget-holder qodef--one w-full">
                <div
                  className="widget widget_block widget_search qodef-header-widget-area-one w-full"
                  data-area="header-widget-one"
                  id="block-11">
                  <form
                    action="https://aestheta.qodeinteractive.com/"
                    className="wp-block-search__button-inside wp-block-search__icon-button qodef-search-form wp-block-search"
                    method="get"
                    role="search">
                    <label
                      className="qodef-search-form-label screen-reader-text"
                      htmlFor="qodef-search-form-1">
                      Search
                    </label>
                    <div
                      className="qodef-search-form-inner "
                      style={{
                        width: "100%",
                      }}>
                      <input
                        className="qodef-search-form-field "
                        defaultValue=""
                        id="qodef-search-form-1"
                        name="s"
                        placeholder="Search..."
                        required
                        type="search"
                      />
                      <button
                        className="qodef-search-form-button  qodef--button-inside qodef--has-icon"
                        type="submit">
                        <svg
                          className="qodef-svg--search"
                          viewBox="0 0 512 512"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="widget widget_aestheta_core_contact_info qodef-header-widget-area-one"
                  data-area="header-widget-one"
                  id="aestheta_core_contact_info-5">
                  <p className="qodef-contact-info-widget qodef--email">
                    {" "}
                    <a
                      href="cdn-cgi/l/email-protection.html#8feeeafcfbe7eafbeecfeaf7eee2ffe3eaa1ece0e2"
                      itemProp="email">
                      <span
                        className="__cf_email__"
                        data-cfemail="a6c7c3d5d2cec3d2c7e6c3dec7cbd6cac388c5c9cb"
                        >
                        Patram@gmail.com
                      </span>
                    </a>{" "}
                  </p>
                </div>
                <div
                  className="widget widget_aestheta_core_svg_icon qodef-header-widget-area-one"
                  data-area="header-widget-one"
                  id="aestheta_core_svg_icon-4">
                  <div className="qodef-svg-icon-widget">
                    <a href="my-account/index.html" target="_self">
                      <div
                        className="qodef-m-holder"
                        style={{
                          alignItems: "center",
                        }}>
                        <div
                          className="qodef-m-icon"
                          style={{
                            "--stroke-color": "#ffffff",
                            "--stroke-hover-color": "#ffffff",
                            margin: "7px 19px 0px 60px",
                          } as React.CSSProperties}>
                          <svg
                            height="17px"
                            viewBox="0 0 92 92"
                            width="17px"
                            x="0px"
                            xmlns="http://www.w3.org/2000/svg"
                            y="0px">
                            <path d="M46,57.1c14.8,0,26.9-12.1,26.9-27C72.9,15.1,60.8,3,46,3S19.1,15.1,19.1,30C19.1,45,31.2,57.1,46,57.1z     M46,11c10.4,0,18.9,8.5,18.9,19c0,10.5-8.5,19-18.9,19s-18.9-8.5-18.9-19C27.1,19.5,35.6,11,46,11z M58.5,59.7    c-1.3-0.4-2.8-0.1-3.8,0.8L46,67.9l-8.7-7.4c-1.1-0.9-2.5-1.2-3.8-0.8C27.9,61.5,0,71.1,0,85c0,2.2,1.8,4,4,4h84c2.2,0,4-1.8,4-4    C92,71.1,64.1,61.5,58.5,59.7z M10.1,81c4.4-4.7,15-9.9,23.8-12.9l9.5,8.1c1.5,1.3,3.7,1.3,5.2,0l9.5-8.1    c8.8,3.1,19.4,8.3,23.8,12.9H10.1z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="widget widget_aestheta_core_svg_icon qodef-header-widget-area-one"
                  data-area="header-widget-one"
                  id="aestheta_core_svg_icon-2">
                  <div className="qodef-svg-icon-widget">
                    <a href="wishlist/index.html" target="_self">
                      <div
                        className="qodef-m-holder"
                        style={{
                          alignItems: "center",
                        }}>
                        <div
                          className="qodef-m-icon"
                          style={{
                            "--stroke-color": "transparent",
                            "--stroke-hover-color": "transparent",
                            margin: "7px 8px 0px 0px",
                          } as React.CSSProperties}>
                          <svg
                            height="14.491"
                            viewBox="0 0 16 14.491"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.932 5.505a5.037 5.037 0 0 1-1.238 2.527q-3.08 3.448-6.125 6.258l-.033.033a.757.757 0 0 1-.5.167.68.68 0 0 1-.5-.167q-.068-.033-.87-.77t-2.347-2.308Q2.779 9.672 1.34 8.032A4.913 4.913 0 0 1 .068 5.505 4.794 4.794 0 0 1 .4 2.778 4.691 4.691 0 0 1 2.093.753 4.214 4.214 0 0 1 4.486 0 4.213 4.213 0 0 1 8 1.573 4.212 4.212 0 0 1 11.514 0a4.217 4.217 0 0 1 2.393.753A4.7 4.7 0 0 1 15.6 2.778a4.807 4.807 0 0 1 .335 2.727m-1.71-2.091a3.48 3.48 0 0 0-1.155-1.406 2.7 2.7 0 0 0-1.59-.536A2.744 2.744 0 0 0 8.7 3.347a.709.709 0 0 1-.736.569.689.689 0 0 1-.7-.569c-.023-.067-.05-.156-.084-.268a1.983 1.983 0 0 0-.251-.469 2.289 2.289 0 0 0-.5-.535 3 3 0 0 0-.8-.418 3.3 3.3 0 0 0-1.138-.184 2.7 2.7 0 0 0-1.59.536A3.273 3.273 0 0 0 1.775 3.38a3.206 3.206 0 0 0 .669 3.681Q4.72 9.605 8 12.784q3.279-3.179 5.556-5.723a3.163 3.163 0 0 0 .669-3.648" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="widget widget_aestheta_core_woo_side_area_cart qodef-header-widget-area-one"
                  data-area="header-widget-one"
                  id="aestheta_core_woo_side_area_cart-2">
                  <div className="qodef-widget-side-area-cart-inner">
                    <a
                      className="qodef-m-opener"
                      href="cart/index.html"
                      itemProp="url">
                      <span className="qodef-m-opener-icon">
                        <svg
                          className="qodef-svg--cart"
                          height="17px"
                          viewBox="0 0 92 92"
                          width="17px"
                          xmlSpace="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          y="0px">
                          <path d="M79.8,25.2C79.1,24.5,78.1,24,77,24H67v-1.8C67,10.5,57.4,1,46.2,1h-0.4C34.6,1,25,10.5,25,22.2V24H15  c-2.2,0-4,1.9-4,4.2V87c0,2.2,1.8,4,4,4h62c2.2,0,4-1.8,4-4l0-58.9C81,27.1,80.6,26,79.8,25.2z M33,22.2C33,14.9,39,9,45.8,9h0.4  C53,9,59,14.9,59,22.2V24H33V22.2z M73,83H19V32h6v6.9c0,2.2,1.8,4,4,4s4-1.8,4-4V32h26v6.9c0,2.2,1.8,4,4,4s4-1.8,4-4V32h6L73,83z" />
                        </svg>
                      </span>
                      <span className="qodef-m-opener-text">
                        Cart
                        <span className="qodef-m-opener-count">(0)</span>
                      </span>
                    </a>
                    <div className="qodef-widget-side-area-cart-content">
                      <div className="qodef-m-heading">
                        <h5 className="qodef-m-heading-label">My cart</h5>
                        <a className="qodef-m-close" >
                          <span className="qodef-m-close-icon">
                            <svg
                              className="qodef-svg--close"
                              height="32"
                              viewBox="1 1 32 32"
                              width="32"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink">
                              <path d="M 10.050,23.95c 0.39,0.39, 1.024,0.39, 1.414,0L 17,18.414l 5.536,5.536c 0.39,0.39, 1.024,0.39, 1.414,0 c 0.39-0.39, 0.39-1.024,0-1.414L 18.414,17l 5.536-5.536c 0.39-0.39, 0.39-1.024,0-1.414c-0.39-0.39-1.024-0.39-1.414,0 L 17,15.586L 11.464,10.050c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 15.586,17l-5.536,5.536 C 9.66,22.926, 9.66,23.56, 10.050,23.95z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                      <p className="qodef-m-posts-not-found">
                        No products in the cart.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="qodef-header-section qodef--bottom">
            <div className="qodef-header-section--bottom-inner ">
              <div className="qodef-extended-dropdown-menu">
                <h6 className="flex items-center gap-4 qodef-extended-dropdown-opener">
                  Categories
                  <svg
                    className="qodef-svg--menu-lines"
                    height="12px"
                    viewBox="0 0 17 12"
                    width="17px"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1,0h15c.6,0,1,.4,1,1h0c0,.6-.4,1-1,1H1c-.6,0-1-.4-1-1h0C0,.4.4,0,1,0Z" />
                    <path d="M1,5h15c.6,0,1,.4,1,1h0c0,.6-.4,1-1,1H1c-.6,0-1-.4-1-1h0c0-.6.4-1,1-1Z" />
                    <path d="M1,10h15c.6,0,1,.4,1,1h0c0,.6-.4,1-1,1H1c-.6,0-1-.4-1-1h0c0-.6.4-1,1-1Z" />
                  </svg>
                </h6>
                {/* <div className="qodef-extended-menu-wrapper">
                  <div className="qodef-extended-menu-inner ">
                    <ul
                      className="qodef-extended-dropdown"
                      id="menu-extended-dropdown-menu">
                      <li
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-62 qodef-menu-item--wide"
                        id="menu-item-62">
                        <div className="menu-link-holder">
                          <a href="product-category/furniture-design/index.html">
                            <span className="qodef-menu-item-text">
                              Art Design
                              <svg
                                className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                height="32"
                                viewBox="0 0 32 32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                              </svg>
                            </span>
                          </a>
                        </div>
                        <div className="qodef-drop-down-second">
                          <div className="qodef-drop-down-second-inner">
                            <ul className="sub-menu">
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3398"
                                id="menu-item-3398">
                                <div className="menu-link-holder">
                                  <a href="product-category/illustrations/index.html">
                                    <span className="qodef-menu-item-text">
                                      Illustrations
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3511"
                                    id="menu-item-3511">
                                    <div className="menu-link-holder">
                                      <a href="product/rose-and-blue-ocean/index.html">
                                        <span className="qodef-menu-item-text">
                                          Rose And Blue Ocean
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3509"
                                    id="menu-item-3509">
                                    <div className="menu-link-holder">
                                      <a href="product/graphic-design-3d/index.html">
                                        <span className="qodef-menu-item-text">
                                          Graphic Design 3D
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3510"
                                    id="menu-item-3510">
                                    <div className="menu-link-holder">
                                      <a href="product/3d-graphic-designed-ocean-colorful-fishes-copy/index.html">
                                        <span className="qodef-menu-item-text">
                                          3D Graphic Designed Text
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3399"
                                id="menu-item-3399">
                                <div className="menu-link-holder">
                                  <a href="product-category/interior-design/index.html">
                                    <span className="qodef-menu-item-text">
                                      Interior design
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4110"
                                    id="menu-item-4110">
                                    <div className="menu-link-holder">
                                      <a href="product/framed-modern-design/index.html">
                                        <span className="qodef-menu-item-text">
                                          Framed Modern Design
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3513"
                                    id="menu-item-3513">
                                    <div className="menu-link-holder">
                                      <a href="product/magazine-of-modern-design/index.html">
                                        <span className="qodef-menu-item-text">
                                          Magazine of Modern Design
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3512"
                                    id="menu-item-3512">
                                    <div className="menu-link-holder">
                                      <a href="product/magazine-of-art/index.html">
                                        <span className="qodef-menu-item-text">
                                          Magazine of Art
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3400"
                                id="menu-item-3400">
                                <div className="menu-link-holder">
                                  <a href="product-category/popular-art-design/index.html">
                                    <span className="qodef-menu-item-text">
                                      Popular art design
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3404"
                                    id="menu-item-3404">
                                    <div className="menu-link-holder">
                                      <a href="product/3d-art-coffe-and-sunflower-design/index.html">
                                        <span className="qodef-menu-item-text">
                                          3D Art Coffe And Sunflower
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3406"
                                    id="menu-item-3406">
                                    <div className="menu-link-holder">
                                      <a href="product/3d-graphic-designed-ocean-colorful-fish/index.html">
                                        <span className="qodef-menu-item-text">
                                          3D Graphic Designed Ocean
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3405"
                                    id="menu-item-3405">
                                    <div className="menu-link-holder">
                                      <a href="product/3d-design-magic-island-and-tower/index.html">
                                        <span className="qodef-menu-item-text">
                                          3D Design Magic Island
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4088 qodef--has-widget"
                                id="menu-item-4088">
                                <div className="menu-link-holder">
                                  <a >
                                    <span className="qodef-menu-item-text">
                                      Products
                                    </span>
                                  </a>
                                  <div className="qodef-mega-menu-widget-holder">
                                    <div
                                      className="widget woocommerce widget_products"
                                      data-area="categories-menu">
                                      <ul className="product_list_widget">
                                        <li>
                                          <div className="qodef-e-media">
                                            <a href="product/framed-print-sahara-nightfall/index.html">
                                              <img
                                                alt="w"
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                height="590"
                                                loading="lazy"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                src="wp-content/uploads/2024/07/Shop-list-img-01-600x590.jpg"
                                                srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-600x590.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-300x295.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-768x755.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01.jpg 800w"
                                                width="600"
                                              />
                                            </a>
                                          </div>
                                          <div className="qodef-e-content">
                                            <p className="qodef-woo-product-title">
                                              <a
                                                href="product/framed-print-sahara-nightfall/index.html"
                                                itemProp="url">
                                                Framed Print Sahara Nightfall
                                              </a>
                                            </p>
                                            <div className="qodef-woo-product-ratings qodef-m">
                                              <div className="qodef-m-inner">
                                                <div
                                                  className="qodef-m-stars qodef--initial"
                                                  style={{
                                                    width:
                                                      "calc(( var(--qode-star-width) * 5 ) + ( var(--qode-star-gap) * 4 ))",
                                                  }}>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                </div>
                                                <div
                                                  className="qodef-m-stars qodef--active"
                                                  style={{
                                                    width:
                                                      "calc(( var(--qode-star-width) * 5.00 ) + ( var(--qode-star-gap) * 5 ))",
                                                  }}>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="qodef-woo-product-price price">
                                              <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  130
                                                </bdi>
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="qodef-e-media">
                                            <a href="product/secret-font-family/index.html">
                                              <img
                                                alt="f"
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                height="590"
                                                loading="lazy"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                src="wp-content/uploads/2024/07/product-01-img-600x590.jpg"
                                                srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-600x590.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-300x295.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-768x755.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img.jpg 800w"
                                                width="600"
                                              />
                                            </a>
                                          </div>
                                          <div className="qodef-e-content">
                                            <p className="qodef-woo-product-title">
                                              <a
                                                href="product/secret-font-family/index.html"
                                                itemProp="url">
                                                Secret Font Family
                                              </a>
                                            </p>
                                            <div className="qodef-woo-product-price price">
                                              <span
                                                aria-hidden="true"
                                                className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  50
                                                </bdi>
                                              </span>{" "}
                                              <span aria-hidden="true">–</span>{" "}
                                              <span
                                                aria-hidden="true"
                                                className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  130
                                                </bdi>
                                              </span>
                                              <span className="screen-reader-text">
                                                Price range: $50 through $130
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="qodef-e-media">
                                            <a href="product/framed-prints-motivation-text/index.html">
                                              <img
                                                alt="cd"
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                height="589"
                                                loading="lazy"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                src="wp-content/uploads/2024/07/product-02-img-600x589.jpg"
                                                srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-600x589.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-300x294.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-768x754.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img.jpg 801w"
                                                width="600"
                                              />
                                            </a>
                                          </div>
                                          <div className="qodef-e-content">
                                            <p className="qodef-woo-product-title">
                                              <a
                                                href="product/framed-prints-motivation-text/index.html"
                                                itemProp="url">
                                                Framed Print Motivation Text
                                              </a>
                                            </p>
                                            <div className="qodef-woo-product-price price">
                                              <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  120
                                                </bdi>
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="qodef-e-media">
                                            <a href="product/colorful-and-artistic-design-female-silhouette/index.html">
                                              <img
                                                alt="d"
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                height="589"
                                                loading="lazy"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                src="wp-content/uploads/2024/07/product-03-img-600x589.jpg"
                                                srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-600x589.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-300x294.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-768x754.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img.jpg 801w"
                                                width="600"
                                              />
                                            </a>
                                          </div>
                                          <div className="qodef-e-content">
                                            <p className="qodef-woo-product-title">
                                              <a
                                                href="product/colorful-and-artistic-design-female-silhouette/index.html"
                                                itemProp="url">
                                                Colorful And Artistic Design
                                                Female Silhouette
                                              </a>
                                            </p>
                                            <div className="qodef-woo-product-price price">
                                              <span
                                                aria-hidden="true"
                                                className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  50
                                                </bdi>
                                              </span>{" "}
                                              <span aria-hidden="true">–</span>{" "}
                                              <span
                                                aria-hidden="true"
                                                className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  130
                                                </bdi>
                                              </span>
                                              <span className="screen-reader-text">
                                                Price range: $50 through $130
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4089"
                                id="menu-item-4089">
                                <div className="menu-link-holder">
                                  <a href="product-category/books/index.html">
                                    <span className="qodef-menu-item-text">
                                      Books
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4090"
                                    id="menu-item-4090">
                                    <div className="menu-link-holder">
                                      <a href="product/book-about-modern-art/index.html">
                                        <span className="qodef-menu-item-text">
                                          Book About Modern Art
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4091"
                                    id="menu-item-4091">
                                    <div className="menu-link-holder">
                                      <a href="product/book-comic-story-of-modern-artists/index.html">
                                        <span className="qodef-menu-item-text">
                                          Book Story of Modern Artists
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4092"
                                    id="menu-item-4092">
                                    <div className="menu-link-holder">
                                      <a href="product/book-no-time-for-fake-people/index.html">
                                        <span className="qodef-menu-item-text">
                                          Book No Time For Fake
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4093"
                                id="menu-item-4093">
                                <div className="menu-link-holder">
                                  <a href="product-category/retro-art/index.html">
                                    <span className="qodef-menu-item-text">
                                      Retro Art
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4094"
                                    id="menu-item-4094">
                                    <div className="menu-link-holder">
                                      <a href="product/framed-retro-font-style/index.html">
                                        <span className="qodef-menu-item-text">
                                          Framed Retro Style
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4109"
                                    id="menu-item-4109">
                                    <div className="menu-link-holder">
                                      <a href="product/framed-portrait/index.html">
                                        <span className="qodef-menu-item-text">
                                          Framed Portrait
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4095"
                                    id="menu-item-4095">
                                    <div className="menu-link-holder">
                                      <a href="product/retro-designed-pillow-for-living-room/index.html">
                                        <span className="qodef-menu-item-text">
                                          Retro Designed Pillow
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3249 qodef-menu-item--wide"
                        id="menu-item-3249">
                        <div className="menu-link-holder">
                          <a href="product-category/art-prints/index.html">
                            <span className="qodef-menu-item-text">
                              Art Prints
                              <svg
                                className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                height="32"
                                viewBox="0 0 32 32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                              </svg>
                            </span>
                          </a>
                        </div>
                        <div className="qodef-drop-down-second">
                          <div className="qodef-drop-down-second-inner">
                            <ul className="sub-menu">
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3250"
                                id="menu-item-3250">
                                <div className="menu-link-holder">
                                  <a href="product-category/art-prints/book-prints/index.html">
                                    <span className="qodef-menu-item-text">
                                      Book Prints
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3267"
                                    id="menu-item-3267">
                                    <div className="menu-link-holder">
                                      <a href="product/magazine-of-modern-design/index.html">
                                        <span className="qodef-menu-item-text">
                                          Magazine Modern Design
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3269"
                                    id="menu-item-3269">
                                    <div className="menu-link-holder">
                                      <a href="product/design-book/index.html">
                                        <span className="qodef-menu-item-text">
                                          Design Book
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3268"
                                    id="menu-item-3268">
                                    <div className="menu-link-holder">
                                      <a href="product/magazine-of-art/index.html">
                                        <span className="qodef-menu-item-text">
                                          Magazine of Art
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3251"
                                id="menu-item-3251">
                                <div className="menu-link-holder">
                                  <a href="product-category/art-prints/layouts/index.html">
                                    <span className="qodef-menu-item-text">
                                      Layouts
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3270"
                                    id="menu-item-3270">
                                    <div className="menu-link-holder">
                                      <a href="product/dark-art-pircture/index.html">
                                        <span className="qodef-menu-item-text">
                                          Dark Art Pircture
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3271"
                                    id="menu-item-3271">
                                    <div className="menu-link-holder">
                                      <a href="product/framed-colorful-woman-portrait-for-wall/index.html">
                                        <span className="qodef-menu-item-text">
                                          Framed Colorful Woman
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3272"
                                    id="menu-item-3272">
                                    <div className="menu-link-holder">
                                      <a href="product/secret-font-family/index.html">
                                        <span className="qodef-menu-item-text">
                                          Secret Font Family
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3252"
                                id="menu-item-3252">
                                <div className="menu-link-holder">
                                  <a href="product-category/art-prints/mockups/index.html">
                                    <span className="qodef-menu-item-text">
                                      Mockups
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3384"
                                    id="menu-item-3384">
                                    <div className="menu-link-holder">
                                      <a href="product/3d-art-coffe-and-sunflower-design/index.html">
                                        <span className="qodef-menu-item-text">
                                          3D Art Coffe And Sunflower
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3385"
                                    id="menu-item-3385">
                                    <div className="menu-link-holder">
                                      <a href="product/3d-design-magic-island-and-tower/index.html">
                                        <span className="qodef-menu-item-text">
                                          3D Design Magic Island
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3386"
                                    id="menu-item-3386">
                                    <div className="menu-link-holder">
                                      <a href="product/3d-graphic-designed-ocean-colorful-fish/index.html">
                                        <span className="qodef-menu-item-text">
                                          3D Graphic Designed Ocean
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4096 qodef--has-widget"
                                id="menu-item-4096">
                                <div className="menu-link-holder">
                                  <a>
                                    <span className="qodef-menu-item-text">
                                      Products
                                    </span>
                                  </a>
                                  <div className="qodef-mega-menu-widget-holder">
                                    <div
                                      className="widget woocommerce widget_products"
                                      data-area="categories-menu">
                                      <ul className="product_list_widget">
                                        <li>
                                          <div className="qodef-e-media">
                                            <a href="product/framed-print-sahara-nightfall/index.html">
                                              <img
                                                alt="w"
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                height="590"
                                                loading="lazy"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                src="wp-content/uploads/2024/07/Shop-list-img-01-600x590.jpg"
                                                srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-600x590.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-300x295.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-768x755.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01.jpg 800w"
                                                width="600"
                                              />
                                            </a>
                                          </div>
                                          <div className="qodef-e-content">
                                            <p className="qodef-woo-product-title">
                                              <a
                                                href="product/framed-print-sahara-nightfall/index.html"
                                                itemProp="url">
                                                Framed Print Sahara Nightfall
                                              </a>
                                            </p>
                                            <div className="qodef-woo-product-ratings qodef-m">
                                              <div className="qodef-m-inner">
                                                <div
                                                  className="qodef-m-stars qodef--initial"
                                                  style={{
                                                    width:
                                                      "calc(( var(--qode-star-width) * 5 ) + ( var(--qode-star-gap) * 4 ))",
                                                  }}>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                </div>
                                                <div
                                                  className="qodef-m-stars qodef--active"
                                                  style={{
                                                    width:
                                                      "calc(( var(--qode-star-width) * 5.00 ) + ( var(--qode-star-gap) * 5 ))",
                                                  }}>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                  <svg
                                                    className="qodef-svg--star qodef-m-star-item"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="qodef-woo-product-price price">
                                              <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  130
                                                </bdi>
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="qodef-e-media">
                                            <a href="product/secret-font-family/index.html">
                                              <img
                                                alt="f"
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                height="590"
                                                loading="lazy"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                src="wp-content/uploads/2024/07/product-01-img-600x590.jpg"
                                                srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-600x590.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-300x295.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-768x755.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img.jpg 800w"
                                                width="600"
                                              />
                                            </a>
                                          </div>
                                          <div className="qodef-e-content">
                                            <p className="qodef-woo-product-title">
                                              <a
                                                href="product/secret-font-family/index.html"
                                                itemProp="url">
                                                Secret Font Family
                                              </a>
                                            </p>
                                            <div className="qodef-woo-product-price price">
                                              <span
                                                aria-hidden="true"
                                                className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  50
                                                </bdi>
                                              </span>{" "}
                                              <span aria-hidden="true">–</span>{" "}
                                              <span
                                                aria-hidden="true"
                                                className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  130
                                                </bdi>
                                              </span>
                                              <span className="screen-reader-text">
                                                Price range: $50 through $130
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="qodef-e-media">
                                            <a href="product/framed-prints-motivation-text/index.html">
                                              <img
                                                alt="cd"
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                height="589"
                                                loading="lazy"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                src="wp-content/uploads/2024/07/product-02-img-600x589.jpg"
                                                srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-600x589.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-300x294.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-768x754.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img.jpg 801w"
                                                width="600"
                                              />
                                            </a>
                                          </div>
                                          <div className="qodef-e-content">
                                            <p className="qodef-woo-product-title">
                                              <a
                                                href="product/framed-prints-motivation-text/index.html"
                                                itemProp="url">
                                                Framed Print Motivation Text
                                              </a>
                                            </p>
                                            <div className="qodef-woo-product-price price">
                                              <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  120
                                                </bdi>
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="qodef-e-media">
                                            <a href="product/colorful-and-artistic-design-female-silhouette/index.html">
                                              <img
                                                alt="d"
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                height="589"
                                                loading="lazy"
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                src="wp-content/uploads/2024/07/product-03-img-600x589.jpg"
                                                srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-600x589.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-300x294.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-768x754.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img.jpg 801w"
                                                width="600"
                                              />
                                            </a>
                                          </div>
                                          <div className="qodef-e-content">
                                            <p className="qodef-woo-product-title">
                                              <a
                                                href="product/colorful-and-artistic-design-female-silhouette/index.html"
                                                itemProp="url">
                                                Colorful And Artistic Design
                                                Female Silhouette
                                              </a>
                                            </p>
                                            <div className="qodef-woo-product-price price">
                                              <span
                                                aria-hidden="true"
                                                className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  50
                                                </bdi>
                                              </span>{" "}
                                              <span aria-hidden="true">–</span>{" "}
                                              <span
                                                aria-hidden="true"
                                                className="woocommerce-Price-amount amount">
                                                <bdi>
                                                  <span className="woocommerce-Price-currencySymbol">
                                                    $
                                                  </span>
                                                  130
                                                </bdi>
                                              </span>
                                              <span className="screen-reader-text">
                                                Price range: $50 through $130
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3253 qodef-menu-item--wide"
                        id="menu-item-3253">
                        <div className="menu-link-holder">
                          <a href="product-category/book-design/index.html">
                            <span className="qodef-menu-item-text">
                              Book Design
                              <svg
                                className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                height="32"
                                viewBox="0 0 32 32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                              </svg>
                            </span>
                          </a>
                        </div>
                        <div className="qodef-drop-down-second">
                          <div className="qodef-drop-down-second-inner">
                            <ul className="sub-menu">
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3883"
                                id="menu-item-3883">
                                <div className="menu-link-holder">
                                  <a >
                                    <span className="qodef-menu-item-text">
                                      Design
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3879"
                                    id="menu-item-3879">
                                    <div className="menu-link-holder">
                                      <a href="product/modern-designed-unisex-t-shirt/index.html">
                                        <span className="qodef-menu-item-text">
                                          Modern Designed T-Shirt
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3881"
                                    id="menu-item-3881">
                                    <div className="menu-link-holder">
                                      <a href="product/the-best-way-to-predict-the-future/index.html">
                                        <span className="qodef-menu-item-text">
                                          Way To Predict The Future
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3884"
                                id="menu-item-3884">
                                <div className="menu-link-holder">
                                  <a >
                                    <span className="qodef-menu-item-text">
                                      Art
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3882"
                                    id="menu-item-3882">
                                    <div className="menu-link-holder">
                                      <a href="product/modern-book-no-time-for-fake-people/index.html">
                                        <span className="qodef-menu-item-text">
                                          Book No Time For Fake
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3880"
                                    id="menu-item-3880">
                                    <div className="menu-link-holder">
                                      <a href="product/modern-designed-pillow-for-living-room/index.html">
                                        <span className="qodef-menu-item-text">
                                          Modern Designed Pillow
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3254 qodef-menu-item--wide"
                        id="menu-item-3254">
                        <div className="menu-link-holder">
                          <a href="product-category/illustrations/index.html">
                            <span className="qodef-menu-item-text">
                              Illustrations
                              <svg
                                className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                height="32"
                                viewBox="0 0 32 32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                              </svg>
                            </span>
                          </a>
                        </div>
                        <div className="qodef-drop-down-second">
                          <div className="qodef-drop-down-second-inner">
                            <ul className="sub-menu">
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4097"
                                id="menu-item-4097">
                                <div className="menu-link-holder">
                                  <a href="product-category/art-draw/index.html">
                                    <span className="qodef-menu-item-text">
                                      Art Draw
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3894"
                                    id="menu-item-3894">
                                    <div className="menu-link-holder">
                                      <a href="product/book-comic-story-of-modern-artists/index.html">
                                        <span className="qodef-menu-item-text">
                                          Comic Story of Artists
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3893"
                                    id="menu-item-3893">
                                    <div className="menu-link-holder">
                                      <a href="product/modern-book-no-time-for-fake-people/index.html">
                                        <span className="qodef-menu-item-text">
                                          Modern Book No Time
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3891"
                                    id="menu-item-3891">
                                    <div className="menu-link-holder">
                                      <a href="product/modern-designed-black-t-shirt-with-text/index.html">
                                        <span className="qodef-menu-item-text">
                                          Modern Designed T-Shirt
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4102"
                                id="menu-item-4102">
                                <div className="menu-link-holder">
                                  <a href="product-category/design/index.html">
                                    <span className="qodef-menu-item-text">
                                      Design
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3892"
                                    id="menu-item-3892">
                                    <div className="menu-link-holder">
                                      <a href="product/modern-designed-blanket-for-living-room/index.html">
                                        <span className="qodef-menu-item-text">
                                          Modern Designed Blanket
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3890"
                                    id="menu-item-3890">
                                    <div className="menu-link-holder">
                                      <a href="product/framed-modern-design/index.html">
                                        <span className="qodef-menu-item-text">
                                          Framed Modern Design
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4100"
                                    id="menu-item-4100">
                                    <div className="menu-link-holder">
                                      <a href="product/framed-portrait/index.html">
                                        <span className="qodef-menu-item-text">
                                          Framed Portrait
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4099"
                                id="menu-item-4099">
                                <div className="menu-link-holder">
                                  <a href="product-category/prints/index.html">
                                    <span className="qodef-menu-item-text">
                                      Prints
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3889"
                                    id="menu-item-3889">
                                    <div className="menu-link-holder">
                                      <a href="product/modern-textual-design-on-blue-pillow/index.html">
                                        <span className="qodef-menu-item-text">
                                          Textual Design on Pillow
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3888"
                                    id="menu-item-3888">
                                    <div className="menu-link-holder">
                                      <a href="product/white-t-shirt-with-image-of-golden-fishes/index.html">
                                        <span className="qodef-menu-item-text">
                                          White T-Shirt with Image
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4101"
                                    id="menu-item-4101">
                                    <div className="menu-link-holder">
                                      <a href="product/framed-modern-design/index.html">
                                        <span className="qodef-menu-item-text">
                                          Framed Modern Design
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3255 qodef-menu-item--wide"
                        id="menu-item-3255">
                        <div className="menu-link-holder">
                          <a href="product-category/popular-art-design/index.html">
                            <span className="qodef-menu-item-text">
                              Popular art design
                              <svg
                                className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                height="32"
                                viewBox="0 0 32 32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                              </svg>
                            </span>
                          </a>
                        </div>
                        <div className="qodef-drop-down-second">
                          <div className="qodef-drop-down-second-inner">
                            <ul className="sub-menu">
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3895"
                                id="menu-item-3895">
                                <div className="menu-link-holder">
                                  <a >
                                    <span className="qodef-menu-item-text">
                                      Popular
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3896"
                                    id="menu-item-3896">
                                    <div className="menu-link-holder">
                                      <a href="product/book-about-modern-art/index.html">
                                        <span className="qodef-menu-item-text">
                                          Book About Art
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3897"
                                    id="menu-item-3897">
                                    <div className="menu-link-holder">
                                      <a href="product/dark-art-pircture/index.html">
                                        <span className="qodef-menu-item-text">
                                          Dark Art Pircture
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3898"
                                    id="menu-item-3898">
                                    <div className="menu-link-holder">
                                      <a href="product/design-book/index.html">
                                        <span className="qodef-menu-item-text">
                                          Design Book
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4103"
                                id="menu-item-4103">
                                <div className="menu-link-holder">
                                  <a href="product-category/traditional-art/index.html">
                                    <span className="qodef-menu-item-text">
                                      Traditional Art
                                      <svg
                                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <ul className="sub-menu">
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4107"
                                    id="menu-item-4107">
                                    <div className="menu-link-holder">
                                      <a href="product/graphic-design-3d/index.html">
                                        <span className="qodef-menu-item-text">
                                          Graphic Design 3D
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4105"
                                    id="menu-item-4105">
                                    <div className="menu-link-holder">
                                      <a href="product/dark-art-pircture/index.html">
                                        <span className="qodef-menu-item-text">
                                          Dark Art Pircture
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4106"
                                    id="menu-item-4106">
                                    <div className="menu-link-holder">
                                      <a href="product/design-book/index.html">
                                        <span className="qodef-menu-item-text">
                                          Design Book
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4108"
                                    id="menu-item-4108">
                                    <div className="menu-link-holder">
                                      <a href="product/magazine-of-art/index.html">
                                        <span className="qodef-menu-item-text">
                                          Magazine of Art
                                        </span>
                                      </a>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              <nav
                aria-label="Top Menu"
                className="qodef-header-navigation"
                role="navigation">
                <ul className="menu" id="menu-standard-menu-1">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-51 qodef--hide-link qodef-menu-item--narrow">
                    <a  href="JavaScript: return false;">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Home
                          <svg
                            className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                            height="32"
                            viewBox="0 0 32 32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                          </svg>
                        </span>
                      </span>
                    </a>
                    {/* <div className="qodef-drop-down-second">
                      <div className="qodef-drop-down-second-inner">
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item menu-item-440">
                            <a href="index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Main home
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3274">
                            <a href="print-shop/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Print Shop
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3878">
                            <a href="book-covers/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Book Covers
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </li>
                  {/* <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-50 qodef--hide-link qodef-menu-item--narrow">
                    <a  href="JavaScript: return false;">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Pages
                          <svg
                            className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                            height="32"
                            viewBox="0 0 32 32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                          </svg>
                        </span>
                      </span>
                    </a>
                    <div className="qodef-drop-down-second">
                      <div className="qodef-drop-down-second-inner">
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-775">
                            <a href="about-us/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  About Us
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1185">
                            <a href="our-brands/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Our Brands
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-776">
                            <a href="contact-us/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Contact Us
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-994">
                            <a href="pricing-plans/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Pricing Plans
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-995">
                            <a href="privacy-policy/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Privacy Policy
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1186">
                            <a href="coming-soon/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Coming Soon
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-49 qodef--hide-link qodef-menu-item--wide">
                    <a href="JavaScript: return false;">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Shop
                          <svg
                            className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                            height="32"
                            viewBox="0 0 32 32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                          </svg>
                        </span>
                      </span>
                    </a>
                    <div className="qodef-drop-down-second">
                      <div className="qodef-drop-down-second-inner qodef-content-grid">
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3276 qodef--hide-link">
                            <a href="JavaScript: return false;">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Shop Lists
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3281">
                                <a href="shop/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Left Sidebar List
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6764">
                                <a href="right-sidebar-list/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Right Sidebar List
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6763">
                                <a href="no-sidebar-list/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      No Sidebar List
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3279">
                                <a href="category-list/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Category List
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3523">
                                <a href="list-of-artists/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      List of Artists
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3278 qodef--hide-link">
                            <a href="JavaScript: return false;">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Shop Layouts
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6731">
                                <a href="shop/three-columns/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Three Columns
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6686">
                                <a href="shop/four-columns/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Four Columns
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6730">
                                <a href="shop/five-columns/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Five Columns
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6729">
                                <a href="shop/six-columns/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Six Columns
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3277 qodef--hide-link">
                            <a href="JavaScript: return false;">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Single Types
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3877">
                                <a href="product/framed-colorful-design-magic-fish-in-the-ocean/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Standard Product
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4610">
                                <a href="product/2xframed-art-design/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Grouped Product
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6142">
                                <a href="product/framed-the-art-of-womans-beauty/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Variable Product
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4611">
                                <a href="product/virtual-design/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Virtual Product
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4612">
                                <a href="product/digital-design-for-print/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Dowloadable Product
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6118">
                                <a href="product/retro-designed-pillow-for-living-room/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      External Product
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4593">
                                <a href="product/framed-portrait/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Split Single
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4594">
                                <a href="product/t-shirt-with-print/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Big Images
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6679">
                                <a href="product/picture-of-cool-design-motivation-text/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      New
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6676">
                                <a href="product/rose-and-blue-ocean/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Sale
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6678">
                                <a href="product/framed-the-art-of-womans-beauty/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Sold
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3275 qodef--hide-link">
                            <a href="JavaScript: return false;">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Shop Pages
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-45">
                                <a href="my-account/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      My Account
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6144">
                                <a href="wishlist/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Wishlist
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                                <a href="cart/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Cart
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46">
                                <a href="checkout/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Checkout
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-53 qodef--hide-link qodef-menu-item--narrow">
                    <a  href="JavaScript: return false;">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Blog
                          <svg
                            className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                            height="32"
                            viewBox="0 0 32 32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                          </svg>
                        </span>
                      </span>
                    </a>
                    <div className="qodef-drop-down-second">
                      <div className="qodef-drop-down-second-inner">
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1567">
                            <a href="blog/right-sidebar/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Right Sidebar
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1566">
                            <a href="blog/left-sidebar/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Left Sidebar
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1573">
                            <a href="blog/no-sidebar/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  No Sidebar
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1656">
                            <a href="blog/blog-gallery/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Blog Gallery
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1405 qodef--hide-link">
                            <a  href="JavaScript: return false;">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Post Formats
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1404">
                                <a href="financial-worldwide-norms-youshould-follow/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Standard Post
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1416">
                                <a href="from-concept-to-client-how-to-sell-your-design-ideas-effectively/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Gallery Post
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1433">
                                <a href="building-a-brand-around-your-design-aesthetic/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Quote Post
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1420">
                                <a href="the-art-of-persuasion-turning-your-designs-into-sales/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Link Post
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1436">
                                <a href="leveraging-social-media-to-sell-your-design-services/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Video Post
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1407">
                                <a href="however-you-need-to-read-we-have-the-tierlist/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      Audio Post
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1477">
                                <a href="from-freelancer-to-entrepreneur-scaling-your-design-sales/index.html">
                                  <span className="qodef-menu-item-text-holder">
                                    <span className="qodef-menu-item-text">
                                      No Sidebar Post
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2456">
                    <a href="landing/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">Landing</span>
                      </span>
                    </a>
                  </li> */}
                </ul>
              </nav>
              <div className="qodef-widget-holder qodef--two">
                <div
                  className="widget widget_aestheta_core_button qodef-header-widget-area-two"
                  data-area="header-widget-two"
                  id="aestheta_core_button-3">
                  <a
                    className="qodef-shortcode qodef-m qodef-button qodef-layout--outlined qodef-html--link"
                    href="contact-us/index.html"
                    target="_self">
                    <span className="qodef-m-text" data-title="Contact us">
                      Contact us
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="qodef-header-sticky qodef-custom-header-layout qodef-appearance--down">
        <div className="qodef-header-sticky-inner ">
          {/* <div className="qodef-extended-dropdown-menu">
            <div className="qodef-extended-dropdown-opener">
              Categories
              <svg
                className="qodef-svg--menu-lines"
                height="12px"
                viewBox="0 0 17 12"
                width="17px"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1,0h15c.6,0,1,.4,1,1h0c0,.6-.4,1-1,1H1c-.6,0-1-.4-1-1h0C0,.4.4,0,1,0Z" />
                <path d="M1,5h15c.6,0,1,.4,1,1h0c0,.6-.4,1-1,1H1c-.6,0-1-.4-1-1h0c0-.6.4-1,1-1Z" />
                <path d="M1,10h15c.6,0,1,.4,1,1h0c0,.6-.4,1-1,1H1c-.6,0-1-.4-1-1h0c0-.6.4-1,1-1Z" />
              </svg>
            </div>
            <div className="qodef-extended-menu-wrapper">
              <div className="qodef-extended-menu-inner ">
                <ul
                  className="qodef-extended-dropdown"
                  id="menu-extended-dropdown-menu-1">
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-62 qodef-menu-item--wide">
                    <div className="menu-link-holder">
                      <a href="product-category/furniture-design/index.html">
                        <span className="qodef-menu-item-text">
                          Art Design
                          <svg
                            className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                            height="32"
                            viewBox="0 0 32 32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className="qodef-drop-down-second">
                      <div className="qodef-drop-down-second-inner">
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3398">
                            <div className="menu-link-holder">
                              <a href="product-category/illustrations/index.html">
                                <span className="qodef-menu-item-text">
                                  Illustrations
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3511">
                                <div className="menu-link-holder">
                                  <a href="product/rose-and-blue-ocean/index.html">
                                    <span className="qodef-menu-item-text">
                                      Rose And Blue Ocean
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3509">
                                <div className="menu-link-holder">
                                  <a href="product/graphic-design-3d/index.html">
                                    <span className="qodef-menu-item-text">
                                      Graphic Design 3D
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3510">
                                <div className="menu-link-holder">
                                  <a href="product/3d-graphic-designed-ocean-colorful-fishes-copy/index.html">
                                    <span className="qodef-menu-item-text">
                                      3D Graphic Designed Text
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3399">
                            <div className="menu-link-holder">
                              <a href="product-category/interior-design/index.html">
                                <span className="qodef-menu-item-text">
                                  Interior design
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4110">
                                <div className="menu-link-holder">
                                  <a href="product/framed-modern-design/index.html">
                                    <span className="qodef-menu-item-text">
                                      Framed Modern Design
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3513">
                                <div className="menu-link-holder">
                                  <a href="product/magazine-of-modern-design/index.html">
                                    <span className="qodef-menu-item-text">
                                      Magazine of Modern Design
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3512">
                                <div className="menu-link-holder">
                                  <a href="product/magazine-of-art/index.html">
                                    <span className="qodef-menu-item-text">
                                      Magazine of Art
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3400">
                            <div className="menu-link-holder">
                              <a href="product-category/popular-art-design/index.html">
                                <span className="qodef-menu-item-text">
                                  Popular art design
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3404">
                                <div className="menu-link-holder">
                                  <a href="product/3d-art-coffe-and-sunflower-design/index.html">
                                    <span className="qodef-menu-item-text">
                                      3D Art Coffe And Sunflower
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3406">
                                <div className="menu-link-holder">
                                  <a href="product/3d-graphic-designed-ocean-colorful-fish/index.html">
                                    <span className="qodef-menu-item-text">
                                      3D Graphic Designed Ocean
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3405">
                                <div className="menu-link-holder">
                                  <a href="product/3d-design-magic-island-and-tower/index.html">
                                    <span className="qodef-menu-item-text">
                                      3D Design Magic Island
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4088 qodef--has-widget">
                            <div className="menu-link-holder">
                              <a >
                                <span className="qodef-menu-item-text">
                                  Products
                                </span>
                              </a>
                              <div className="qodef-mega-menu-widget-holder">
                                <div
                                  className="widget woocommerce widget_products"
                                  data-area="categories-menu">
                                  <ul className="product_list_widget">
                                    <li>
                                      <div className="qodef-e-media">
                                        <a href="product/framed-print-sahara-nightfall/index.html">
                                          <img
                                            alt="w"
                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                            height="590"
                                            loading="lazy"
                                            sizes="(max-width: 600px) 100vw, 600px"
                                            src="wp-content/uploads/2024/07/Shop-list-img-01-600x590.jpg"
                                            srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-600x590.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-300x295.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-768x755.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01.jpg 800w"
                                            width="600"
                                          />
                                        </a>
                                      </div>
                                      <div className="qodef-e-content">
                                        <p className="qodef-woo-product-title">
                                          <a
                                            href="product/framed-print-sahara-nightfall/index.html"
                                            itemProp="url">
                                            Framed Print Sahara Nightfall
                                          </a>
                                        </p>
                                        <div className="qodef-woo-product-ratings qodef-m">
                                          <div className="qodef-m-inner">
                                            <div
                                              className="qodef-m-stars qodef--initial"
                                              style={{
                                                width:
                                                  "calc(( var(--qode-star-width) * 5 ) + ( var(--qode-star-gap) * 4 ))",
                                              }}>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                            </div>
                                            <div
                                              className="qodef-m-stars qodef--active"
                                              style={{
                                                width:
                                                  "calc(( var(--qode-star-width) * 5.00 ) + ( var(--qode-star-gap) * 5 ))",
                                              }}>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="qodef-woo-product-price price">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              130
                                            </bdi>
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="qodef-e-media">
                                        <a href="product/secret-font-family/index.html">
                                          <img
                                            alt="f"
                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                            height="590"
                                            loading="lazy"
                                            sizes="(max-width: 600px) 100vw, 600px"
                                            src="wp-content/uploads/2024/07/product-01-img-600x590.jpg"
                                            srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-600x590.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-300x295.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-768x755.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img.jpg 800w"
                                            width="600"
                                          />
                                        </a>
                                      </div>
                                      <div className="qodef-e-content">
                                        <p className="qodef-woo-product-title">
                                          <a
                                            href="product/secret-font-family/index.html"
                                            itemProp="url">
                                            Secret Font Family
                                          </a>
                                        </p>
                                        <div className="qodef-woo-product-price price">
                                          <span
                                            aria-hidden="true"
                                            className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              50
                                            </bdi>
                                          </span>{" "}
                                          <span aria-hidden="true">–</span>{" "}
                                          <span
                                            aria-hidden="true"
                                            className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              130
                                            </bdi>
                                          </span>
                                          <span className="screen-reader-text">
                                            Price range: $50 through $130
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="qodef-e-media">
                                        <a href="product/framed-prints-motivation-text/index.html">
                                          <img
                                            alt="cd"
                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                            height="589"
                                            loading="lazy"
                                            sizes="(max-width: 600px) 100vw, 600px"
                                            src="wp-content/uploads/2024/07/product-02-img-600x589.jpg"
                                            srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-600x589.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-300x294.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-768x754.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img.jpg 801w"
                                            width="600"
                                          />
                                        </a>
                                      </div>
                                      <div className="qodef-e-content">
                                        <p className="qodef-woo-product-title">
                                          <a
                                            href="product/framed-prints-motivation-text/index.html"
                                            itemProp="url">
                                            Framed Print Motivation Text
                                          </a>
                                        </p>
                                        <div className="qodef-woo-product-price price">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              120
                                            </bdi>
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="qodef-e-media">
                                        <a href="product/colorful-and-artistic-design-female-silhouette/index.html">
                                          <img
                                            alt="d"
                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                            height="589"
                                            loading="lazy"
                                            sizes="(max-width: 600px) 100vw, 600px"
                                            src="wp-content/uploads/2024/07/product-03-img-600x589.jpg"
                                            srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-600x589.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-300x294.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-768x754.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img.jpg 801w"
                                            width="600"
                                          />
                                        </a>
                                      </div>
                                      <div className="qodef-e-content">
                                        <p className="qodef-woo-product-title">
                                          <a
                                            href="product/colorful-and-artistic-design-female-silhouette/index.html"
                                            itemProp="url">
                                            Colorful And Artistic Design Female
                                            Silhouette
                                          </a>
                                        </p>
                                        <div className="qodef-woo-product-price price">
                                          <span
                                            aria-hidden="true"
                                            className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              50
                                            </bdi>
                                          </span>{" "}
                                          <span aria-hidden="true">–</span>{" "}
                                          <span
                                            aria-hidden="true"
                                            className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              130
                                            </bdi>
                                          </span>
                                          <span className="screen-reader-text">
                                            Price range: $50 through $130
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4089">
                            <div className="menu-link-holder">
                              <a href="product-category/books/index.html">
                                <span className="qodef-menu-item-text">
                                  Books
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4090">
                                <div className="menu-link-holder">
                                  <a href="product/book-about-modern-art/index.html">
                                    <span className="qodef-menu-item-text">
                                      Book About Modern Art
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4091">
                                <div className="menu-link-holder">
                                  <a href="product/book-comic-story-of-modern-artists/index.html">
                                    <span className="qodef-menu-item-text">
                                      Book Story of Modern Artists
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4092">
                                <div className="menu-link-holder">
                                  <a href="product/book-no-time-for-fake-people/index.html">
                                    <span className="qodef-menu-item-text">
                                      Book No Time For Fake
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4093">
                            <div className="menu-link-holder">
                              <a href="product-category/retro-art/index.html">
                                <span className="qodef-menu-item-text">
                                  Retro Art
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4094">
                                <div className="menu-link-holder">
                                  <a href="product/framed-retro-font-style/index.html">
                                    <span className="qodef-menu-item-text">
                                      Framed Retro Style
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4109">
                                <div className="menu-link-holder">
                                  <a href="product/framed-portrait/index.html">
                                    <span className="qodef-menu-item-text">
                                      Framed Portrait
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4095">
                                <div className="menu-link-holder">
                                  <a href="product/retro-designed-pillow-for-living-room/index.html">
                                    <span className="qodef-menu-item-text">
                                      Retro Designed Pillow
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3249 qodef-menu-item--wide">
                    <div className="menu-link-holder">
                      <a href="product-category/art-prints/index.html">
                        <span className="qodef-menu-item-text">
                          Art Prints
                          <svg
                            className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                            height="32"
                            viewBox="0 0 32 32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className="qodef-drop-down-second">
                      <div className="qodef-drop-down-second-inner">
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3250">
                            <div className="menu-link-holder">
                              <a href="product-category/art-prints/book-prints/index.html">
                                <span className="qodef-menu-item-text">
                                  Book Prints
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3267">
                                <div className="menu-link-holder">
                                  <a href="product/magazine-of-modern-design/index.html">
                                    <span className="qodef-menu-item-text">
                                      Magazine Modern Design
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3269">
                                <div className="menu-link-holder">
                                  <a href="product/design-book/index.html">
                                    <span className="qodef-menu-item-text">
                                      Design Book
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3268">
                                <div className="menu-link-holder">
                                  <a href="product/magazine-of-art/index.html">
                                    <span className="qodef-menu-item-text">
                                      Magazine of Art
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3251">
                            <div className="menu-link-holder">
                              <a href="product-category/art-prints/layouts/index.html">
                                <span className="qodef-menu-item-text">
                                  Layouts
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3270">
                                <div className="menu-link-holder">
                                  <a href="product/dark-art-pircture/index.html">
                                    <span className="qodef-menu-item-text">
                                      Dark Art Pircture
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3271">
                                <div className="menu-link-holder">
                                  <a href="product/framed-colorful-woman-portrait-for-wall/index.html">
                                    <span className="qodef-menu-item-text">
                                      Framed Colorful Woman
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3272">
                                <div className="menu-link-holder">
                                  <a href="product/secret-font-family/index.html">
                                    <span className="qodef-menu-item-text">
                                      Secret Font Family
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3252">
                            <div className="menu-link-holder">
                              <a href="product-category/art-prints/mockups/index.html">
                                <span className="qodef-menu-item-text">
                                  Mockups
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3384">
                                <div className="menu-link-holder">
                                  <a href="product/3d-art-coffe-and-sunflower-design/index.html">
                                    <span className="qodef-menu-item-text">
                                      3D Art Coffe And Sunflower
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3385">
                                <div className="menu-link-holder">
                                  <a href="product/3d-design-magic-island-and-tower/index.html">
                                    <span className="qodef-menu-item-text">
                                      3D Design Magic Island
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3386">
                                <div className="menu-link-holder">
                                  <a href="product/3d-graphic-designed-ocean-colorful-fish/index.html">
                                    <span className="qodef-menu-item-text">
                                      3D Graphic Designed Ocean
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4096 qodef--has-widget">
                            <div className="menu-link-holder">
                              <a>
                                <span className="qodef-menu-item-text">
                                  Products
                                </span>
                              </a>
                              <div className="qodef-mega-menu-widget-holder">
                                <div
                                  className="widget woocommerce widget_products"
                                  data-area="categories-menu">
                                  <ul className="product_list_widget">
                                    <li>
                                      <div className="qodef-e-media">
                                        <a href="product/framed-print-sahara-nightfall/index.html">
                                          <img
                                            alt="w"
                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                            height="590"
                                            loading="lazy"
                                            sizes="(max-width: 600px) 100vw, 600px"
                                            src="wp-content/uploads/2024/07/Shop-list-img-01-600x590.jpg"
                                            srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-600x590.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-300x295.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01-768x755.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/Shop-list-img-01.jpg 800w"
                                            width="600"
                                          />
                                        </a>
                                      </div>
                                      <div className="qodef-e-content">
                                        <p className="qodef-woo-product-title">
                                          <a
                                            href="product/framed-print-sahara-nightfall/index.html"
                                            itemProp="url">
                                            Framed Print Sahara Nightfall
                                          </a>
                                        </p>
                                        <div className="qodef-woo-product-ratings qodef-m">
                                          <div className="qodef-m-inner">
                                            <div
                                              className="qodef-m-stars qodef--initial"
                                              style={{
                                                width:
                                                  "calc(( var(--qode-star-width) * 5 ) + ( var(--qode-star-gap) * 4 ))",
                                              }}>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                            </div>
                                            <div
                                              className="qodef-m-stars qodef--active"
                                              style={{
                                                width:
                                                  "calc(( var(--qode-star-width) * 5.00 ) + ( var(--qode-star-gap) * 5 ))",
                                              }}>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                              <svg
                                                className="qodef-svg--star qodef-m-star-item"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                width="32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path d="M 20.756,11.768L 15.856,1.84L 10.956,11.768L0,13.36L 7.928,21.088L 6.056,32L 15.856,26.848L 25.656,32L 23.784,21.088L 31.712,13.36 z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="qodef-woo-product-price price">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              130
                                            </bdi>
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="qodef-e-media">
                                        <a href="product/secret-font-family/index.html">
                                          <img
                                            alt="f"
                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                            height="590"
                                            loading="lazy"
                                            sizes="(max-width: 600px) 100vw, 600px"
                                            src="wp-content/uploads/2024/07/product-01-img-600x590.jpg"
                                            srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-600x590.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-300x295.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img-768x755.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-01-img.jpg 800w"
                                            width="600"
                                          />
                                        </a>
                                      </div>
                                      <div className="qodef-e-content">
                                        <p className="qodef-woo-product-title">
                                          <a
                                            href="product/secret-font-family/index.html"
                                            itemProp="url">
                                            Secret Font Family
                                          </a>
                                        </p>
                                        <div className="qodef-woo-product-price price">
                                          <span
                                            aria-hidden="true"
                                            className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              50
                                            </bdi>
                                          </span>{" "}
                                          <span aria-hidden="true">–</span>{" "}
                                          <span
                                            aria-hidden="true"
                                            className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              130
                                            </bdi>
                                          </span>
                                          <span className="screen-reader-text">
                                            Price range: $50 through $130
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="qodef-e-media">
                                        <a href="product/framed-prints-motivation-text/index.html">
                                          <img
                                            alt="cd"
                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                            height="589"
                                            loading="lazy"
                                            sizes="(max-width: 600px) 100vw, 600px"
                                            src="wp-content/uploads/2024/07/product-02-img-600x589.jpg"
                                            srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-600x589.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-300x294.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img-768x754.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-02-img.jpg 801w"
                                            width="600"
                                          />
                                        </a>
                                      </div>
                                      <div className="qodef-e-content">
                                        <p className="qodef-woo-product-title">
                                          <a
                                            href="product/framed-prints-motivation-text/index.html"
                                            itemProp="url">
                                            Framed Print Motivation Text
                                          </a>
                                        </p>
                                        <div className="qodef-woo-product-price price">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              120
                                            </bdi>
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="qodef-e-media">
                                        <a href="product/colorful-and-artistic-design-female-silhouette/index.html">
                                          <img
                                            alt="d"
                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                            height="589"
                                            loading="lazy"
                                            sizes="(max-width: 600px) 100vw, 600px"
                                            src="wp-content/uploads/2024/07/product-03-img-600x589.jpg"
                                            srcSet="https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-600x589.jpg 600w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-300x294.jpg 300w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img-768x754.jpg 768w, https://aestheta.qodeinteractive.com/wp-content/uploads/2024/07/product-03-img.jpg 801w"
                                            width="600"
                                          />
                                        </a>
                                      </div>
                                      <div className="qodef-e-content">
                                        <p className="qodef-woo-product-title">
                                          <a
                                            href="product/colorful-and-artistic-design-female-silhouette/index.html"
                                            itemProp="url">
                                            Colorful And Artistic Design Female
                                            Silhouette
                                          </a>
                                        </p>
                                        <div className="qodef-woo-product-price price">
                                          <span
                                            aria-hidden="true"
                                            className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              50
                                            </bdi>
                                          </span>{" "}
                                          <span aria-hidden="true">–</span>{" "}
                                          <span
                                            aria-hidden="true"
                                            className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">
                                                $
                                              </span>
                                              130
                                            </bdi>
                                          </span>
                                          <span className="screen-reader-text">
                                            Price range: $50 through $130
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3253 qodef-menu-item--wide">
                    <div className="menu-link-holder">
                      <a href="product-category/book-design/index.html">
                        <span className="qodef-menu-item-text">
                          Book Design
                          <svg
                            className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                            height="32"
                            viewBox="0 0 32 32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className="qodef-drop-down-second">
                      <div className="qodef-drop-down-second-inner">
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3883">
                            <div className="menu-link-holder">
                              <a >
                                <span className="qodef-menu-item-text">
                                  Design
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3879">
                                <div className="menu-link-holder">
                                  <a href="product/modern-designed-unisex-t-shirt/index.html">
                                    <span className="qodef-menu-item-text">
                                      Modern Designed T-Shirt
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3881">
                                <div className="menu-link-holder">
                                  <a href="product/the-best-way-to-predict-the-future/index.html">
                                    <span className="qodef-menu-item-text">
                                      Way To Predict The Future
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3884">
                            <div className="menu-link-holder">
                              <a >
                                <span className="qodef-menu-item-text">
                                  Art
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3882">
                                <div className="menu-link-holder">
                                  <a href="product/modern-book-no-time-for-fake-people/index.html">
                                    <span className="qodef-menu-item-text">
                                      Book No Time For Fake
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3880">
                                <div className="menu-link-holder">
                                  <a href="product/modern-designed-pillow-for-living-room/index.html">
                                    <span className="qodef-menu-item-text">
                                      Modern Designed Pillow
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3254 qodef-menu-item--wide">
                    <div className="menu-link-holder">
                      <a href="product-category/illustrations/index.html">
                        <span className="qodef-menu-item-text">
                          Illustrations
                          <svg
                            className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                            height="32"
                            viewBox="0 0 32 32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className="qodef-drop-down-second">
                      <div className="qodef-drop-down-second-inner">
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4097">
                            <div className="menu-link-holder">
                              <a href="product-category/art-draw/index.html">
                                <span className="qodef-menu-item-text">
                                  Art Draw
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3894">
                                <div className="menu-link-holder">
                                  <a href="product/book-comic-story-of-modern-artists/index.html">
                                    <span className="qodef-menu-item-text">
                                      Comic Story of Artists
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3893">
                                <div className="menu-link-holder">
                                  <a href="product/modern-book-no-time-for-fake-people/index.html">
                                    <span className="qodef-menu-item-text">
                                      Modern Book No Time
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3891">
                                <div className="menu-link-holder">
                                  <a href="product/modern-designed-black-t-shirt-with-text/index.html">
                                    <span className="qodef-menu-item-text">
                                      Modern Designed T-Shirt
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4102">
                            <div className="menu-link-holder">
                              <a href="product-category/design/index.html">
                                <span className="qodef-menu-item-text">
                                  Design
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3892">
                                <div className="menu-link-holder">
                                  <a href="product/modern-designed-blanket-for-living-room/index.html">
                                    <span className="qodef-menu-item-text">
                                      Modern Designed Blanket
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3890">
                                <div className="menu-link-holder">
                                  <a href="product/framed-modern-design/index.html">
                                    <span className="qodef-menu-item-text">
                                      Framed Modern Design
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4100">
                                <div className="menu-link-holder">
                                  <a href="product/framed-portrait/index.html">
                                    <span className="qodef-menu-item-text">
                                      Framed Portrait
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4099">
                            <div className="menu-link-holder">
                              <a href="product-category/prints/index.html">
                                <span className="qodef-menu-item-text">
                                  Prints
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3889">
                                <div className="menu-link-holder">
                                  <a href="product/modern-textual-design-on-blue-pillow/index.html">
                                    <span className="qodef-menu-item-text">
                                      Textual Design on Pillow
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3888">
                                <div className="menu-link-holder">
                                  <a href="product/white-t-shirt-with-image-of-golden-fishes/index.html">
                                    <span className="qodef-menu-item-text">
                                      White T-Shirt with Image
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4101">
                                <div className="menu-link-holder">
                                  <a href="product/framed-modern-design/index.html">
                                    <span className="qodef-menu-item-text">
                                      Framed Modern Design
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3255 qodef-menu-item--wide">
                    <div className="menu-link-holder">
                      <a href="product-category/popular-art-design/index.html">
                        <span className="qodef-menu-item-text">
                          Popular art design
                          <svg
                            className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                            height="32"
                            viewBox="0 0 32 32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className="qodef-drop-down-second">
                      <div className="qodef-drop-down-second-inner">
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3895">
                            <div className="menu-link-holder">
                              <a >
                                <span className="qodef-menu-item-text">
                                  Popular
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3896">
                                <div className="menu-link-holder">
                                  <a href="product/book-about-modern-art/index.html">
                                    <span className="qodef-menu-item-text">
                                      Book About Art
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3897">
                                <div className="menu-link-holder">
                                  <a href="product/dark-art-pircture/index.html">
                                    <span className="qodef-menu-item-text">
                                      Dark Art Pircture
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3898">
                                <div className="menu-link-holder">
                                  <a href="product/design-book/index.html">
                                    <span className="qodef-menu-item-text">
                                      Design Book
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-4103">
                            <div className="menu-link-holder">
                              <a href="product-category/traditional-art/index.html">
                                <span className="qodef-menu-item-text">
                                  Traditional Art
                                  <svg
                                    className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    width="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4107">
                                <div className="menu-link-holder">
                                  <a href="product/graphic-design-3d/index.html">
                                    <span className="qodef-menu-item-text">
                                      Graphic Design 3D
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4105">
                                <div className="menu-link-holder">
                                  <a href="product/dark-art-pircture/index.html">
                                    <span className="qodef-menu-item-text">
                                      Dark Art Pircture
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4106">
                                <div className="menu-link-holder">
                                  <a href="product/design-book/index.html">
                                    <span className="qodef-menu-item-text">
                                      Design Book
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4108">
                                <div className="menu-link-holder">
                                  <a href="product/magazine-of-art/index.html">
                                    <span className="qodef-menu-item-text">
                                      Magazine of Art
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <nav
            aria-label="Top Menu"
            className="qodef-header-navigation"
            role="navigation">
            <ul className="menu" id="menu-standard-menu-2">
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-51 qodef--hide-link qodef-menu-item--narrow">
                <a  href="JavaScript: return false;">
                  <span className="qodef-menu-item-text-holder">
                    <span className="qodef-menu-item-text">
                      Home
                      <svg
                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                        height="32"
                        viewBox="0 0 32 32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                      </svg>
                    </span>
                  </span>
                </a>
                <div className="qodef-drop-down-second">
                  <div className="qodef-drop-down-second-inner">
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item menu-item-440">
                        <a href="index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Main home
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3274">
                        <a href="print-shop/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Print Shop
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3878">
                        <a href="book-covers/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Book Covers
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-50 qodef--hide-link qodef-menu-item--narrow">
                <a href="JavaScript: return false;">
                  <span className="qodef-menu-item-text-holder">
                    <span className="qodef-menu-item-text">
                      Pages
                      <svg
                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                        height="32"
                        viewBox="0 0 32 32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                      </svg>
                    </span>
                  </span>
                </a>
                <div className="qodef-drop-down-second">
                  <div className="qodef-drop-down-second-inner">
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-775">
                        <a href="about-us/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              About Us
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1185">
                        <a href="our-brands/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Our Brands
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-776">
                        <a href="contact-us/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Contact Us
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-994">
                        <a href="pricing-plans/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Pricing Plans
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-995">
                        <a href="privacy-policy/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Privacy Policy
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1186">
                        <a href="coming-soon/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Coming Soon
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-49 qodef--hide-link qodef-menu-item--wide">
                <a href="JavaScript: return false;">
                  <span className="qodef-menu-item-text-holder">
                    <span className="qodef-menu-item-text">
                      Shop
                      <svg
                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                        height="32"
                        viewBox="0 0 32 32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                      </svg>
                    </span>
                  </span>
                </a>
                <div className="qodef-drop-down-second">
                  <div className="qodef-drop-down-second-inner qodef-content-grid">
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3276 qodef--hide-link">
                        <a href="JavaScript: return false;">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Shop Lists
                              <svg
                                className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                height="32"
                                viewBox="0 0 32 32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3281">
                            <a href="shop/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Left Sidebar List
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6764">
                            <a href="right-sidebar-list/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Right Sidebar List
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6763">
                            <a href="no-sidebar-list/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  No Sidebar List
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3279">
                            <a href="category-list/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Category List
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3523">
                            <a href="list-of-artists/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  List of Artists
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3278 qodef--hide-link">
                        <a href="JavaScript: return false;">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Shop Layouts
                              <svg
                                className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                height="32"
                                viewBox="0 0 32 32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6731">
                            <a href="shop/three-columns/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Three Columns
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6686">
                            <a href="shop/four-columns/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Four Columns
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6730">
                            <a href="shop/five-columns/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Five Columns
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6729">
                            <a href="shop/six-columns/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Six Columns
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3277 qodef--hide-link">
                        <a href="JavaScript: return false;">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Single Types
                              <svg
                                className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                height="32"
                                viewBox="0 0 32 32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3877">
                            <a href="product/framed-colorful-design-magic-fish-in-the-ocean/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Standard Product
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4610">
                            <a href="product/2xframed-art-design/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Grouped Product
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6142">
                            <a href="product/framed-the-art-of-womans-beauty/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Variable Product
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4611">
                            <a href="product/virtual-design/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Virtual Product
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4612">
                            <a href="product/digital-design-for-print/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Dowloadable Product
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6118">
                            <a href="product/retro-designed-pillow-for-living-room/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  External Product
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4593">
                            <a href="product/framed-portrait/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Split Single
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4594">
                            <a href="product/t-shirt-with-print/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Big Images
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6679">
                            <a href="product/picture-of-cool-design-motivation-text/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  New
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6676">
                            <a href="product/rose-and-blue-ocean/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Sale
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6678">
                            <a href="product/framed-the-art-of-womans-beauty/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Sold
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3275 qodef--hide-link">
                        <a href="JavaScript: return false;">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Shop Pages
                              <svg
                                className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                height="32"
                                viewBox="0 0 32 32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-45">
                            <a href="my-account/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  My Account
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6144">
                            <a href="wishlist/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Wishlist
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                            <a href="cart/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Cart
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46">
                            <a href="checkout/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Checkout
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-53 qodef--hide-link qodef-menu-item--narrow">
                <a  href="JavaScript: return false;">
                  <span className="qodef-menu-item-text-holder">
                    <span className="qodef-menu-item-text">
                      Blog
                      <svg
                        className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                        height="32"
                        viewBox="0 0 32 32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                      </svg>
                    </span>
                  </span>
                </a>
                <div className="qodef-drop-down-second">
                  <div className="qodef-drop-down-second-inner">
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1567">
                        <a href="blog/right-sidebar/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Right Sidebar
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1566">
                        <a href="blog/left-sidebar/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Left Sidebar
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1573">
                        <a href="blog/no-sidebar/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              No Sidebar
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1656">
                        <a href="blog/blog-gallery/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Blog Gallery
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1405 qodef--hide-link">
                        <a  href="JavaScript: return false;">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Post Formats
                              <svg
                                className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                                height="32"
                                viewBox="0 0 32 32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1404">
                            <a href="financial-worldwide-norms-youshould-follow/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Standard Post
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1416">
                            <a href="from-concept-to-client-how-to-sell-your-design-ideas-effectively/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Gallery Post
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1433">
                            <a href="building-a-brand-around-your-design-aesthetic/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Quote Post
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1420">
                            <a href="the-art-of-persuasion-turning-your-designs-into-sales/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Link Post
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1436">
                            <a href="leveraging-social-media-to-sell-your-design-services/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Video Post
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1407">
                            <a href="however-you-need-to-read-we-have-the-tierlist/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  Audio Post
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1477">
                            <a href="from-freelancer-to-entrepreneur-scaling-your-design-sales/index.html">
                              <span className="qodef-menu-item-text-holder">
                                <span className="qodef-menu-item-text">
                                  No Sidebar Post
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2456">
                <a href="landing/index.html">
                  <span className="qodef-menu-item-text-holder">
                    <span className="qodef-menu-item-text">Landing</span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="qodef-widget-holder qodef--one w-full">
            <div
              className="widget widget_aestheta_core_button qodef-sticky-right"
              id="aestheta_core_button-4">
              <a
                className="qodef-shortcode qodef-m qodef-button qodef-layout--outlined qodef-html--link"
                href="contact-us/index.html"
                target="_self">
                <span className="qodef-m-text" data-title="Contact us">
                  Contact us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header id="qodef-page-mobile-header" role="banner">
      <div className="" id="qodef-page-mobile-header-inner">
        <a
          className="qodef-mobile-header-logo-link qodef-height--set qodef-source--image"
          href="index.html"
          itemProp="url"
          rel="home">
          {/* <img
            alt="logo main"
            className="qodef-header-logo-image qodef--main"
            height="71"
            itemProp="image"
            loading="lazy"
            src="wp-content/uploads/2024/10/logo-aestheta.png"
            width="265"
          /> */}
          <h1 className="fnt1 clr1 bo m13 !text-[22px]">Patram Publication Private Limited</h1>
        </a>
        <div className="qodef-widget-holder qodef--one">
          <div
            className="widget widget_aestheta_core_woo_side_area_cart qodef-mobile-header-widget-area-one"
            data-area="mobile-header"
            id="aestheta_core_woo_side_area_cart-4">
            <div className="qodef-widget-side-area-cart-inner">
              <a
                className="qodef-m-opener"
                href="cart/index.html"
                itemProp="url">
                <span className="qodef-m-opener-icon">
                  <svg
                    className="qodef-svg--cart"
                    height="17px"
                    viewBox="0 0 92 92"
                    width="17px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    y="0px">
                    <path d="M79.8,25.2C79.1,24.5,78.1,24,77,24H67v-1.8C67,10.5,57.4,1,46.2,1h-0.4C34.6,1,25,10.5,25,22.2V24H15  c-2.2,0-4,1.9-4,4.2V87c0,2.2,1.8,4,4,4h62c2.2,0,4-1.8,4-4l0-58.9C81,27.1,80.6,26,79.8,25.2z M33,22.2C33,14.9,39,9,45.8,9h0.4  C53,9,59,14.9,59,22.2V24H33V22.2z M73,83H19V32h6v6.9c0,2.2,1.8,4,4,4s4-1.8,4-4V32h26v6.9c0,2.2,1.8,4,4,4s4-1.8,4-4V32h6L73,83z" />
                  </svg>
                </span>
                <span className="qodef-m-opener-text">
                  Cart
                  <span className="qodef-m-opener-count">(0)</span>
                </span>
              </a>
              <div className="qodef-widget-side-area-cart-content">
                <div className="qodef-m-heading">
                  <h5 className="qodef-m-heading-label">My cart</h5>
                  <a className="qodef-m-close" >
                    <span className="qodef-m-close-icon">
                      <svg
                        className="qodef-svg--close"
                        height="32"
                        viewBox="1 1 32 32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M 10.050,23.95c 0.39,0.39, 1.024,0.39, 1.414,0L 17,18.414l 5.536,5.536c 0.39,0.39, 1.024,0.39, 1.414,0 c 0.39-0.39, 0.39-1.024,0-1.414L 18.414,17l 5.536-5.536c 0.39-0.39, 0.39-1.024,0-1.414c-0.39-0.39-1.024-0.39-1.414,0 L 17,15.586L 11.464,10.050c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 15.586,17l-5.536,5.536 C 9.66,22.926, 9.66,23.56, 10.050,23.95z" />
                      </svg>
                    </span>
                  </a>
                </div>
                <p className="qodef-m-posts-not-found">
                  No products in the cart.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="qodef-opener-icon qodef-m qodef-source--predefined qodef-mobile-header-opener"
          href="javascript:void(0)">
          <span className="qodef-m-icon qodef--open">
            <svg
              className="qodef-svg--menu"
              height="37px"
              viewBox="0 0 37 37"
              width="37px"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="18.5" cy="18.5" r="18" />
              <g>
                <rect height="2" width="15" x="11" y="15" />
                <rect height="2" width="15" x="11" y="20" />
              </g>
            </svg>
          </span>
          <span className="qodef-m-icon qodef--close">
            <svg
              className="qodef-svg--menu-close"
              height="36"
              viewBox="0 0 36 36"
              width="36"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="17.5" />
              <g>
                <path d="M12 22.607 22.607 12l1.414 1.415L13.414 24.02z" />
                <path d="m13.414 12 10.607 10.607-1.415 1.414L12 13.414z" />
              </g>
            </svg>
          </span>
        </a>
      </div>
      <nav
        aria-label="Mobile Menu"
        className="qodef-mobile-header-navigation"
        role="navigation">
        <ul className="" id="menu-standard-menu-4">
          <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-51 qodef--hide-link qodef-menu-item--narrow">
            <a href="JavaScript: return false;">
              <span className="qodef-menu-item-text-holder">
                <span className="qodef-menu-item-text">Home</span>
              </span>
            </a>
            <svg
              className="qodef-svg--menu-arrow qodef-menu-item-arrow"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
            </svg>
            <div className="qodef-drop-down-second">
              <div className="qodef-drop-down-second-inner">
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item menu-item-440">
                    <a href="index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">Main home</span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3274">
                    <a href="print-shop/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">Print Shop</span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3878">
                    <a href="book-covers/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Book Covers
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-50 qodef--hide-link qodef-menu-item--narrow">
            <a  href="JavaScript: return false;">
              <span className="qodef-menu-item-text-holder">
                <span className="qodef-menu-item-text">Pages</span>
              </span>
            </a>
            <svg
              className="qodef-svg--menu-arrow qodef-menu-item-arrow"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
            </svg>
            <div className="qodef-drop-down-second">
              <div className="qodef-drop-down-second-inner">
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-775">
                    <a href="about-us/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">About Us</span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1185">
                    <a href="our-brands/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">Our Brands</span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-776">
                    <a href="contact-us/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">Contact Us</span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-994">
                    <a href="pricing-plans/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Pricing Plans
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-995">
                    <a href="privacy-policy/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Privacy Policy
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1186">
                    <a href="coming-soon/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Coming Soon
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-49 qodef--hide-link qodef-menu-item--wide">
            <a href="JavaScript: return false;">
              <span className="qodef-menu-item-text-holder">
                <span className="qodef-menu-item-text">Shop</span>
              </span>
            </a>
            <svg
              className="qodef-svg--menu-arrow qodef-menu-item-arrow"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
            </svg>
            <div className="qodef-drop-down-second">
              <div className="qodef-drop-down-second-inner qodef-content-grid">
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3276 qodef--hide-link">
                    <a href="JavaScript: return false;">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">Shop Lists</span>
                      </span>
                    </a>
                    <svg
                      className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                    </svg>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3281">
                        <a href="shop/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Left Sidebar List
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6764">
                        <a href="right-sidebar-list/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Right Sidebar List
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6763">
                        <a href="no-sidebar-list/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              No Sidebar List
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3279">
                        <a href="category-list/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Category List
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3523">
                        <a href="list-of-artists/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              List of Artists
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3278 qodef--hide-link">
                    <a href="JavaScript: return false;">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Shop Layouts
                        </span>
                      </span>
                    </a>
                    <svg
                      className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                    </svg>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6731">
                        <a href="shop/three-columns/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Three Columns
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6686">
                        <a href="shop/four-columns/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Four Columns
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6730">
                        <a href="shop/five-columns/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Five Columns
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6729">
                        <a href="shop/six-columns/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Six Columns
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3277 qodef--hide-link">
                    <a href="JavaScript: return false;">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Single Types
                        </span>
                      </span>
                    </a>
                    <svg
                      className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                    </svg>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3877">
                        <a href="product/framed-colorful-design-magic-fish-in-the-ocean/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Standard Product
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4610">
                        <a href="product/2xframed-art-design/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Grouped Product
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6142">
                        <a href="product/framed-the-art-of-womans-beauty/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Variable Product
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4611">
                        <a href="product/virtual-design/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Virtual Product
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4612">
                        <a href="product/digital-design-for-print/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Dowloadable Product
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6118">
                        <a href="product/retro-designed-pillow-for-living-room/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              External Product
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4593">
                        <a href="product/framed-portrait/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Split Single
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-4594">
                        <a href="product/t-shirt-with-print/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Big Images
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6679">
                        <a href="product/picture-of-cool-design-motivation-text/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">New</span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6676">
                        <a href="product/rose-and-blue-ocean/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">Sale</span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6678">
                        <a href="product/framed-the-art-of-womans-beauty/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">Sold</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3275 qodef--hide-link">
                    <a href="JavaScript: return false;">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">Shop Pages</span>
                      </span>
                    </a>
                    <svg
                      className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                    </svg>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-45">
                        <a href="my-account/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              My Account
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6144">
                        <a href="wishlist/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Wishlist
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                        <a href="cart/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">Cart</span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46">
                        <a href="checkout/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Checkout
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-53 qodef--hide-link qodef-menu-item--narrow">
            <a  href="JavaScript: return false;">
              <span className="qodef-menu-item-text-holder">
                <span className="qodef-menu-item-text">Blog</span>
              </span>
            </a>
            <svg
              className="qodef-svg--menu-arrow qodef-menu-item-arrow"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
            </svg>
            <div className="qodef-drop-down-second">
              <div className="qodef-drop-down-second-inner">
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1567">
                    <a href="blog/right-sidebar/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Right Sidebar
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1566">
                    <a href="blog/left-sidebar/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Left Sidebar
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1573">
                    <a href="blog/no-sidebar/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">No Sidebar</span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1656">
                    <a href="blog/blog-gallery/index.html">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Blog Gallery
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1405 qodef--hide-link">
                    <a  href="JavaScript: return false;">
                      <span className="qodef-menu-item-text-holder">
                        <span className="qodef-menu-item-text">
                          Post Formats
                        </span>
                      </span>
                    </a>
                    <svg
                      className="qodef-svg--menu-arrow qodef-menu-item-arrow"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M 13.8,24.196c 0.39,0.39, 1.024,0.39, 1.414,0l 6.486-6.486c 0.196-0.196, 0.294-0.454, 0.292-0.71 c0-0.258-0.096-0.514-0.292-0.71L 15.214,9.804c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 19.582,17 L 13.8,22.782C 13.41,23.172, 13.41,23.806, 13.8,24.196z" />
                    </svg>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1404">
                        <a href="financial-worldwide-norms-youshould-follow/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Standard Post
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1416">
                        <a href="from-concept-to-client-how-to-sell-your-design-ideas-effectively/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Gallery Post
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1433">
                        <a href="building-a-brand-around-your-design-aesthetic/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Quote Post
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1420">
                        <a href="the-art-of-persuasion-turning-your-designs-into-sales/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Link Post
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1436">
                        <a href="leveraging-social-media-to-sell-your-design-services/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Video Post
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1407">
                        <a href="however-you-need-to-read-we-have-the-tierlist/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              Audio Post
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1477">
                        <a href="from-freelancer-to-entrepreneur-scaling-your-design-sales/index.html">
                          <span className="qodef-menu-item-text-holder">
                            <span className="qodef-menu-item-text">
                              No Sidebar Post
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2456">
            <a href="landing/index.html">
              <span className="qodef-menu-item-text-holder">
                <span className="qodef-menu-item-text">Landing</span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</div>
  );
}
