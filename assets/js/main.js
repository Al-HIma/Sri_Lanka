document.addEventListener("DOMContentLoaded", (event) => {
    // preloader
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    document.body.style.position = 'static';

    // HEADER NAV IN MOBILE
    if (document.querySelector(".ul-header-nav")) {
        const ulSidebar = document.querySelector(".ul-sidebar");
        const ulSidebarOpener = document.querySelector(".ul-header-sidebar-opener");
        const ulSidebarCloser = document.querySelector(".ul-sidebar-closer");
        const ulMobileMenuContent = document.querySelector(".to-go-to-sidebar-in-mobile");
        const ulHeaderNavMobileWrapper = document.querySelector(".ul-sidebar-header-nav-wrapper");
        const ulHeaderNavOgWrapper = document.querySelector(".ul-header-nav-wrapper");

        function updateMenuPosition() {
            if (window.innerWidth < 992) {
                ulHeaderNavMobileWrapper.appendChild(ulMobileMenuContent);
            }

            if (window.innerWidth >= 992) {
                ulHeaderNavOgWrapper.appendChild(ulMobileMenuContent);
            }
        }

        updateMenuPosition();

        window.addEventListener("resize", () => {
            updateMenuPosition();
        });

        ulSidebarOpener.addEventListener("click", () => {
            ulSidebar.classList.add("active");
        });

        ulSidebarCloser.addEventListener("click", () => {
            ulSidebar.classList.remove("active");
        });


        // menu dropdown/submenu in mobile
        const ulHeaderNavMobile = document.querySelector(".ul-header-nav");
        const ulHeaderNavMobileItems = ulHeaderNavMobile.querySelectorAll(".has-sub-menu");
        ulHeaderNavMobileItems.forEach((item) => {
            if (window.innerWidth < 992) {
                item.addEventListener("click", () => {
                    item.classList.toggle("active");
                });
            }
        });
    }

    // header search in mobile start
    const ulHeaderSearchOpener = document.querySelector(".ul-header-search-opener");
    const ulHeaderSearchCloser = document.querySelector(".ul-search-closer");
    if (ulHeaderSearchOpener) {
        ulHeaderSearchOpener.addEventListener("click", () => {
            document.querySelector(".ul-search-form-wrapper").classList.add("active");
        });
    }

    if (ulHeaderSearchCloser) {
        ulHeaderSearchCloser.addEventListener("click", () => {
            document.querySelector(".ul-search-form-wrapper").classList.remove("active");
        });
    }
    // header search in mobile end

    // sticky header
    const ulHeader = document.querySelector(".to-be-sticky");
    if (ulHeader) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                ulHeader.classList.add("sticky");
            } else {
                ulHeader.classList.remove("sticky");
            }
        });
    }

    // search category
    if (document.querySelector("#ul-header-search-category")) {
        new SlimSelect({
            select: '#ul-header-search-category',
            settings: {
                showSearch: false,
            }
        })
    }

    // // banner image slider
    // const bannerThumbSlider = new Swiper(".ul-banner-img-slider", {
    //     slidesPerView: 1,
    //     loop: true,
    //     autoplay: true,
    //     spaceBetween: 15,
    //     breakpoints: {
    //         992: {
    //             spaceBetween: 15,
    //         },
    //         1680: {
    //             spaceBetween: 26,
    //         },
    //         1700: {
    //             spaceBetween: 30,
    //         }
    //     }
    // });


    // // BANNER SLIDER
    // const bannerSlider = new Swiper(".ul-banner-slider", {
    //     slidesPerView: 1,
    //     loop: true,
    //     // effect: "fade",
    //     autoplay: true,
    //     thumbs: {
    //         swiper: bannerThumbSlider,
    //     },

    //     navigation: {
    //         nextEl: ".ul-banner-slider-nav .next",
    //         prevEl: ".ul-banner-slider-nav .prev",
    //     },
    // });

    // bannerThumbSlider.on('slideChange', function () {
    //     bannerSlider.slideTo(bannerThumbSlider.activeIndex);
    // });


    // products filtering 
    if (document.querySelector(".ul-filter-products-wrapper")) {
        mixitup('.ul-filter-products-wrapper');
    }


    // product slider
    new Swiper(".ul-products-slider-1", {
        slidesPerView: 3,
        loop: true,
        autoplay: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".ul-products-slider-1-nav .next",
            prevEl: ".ul-products-slider-1-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                spaceBetween: 20,
            },
            1400: {
                spaceBetween: 22,
            },
            1600: {
                spaceBetween: 26,
            },
            1700: {
                spaceBetween: 30,
            }
        }
    });

    // product slider
    new Swiper(".ul-products-slider-2", {
        slidesPerView: 3,
        loop: true,
        autoplay: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".ul-products-slider-2-nav .next",
            prevEl: ".ul-products-slider-2-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                spaceBetween: 20,
            },
            1400: {
                spaceBetween: 22,
            },
            1600: {
                spaceBetween: 26,
            },
            1700: {
                spaceBetween: 30,
            }
        }
    });

    // flash sale slider\
    new Swiper(".ul-flash-sale-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1680: {
                spaceBetween: 26,
                slidesPerView: 4,
            },
            1700: {
                spaceBetween: 30,
                slidesPerView: 4,
            }
        }
    })



    // gallery slider
    new Swiper(".ul-gallery-slider", {
        slidesPerView: 2.2,
        loop: true,
        autoplay: true,
        centeredSlides: true,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 3.4,
            },
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },
            992: {
                spaceBetween: 20,
                slidesPerView: 5.8,
            },
            1680: {
                spaceBetween: 26,
                slidesPerView: 5.8,
            },
            1700: {
                spaceBetween: 30,
                slidesPerView: 5.8,
            }
        }
    });

    // product page price filter
    var priceFilterSlider = document.getElementById('ul-products-price-filter-slider');

    if (priceFilterSlider) {
        noUiSlider.create(priceFilterSlider, {
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    // product details slider
    new Swiper(".ul-product-details-img-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 0,
        navigation: {
            nextEl: "#ul-product-details-img-slider-nav .next",
            prevEl: "#ul-product-details-img-slider-nav .prev",
        },
    });

    // search category
    if (document.querySelector("#ul-checkout-country")) {
        new SlimSelect({
            select: '#ul-checkout-country',
            settings: {
                showSearch: false,
                contentLocation: document.querySelector('.ul-checkout-country-wrapper')
            }
        })
    }

    // sidebar products slider
    new Swiper(".ul-sidebar-products-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".ul-sidebar-products-slider-nav .next",
            prevEl: ".ul-sidebar-products-slider-nav .prev",
        },
        breakpoints: {
            1400: {
                slidesPerView: 2,
            }
        }
    });


    // parallax effect
    const parallaxImage = document.querySelector(".ul-video-cover");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                window.addEventListener("scroll", parallaxEffect);
                parallaxEffect(); // Initialize position
            } else {
                window.removeEventListener("scroll", parallaxEffect);
            }
        });
    });

    if (parallaxImage) {
        observer.observe(parallaxImage);
    }

    function parallaxEffect() {
        const rect = parallaxImage.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const imageCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;

        // Calculate offset from viewport center
        const offset = (imageCenter - viewportCenter) * -0.5; // Adjust speed with multiplier

        parallaxImage.style.transform = `translateY(${offset}px)`;
    }


    // -------------------------------
    // REALTICS JS
    // -------------------------------    

    // testimonial slider
    new Swiper(".ul-inner-testimonial-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 15,
        pagination: {
            el: ".ul-inner-testimonial-slider-pagination",
            type: "progressbar",
        },
        navigation: {
            prevEl: ".ul-inner-testimonial-slider-prev",
            nextEl: ".ul-inner-testimonial-slider-next",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1200: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1680: {
                slidesPerView: 3,
                spaceBetween: 26,
            },
            1700: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // wow js - animation on scroll
    new WOW({}).init();

    new Swiper(".ul-features-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 15,
        pagination: {
            el: ".ul-features-slider-pagination",
            type: "progressbar",
        },
        navigation: {
            prevEl: ".ul-features-slider-prev",
            nextEl: ".ul-features-slider-next",
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            576: {
                spaceBetween: 15,
                slidesPerView: 3,
            },
            1200: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1680: {
                slidesPerView: 3,
                spaceBetween: 26,
            },
            1700: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // projects filters
    const projectFilterSelect = document.querySelectorAll(".ul-projects-search-filters select");
    if (projectFilterSelect) {
        projectFilterSelect.forEach(selectInput => {
            new SlimSelect({
                select: selectInput,
                settings: {
                    showSearch: false,
                    contentLocation: document.querySelector('.ul-projects-search-filters')
                }
            })
        });
    }

    // project search filters
    const projectSearchFiltersExpandBtn = document.querySelector(".ul-projects-search-filters-expand-btn");
    if (projectSearchFiltersExpandBtn) {
        projectSearchFiltersExpandBtn.addEventListener("click", function () {
            document.querySelector(".ul-projects-search-filters").classList.toggle("expanded");
        })
    }


    const reviewHighlightSelect = document.querySelector(".review-highlight-point");
    if (reviewHighlightSelect) {
        new SlimSelect({
            select: reviewHighlightSelect.querySelector("select"),
            settings: {
                showSearch: false,
                contentLocation: reviewHighlightSelect,
            },
            cssClasses: {
                option: "ul-option",
            }
        })
    }



    // banner slider
    const bannerAddressSlider = new Swiper(".ul-banner-address-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
    });

    new Swiper(".ul-banner-slider", {
        slidesPerView: 1,
        loop: true,
        // autoplay: true,
        spaceBetween: 0,
        navigation: {
            nextEl: ".ul-banner-slider-nav .next",
            prevEl: ".ul-banner-slider-nav .prev",
        },
        pagination: {
            el: ".ul-banner-slider-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                const slideNumber = String(index + 1).padStart(2, '0'); // Format to '01', '02', etc.
                return `<span class="${className}">${slideNumber}</span>`;
            },
        },
        thumbs: {
            swiper: bannerAddressSlider,
        },
    });

    // homepage search filters
    const propertyFilterSelect = document.querySelectorAll(".ul-property-filter-search-form .form-group");
    if (propertyFilterSelect) {
        propertyFilterSelect.forEach(formGroup => {
            new SlimSelect({
                select: formGroup.querySelector("select"),
                settings: {
                    showSearch: false,
                    // contentLocation: document.querySelector('.ul-property-filter-search-form .form-group'),
                },
                cssClasses: {
                    option: "ul-option",
                }
            })
        });
    }


    // featured properties slider
    new Swiper(".ul-featured-properties-slider", {
        slidesPerView: 4,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: ".ul-featured-properties-slider-nav .next",
            prevEl: ".ul-featured-properties-slider-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            }
        }
    });

    // facilities slider
    new Swiper(".ul-facilities-img-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: ".ul-facilities-img-slider-nav .next",
            prevEl: ".ul-facilities-img-slider-nav .prev",
        }
    });


    // sidebar slider
    new Swiper(".ul-sidebar-slider", {
        slidesPerView: 1.8,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: ".ul-sidebar-slider-nav .next",
            prevEl: ".ul-sidebar-slider-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 1.8,
                spaceBetween: 30,
            }
        }
    });


    // ----------
    // --- Restics JS
    // ----------

    // banner image slider
    const bannerImgSlider = new Swiper(".ul-banner-img-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        effect: "fade",
        spaceBetween: 0,
        navigation: {
            nextEl: ".ul-banner-img-slider-nav .next",
            prevEl: ".ul-banner-img-slider-nav .prev",
        },
        pagination: {
            el: ".ul-banner-img-slider-dots",
            clickable: true,
            renderBullet: function (index, className) {
                const slideNumber = String(index + 1).padStart(2, '0'); // Format to '01', '02', etc.
                return `<span class="${className}">${slideNumber}</span>`;
            },
        },
    });

    // banner txt slider
    const bannerTxtSlider = new Swiper(".ul-banner-txt-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 0,
        pagination: {
            el: ".ul-banner-txt-slider-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".ul-banner-txt-slider-nav .next",
            prevEl: ".ul-banner-txt-slider-nav .prev",
        },
        controller: {
            control: bannerImgSlider,
        }
    });

    // dontations slider
    new Swiper(".ul-donations-slider", {
        slidesPerView: 6,
        spaceBetween: 20,
        // loop: true,
        autoplay: true,
        navigation: {
            prevEl: ".ul-donations-slider-nav .prev",
            nextEl: ".ul-donations-slider-nav .next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                centeredSlides: true,
            },
            480: {
                slidesPerView: 1.7,
                centeredSlides: true,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 4,
            },
            1680: {
                slidesPerView: 4,
                spaceBetween: 27,
            },
            1700: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    // menus title slider
    if (document.querySelector(".ul-menus-title-slider")) {
        new Splide('.ul-menus-title-slider', {
            arrows: false,
            pagination: false,
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 9,
            autoWidth: true,
            gap: "clamp(12px,2.89vw,55px)",
            autoScroll: {
                speed: 1.5,
            },
        }).mount(window.splide.Extensions);
    };

    // booking form service type
    const bookingServiceTypeWrapper = document.querySelector(".service-type-wrapper");
    if (bookingServiceTypeWrapper) {
        new SlimSelect({
            select: bookingServiceTypeWrapper.querySelector("select"),
            settings: {
                showSearch: false,
                // contentLocation: bookingServiceTypeWrapper,
            },
            cssClasses: {
                option: "ul-option",
            }
        })
    }

    // testimonial slider
    new Swiper(".ul-testimonial-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 15,
        pagination: {
            el: ".ul-testimonial-slider-pagination",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1200: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1680: {
                slidesPerView: 4,
                spaceBetween: 26,
            },
            1700: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    // about page partners slider
    new Swiper(".ul-partners-slider", {
        slidesPerView: 2,
        loop: true,
        autoplay: true,
        spaceBetween: 30,
        breakpoints: {
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 90,
            }
        }
    });

    // team slider
    // new Swiper(".ul-chef-slider", {
    //     slidesPerView: 3,
    //     loop: true,
    //     autoplay: true,
    //     spaceBetween: 30,
    //     navigation: {
    //         nextEl: ".ul-chef-slider-nav .next",
    //         prevEl: ".ul-chef-slider-nav .prev",
    //     },
    //     breakpoints: {
    //         0: {
    //             slidesPerView: 1,
    //         },
    //         480: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 25,
    //         },
    //         992: {
    //             slidesPerView: 3,
    //             spaceBetween: 25,
    //         },
    //         1600: {
    //             slidesPerView: 4,
    //             spaceBetween: 26,
    //         },
    //         1700: {
    //             slidesPerView: 3,
    //             spaceBetween: 30,
    //         }
    //     }
    // });

    // booking-guest-select
    const bookingGuestSelect = document.querySelector("#booking-guest-select");
    if (bookingGuestSelect) {
        new SlimSelect({
            select: bookingGuestSelect,
            settings: {
                showSearch: false,
            },
            cssClasses: {
                option: "ul-option",
            }
        })
    }

    // contact page form subject select
    if (document.querySelector("#jo-contact-subject")) {
        new SlimSelect({
            select: '#jo-contact-subject',
            settings: {
                showSearch: false,
                contentLocation: document.querySelector('.select-wrapper'),
            }
        })
    }

    // booking date picker homepage
    if (document.querySelector(".date-input") || document.querySelector(".time-input")) {
        flatpickr(".date-input", {
        });

        // booking time picker homepage
        flatpickr(".time-input", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });
    }

    // blogs slider 
    new Swiper(".ul-blogs-slider", {
        slidesPerView: 2.11,
        slidesPerView: 2.6,
        loop: true,
        autoplay: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".ul-blogs-slider-nav .next",
            prevEl: ".ul-blogs-slider-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 2.3,
                spaceBetween: 20,
            }
        }
    });





    // ------------------------------- Index 2 js -------------------------------
    // banner slider

    const bannerThumbSlider = new Swiper(".ul-banner-2-thumb-slider", {
        slidesPerView: 3,
        spaceBetween: 10,
        slideToClickedSlide: true,
        loop: true,
        autoplay: true,
        speed: 1000,
        centeredSlides: true
    });

    const bannerSlider = new Swiper(".ul-banner-2-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 0,
        speed: 1000,
        navigation: {
            nextEl: ".ul-banner-2-slider-navigation .next",
            prevEl: ".ul-banner-2-slider-navigation .prev",
        },
        pagination: {
            el: ".ul-banner-2-slider-pagination",
            type: "bullets",
            clickable: true,
            // renderBullet: ".bullt",
        },
        thumbs: {
            swiper: bannerThumbSlider
        }
    });

    // bannerThumbSlider.controller.control = bannerSlider;
    // bannerSlider.controller.control = bannerThumbSlider;


    // services slider
    new Swiper(".ul-services-slider", {
        slidesPerView: 1,
        autoplay: true,
        spaceBetween: 15,
        navigation: {
            prevEl: ".ul-services-slider-nav .prev",
            nextEl: ".ul-services-slider-nav .next",
        },
        breakpoints: {
            480: {
                slidesPerView: 1.5,
                centeredSlides: true,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1200: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1680: {
                slidesPerView: 3,
                spaceBetween: 26,
            },
            1700: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // index 2 testimonial slider
    new Swiper(".ul-testimonial-2-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 15,
        navigation: {
            prevEl: ".ul-testimonial-2-slider-nav .prev",
            nextEl: ".ul-testimonial-2-slider-nav .next",
        }
    });

    // project details img slider
    new Swiper(".ul-project-details-img-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        navigation: {
            prevEl: ".ul-project-details-slider-nav .prev",
            nextEl: ".ul-project-details-slider-nav .next",
        }
    });


    // footer copyright text year 
    document.getElementById("footer-copyright-year").textContent = new Date().getFullYear();
});


// --- SPONSORSHIP WIDGET: SLIM SELECT, CALCULATION, AND WHATSAPP LOGIC (CONST PER LINE METHOD) ---

// --- CONFIGURATION ---
const whatsappNumber = '94777844536'; // Your WhatsApp Number (No + or spaces)
const websiteDomain = 'https://www.alhimasrilanka.org'; // Your Website Link

// --- ID REFERENCES ---
const monthlyAmountSelectId = 'monthlyAmountSelectTheme';
const durationSelectId = 'durationSelectTheme';
const totalDisplayId = 'totalAmountDisplayTheme';
const totalInputId = 'totalCalculatedInputTheme';
const whatsappLinkId = 'whatsappSponsorLink';


// 1. Function to create the reliable WhatsApp link
function generateWhatsAppLink(monthlyAmount, durationMonths, totalAmountValue) {

    const formattedMonthlyAmount = monthlyAmount.toFixed(2);
    const formattedTotalAmount = totalAmountValue.toFixed(2);

    // ⭐ CRITICAL FIX: Defining each message line as a separate CONST (for clarity and reliability)
    const H_START = `🌟 *Urgent Sponsorship Request!* 🌟`;
    const H_GREET = `Hello Team at Al Hima Sri Lanka,`;
    const H_COMMIT = `I am ready to secure the future of an orphan child through a dedicated sponsorship commitment.`;
    const H_DETAILS = `*--- My Commitment Details ---*`;
    const D_MONTHLY = `✅ *Monthly Contribution:* USD $${formattedMonthlyAmount}`;
    const D_DURATION = `🗓️ *Total Duration:* ${durationMonths} Months`;
    const D_TOTAL = `💰 *Total Sponsorship Value:* USD $${formattedTotalAmount}`;
    const F_ACTION = `I understand this contribution will directly support their essential needs and education. Please share the preferred payment details (Bank details / Payment Link) so I can finalize this sponsorship immediately.`;
    const F_CLOSE = `Thank you for your life-changing work!`;
    const F_LINK = `Check our mission here: ${websiteDomain}`;

    // Arranging the message into an array for visual alignment. 
    // An empty string ('') represents a blank line in WhatsApp.
    const messageLines = [
        H_START, '',
        H_GREET, '',
        H_COMMIT, '',
        H_DETAILS,
        D_MONTHLY,
        D_DURATION,
        D_TOTAL, '', // Single blank line after details
        F_ACTION, '',
        F_CLOSE,
        F_LINK
    ];

    // Map each line to be URI Encoded and join them with the reliable WhatsApp line break code (%0A).
    const encodedMessage = messageLines
        .map(line => encodeURIComponent(line))
        .join('%0A');

    // Creating the final WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Updating the HTML link element's href attribute
    const whatsappLinkElement = document.getElementById(whatsappLinkId);
    if (whatsappLinkElement) {
        whatsappLinkElement.href = whatsappURL;
    }
}


// 2. MAIN FUNCTION: Calculates total amount, updates the display, and updates the link
function calculateTotalDonationTheme() {
    const amountSelect = document.getElementById(monthlyAmountSelectId);
    const durationSelect = document.getElementById(durationSelectId);

    // Get selected values 
    const monthlyAmount = parseFloat(amountSelect.value) || 0;
    const durationMonths = parseInt(durationSelect.value) || 0;

    // Calculate Total
    const totalAmountValue = monthlyAmount * durationMonths;

    // Update the display elements on the screen
    document.getElementById(totalDisplayId).textContent = '$' + totalAmountValue.toFixed(2);
    document.getElementById(totalInputId).value = totalAmountValue;

    // CRITICAL STEP: Call the link generator function after calculations are done
    generateWhatsAppLink(monthlyAmount, durationMonths, totalAmountValue);
}


// 3. Initialization (Slim Select and Event Listeners)
document.addEventListener('DOMContentLoaded', () => {

    const amountDropdown = document.getElementById(monthlyAmountSelectId);
    const durationDropdown = document.getElementById(durationSelectId);

    // Slim Select Initialization 
    if (amountDropdown) {
        new SlimSelect({
            select: amountDropdown,
            settings: { placeholderText: 'Select Amount', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }

    if (durationDropdown) {
        new SlimSelect({
            select: durationDropdown,
            settings: { placeholderText: 'Select Duration', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }

    // Attach listeners to the original <select> elements
    if (amountDropdown && durationDropdown) {
        amountDropdown.addEventListener('change', calculateTotalDonationTheme);
        durationDropdown.addEventListener('change', calculateTotalDonationTheme);
    }

    // Initial calculation and link generation on page load 
    setTimeout(calculateTotalDonationTheme, 200);
});

//SPONSORSHIP Orphan end

//Monthly Sponsorship for Higher Education start

// --- HIGHER EDUCATION SPONSORSHIP WIDGET LOGIC ---

// --- CONFIGURATION (Higher Education) ---
const HE_whatsappNumber = '94777844536';
const HE_websiteDomain = 'https://al-hima.github.io/Sri_Lanka/';

// --- ID REFERENCES (Higher Education) ---
const HE_monthlyAmountSelectId = 'monthlyAmountSelectHigherEd';
const HE_durationSelectId = 'durationSelectHigherEd';
const HE_totalDisplayId = 'totalAmountDisplayHigherEd';
const HE_totalInputId = 'totalCalculatedInputHigherEd';
const HE_whatsappLinkId = 'whatsappSponsorLinkHigherEd';


// 1. Function to create the reliable WhatsApp link for Higher Ed
function generateWhatsAppLinkHigherEd(monthlyAmount, durationMonths, totalAmountValue) {

    const formattedMonthlyAmount = monthlyAmount.toFixed(2);
    const formattedTotalAmount = totalAmountValue.toFixed(2);

    // Message tailored for Higher Education sponsorship
    const messageLines = [
        `🎓 *Higher Education Sponsorship Request* 🎓`,
        '',
        `Hello Team at Al Hima Sri Lanka,`,
        '',
        `I am committed to sponsoring a student's higher education through this plan.`,
        '',
        `*--- My Sponsorship Details ---*`,
        `📚 *Monthly Amount:* USD $${formattedMonthlyAmount}`,
        `🗓️ *Total Duration:* ${durationMonths} Months`,
        `💰 *Total Commitment:* USD $${formattedTotalAmount}`,
        '',
        `Please share the payment options so I can finalize this sponsorship and help secure a student's future immediately.`,
        '',
        `Thank you for your life-changing work!`,
        `Visit our page: ${HE_websiteDomain}`
    ];

    // Encode and Join lines to ensure correct line breaks (%0A)
    const encodedLines = messageLines.map(line => encodeURIComponent(line));
    const encodedMessage = encodedLines.join('%0A');

    const whatsappURL = `https://wa.me/${HE_whatsappNumber}?text=${encodedMessage}`;

    const whatsappLinkElement = document.getElementById(HE_whatsappLinkId);
    if (whatsappLinkElement) {
        whatsappLinkElement.href = whatsappURL;
    }
}


// 2. MAIN FUNCTION: Calculates total amount and updates the link for Higher Ed
function calculateTotalDonationHigherEd() {
    const amountSelect = document.getElementById(HE_monthlyAmountSelectId);
    const durationSelect = document.getElementById(HE_durationSelectId);

    const monthlyAmount = parseFloat(amountSelect.value) || 0;
    const durationMonths = parseInt(durationSelect.value) || 0;

    const totalAmountValue = monthlyAmount * durationMonths;

    document.getElementById(HE_totalDisplayId).textContent = '$' + totalAmountValue.toFixed(2);
    document.getElementById(HE_totalInputId).value = totalAmountValue;

    generateWhatsAppLinkHigherEd(monthlyAmount, durationMonths, totalAmountValue);
}


// 3. Initialization (Slim Select and Event Listeners)
document.addEventListener('DOMContentLoaded', () => {

    const amountDropdown = document.getElementById(HE_monthlyAmountSelectId);
    const durationDropdown = document.getElementById(HE_durationSelectId);

    // Slim Select Initialization for Higher Ed dropdowns
    if (amountDropdown) {
        new SlimSelect({
            select: amountDropdown,
            settings: { placeholderText: 'Select Amount', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }

    if (durationDropdown) {
        new SlimSelect({
            select: durationDropdown,
            settings: { placeholderText: 'Select Duration', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }

    // Attach listeners
    if (amountDropdown && durationDropdown) {
        amountDropdown.addEventListener('change', calculateTotalDonationHigherEd);
        durationDropdown.addEventListener('change', calculateTotalDonationHigherEd);
    }

    // Initial calculation on page load 
    setTimeout(calculateTotalDonationHigherEd, 200);
});

//Monthly Sponsorship for Higher Education End





//-------------------------------------new ------------------ start---------------------//

