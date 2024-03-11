var
    scroll, headerSticky = $('.hero-banner, .inner-banner').height(),
    $menuButton = $('.menu-open'),
    searchButton = $('.search-btn'),
    searchCloseBtn = $('.search-close'),
    searchBar = $('.search-bar'),
    $homeBannerSlider = $('.home-banner-slider'),
    $threeBoxSlider = $('.three-box-slider'),
    $FourBoxesSlider = $('.four-boxes-slider'),
    $GreySmallBoxesSlider = $('.grey-small-boxes-slider'),
    $sixBoxSlider = $('.six-box-slider'),
    boardDirectorsSlider = $('.board-directors-slider'),
    $fuelingCardSlider = $('.fueling-card-slider'),
    awardTimelineYearSlider = $('.award-timeline-year-slider'),
    awardTimelineYearSlider2 = $('.award-timeline-year-slider-2'),
    awardContentSlider = $('.award-content-slider'),
    awardContentSlider2 = $('.award-content-slider-2'),
    contributingLogoSlider = $('.contributing-logo-slider'),
    eventSlider = $('.event-slider'),
    chairmanSlider = $('.chairman-slider'),
    faqBoxSlider = $('.faqBoxSlider'),
    faqTabSlider = $('.faqTabSlider'),
    menuBottomSlider = $('.menu-bottom-slider'),
    navSlider = $('.nav-slider'),
    currencyRateTicker = $('.currency-rates'),
    rewardsTabNavSlider = $('.rewards-tab-nav'),
    rewardsTabSlider = $('.reward-tab-slider'),
    loanCalSlider = $('.loan-cal-tab'),
    loanCalTabNavSlider = $('.loan-cal-tab-nav'),
    featureListSlider = $('.feature-list-div'),
    contactListSlider = $('.contact-list-slider'),
    contentBoxSlider = $('.content-box-sec'),
    missionVisionSlider = $('.mission-vision-slider'),
    accountFilterSlider = $('.accounts-filter'),
    accountListingSlider = $('.account-listing-slider'),
    moreRelatedSlider = $('.more-related-slider'),
    ctaBanner = $('.cta-banner'),
    fullWidthSlider = $('.fwidth-slider'),
    smilesCtaSlider = $('.smiles-cta-slider'),
    mblbankingTxtSlider = $('.mobile-go-txt-slider'),
    mblbankingImgSlider = $('.mobile-go-img-slider'),
    mblbankingTxtSliderv2 = $('.mobile-go-txt-slider2'),
    mblbankingImgSliderv2 = $('.mobile-go-img-slider2'),
    customersReviewsTxtSlider = $('.customers-reviews-txt-slider'),
    customersReviewsImgSlider = $('.customers-reviews-img-slider'),
    svgIconBoxSlider = $('.svg-icon-box-slider'),
    HelpMeListingSlider = $('.help-me-listing-slider'),
    searchFilter = $('.search-filters'),
    formsAccordian = $('.forms-mn-accordian'),
    formTabSlider = $('.forms-lib-tabslider'),
    formTabContentSlider = $('.forms-lib-tabcontentslider'),
    paybillTabs = $('.paybill-tabs'),
    duesBillSlider = $('.dues-bill-slider'),
    payBillTabSlider = $('.paybill-tabslider'),
    MidLargeSlider = $('.mid-large-slider'),
    scheduleForm = $('#schedule-form'),
    cashbackSlider = $('.cashback-slider'),
    cashbackTxtSlider = $('.cashback-txt-slider'),
    fourBoxSlider = $('.four-box-slider'),
    personalInformation = $('#personal-information'),
    inputFile = $('.input-file'),
    professionalExperience = $('#professional-experience'),
    emailApply = $('#email-apply'),
    dobdatepicker = $('#dobdatepicker'),
    progressBarIndex = 0,
    time = 1,
    tick, percentTime, vsScrollbar, emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    letters = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return (elemBottom <= docViewBottom) && (elemTop >= docViewTop);
}
var prevY = 0;
$(window).scroll(function() {
    y = $(window).scrollTop();
    if (prevY != y) {
        if (y > headerSticky) {
            if ($(".inner-sticky-wrap").length) {
                $(".inner-sticky-wrap").addClass("sticky");
            } else if ($(".sticky-filter-calc").length && $(".sticky-filter").length && $(".sticky-filter-calc").offset().top <= y) {
                if ($(".sticky-filter-calc").offset().top <= y) {
                    $(".sticky-filter-calc").height($(".sticky-filter").outerHeight());
                    $(".sticky-filter").addClass("sticky");
                    $(".fixed-header").removeClass('sticky');
                } else {
                    $(".sticky-filter-calc").height(0);
                    $(".sticky-filter").removeClass("sticky");
                    $(".fixed-header").addClass('sticky');
                }
                if (y >= ($('.cards-isotop').height() + $('.cards-isotop').offset().top)) {
                    $(".sticky-filter-calc").height(0);
                    $(".sticky-filter").removeClass("sticky");
                    $(".fixed-header").addClass('sticky');
                }
            } else if ($(".cal-compare-height").length && $(window).width() >= 767 && $(".compare-first-row").length && $(".cal-compare-height").offset().top <= y) {
                if (y === 0) {
                    $(".compare-first-row").removeClass("sticky");
                }
                if ($(".cal-compare-height").offset().top <= y) {
                    $(".cal-compare-height").height($(".compare-first-row").outerHeight());
                    $(".compare-first-row").addClass("sticky");
                    $(".fixed-header").removeClass('sticky');
                    if ($(".footer-section").offset().top <= y + 240) {
                        $(".compare-first-row").addClass("stickytop");
                    } else {
                        $(".compare-first-row").removeClass("stickytop");
                    }
                } else {
                    $(".cal-compare-height").height(0);
                    $(".compare-first-row").removeClass("sticky");
                    $(".fixed-header").addClass('sticky');
                }
            } else {
                $(".fixed-header").addClass('sticky');
                $(".sticky-filter-calc").height(0);
                $(".cal-compare-height").height(0);
                $(".sticky-filter").removeClass("sticky");
                $(".compare-first-row").removeClass("sticky");
            }
        } else {
            $(".fixed-header").removeClass('sticky');
            $(".inner-sticky-wrap").removeClass("sticky");
            $(".sticky-filter").removeClass("sticky");
        }
        prevY = $(window).scrollTop();
    }
    var scrollTop = $(window).scrollTop();
    var scrollBottom = $("body").height() - $(window).height();
    var scrollPercent = scrollTop / scrollBottom * 100 + "%";
    $("._progress").width(scrollPercent);
});

function animateElements() {
    if ($('.animate').length > 0) {
        $('.animate').bind('inview', function(event, isInView) {
            if (isInView) {
                var animate = $(this).attr('data-animation');
                var speedDuration = $(this).attr('data-duration');
                var $t = $(this);
                setTimeout(function() {
                    $t.addClass(animate + ' animated');
                }, speedDuration);
            }
        });
    }
}

function mapPageScroll(elem) {
    if ($('.city-tab-pane').length > 0) {
        if (Scrollbar != "") {
            elem = '.city-tab-pane.active .tab-pane.active .branches-scroll-content';
            if ($(elem).length) {
                if (vsScrollbar && vsScrollbar.scroll) {
                    vsScrollbar.destroy();
                }
                vsScrollbar = Scrollbar.init(document.querySelector(elem))
            }
        }
    }
}

function homeBannerInit() {
    if ($homeBannerSlider.length > 0) {
        $homeBannerSlider.on('init', function(event, slick) {
            $(".home-banner-nav .home-nav-item").eq(0).addClass('active');
            if ($(slick.$slides[0]).find("video").length) {
                $(slick.$slides[0]).find("video").get(0).currentTime = 0;
                $(slick.$slides[0]).find("video").get(0).play();
                $(slick.$slides[0]).find("video").get(0).loop = true;
            }
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(".home-banner-nav .home-nav-item").removeClass('active');
            $(".home-banner-nav .home-nav-item").eq(nextSlide).addClass('active');
            $homeBannerSlider.find('.animate').off('inview');
            var currentElem = slick.$slides[nextSlide],
                $currentSlideElem = $(currentElem);
            if ($(currentElem).find("video").length) {
                $(currentElem).find("video").get(0).currentTime = 0;
                $(currentElem).find("video").get(0).play();
                $(currentElem).find("video").get(0).loop = true;
            }
            if ($(nextSlide).find("video").length) {
                $(currentElem).find("video").get(0).stop();
            }
            var $elem = $currentSlideElem.find('.banner-text-animate').children();
            $($elem).each(function(i, v) {
                if ($(v).hasClass('animated')) {
                    $(v).removeClass('fadeInUp animated');
                    $(v).removeClass('fadeInLeft animated');
                    $(v).removeClass('fadeInRight animated');
                    $(v).removeClass('fadeInDown animated');
                }
                $(v).addClass('animate');
            });
            $currentSlideElem.find('.animate').each(function() {
                $(this).bind('inview', function(event, isInView) {
                    if (isInView) {
                        var animate = $(this).attr('data-animation');
                        var speedDuration = $(this).attr('data-duration');
                        var $t = $(this);
                        setTimeout(function() {
                            $t.addClass(animate + ' animated');
                        }, speedDuration);
                    }
                });
            });
            $homeBannerSlider.find('.animate').trigger('inview', [true]);
        }).slick({
            fade: true,
            accessibility: false,
            draggable: false,
            dots: false,
            infinite: true,
            nav: false,
            arrows: false,
            autoplay: false,
            speed: 300,
            cssEase: 'linear',
            autoplaySpeed: 14000,
            pauseOnHover: false
        });
        $('.home-banner-nav .nav-progressbar').each(function(index) {
            var progress = "<div class='inProgress inProgress" + index + "'></div>";
            $(this).html(progress);
        });
        startProgressbar();
        $('.home-banner-nav .home-nav-item').click(function() {
            clearInterval(tick);
            var goToThisIndex = $(this).find("span").data("slickIndex");
            $homeBannerSlider.slick('slickGoTo', goToThisIndex, false);
            startProgressbar();
        });
    }
}

function sameHeight() {
    var sameHeightGroup = [];
    $("[data-sameheight]").each(function() {
        var group = $(this).data("sameheight");
        if (!sameHeightGroup.includes(group)) {
            sameHeightGroup.push(group);
        }
    });
    $("[data-sameheight]").css("min-height", 0);
    setTimeout(function() {
        sameHeightGroup.forEach(function(group) {
            var mHeight = 0;
            var counter = 0;
            var totalCount = $("[data-sameheight='" + group + "']").length;
            $("[data-sameheight='" + group + "']").each(function() {
                counter++;
                if (mHeight < $(this).outerHeight()) {
                    mHeight = $(this).outerHeight();
                }
                if (counter == totalCount) {
                    $("[data-sameheight='" + group + "']").css("min-height", mHeight);
                }
            });
        });
    }, 1000);
}

function iePopup() {
    setTimeout(function() {
        if ($("html").hasClass("ie")) {
            $('#iePopup').modal('show');
        }
    }, 2000);
}
$(document).ready(function() {
    $(".forms-accordian-list").find("div.forms-content-accordian p.accordian-head").addClass("collapsed")
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip();
    }
    if ($(".cookies-bar").length > 0) {
        $(".cookies-close-btn, .cookies-agree-btn").on('click', function() {
            $('.cookies-bar').removeClass('open-cookies-bar');
            setTimeout(function() {
                $(".cookies-bar").fadeOut();
            }, 2000);
        });
    }
    if ($(".mobile-app-box").length > 0) {
        $(".app-bar-close").on('click', function() {
            $(".mobile-app-box").fadeOut('slow');
        });
    }
    RedirectPopp();

    function RedirectPopp() {
        var objArr = [{
            key: 'mobile-banking',
            IOS: 'https://itunes.apple.com/ae/app/sib-digital/id1522893315',
            Android: 'https://play.google.com/store/apps/details?id=com.sib.retail',
        }, {
            key: 'mid-and-large-corporates',
            IOS: 'https://apps.apple.com/ae/app/sib-business/id1543875555',
            Android: 'https://play.google.com/store/apps/details?id=com.sib.corporate',
        }, {
            key: 'corporate-banking',
            IOS: 'https://apps.apple.com/ae/app/sib-business/id1543875555',
            Android: 'https://play.google.com/store/apps/details?id=com.sib.corporate',
        }]
        var temp = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
        var obj = objArr.find(x => x.key === temp);
        if (obj !== undefined) {
            if (($(window).width() <= 1024)) {
                function getMobileOperatingSystem() {
                    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                    if (/windows phone/i.test(userAgent)) {
                        return "Windows Phone";
                    }
                    if (/android/i.test(userAgent)) {
                        return "Android";
                    }
                    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                        return "iOS";
                    }
                }

                function DetectAndServe() {
                    if (getMobileOperatingSystem() == "Android") {
                        window.location.href = obj.Android;
                        return false;
                    }
                    if (getMobileOperatingSystem() == "iOS") {
                        window.location.href = obj.IOS;
                        window.location.assign(obj.IOS);
                        return false;
                    }
                }
                DetectAndServe();
            }
        }
    }
    if (($(window).width() <= 1024)) {
        let anchorLink = "/corporate-banking/corporate/mid-and-large-corporates"
        $(".head-submenu a[href*='" + anchorLink + "']").addClass("redirection-link").attr('target', '_blank');

        function getMobileOperatingSystem() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            if (/windows phone/i.test(userAgent)) {
                return "Windows Phone";
            }
            if (/android/i.test(userAgent)) {
                return "Android";
            }
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                return "iOS";
            }
            if (/Mac/.test(userAgent) && !window.MSStream) {
                return "Ipad";
            }
        }

        function DetectAndServe() {
            if (getMobileOperatingSystem() == "Android") {
                $(".mobile-app-link").attr("href", "https://play.google.com/store/apps/details?id=com.sib.retail");
                $(".redirection-link").attr("href", "https://play.google.com/store/apps/details?id=com.sib.corporate");
            }
            if (getMobileOperatingSystem() == "iOS") {
                $(".mobile-app-link").attr("href", "https://itunes.apple.com/ae/app/sib-digital/id1522893315");
                $(".redirection-link").attr("href", "https://apps.apple.com/ae/app/sib-business/id1543875555");
            }
            if (getMobileOperatingSystem() == "Ipad") {
                $(".mobile-app-link").attr("href", "https://itunes.apple.com/ae/app/sib-digital/id1522893315");
            }
        }
        DetectAndServe();
    }
    $('.login-dropdown').parent('li').hover(function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).find('.login-menu').slideDown();
    }, function(e) {
        e.preventDefault();
        $(this).removeClass('active');
        $(this).find('.login-menu').slideUp();
    });
    $(document).mouseup(function(e) {
        var loginDropdown = $(".login-dropdown");
        if (!loginDropdown.is(e.target) && loginDropdown.has(e.target).length === 0) {
            loginDropdown.removeClass('active');
            loginDropdown.next().slideUp();
        }
    });
    $('.ft-toggle-btn').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $('.ft-toggle-btn').removeClass('active');
        $this.addClass('active');
        if ($this.next().hasClass('active')) {
            $this.next().removeClass('active');
            $('.ft-toggle-btn').removeClass('active');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li ul').removeClass('active');
            $this.parent().parent().find('li ul').slideUp(350);
            $this.next().toggleClass('active');
            $this.next().slideToggle(350);
        }
    });
    searchButton.click(function() {
        searchBar.slideDown();
    });
    searchCloseBtn.click(function() {
        searchBar.slideUp();
    });
    if ($(".tab-branch-atm").length) {
        $('.tab-btn-mn a').click(function() {
            $('.tab-content').addClass('loading', setTimeout(function() {
                $('.tab-content').removeClass('loading');
            }, 1000));
            $(this).parents('.tab-btn-mn').find('a').removeClass('active');
            $(this).addClass('active');
            var tagtab = $(this).data('tab');
            $(this).parents('.city-tab-pane').find('.tab-pane').removeClass('active');
            $('#' + tagtab).addClass('active');
            var type = $(this).data('type');
            var city = $('#ddCities').val();
            getlocations($('.city-tab-btn select').children("option:selected").val().replace("-", " "), type);
            mapPageScroll();
        });
    }
    if ($('.videoPlay-js').length) {
        $('.videoPlay-js').click(function() {
            $('.videoPlay-js').parents('.video-box').find('.linkVideo').get(0).play();
            $(this).hide();
            $('.video-thumbnail').hide();
        });
    }
    if ($(".primary-navigation").length) {
        $('.primary-navigation li a').each(function() {
            if (window.location.href.includes($(this).prop('href'))) {
                $(this).parent('li').siblings().removeClass('active');
                $(this).parent('li').addClass('active');
                $(this).removeClass('active');
                $(this).addClass('active');
            }
        });
        if (!$('.primary-navigation li a').hasClass("active")) {
            $('.primary-navigation li:first-child').addClass('active');
            $('.primary-navigation li:first-child a').addClass('active');
        }
        setTimeout(function() {
            $('ul.head-submenu li a, .second-level-nav>a').each(function() {
                if ($(this).prop('href') == window.location.href) {
                    $(this).parents('.first-level-nav').addClass('active');
                    $(this).parent('li').addClass('active');
                    $(this).removeClass('active');
                    $(this).addClass('active');
                    $(this).parents('.third-level-nav').find('.menu-link').trigger('click');
                    if ($('.fourth-level-nav').hasClass('active')) {
                        $(this).parents('.head-submenu').find('.third-level').removeClass('active').hide();
                        $(this).parents('.third-level-nav').addClass('active');
                        $(this).parents('.third-level').addClass('active').show();
                    }
                }
            });
            $('.head-btn li a').each(function() {
                if (window.location.href.includes($(this).prop('href'))) {
                    $(this).parent('li').siblings().removeClass('active');
                    $(this).parent('li').addClass('active');
                    $(this).removeClass('active');
                    $(this).addClass('active');
                }
            });
        }, 200);
    }
    if ($(".ft-secondary-navigation").length) {
        $('.ft-secondary-navigation li a').each(function() {
            if ($(this).prop('href') == window.location.href) {
                $(this).parent('li').siblings().removeClass('active');
                $(this).parent('li').addClass('active');
                $(this).removeClass('active');
                $(this).addClass('active');
            }
        });
        $('.ft-links li a').each(function() {
            if ($(this).prop('href') == window.location.href) {
                $(this).parent('li').addClass('active');
                $(this).parents('.ft-links').parent('li').addClass('active');
                $(this).parents('.ft-links').siblings('a').addClass('active');
                $(this).removeClass('active');
                $(this).addClass('active');
            }
        });
        $('.ft-btn li a').each(function() {
            if ($(this).prop('href') == window.location.href) {
                $(this).parent('li').addClass('active');
                $(this).parents('.ft-links').parent('li').addClass('active');
                $(this).parents('.ft-links').siblings('a').addClass('active');
                $(this).removeClass('active');
                $(this).addClass('active');
            }
        });
    }
    if ($(".ft-sitemap-links").length) {
        $('.ft-sitemap-links li a').each(function() {
            if ($(this).prop('href') == window.location.href) {
                $(this).parent('li').addClass('active');
                $(this).parents('.ft-links').parent('li').addClass('active');
                $(this).parents('.ft-links').siblings('a').addClass('active');
                $(this).removeClass('active');
                $(this).addClass('active');
            }
        });
    }
    if ($(".city-tab-btn").length) {
        $('.city-tab-btn select').change(function() {
            $('.tab-content').addClass('loading', setTimeout(function() {
                $('.tab-content').removeClass('loading');
            }, 1000));
            dropdown = $('.city-tab-btn select').val().replace(/\s+/g, '-');;
            $('.city-tab-content .city-tab-pane').hide().removeClass('active');
            $('#' + dropdown).show().addClass('active');
            getlocations($('.city-tab-btn select').children("option:selected").val().replace("-", " "), 'Branches');
            $('.city-tab-pane.active .tab-btn-mn li:first-child a').trigger('click');
        });
    }
    if ($(".faq-layout2").length) {
        $('.card-header').click(function() {
            if ($(this).siblings('.card-collapse').hasClass('show')) {
                $(this).siblings('.card-collapse').removeClass('show').slideUp();
                $(this).parent('.card').find('h5').addClass('collapsed');
            } else {
                $(this).parents('.faq-layout2').find('.card-header h5').addClass('collapsed');
                $(this).parent('.card').find('h5').removeClass('collapsed');
                $(this).parents('.faq-layout2').find('.card-collapse').removeClass('show').slideUp();
                $(this).siblings('.card-collapse').slideDown().addClass('show');
            }
        });
    }
    if (searchFilter.length) {
        $(".select-filter-mbl select").change(function() {
            var selectedvalue = this.value;
            $(this).addClass('current');
            $("#" + selectedvalue).click();
        });
        var $container = $('.search-result-filter').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
        });
        var filterFns = {
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        $('.search-filters').on('click', 'a', function() {
            var filterValue = $(this).attr('data-filter');
            filterValue = filterFns[filterValue] || filterValue;
            $container.isotope({
                filter: filterValue
            });
        });
        $('ul.search-filters').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'a', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
                $('.search-result-filter').addClass('loading');
                setTimeout(function() {
                    $('.search-result-filter').removeClass('loading');
                }, 1000);
            });
        });
        var initShow = 5;
        var counter = initShow;
        var iso = $container.data('isotope');
        updateFilterCount();
        loadMore(initShow);
        $container.after(' <div class="text-center"><a id="load-more" href="javascript:" class="btn btn-primary"><span>View More Results</span><i class="icon-right-arrow"></i></a></div>');
        $("#load-more").click(function() {
            if ($('.search-filters').data('clicked')) {
                counter = initShow;
                $('.search-filters').data('clicked', false);
            } else {
                counter = counter;
            };
            $('.search-result-filter').addClass('loading');
            setTimeout(function() {
                $('.search-result-filter').removeClass('loading');
            }, 1000);
            counter = counter + initShow;
            loadMore(counter);
        });
        $("#filters").click(function() {
            $(this).data('clicked', true);
            loadMore(initShow);
        });
    }
    if (formsAccordian.length) {
        $(".forms-head-accordian").click(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).siblings('.forms-content-accordian').slideUp();
                $(this).find('span').html('Show <i class="icon-right-arrow"></i>');
            } else {
                $(this).parent('.forms-mn-accordian').addClass('active');
                $(this).parent('.forms-mn-accordian').siblings().removeClass('active');
                $(this).parents('.forms-accordian-list').find('.forms-head-accordian').removeClass('active');
                $(this).parents('.forms-mn-accordian').siblings().find('.forms-content-accordian').slideUp();
                $(this).parents('.forms-mn-accordian').siblings().find('.forms-head-accordian span').html('Show <i class="icon-right-arrow"></i>');
                $(this).addClass('active');
                $(this).siblings('.forms-content-accordian').slideDown();
                $(this).find('span').html('Hide <i class="icon-right-arrow"></i>');
                $('html, body').animate({
                    scrollTop: $(this).offset().top - 200
                }, 200);
            }
        });
    }
    if ($(".reportsection-tabslider").length > 0) {
        $('.forms-lib-tabslider').slick({
            dots: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            speed: 800,
            slidesToShow: 4,
            adaptiveHeight: true,
            focusOnSelect: true,
            prevArrow: '<a href="javascript:" class="arrow-prev nav-slider-left" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next nav-slider-right" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            asNavFor: $('.forms-lib-tabcontentslider'),
            responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            }, {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }]
        }).on('afterChange', function(event, slick, currentSlide) {
            $('.form-lib-tab-content .tab-panel').addClass('loading');
            setTimeout(function() {
                $('.form-lib-tab-content .tab-panel').removeClass('loading');
            }, 1000);
        });
        $('.forms-lib-tabcontentslider').slick({
            dots: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 1000,
            slidesToShow: 1,
            focusOnSelect: false,
            fade: true,
            asNavFor: $('.forms-lib-tabslider'),
            draggable: true,
            swipe: false,
        });
    }
    if ($(window).width() < 767) {
        $('.cards-filter').slick({
            dots: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            speed: 800,
            slidesToShow: 1,
            adaptiveHeight: true,
            focusOnSelect: true,
            prevArrow: '<a href="javascript:" class="arrow-prev nav-slider-left" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next nav-slider-right" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
        });
    }
    if (personalInformation.length) {
        personalInformation.formValidation({
            fields: {
                Fname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                Lname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                number: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                nationality: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                gender: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                date: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                location: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                qualification: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                school: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                selectcheckbox: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                certifications: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                linkedinurl: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                expectedsalary: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                experienced: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                }
            },
            onSuccess: function(e) {
                e.preventDefault();
                var $form = $(e.target),
                    formId = '#' + $form[0].id;
                $(formId).addClass('loading').append('<div class="loader"></div>');
                $.ajax({
                    type: 'post',
                    url: ' ',
                    data: $(formId).serialize(),
                    success: function() {
                        setTimeout(function() {
                            var fields = $(formId).data('formValidation').getOptions().fields,
                                $parent, $icon;
                            for (var field in fields) {
                                $parent = $('[name="' + field + '"]').parents('.form-group');
                            }
                            $('.alert-success').addClass('in');
                            $(formId).data('formValidation').resetForm(true);
                            $("input[type=text], textarea").val("");
                            $('.file-input-name').hide();
                            $('.thanks').show();
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            setTimeout(function() {
                                $('.thanks').hide();
                                $(formId).data('formValidation').resetForm(true);
                            }, 5000);
                        }, 1500);
                    }
                });
            }
        });
    }
    $(document).on('change', '.input-file', function(e) {
        if (e.target.files[0] !== undefined) {
            var fileName = e.target.files[0].name;
            $(this).parents('.file-upload').addClass('sd').find('p').text(fileName);
            $(this).parents('.file-upload').find('p').text(fileName);
            if ($('.file-upload-box').length) {
                $(this).parents('.file-upload-box').find('.img-view-btn').removeClass('disabled');
            }
        }
    });
    if (professionalExperience.length > 0) {
        professionalExperience.formValidation({
            fields: {
                industry: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                experiencefield: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                currentcompany: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                nationality: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                yearexperience: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                havedegree: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                expletter: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                speakenglish: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                fileupload: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                }
            },
            onSuccess: function(e) {
                e.preventDefault();
                var $form = $(e.target),
                    formId = '#' + $form[0].id;
                $(formId).addClass('loading').append('<div class="loader"></div>');
                $.ajax({
                    type: 'post',
                    url: ' ',
                    data: $(formId).serialize(),
                    success: function() {
                        setTimeout(function() {
                            var fields = $(formId).data('formValidation').getOptions().fields,
                                $parent, $icon;
                            for (var field in fields) {
                                $parent = $('[name="' + field + '"]').parents('.form-group');
                            }
                            $('.alert-success').addClass('in');
                            $(formId).data('formValidation').resetForm(true);
                            $("input[type=text], textarea").val("");
                            $('.file-input-name').hide();
                            $('.thanks').show();
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            setTimeout(function() {
                                $('.thanks').hide();
                                $(formId).data('formValidation').resetForm(true);
                            }, 5000);
                        }, 1500);
                    }
                });
            }
        });
    }
    if (emailApply.length > 0) {
        emailApply.formValidation({
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: emailRegex,
                            message: ' '
                        }
                    }
                }
            },
            onSuccess: function(e) {
                e.preventDefault();
                var $form = $(e.target),
                    formId = '#' + $form[0].id;
                $(formId).addClass('loading').append('<div class="loader"></div>');
                $.ajax({
                    type: 'post',
                    url: ' ',
                    data: $(formId).serialize(),
                    success: function() {
                        setTimeout(function() {
                            var response = null;
                            if (typeof(grecaptcha) != "undefined") {
                                response = grecaptcha.getResponse();
                            }
                            if (response != null && response.length == 0) {
                                $('<p style="color:red !important" class=error-captcha"><span class="glyphicon glyphicon-remove " ></span> Please fill up the captcha.</p>" ').insertAfter("#captcha-Container");
                                return false;
                            } else {
                                $("#captcha-Container").next().remove();
                            }
                            var fields = $(formId).data('formValidation').getOptions().fields,
                                $parent, $icon;
                            for (var field in fields) {
                                $parent = $('[name="' + field + '"]').parents('.form-group');
                            }
                            $('.alert-success').addClass('in');
                            $(formId).data('formValidation').resetForm(true);
                            $("input[type=text], textarea").val("");
                            $('.file-input-name').hide();
                            $('.thanks').show();
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                        }, 1500);
                    }
                });
            }
        });
    }
    if (scheduleForm.length > 0) {
        scheduleForm.formValidation({
            fields: {
                Fname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                Lname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: emailRegex,
                            message: ' '
                        }
                    }
                },
                number: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                date: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                range: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                }
            },
            onSuccess: function(e) {
                e.preventDefault();
                var $form = $(e.target),
                    formId = '#' + $form[0].id;
                $(formId).addClass('loading').append('<div class="loader"></div>');
                $.ajax({
                    type: 'post',
                    url: ' ',
                    data: $(formId).serialize(),
                    success: function() {
                        setTimeout(function() {
                            var fields = $(formId).data('formValidation').getOptions().fields,
                                $parent, $icon;
                            for (var field in fields) {
                                $parent = $('[name="' + field + '"]').parents('.form-group');
                            }
                            $('.alert-success').addClass('in');
                            $(formId).data('formValidation').resetForm(true);
                            $("input[type=text], textarea").val("");
                            $('.file-input-name').hide();
                            $('.thanks').show();
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            setTimeout(function() {
                                $('.thanks').hide();
                                $(formId).data('formValidation').resetForm(true);
                            }, 5000);
                        }, 1500);
                    }
                });
            }
        });
    }
    if ($('#BookAnAppointmentDatePicker').length > 0) {
        var currentYear = new Date().getFullYear();
        var peviousYear = currentYear + 5785;
        var dateToday = new Date();
        $('#BookAnAppointmentDatePicker').datepicker({
            changeMonth: true,
            changeYear: true,
            minDate: 0
        });
    }
    if ($('#dateOfBirthDatePicker').length > 0) {
        var currentYear = new Date().getFullYear();
        var peviousYear = currentYear - 99;
        var dateToday = new Date();
        $('#dateOfBirthDatePicker').datepicker({
            changeMonth: true,
            changeYear: true,
            maxDate: '0',
        });
    }
    if ($('.cashback-sec').length) {
        setTimeout(function() {
            $('.cashback-sec .nav-link').on('shown.bs.tab', function(e) {
                if ($('.cashback-sec .tab-pane.active thead tr th').length <= 3) {
                    $('.tab-table').removeClass('w-100');
                    $('.tab-pane.active .tab-table').removeClass('w-100');
                } else {
                    $('.tab-table').removeClass('w-100');
                    $('.tab-pane.active .tab-table').addClass('w-100');
                }
            });
        }, 2000);
        if ($('.cashback-sec .tab-pane.active thead tr th').length <= 3) {
            $('.tab-table').removeClass('w-100');
        } else {
            $('.tab-table').addClass('w-100');
        }
    }
    let activeList = [];
    $('.card-list-item').removeClass('active');
    $(".add-to-compare-btn").click(function(e) {
        console.log(activeList);
        if (activeList.length >= 3) {
            $('#compare-limit-modal').modal('show');
            return;
        }
        activeList.push(this);
        $(this).closest('.card-list-item').toggleClass('active');
    });
    $(".remove-compare-btn").click(function(e) {
        activeList.splice(activeList.indexOf(this), 1);
        $(this).closest('.card-list-item').removeClass('active');
    });
    $(".faqnav-tabs .btn-link").on("click", function(e) {
        e.preventDefault();
        $(".faqnav-tabs .btn-link").removeClass("active");
        $(this).addClass("active");
        let activeHrefValue = $(".btn-link.active").attr("href");
        let list = ["personal", "corporate", "wealth", "investment", "career"];
        $('.filter-personal,.filter-corporate, .filter-wealth,.filter-investment,.filter-career ').hide();
        $(".filter-" + list[list.indexOf(activeHrefValue.split("#")[1])]).show();
    });
});
if ($(window).width() >= 1000) {
    $('.mobileText').remove();
}

function menuOpen() {
    var menu_active = $(".primary-navigation li.active a").attr("data-menu-active");
    $(".top-nav .menu-inner-wrap").fadeOut();
    $(".top-nav>ul>li").removeClass("active");
    $(".top-nav>ul>li>a").removeClass("active");
    $('.top-nav>ul>li>a[data-menu-active="' + menu_active + '"]').addClass("active");
    $('.top-nav>ul>li>a[data-menu-active="' + menu_active + '"]').parent("li").addClass("active");
    $('.top-nav>ul>li>a[data-menu-active="' + menu_active + '"]').parent().find(".main-toggle-btn").addClass("active");
    $('.top-nav>ul>li>a[data-menu-active="' + menu_active + '"]').parent().find(".menu-inner-wrap").fadeIn('slow');
}

function updateFilterCount() {
    $('.filter-count').text(iso.filteredItems.length);
}

function loadMore(toShow) {
    $container.find(".hidden-element").removeClass("hidden-element");
    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
        return item.element;
    });
    $(hiddenElems).addClass('hidden-element');
    $container.isotope('layout');
    if (hiddenElems.length == 0) {
        jQuery("#load-more").hide();
    } else {
        jQuery("#load-more").show();
    }
}

function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 20);
}

function interval() {
    if (($homeBannerSlider.find('.slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
        progressBarIndex = $homeBannerSlider.find('.slick-track div[aria-hidden="false"]').data("slickIndex");
        startProgressbar();
    } else {
        percentTime += 1 / (time + 4);
        $('.inProgress' + progressBarIndex).css({
            width: percentTime + "%"
        });
        if (percentTime >= 100) {
            $homeBannerSlider.slick('slickNext');
            progressBarIndex++;
            if (progressBarIndex > 1) {
                progressBarIndex = 0;
            }
            startProgressbar();
        }
    }
}

function resetProgressbar() {
    $('.inProgress').css({
        width: 0 + '%'
    });
    clearInterval(tick);
}
$(window).on('resize', function() {
    if ($(window).width() >= 1000) {
        $('.mobileText').remove();
    }
    sameHeight();
    if (faqBoxSlider.hasClass('slick-initialized'))
        target.unslick();
});
$(window).on('load', function() {
    $(dobdatepicker).datepicker();
    $('.datepicker').on('changeDate', function(e) {
        $('.general-form').bootstrapValidator('revalidateField', 'date');
    })
    $(".mob-num").keydown(function(e) {
        var oldvalue = $(this).val();
        var field = this;
        setTimeout(function() {
            if (field.value.indexOf('971') !== 0) {
                $(field).val(oldvalue);
            }
        }, 1);
    });
    setTimeout(function() {
        var targetHash = window.location.hash;
        if (targetHash.length) {
            $('html,body').animate({
                scrollTop: $(targetHash).offset().top - 100
            }, 2000);
        }
    }, 500);
    if ($(".mobile-app-box").length > 0 && $(window).width() < 1199) {
        setTimeout(function() {
            $(".mobile-app-box").fadeIn('slow');
        }, 2500);
    }
    setTimeout(function() {
        var targetHash = window.location.hash;
        if (targetHash.length) {
            $('html,body').animate({
                scrollTop: $(targetHash).offset().top - 100
            }, 2000);
        }
    }, 500);
    iePopup();
    if ($(".cookies-bar").length > 0) {
        setTimeout(function() {
            $(".cookies-bar").addClass("open-cookies-bar");
        }, 2500);
    }
    if ($('.kycdatepicker').length > 0) {
        let dateToday = new Date();
        let datetomorrow = new Date(dateToday.getTime() + 24 * 60 * 60 * 1000);
        $('.kycdatepicker').datepicker({
            minDate: datetomorrow,
            onSelect: function(dateText, inst) {
                let Thisvalue = $(this);
            }
        });
    }
    var menuTimeline = gsap.timeline({
            paused: true,
            reversed: true
        }),
        menuTimeline2 = gsap.timeline({
            paused: true,
            reversed: true
        }),
        menuTimeline3 = gsap.timeline({
            paused: true,
            reversed: true
        }),
        menuTimeline4 = gsap.timeline({
            paused: true,
            reversed: true
        });
    if ($(window).width() <= 767) {
        var menuIcontopbar = $('.menu-icontopbar ul li');
        var firstLevelNav = $('.first-level-nav');
        var bottomNav = $('.head-btn');
        menuTimeline.staggerFromTo(menuIcontopbar, 0.3, {
            x: '-100%',
            autoAlpha: 0
        }, {
            x: '0%',
            autoAlpha: 1
        }, 0.1);
        menuTimeline.staggerFromTo(firstLevelNav, 0.3, {
            x: '100%',
            autoAlpha: 0
        }, {
            x: '0%',
            autoAlpha: 1
        }, 0.1);
        menuTimeline.staggerFromTo(bottomNav, 0.3, {
            x: '100%',
            autoAlpha: 0
        }, {
            x: '0%',
            autoAlpha: 1
        }, 0.1);
    }
    $menuButton.click(function() {
        $('html').toggleClass('open-html');
        if ($(window).width() > 767) {
            menuOpen();
            $('.demo-fullscreen').TrackpadScrollEmulator("recalculate");
        }
        if ($(window).width() <= 767) {
            if ($(this).hasClass('menu-close')) {
                $('.menu-inner-wrap').hide();
                $('.main-toggle-btn').removeClass('active');
                $('.top-nav>ul>li').removeClass('active');
                $('.hd-toggle-btn').removeClass('active');
                $('.head-submenu').removeClass('active').hide();
                $('.menu-link').removeClass('active');
                $('.third-level').removeClass('active').hide();
                $('body, html, main').removeClass('overflow-hidden');
            } else {
                $('body, html, main').addClass('overflow-hidden');
            }
            setTimeout(function() {
                menuTimeline.reversed() ? menuTimeline.play() : menuTimeline.reverse();
            }, 200);
        }
    });
    $('.menu-link').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $('.menu-link').removeClass('active');
        $this.addClass('active');
        if ($this.next().hasClass('active')) {
            $this.next().removeClass('active');
            $('.menu-link').removeClass('active');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .third-level').removeClass('active');
            $this.parent().parent().find('li .third-level').slideUp(350);
            $this.next().toggleClass('active');
            $this.next().slideToggle(350);
            if ($(window).width() <= 767) {
                var fourthLevelNav = $(this).parent('li').find('.fourth-level-nav');
                menuTimeline4.staggerFromTo(fourthLevelNav, 0.3, {
                    x: '100%',
                    autoAlpha: 0
                }, {
                    x: '0%',
                    autoAlpha: 1
                }, 0.1);
                menuTimeline4.play();
            }
        }
    });
    $('.hd-toggle-btn').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $('.hd-toggle-btn').removeClass('active');
        $this.addClass('active');
        if ($this.next().hasClass('active')) {
            $this.next().removeClass('active');
            $('.hd-toggle-btn').removeClass('active');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li ul').removeClass('active');
            $this.parent().parent().find('li ul').slideUp(350);
            $this.next().toggleClass('active');
            $this.next().slideToggle(350);
            var thirdLevelNav = $(this).parent('li').find('.third-level-nav');
            menuTimeline3.staggerFromTo(thirdLevelNav, 0.3, {
                x: '100%',
                autoAlpha: 0
            }, {
                x: '0%',
                autoAlpha: 1
            }, 0.1);
            menuTimeline3.play();
        }
    });
    if ($(".primary-navigation").length) {
        menuOpen();
        if ($(window).width() > 767) {
            $(".top-nav>ul>li>a").on('click', function(e) {
                if ($(this).parent().find(".menu-inner-wrap").length == "") {
                    return;
                } else {
                    $(".top-nav .menu-inner-wrap").stop().fadeOut();
                    $(".top-nav>ul>li").removeClass("active");
                    $(".top-nav>ul>li>a").removeClass("active");
                    $(this).parent().find(".menu-inner-wrap").stop().fadeIn('slow');
                    $(this).addClass("active");
                    $(this).parent().addClass("active");
                    setTimeout(function() {
                        $('.demo-fullscreen').TrackpadScrollEmulator("recalculate");
                    }, 500);
                }
            });
        } else {
            $(".top-nav>ul>li> .main-toggle-btn").on('click', function(e) {
                $(this).parents('li').siblings('li').removeClass('active').find('.menu-inner-wrap').slideUp();
                $(this).parents('li').siblings('li').find('.main-toggle-btn').removeClass('active');
                $(this).parents('li').siblings('li').removeClass('active').find('.hd-toggle-btn').removeClass('active');
                $(this).parents('li').siblings('li').removeClass('active').find('.head-submenu').removeClass('active').slideUp();
                $(this).parent().find(".menu-inner-wrap").slideToggle();
                $(this).toggleClass("active");
                $(this).parent("li").toggleClass("active");
                if (!$(this).parent('li').hasClass('active')) {
                    $(this).parent('li').find('.head-submenu').removeClass('active').hide();
                } else {
                    var secondLevelNav = $(this).parent().find('.second-level-nav');
                    menuTimeline2.staggerFromTo(secondLevelNav, 0.3, {
                        x: '100%',
                        autoAlpha: 0
                    }, {
                        x: '0%',
                        autoAlpha: 1
                    }, 0.1);
                    menuTimeline2.play();
                }
            });
        }
        $(".primary-navigation li.active a").on("mouseover", function() {
            menuOpen();
            $('html').toggleClass('open-html');
            $('.demo-fullscreen').TrackpadScrollEmulator("recalculate");
        });
        $(".menu-overly").on("click", function() {
            $('html').toggleClass('open-html');
        });
    }
    if ($(".compare-table-main").length && $(window).width() < 767) {
        var scrolldiv1 = $('.scroll_div1');
        scrolldiv1.scroll(function() {
            scrolldiv1.scrollLeft($(this).scrollLeft());
        });
    }
    if ($(window).width() > 767) {
        $('.demo-fullscreen').TrackpadScrollEmulator();
    }
    if (eventSlider.length) {
        eventSlider.slick({
            accessibility: false,
            draggable: false,
            dots: true,
            nav: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            pauseOnHover: true,
            slidesToShow: 2,
            pauseOnFocus: false,
            centerMode: true,
            centerPadding: '330px',
            responsive: [{
                breakpoint: 1366,
                settings: {
                    centerPadding: '150px'
                }
            }, {
                breakpoint: 992,
                settings: {
                    centerPadding: '110px'
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '80px'
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }]
        })
    }
    if (navSlider.length) {
        navSlider.slick({
            accessibility: false,
            draggable: false,
            dots: false,
            nav: false,
            arrows: true,
            infinite: true,
            prevArrow: '<a href="javascript:" class="arrow-prev nav-slider-left" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next nav-slider-right" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            autoplay: true,
            autoplaySpeed: 1500,
            pauseOnHover: false,
            slidesToShow: 6,
            responsive: [{
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        })
    }
    if (currencyRateTicker.length) {
        currencyRateTicker.slick({
            accessibility: false,
            draggable: false,
            dots: false,
            nav: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 0,
            pauseOnHover: true,
            speed: 3000,
            cssEase: 'linear',
            slidesToShow: 4,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }]
        });
    }
    if (rewardsTabSlider.length) {
        rewardsTabSlider.slick({
            dots: false,
            nav: false,
            autoplay: false,
            infinite: false,
            arrows: true,
            accessibility: false,
            draggable: false,
            swipe: false,
            fade: true,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }]
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(".reward-nav-slide").removeClass("slick-current");
            $(".reward-nav-slide[data-slick-goto='" + nextSlide + "']").addClass("slick-current");
            if (rewardsTabNavSlider.hasClass("slick-initialized")) {
                rewardsTabNavSlider.slick("slickGoTo", nextSlide);
            }
            rewardsTabSlider.find('.animate').off('inview');
            var currentElem = slick.$slides[nextSlide],
                $currentSlideElem = $(currentElem);
            var $elem = $currentSlideElem.find('.animated');
            $($elem).each(function(i, v) {
                if ($(v).hasClass('animated')) {
                    $(v).removeClass('fadeIn animated');
                    $(v).removeClass('fadeInUp animated');
                    $(v).removeClass('fadeInLeft animated');
                    $(v).removeClass('fadeInRight animated');
                    $(v).removeClass('fadeInDown animated');
                    $(v).removeClass('animate-now animated');
                }
                $(v).addClass('animate');
            });
            $currentSlideElem.find('.animate').each(function() {
                $(this).bind('inview', function(event, isInView) {
                    if (isInView) {
                        var animate = $(this).attr('data-animation');
                        var speedDuration = $(this).attr('data-duration');
                        var $t = $(this);
                        setTimeout(function() {
                            $t.addClass(animate + ' animated');
                        }, speedDuration);
                    }
                });
            });
            rewardsTabSlider.find('.animate').trigger('inview', [true]);
        })
    }
    if (rewardsTabNavSlider.length) {
        if (rewardsTabNavSlider.children().length > 4 || $(window).width() < 576) {
            rewardsTabNavSlider.slick({
                dots: false,
                variableWidth: true,
                nav: false,
                arrows: false,
                infinite: true,
                slidesToShow: 4,
                focusOnSelect: true,
                prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
                nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        variableWidth: false,
                        adaptiveHeight: true
                    }
                }]
            }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                var targetSlide = nextSlide;
                rewardsTabSlider.slick("slickGoTo", targetSlide);
            });
        }
        $(".reward-nav-slide").click(function() {
            $(".reward-nav-slide").removeClass("slick-current");
            $(this).addClass("slick-current");
            var targetSlide = $(this).data("slick-goto");
            rewardsTabSlider.slick("slickGoTo", targetSlide);
        });
    }
    if (missionVisionSlider.length) {
        missionVisionSlider.slick({
            dots: false,
            nav: false,
            autoplay: false,
            infinite: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            accessibility: false,
            draggable: false,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }]
        })
    }
    if (awardTimelineYearSlider2.length) {
        awardTimelineYearSlider2.slick({
            dots: false,
            nav: false,
            autoplay: false,
            infinite: false,
            variableWidth: true,
            arrows: true,
            centerMode: true,
            centerPadding: 0,
            accessibility: false,
            draggable: false,
            focusOnSelect: true,
            asNavFor: awardContentSlider2,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
        })
    }
    if (awardContentSlider2.length) {
        awardContentSlider2.slick({
            autoplay: false,
            infinite: false,
            arrows: false,
            dots: false,
            speed: 600,
            fade: true,
            asNavFor: awardTimelineYearSlider2
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            awardContentSlider2.find('.animate').off('inview');
            awardContentSlider2.find('.animate').off('inview');
            var currentElem = slick.$slides[nextSlide],
                $currentSlideElem = $(currentElem);
            var $elem = $currentSlideElem.find('.animated');
            $($elem).each(function(i, v) {
                if ($(v).hasClass('animated')) {
                    $(v).removeClass('fadeIn animated');
                    $(v).removeClass('fadeInUp animated');
                    $(v).removeClass('fadeInLeft animated');
                    $(v).removeClass('fadeInRight animated');
                    $(v).removeClass('fadeInDown animated');
                    $(v).removeClass('animate-now animated');
                }
                $(v).addClass('animate');
            });
            $currentSlideElem.find('.animate').each(function() {
                $(this).bind('inview', function(event, isInView) {
                    if (isInView) {
                        var animate = $(this).attr('data-animation');
                        var speedDuration = $(this).attr('data-duration');
                        var $t = $(this);
                        setTimeout(function() {
                            $t.addClass(animate + ' animated');
                        }, speedDuration);
                    }
                });
            });
            awardContentSlider2.find('.animate').trigger('inview', [true]);
        });
    }
    if (awardTimelineYearSlider.length) {
        awardTimelineYearSlider.slick({
            dots: false,
            nav: false,
            autoplay: false,
            infinite: true,
            arrows: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: 0,
            accessibility: false,
            draggable: false,
            focusOnSelect: true,
            asNavFor: awardContentSlider,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 6
                }
            }, {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 6
                }
            }, {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1
                }
            }]
        })
    }
    if (awardContentSlider.length) {
        awardContentSlider.slick({
            autoplay: false,
            infinite: true,
            arrows: false,
            dots: false,
            speed: 600,
            fade: true,
            asNavFor: awardTimelineYearSlider
        });
    }
    if ($(".maskInput").length) {
        $(".maskInput").keyup(function() {
            $(this).unmask();
            $(this).mask("###,###,###,###,###,###");
        });
    }
    if ($(".reward__slider").length) {
        $(".reward__slider").each(function(elem, slider) {
            var rewardSlider = new Slider(slider, {
                formatter: function(value) {
                    return Math.pow(2, value);
                },
                tooltip: 'hide'
            }).on('change', function(value) {
                var newValue = value.newValue;
                if (newValue == 1) {
                    rewardSlider.setValue(2);
                } else if (newValue == 9) {
                    rewardSlider.setValue(8);
                }
            });
        })
        $("[data-slider-id='smiley-range-slider']").change(function() {
            var value = $(this).val();
            var smileyCount = Math.pow(2, value);
            $(this).closest(".smile-slider").find(".slider-value").text(smileyCount);
            $(this).closest(".smile-slider").find(".range-slider-meter").removeClass("active");
            $(this).closest(".smile-slider").find(".range-slider-meter[data-value='" + value + "']").addClass("active");
            $(this).closest(".smile-slider").find(".range-slider-smiley").removeClass("active");
            $(this).closest(".smile-slider").find(".range-slider-smiley[data-value='" + value + "']").addClass("active");
        });
    }
    if ($(".cards__slider").length) {
        $(".cards__slider").each(function(elem, slider) {
            var rewardSlider = new Slider(slider, {
                formatter: function(value) {
                    return Math.pow(2, (value + 1));
                },
                tooltip: 'hide'
            }).on('change', function(value) {
                var newValue = value.newValue;
                if (newValue <= 0) {
                    rewardSlider.setValue(1);
                } else if (newValue >= 7) {
                    rewardSlider.setValue(7);
                }
            });
        });
        $("[data-slider-id='smiley-range-slider']").change(function() {
            var value = parseInt($(this).val()) + 1;
            var max = $(this).data("slider-max");
            var percent = (value / max) * 100;
            var progressBar = $(this).closest(".smile-slider").find(".icon-progress-bar .active-bar");
            var smileyCount = Math.pow(2, value) * 1000;
            $(this).closest(".smile-slider").find(".slider-value").text(smileyCount);
            $(this).closest(".smile-slider").find(".range-slider-meter").removeClass("active");
            $(this).closest(".smile-slider").find(".range-slider-meter[data-value='" + value + "']").addClass("active");
            $(this).closest(".smile-slider").find(".range-slider-smiley").removeClass("active");
            $(this).closest(".smile-slider").find(".range-slider-smiley[data-value='" + value + "']").addClass("active");
            $(this).closest(".smile-slider").find(".icon-progress-div .icon-bar").each(function() {
                if ($(this).data("value") <= percent) {
                    $(this).addClass("active");
                    progressBar.css("width", $(this).data("value") + '%');
                } else {
                    $(this).removeClass("active");
                }
            });
        });
        $("[data-slider-id='smiley-range-slider']").change();
    }
    if (loanCalSlider.length) {
        loanCalSlider.slick({
            dots: false,
            nav: false,
            autoplay: false,
            infinite: false,
            arrows: false,
            accessibility: false,
            draggable: false,
            swipe: false,
            fade: true,
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(".loan-cal-nav-slide").removeClass("slick-current");
            $(".loan-cal-nav-slide[data-slick-goto='" + nextSlide + "']").addClass("slick-current");
            if (loanCalTabNavSlider.hasClass("slick-initialized")) {
                loanCalTabNavSlider.slick("slickGoTo", nextSlide);
            }
        })
    }
    if (loanCalTabNavSlider.length) {
        if (loanCalTabNavSlider.children().length > 3 || $(window).width() < 576) {
            loanCalTabNavSlider.slick({
                dots: false,
                variableWidth: true,
                nav: false,
                arrows: false,
                infinite: true,
                slidesToShow: 3,
                draggable: false,
                swipe: false,
                accessibility: false,
                focusOnSelect: true,
                prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
                nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        variableWidth: false,
                    }
                }]
            }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                var targetSlide = nextSlide;
                loanCalSlider.slick("slickGoTo", targetSlide);
            });
        }
        $('.loan-cal-nav-slide').click(function() {
            $(".loan-cal-nav-slide").removeClass("slick-current");
            $(this).addClass("slick-current");
            var targetSlide = $(this).data("slick-goto");
            loanCalSlider.slick("slickGoTo", targetSlide);
        });
    }
    if ($(".loan-chart").length) {
        Array.from(document.querySelectorAll(".loan-chart")).forEach(function(elem) {
            var options = {
                series: [70],
                chart: {
                    height: '100%',
                    type: 'radialBar',
                },
                fill: {
                    colors: ['#ea9522'],
                    opacity: 1
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '80%',
                        }
                    },
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: [""],
            };
            var chart = new ApexCharts(elem, options);
            chart.render();
        });
        var event;
        if (typeof(Event) === 'function') {
            event = new Event('resize');
        } else {
            event = document.createEvent('Event');
            event.initEvent('resize', true, true);
        }
        window.dispatchEvent(event);
    }
    if ($threeBoxSlider) {
        $threeBoxSlider.slick({
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if ($FourBoxesSlider) {
        $FourBoxesSlider.slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if ($sixBoxSlider.length > 0 && $(window).width() < 767) {
        $sixBoxSlider.slick({
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>'
        });
    }
    if ($GreySmallBoxesSlider.length > 0 && $(window).width() < 767) {
        $GreySmallBoxesSlider.slick({
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>'
        });
    }
    if (boardDirectorsSlider) {
        boardDirectorsSlider.slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            autoplay: true,
            speed: 600,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if ($(window).width() < 767) {
        if ($('.board-directors-main').length) {
            $('.board-directors-main').slick({
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
                nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
                autoplay: true,
                speed: 600,
                pauseOnHover: true,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
        }
    }
    if (contributingLogoSlider) {
        contributingLogoSlider.slick({
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 5
                }
            }, {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if ($fuelingCardSlider) {
        $fuelingCardSlider.slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if (featureListSlider.length) {
        featureListSlider.slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if (contactListSlider.length) {
        contactListSlider.slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if (contentBoxSlider.length) {
        contentBoxSlider.slick({
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 769,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 576,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if (accountListingSlider.length) {
        accountListingSlider.slick({
            autoplay: false,
            speed: 600,
            pauseOnHover: true,
            infinite: true,
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            variableWidth: true,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        if ($('.account-listing-slide').length <= 3) {
            accountListingSlider.addClass('act-slide');
        }
        if ($('.account-listing-slide').length == 3) {
            accountListingSlider.slick('slickGoTo', 1);
        }
        if ($('.account-listing-slide').length == 2) {
            accountListingSlider.slick('slickGoTo', 1);
        }
        $(".accounts-filter .btn-link").on("click", function(e) {
            e.preventDefault();
            $(".accounts-filter .btn-link").removeClass("active");
            $(this).addClass("active");
            var filterClass = ".filter-" + $(this).data("filter");
            accountListingSlider.slick('slickUnfilter');
            accountListingSlider.slick('slickFilter', filterClass);
            accountListingSlider.removeClass('act-slide');
            if ($('.account-listing-slide').length <= 3) {
                accountListingSlider.addClass('act-slide');
            }
            if ($('.account-listing-slide').length == 3) {
                accountListingSlider.slick('slickGoTo', 1);
            }
            if ($('.account-listing-slide').length == 2) {
                accountListingSlider.slick('slickGoTo', 1);
            }
        });
        var mHeight = 0;
        $(".account-list-item .card-content").each(function() {
            if (mHeight < $(this).outerHeight()) {
                mHeight = $(this).outerHeight();
            }
        });
        var $loc = window.location.href;
        var $hash = window.location.hash.substr(1);
        $('.accounts-filter li').each(function() {
            if ($(this).find('a').attr('data-filter') == $hash) {
                $(this).find('a').click();
            } else {
                return;
            }
        });
    }
    if (accountFilterSlider.length && $(window).width() < 576) {
        accountFilterSlider.slick({
            autoplay: false,
            speed: 600,
            pauseOnHover: true,
            infinite: false,
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var targetSlide = nextSlide;
            accountFilterSlider.find(".slick-slide").eq(targetSlide).find(".btn-link").click();
        });
        $(".accounts-filter .btn-link").on("click", function(e) {
            e.preventDefault();
            $(".accounts-filter .btn-link").removeClass("active");
            $(this).addClass("active");
            var filterClass = ".filter-" + $(this).data("filter");
            accountListingSlider.slick('slickUnfilter');
            accountListingSlider.slick('slickFilter', filterClass);
        });
    }
    if (moreRelatedSlider.length) {
        moreRelatedSlider.slick({
            accessibility: false,
            draggable: false,
            dots: false,
            nav: false,
            arrows: true,
            prevArrow: '<a href="javascript:" class="arrow-prev nav-slider-left" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next nav-slider-right" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            fade: false,
            autoplay: false,
            pauseOnHover: true,
            slidesToShow: 3,
            responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }]
        })
    }
    if (fullWidthSlider.length) {
        fullWidthSlider.slick({
            autoplay: true,
            speed: 600,
            pauseOnHover: true,
            infinite: true,
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '200px',
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '150px',
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    if (smilesCtaSlider.length) {
        smilesCtaSlider.slick({
            autoplay: true,
            speed: 600,
            infinite: false,
            pauseOnHover: true,
            arrows: true,
            dots: false,
            fade: true,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
        });
    }
    if (mblbankingTxtSlider.length) {
        mblbankingTxtSlider.slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            vertical: true,
            autoplay: true,
            speed: 600,
            focusOnSelect: true,
            adaptiveHeight: true,
            draggable: false,
            asNavFor: mblbankingImgSlider
        });
        mblbankingImgSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            focusOnSelect: false,
            draggable: false,
            asNavFor: mblbankingTxtSlider
        });
        $('.mobile-go-txt-list li').hover(function() {
            $(this).trigger('click');
        });
    }
    if (mblbankingTxtSliderv2.length) {
        mblbankingTxtSliderv2.slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            vertical: true,
            autoplay: true,
            speed: 600,
            infinite: false,
            focusOnSelect: true,
            adaptiveHeight: true,
            draggable: true,
            prevArrow: '<a href="javascript:" class="arrow-prev nav-slider-left" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next nav-slider-right" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            asNavFor: mblbankingImgSliderv2,
            responsive: [{
                breakpoint: 767.98,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        mblbankingImgSliderv2.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            focusOnSelect: false,
            draggable: true,
        });
    }
    if (customersReviewsTxtSlider.length) {
        customersReviewsTxtSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            speed: 600,
            fade: true,
            infinite: true,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            asNavFor: customersReviewsImgSlider
        });
        customersReviewsImgSlider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            autoplay: true,
            speed: 600,
            infinite: true,
            variableWidth: true,
            asNavFor: customersReviewsTxtSlider,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '0'
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }]
        });
        if ($('ul.customers-reviews-img-slider li').length <= 3) {
            $(".customers-reviews-img-slider .slick-track").addClass("transformNone");
        }
    }
    if (svgIconBoxSlider.length) {
        svgIconBoxSlider.slick({
            slidesToShow: 3,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            infinite: true,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '0',
                    arrows: true,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    arrows: true,
                }
            }]
        });
    }
    if (ctaBanner.length) {
        ctaBanner.slick({
            accessibility: false,
            draggable: false,
            dots: true,
            nav: false,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            slidesToShow: 1
        })
    }
    if (MidLargeSlider.length) {
        MidLargeSlider.slick({
            accessibility: false,
            draggable: false,
            dots: false,
            nav: true,
            infinite: false,
            arrows: true,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            fade: true,
            autoplay: false,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            slidesToShow: 1
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var targetToSlide = nextSlide;
            $(".mid-large-top-nav li a").removeClass("activeslide");
            $('.mid-large-top-nav li a[data-slick-goto="' + targetToSlide + '"]').addClass("activeslide");
        });
        $(".mid-large-top-nav li a").click(function() {
            $(".mid-large-top-nav li a").removeClass("activeslide");
            $(this).addClass("activeslide");
            var moveToSlide = $(this).data("slick-goto");
            MidLargeSlider.slick("slickGoTo", moveToSlide);
        });
    }
    if (chairmanSlider.length) {
        var dotsValue = false;
        if ($(".chairman-slider .chairman-slide").length === 1) {
            dotsValue = false;
        } else {
            dotsValue = true;
        }
        chairmanSlider.slick({
            dots: dotsValue,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 800,
            slidesToShow: 1,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '80px'
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }]
        });
    }
    var socialSlider = $('.social-slider');
    if (socialSlider.length > 0) {
        setTimeout(function() {
            socialSlider.slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplayspeed: 2000,
                swipe: false,
                speed: 300,
                variableWidth: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<a href="javascript:" class="left-arrow-slider"><i class="icon-left-arrow"></i></a>',
                nextArrow: '<a href="javascript:" class="right-arrow-slider"><i class="icon-right-arrow"></i></a>',
                responsive: [{
                    breakpoint: 1199.98,
                    settings: {
                        swipe: true,
                        slidesToShow: 4,
                    }
                }, {
                    breakpoint: 991.98,
                    settings: {
                        swipe: true,
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 767.98,
                    settings: {
                        infinite: true,
                        swipe: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
        }, 5000);
    }
    if (paybillTabs.length) {
        $('.paybill-tabs a').click(function() {
            sameHeight();
            $('.paybill-tabs a').removeClass('active');
            $(this).addClass('active');
            var tagid = $(this).data('tag');
            $('.paybill-tabpanel').removeClass('active');
            $('#' + tagid).addClass('active');
            $(payBillTabSlider).slick('refresh');
        });
        if ($(window).width() < 767) {
            $('.paybill-tabs ul').slick({
                dots: false,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 6000,
                speed: 800,
                slidesToShow: 1,
                adaptiveHeight: true,
                focusOnSelect: true,
                prevArrow: '<a href="javascript:" class="arrow-prev nav-slider-left" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
                nextArrow: '<a href="javascript:" class="arrow-next nav-slider-right" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            });
        }
        payBillTabSlider.slick({
            dots: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            speed: 800,
            slidesToShow: 4,
            adaptiveHeight: true,
            focusOnSelect: true,
            prevArrow: '<a href="javascript:" class="arrow-prev nav-slider-left" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next nav-slider-right" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            }, {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    }
    if (duesBillSlider.length) {
        duesBillSlider.slick({
            dots: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            speed: 800,
            slidesToShow: 1,
            adaptiveHeight: true,
            focusOnSelect: true,
            prevArrow: '<a href="javascript:" class="arrow-prev nav-slider-left" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next nav-slider-right" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>'
        });
    }
    if ($(window).width() < 767) {
        if (cashbackSlider.length) {
            cashbackSlider.slick({
                dots: false,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 6000,
                speed: 800,
                slidesToShow: 1,
                adaptiveHeight: true,
                focusOnSelect: true,
                asNavFor: cashbackTxtSlider,
            });
            cashbackTxtSlider.slick({
                dots: false,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 1000,
                slidesToShow: 1,
                focusOnSelect: false,
                fade: true,
                asNavFor: cashbackSlider,
                adaptiveHeight: true,
                draggable: false,
                swipe: false,
                prevArrow: '<a href="javascript:" class="arrow-prev nav-slider-left" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
                nextArrow: '<a href="javascript:" class="arrow-next nav-slider-right" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            });
        }
    }
    if (fourBoxSlider.length) {
        fourBoxSlider.slick({
            dots: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            speed: 800,
            slidesToShow: 4,
            adaptiveHeight: true,
            focusOnSelect: true,
            prevArrow: '<a href="javascript:" class="arrow-prev nav-slider-left" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next nav-slider-right" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            }, {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    }
    faqTabSlider.slick({
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        speed: 800,
        slidesToShow: 5,
        adaptiveHeight: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1920,
            settings: {
                swipe: true,
                slidesToShow: 5,
            }
        }, {
            breakpoint: 1199.98,
            settings: {
                swipe: true,
                slidesToShow: 3,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }]
    });
    if ($(window).width() < 768) {
        faqBoxSlider.slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 800,
            adaptiveHeight: true,
            focusOnSelect: true,
            prevArrow: '<a href="javascript:" class="left-arrow-slider"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="right-arrow-slider"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }]
        });
        if ($(menuBottomSlider).length > 0) {
            menuBottomSlider.slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 300,
                slidesToShow: 2,
                centerMode: false,
                focusOnSelect: true,
                prevArrow: '<a href="javascript:" class="left-arrow-slider"><i class="icon-left-arrow"></i></a>',
                nextArrow: '<a href="javascript:" class="right-arrow-slider"><i class="icon-right-arrow"></i></a>',
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                    }
                }]
            });
        }
    }
    if (HelpMeListingSlider.length) {
        HelpMeListingSlider.slick({
            autoplay: false,
            speed: 600,
            pauseOnHover: true,
            infinite: true,
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            focusOnSelect: true,
            variableWidth: true,
            prevArrow: '<a href="javascript:" class="arrow-prev" aria-label="Left Arrow"><i class="icon-left-arrow"></i></a>',
            nextArrow: '<a href="javascript:" class="arrow-next" aria-label="right Arrow"><i class="icon-right-arrow"></i></a>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }]
        });
        var mHeight = 0;
        $(".help-me-listing-slider .account-list-item .card-content").each(function() {
            if (mHeight < $(this).outerHeight()) {
                mHeight = $(this).outerHeight();
            }
        });
        $(".help-me-listing-slider .account-list-item .card-content").css("min-height", mHeight);
    }
    setTimeout(function() {
        var mediaGalleryDet = $(".media-gallery-detail").isotope({
            selector: ".col-md-6",
            filter: "*",
        });
        $(".filter-listing").on("click", "a", function() {
            $(".filter-listing a").removeClass("active");
            $(this).addClass("active");
            var filterValue = $(this).data("filter")
            mediaGalleryDet.isotope({
                filter: filterValue
            });
        });
    }, 1000);
    $('body').addClass('loaded');
    $('.loading-text').fadeOut();
    $('#loader').fadeOut();
    $('.loading-bg').fadeOut();
    $('#loader-wrapper').fadeOut();
    homeBannerInit();
    sameHeight();
    animateElements();
    mapPageScroll();
    setInterval(function() {
        $('.menu-open').toggleClass('active');
    }, 2000)
    setTimeout(function() {
        scrollTo(0, -1);
    }, 0);
    setTimeout(function() {
        var cardListIso = $(".cards-isotop").isotope({
            selector: ".col-md-4",
            filter: "*",
        });
        $(".cards-filter").on("click", ".btn-link", function() {
            $(".cards-filter .btn-link").removeClass("active");
            $(this).addClass("active");
            var filterValue = $(this).data("filter");
            cardListIso.isotope({
                filter: filterValue
            });
        });
    }, 1000);
    if (($(window).width() <= 767)) {
        $('ul.nav>li').removeClass('active');
        $('ul.nav>li>a').removeClass('active');
        $('.top-nav>ul>li .menu-inner-wrap').hide();
        $('.main-toggle-btn').removeClass('active');
    }
    if ($('.has-selectbox').length > 0) {
        $('.selectpicker').on('show.bs.select', function(e) {
            $(".has-selectbox").removeClass("z-index-1");
            $(this).parents(".has-selectbox").addClass("z-index-1");
        });
    }
});
$(document).keydown(function(event) {
    if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
        event.preventDefault();
    }
});
$(window).bind('mousewheel DOMMouseScroll', function(event) {
    if (event.ctrlKey == true) {
        event.preventDefault();
    }
});
String.prototype.format = String.prototype.f = function() {
    var s = this,
        i = arguments.length;
    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

function changeurl(url, title) {
    var new_url = '/' + url;
    window.history.pushState('data', title, new_url);
}
$(window).on("load", function() {
    GetFormData();
    $(".mob-num").keydown(function(e) {
        var oldvalue = $(this).val();
        var field = this;
        setTimeout(function() {
            if (field.value.indexOf('971') !== 0) {
                $(field).val(oldvalue);
            }
        }, 1);
    });
});

function GetFormData() {
    var urlobj = getUrlVars('token');
    $("div[data-sf-role='email-text-field-container']").hide()
    if (urlobj != undefined && urlobj.token !== undefined) {
        $("form").attr("action", $("form").attr("action") + "&&token=" + urlobj.token);
        $.ajax({
            type: 'post',
            url: "/classic/formbuilder/Index",
            data: {
                token: urlobj.token
            },
            dataType: "json",
            success: function(response) {
                $("#Email-1").val(response.email);
                if (response.data.FormResponse != null) {
                    console.log(response.data);
                    $.each(response.data.FormResponse[0], function(i, item) {
                        if (item.ControlType == "Checkboxes" || item.ControlType == "Multiple choice") {
                            $("input[value='" + item.Response + "']").prop("checked", true);
                        } else if (item.ControlType == "Textbox") {
                            $element = $("p:contains('" + item.Title + "')").closest("div").find("input");
                            if ($element.length > 0) {
                                $element.val(item.Response);
                            }
                        } else if (item.ControlType == "Dropdown list") {
                            $element = $("p:contains('" + item.Title + "')").closest("div").find("select");
                            $element.selectpicker('val', item.Response)
                        }
                    });
                }
            },
            error: function(error) {
                console.log(error);
            }
        });
    }
}

function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}