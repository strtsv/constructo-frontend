/**
 * Global variables
 */
"use strict";
(function () {

  var userAgent = navigator.userAgent.toLowerCase(),
    initialDate = new Date(),

    $document = $(document),
    $window = $(window),
    $html = $("html"),
    $body = $("body"),

    isRtl = $html.attr("dir") === "rtl",
    isDesktop = $html.hasClass("desktop"),
    isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
    isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

    plugins = {
      pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : false,
      bootstrapTooltip: $("[data-toggle='tooltip']"),
      bootstrapModalDialog: $('.modal'),
      rdNavbar: $(".rd-navbar"),
      materialParallax: $(".parallax-container"),
      rdGoogleMaps: $(".rd-google-map"),
      mailchimp: $('.mailchimp-mailform'),
      campaignMonitor: $('.campaign-mailform'),
      rdMailForm: $(".rd-mailform"),
      rdInputLabel: $(".form-label"),
      regula: $("[data-constraints]"),
      captcha: $('.recaptcha'),
      owl: $(".owl-carousel"),
      swiper: $(".swiper-slider"),
      
      wow: $('.wow'),
     
      radio: $("input[type='radio']"),
      checkbox: $("input[type='checkbox']"),
      customToggle: $("[data-custom-toggle]"),
      counter: $(".counter"),
      
      pageLoader: $("#page-loader"),
    
      selectFilter: $("select"),
      
      customParallax: $(".custom-parallax"),
      
      stepper: $("input[type='number']"),
      customWaypoints: $('[data-custom-scroll-to]'),
      scroller: $(".scroll-wrap"),
      copyrightYear: $(".copyright-year")
    };

  /**
   * Initialize All Scripts
   */
  $(function () {
    var isNoviBuilder = window.xMode;

    /**
     * getSwiperHeight
     * @description  calculate the height of swiper slider basing on data attr
     */
    function getSwiperHeight(object, attr) {
      var val = object.attr("data-" + attr),
        dim;

      if (!val) {
        return undefined;
      }

      dim = val.match(/(px)|(%)|(vh)|(vw)$/i);

      if (dim.length) {
        switch (dim[0]) {
          case "px":
            return parseFloat(val);
          case "vh":
            return $window.height() * (parseFloat(val) / 100);
          case "vw":
            return $window.width() * (parseFloat(val) / 100);
          case "%":
            return object.width() * (parseFloat(val) / 100);
        }
      } else {
        return undefined;
      }
    }

    /**
     * toggleSwiperInnerVideos
     * @description  toggle swiper videos on active slides
     */
    function toggleSwiperInnerVideos(swiper) {
      var prevSlide = $(swiper.slides[swiper.previousIndex]),
        nextSlide = $(swiper.slides[swiper.activeIndex]),
        videos,
        videoItems = prevSlide.find("video");

      for (var i = 0; i < videoItems.length; i++) {
        videoItems[i].pause();
      }

      videos = nextSlide.find("video");
      if (videos.length) {
        videos.get(0).play();
      }
    }

    /**
     * toggleSwiperCaptionAnimation
     * @description  toggle swiper animations on active slides
     */
    function toggleSwiperCaptionAnimation(swiper) {
      var prevSlide = $(swiper.container).find("[data-caption-animate]"),
        nextSlide = $(swiper.slides[swiper.activeIndex]).find("[data-caption-animate]"),
        delay,
        duration,
        nextSlideItem,
        prevSlideItem;

      for (var i = 0; i < prevSlide.length; i++) {
        prevSlideItem = $(prevSlide[i]);

        prevSlideItem.removeClass("animated")
          .removeClass(prevSlideItem.attr("data-caption-animate"))
          .addClass("not-animated");
      }


      var tempFunction = function (nextSlideItem, duration) {
        return function () {
          nextSlideItem
            .removeClass("not-animated")
            .addClass(nextSlideItem.attr("data-caption-animate"))
            .addClass("animated");
          if (duration) {
            nextSlideItem.css('animation-duration', duration + 'ms');
          }
        };
      };

      for (var i = 0; i < nextSlide.length; i++) {
        nextSlideItem = $(nextSlide[i]);
        duration = nextSlideItem.attr('data-caption-duration');
        if (!isNoviBuilder) {
          setTimeout(tempFunction(nextSlideItem, duration), parseInt(delay, 10));

        } else {
          nextSlideItem.removeClass("not-animated")
        }
      }
    }


    /**
     * makeWaypointScroll
     * @description  init smooth anchor animations
     */
    function makeWaypointScroll(obj) {
      var $this = $(obj);
      if (!isNoviBuilder) {
        $this.on('click', function (e) {
          e.preventDefault();
          $("body, html").stop().animate({
            scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
          }, 1000, function () {
            $window.trigger("resize");
          });
        });
      }
    }


    /**
     * initSwiperWaypoints
     * @description  toggle waypoints on active slides
     */
    function initSwiperWaypoints(swiper) {
      var prevSlide = $(swiper.container),
        nextSlide = $(swiper.slides[swiper.activeIndex]);

      prevSlide
        .find('[data-custom-scroll-to]')
        .each(function () {
          var $this = $(this);
          makeWaypointScroll($this);
        });

      nextSlide
        .find('[data-custom-scroll-to]')
        .each(function () {
          var $this = $(this);
          makeWaypointScroll($this);
        });
    }

    /**
     * initOwlCarousel
     * @description  Init owl carousel plugin
     */
    function initOwlCarousel(c) {
      var aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"],
        values = [0, 576, 768, 992, 1200, 1600],
        responsive = {};

      for (var j = 0; j < values.length; j++) {
        responsive[values[j]] = {};
        for (var k = j; k >= -1; k--) {
          if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
            responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
          }
          if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
            responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
          }
          if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
            responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
          }
        }
      }

      // Enable custom pagination
      if (c.attr('data-dots-custom')) {
        c.on("initialized.owl.carousel", function (event) {
          var carousel = $(event.currentTarget),
            customPag = $(carousel.attr("data-dots-custom")),
            active = 0;

          if (carousel.attr('data-active')) {
            active = parseInt(carousel.attr('data-active'), 10);
          }

          carousel.trigger('to.owl.carousel', [active, 300, true]);
          customPag.find("[data-owl-item='" + active + "']").addClass("active");

          customPag.find("[data-owl-item]").on('click', function (e) {
            e.preventDefault();
            carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item"), 10), 300, true]);
          });

          carousel.on("translate.owl.carousel", function (event) {
            customPag.find(".active").removeClass("active");
            customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active")
          });
        });
      }

      c.owlCarousel({
        autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
        loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
        items: 1,
        rtl: isRtl,
        center: c.attr("data-center") === "true",
        dotsContainer: c.attr("data-pagination-class") || false,
        navContainer: c.attr("data-navigation-class") || false,
        mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
        nav: c.attr("data-nav") === "false",
        dots: c.attr("data-dots") === "true",
        dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
        animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
        animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
        responsive: responsive,
        navText: function () {
          try {
            return JSON.parse(c.attr("data-nav-text"));
          } catch (e) {
            return [];
          }
        }(),
        navClass: function () {
          try {
            return JSON.parse(c.attr("data-nav-class"));
          } catch (e) {
            return ['owl-prev', 'owl-next'];
          }
        }()
      });
    }

    /**
     * isScrolledIntoView
     * @description  check the element whas been scrolled into the view
     */
    function isScrolledIntoView(elem) {
      if (!isNoviBuilder) {
        return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
      }
      else {
        return true;
      }
    }

    /**
     * initOnView
     * @description  calls a function when element has been scrolled into the view
     */
    function lazyInit(element, func) {
      $document.on('scroll', function () {
        if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
          func.call();
          element.addClass('lazy-loaded');
        }
      }).trigger("scroll");
    }


    /**
     * Owl carousel
     * @description Enables Owl carousel plugin
     */
    if (plugins.owl.length) {
      for (var i = 0; i < plugins.owl.length; i++) {
        var c = $(plugins.owl[i]);
        plugins.owl[i].owl = c;

        initOwlCarousel(c);
      }
    }

    /**
     * Live Search
     * @description  create live search results
     */
    function liveSearch(options) {
      $('#' + options.live).removeClass('cleared').html();
      options.current++;
      options.spin.addClass('loading');
      $.get(handler, {
        s: decodeURI(options.term),
        liveSearch: options.live,
        dataType: "html",
        liveCount: options.liveCount,
        filter: options.filter,
        template: options.template
      }, function (data) {
        options.processed++;
        var live = $('#' + options.live);
        if ((options.processed === options.current) && !live.hasClass('cleared')) {
          live.find('> #search-results').removeClass('active');
          live.html(data);
          setTimeout(function () {
            live.find('> #search-results').addClass('active');
          }, 50);
        }
        options.spin.parents('.rd-search').find('.input-group-addon').removeClass('loading');
      })
    }

    /**
     * attachFormValidator
     * @description  attach form validation to elements
     */
    function attachFormValidator(elements) {
      for (var i = 0; i < elements.length; i++) {
        var o = $(elements[i]), v;
        o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
        v = o.parent().find(".form-validation");
        if (v.is(":last-child")) {
          o.addClass("form-control-last-child");
        }
      }

      elements
        .on('input change propertychange blur', function (e) {
          var $this = $(this), results;

          if (e.type !== "blur") {
            if (!$this.parent().hasClass("has-error")) {
              return;
            }
          }

          if ($this.parents('.rd-mailform').hasClass('success')) {
            return;
          }

          if ((results = $this.regula('validate')).length) {
            for (i = 0; i < results.length; i++) {
              $this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error")
            }
          } else {
            $this.siblings(".form-validation").text("").parent().removeClass("has-error")
          }
        })
        .regula('bind');

      var regularConstraintsMessages = [
        {
          type: regula.Constraint.Required,
          newMessage: "The text field is required."
        },
        {
          type: regula.Constraint.Email,
          newMessage: "The email is not a valid email."
        },
        {
          type: regula.Constraint.Numeric,
          newMessage: "Only numbers are required"
        },
        {
          type: regula.Constraint.Selected,
          newMessage: "Please choose an option."
        }
      ];


      for (var i = 0; i < regularConstraintsMessages.length; i++) {
        var regularConstraint = regularConstraintsMessages[i];

        regula.override({
          constraintType: regularConstraint.type,
          defaultMessage: regularConstraint.newMessage
        });
      }
    }

    /**
     * isValidated
     * @description  check if all elemnts pass validation
     */
    function isValidated(elements, captcha) {
      var results, errors = 0;

      if (elements.length) {
        for (var j = 0; j < elements.length; j++) {

          var $input = $(elements[j]);
          if ((results = $input.regula('validate')).length) {
            for (k = 0; k < results.length; k++) {
              errors++;
              $input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
            }
          } else {
            $input.siblings(".form-validation").text("").parent().removeClass("has-error")
          }
        }

        if (captcha) {
          if (captcha.length) {
            return validateReCaptcha(captcha) && errors === 0
          }
        }

        return errors === 0;
      }
      return true;
    }

    /**
     * validateReCaptcha
     * @description  validate google reCaptcha
     */
    function validateReCaptcha(captcha) {
      var captchaToken = captcha.find('.g-recaptcha-response').val();

      if (captchaToken.length === 0) {
        captcha
          .siblings('.form-validation')
          .html('Please, prove that you are not robot.')
          .addClass('active');
        captcha
          .closest('.form-wrap')
          .addClass('has-error');

        captcha.on('propertychange', function () {
          var $this = $(this),
            captchaToken = $this.find('.g-recaptcha-response').val();

          if (captchaToken.length > 0) {
            $this
              .closest('.form-wrap')
              .removeClass('has-error');
            $this
              .siblings('.form-validation')
              .removeClass('active')
              .html('');
            $this.off('propertychange');
          }
        });

        return false;
      }

      return true;
    }

    /**
     * onloadCaptchaCallback
     * @description  init google reCaptcha
     */
    window.onloadCaptchaCallback = function () {
      for (var i = 0; i < plugins.captcha.length; i++) {
        var $capthcaItem = $(plugins.captcha[i]);

        grecaptcha.render(
          $capthcaItem.attr('id'),
          {
            sitekey: $capthcaItem.attr('data-sitekey'),
            size: $capthcaItem.attr('data-size') ? $capthcaItem.attr('data-size') : 'normal',
            theme: $capthcaItem.attr('data-theme') ? $capthcaItem.attr('data-theme') : 'light',
            callback: function (e) {
              $('.recaptcha').trigger('propertychange');
            }
          }
        );
        $capthcaItem.after("<span class='form-validation'></span>");
      }
    };

    /**
     * Init Bootstrap tooltip
     * @description  calls a function when need to init bootstrap tooltips
     */
    function initBootstrapTooltip(tooltipPlacement) {
      if (window.innerWidth < 576) {
        plugins.bootstrapTooltip.tooltip('dispose');
        plugins.bootstrapTooltip.tooltip({
          placement: 'bottom'
        });
      } else {
        plugins.bootstrapTooltip.tooltip('dispose');
        plugins.bootstrapTooltip.tooltip({
          placement: tooltipPlacement
        });
      }
    }

    /**
     * Google ReCaptcha
     * @description Enables Google ReCaptcha
     */
    if (plugins.captcha.length) {
      $.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
    }

    /**
     * Copyright Year
     * @description  Evaluates correct copyright year
     */
    if (plugins.copyrightYear.length) {
      plugins.copyrightYear.text(initialDate.getFullYear());
    }

    /**
     * Is Mac os
     * @description  add additional class on html if mac os.
     */
    if (navigator.platform.match(/(Mac)/i)) $html.addClass("mac-os");

    /**
     * Is Firefox
     * @description  add additional class on html if mac os.
     */
    if (isFirefox) $html.addClass("firefox");

    /**
     * IE Polyfills
     * @description  Adds some loosing functionality to IE browsers
     */
    if (isIE) {
      if (isIE < 10) {
        $html.addClass("lt-ie-10");
      }

      if (isIE < 11) {
        if (plugins.pointerEvents) {
          $.getScript(plugins.pointerEvents)
            .done(function () {
              $html.addClass("ie-10");
              PointerEventsPolyfill.initialize({});
            });
        }
      }

      if (isIE === 11) {
        $html.addClass("ie-11");
      }

      if (isIE === 12) {
        $html.addClass("ie-edge");
      }
    }

    /**
     * Bootstrap Tooltips
     * @description Activate Bootstrap Tooltips
     */
    if (plugins.bootstrapTooltip.length) {
      var tooltipPlacement = plugins.bootstrapTooltip.attr('data-placement');
      initBootstrapTooltip(tooltipPlacement);

      $window.on('resize orientationchange', function () {
        initBootstrapTooltip(tooltipPlacement);
      })
    }

    /**
     * bootstrapModalDialog
     * @description Stap vioeo in bootstrapModalDialog
     */
    if (plugins.bootstrapModalDialog.length > 0) {
      for (var i = 0; i < plugins.bootstrapModalDialog.length; i++) {
        var modalItem = $(plugins.bootstrapModalDialog[i]);

        modalItem.on('hidden.bs.modal', $.proxy(function () {
          var activeModal = $(this),
            rdVideoInside = activeModal.find('video'),
            youTubeVideoInside = activeModal.find('iframe');

          if (rdVideoInside.length) {
            rdVideoInside[0].pause();
          }

          if (youTubeVideoInside.length) {
            var videoUrl = youTubeVideoInside.attr('src');

            youTubeVideoInside
              .attr('src', '')
              .attr('src', videoUrl);
          }
        }, modalItem));
      }
    }

    /**
     * RD Google Maps
     * @description Enables RD Google Maps plugin
     */
    if (plugins.rdGoogleMaps.length) {
      $.getScript("//maps.google.com/maps/api/js?key=AIzaSyAwH60q5rWrS8bXwpkZwZwhw9Bw0pqKTZM&sensor=false&libraries=geometry,places&v=3.7", function () {
        var head = document.getElementsByTagName('head')[0],
          insertBefore = head.insertBefore;

        head.insertBefore = function (newElement, referenceElement) {
          if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') !== -1 || newElement.innerHTML.indexOf('gm-style') !== -1) {
            return;
          }
          insertBefore.call(head, newElement, referenceElement);
        };

        for (var i = 0; i < plugins.rdGoogleMaps.length; i++) {
          var $googleMapItem = $(plugins.rdGoogleMaps[i]);

          lazyInit($googleMapItem, $.proxy(function () {
            var $this = $(this),
              styles = $this.attr("data-styles");

            $this.googleMap({
              marker: {
                basic: $this.data('marker'),
                active: $this.data('marker-active')
              },
              styles: styles ? JSON.parse(styles) : [],
              onInit: function (map) {
                var inputAddress = $('#rd-google-map-address');


                if (inputAddress.length) {
                  var input = inputAddress;
                  var geocoder = new google.maps.Geocoder();
                  var marker = new google.maps.Marker(
                    {
                      map: map,
                      icon: $this.data('marker-url')
                    }
                  );

                  var autocomplete = new google.maps.places.Autocomplete(inputAddress[0]);
                  autocomplete.bindTo('bounds', map);
                  inputAddress.attr('placeholder', '');
                  inputAddress.on('change', function () {
                    $("#rd-google-map-address-submit").trigger('click');
                  });
                  inputAddress.on('keydown', function (e) {
                    if (e.keyCode === 13) {
                      $("#rd-google-map-address-submit").trigger('click');
                    }
                  });


                  $("#rd-google-map-address-submit").on('click', function (e) {
                    e.preventDefault();
                    var address = input.val();
                    geocoder.geocode({'address': address}, function (results, status) {
                      if (status === google.maps.GeocoderStatus.OK) {
                        var latitude = results[0].geometry.location.lat();
                        var longitude = results[0].geometry.location.lng();

                        map.setCenter(new google.maps.LatLng(
                          parseFloat(latitude),
                          parseFloat(longitude)
                        ));
                        marker.setPosition(new google.maps.LatLng(
                          parseFloat(latitude),
                          parseFloat(longitude)
                        ))
                      }
                    });
                  });
                }
              }
            });
          }, $googleMapItem));
        }
      });
    }

    /**
     * Radio
     * @description Add custom styling options for input[type="radio"]
     */
    if (plugins.radio.length) {
      for (var i = 0; i < plugins.radio.length; i++) {
        $(plugins.radio[i]).addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
      }
    }

    /**
     * Checkbox
     * @description Add custom styling options for input[type="checkbox"]
     */
    if (plugins.checkbox.length) {
      for (var i = 0; i < plugins.checkbox.length; i++) {
        $(plugins.checkbox[i]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
      }
    }


    /**
     * UI To Top
     * @description Enables ToTop Button
     */
    if (isDesktop && !isNoviBuilder) {
      $().UItoTop({
        easingType: 'easeOutQuart',
        containerClass: 'ui-to-top'
      });
    }

    /**
     * RD Navbar
     * @description Enables RD Navbar plugin
     */
    if (plugins.rdNavbar.length) {
      var aliaces, i, j, len, value, values, responsiveNavbar;

      aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"];
      values = [0, 576, 768, 992, 1200, 1600];
      responsiveNavbar = {};

      for (i = j = 0, len = values.length; j < len; i = ++j) {
        value = values[i];
        if (!responsiveNavbar[values[i]]) {
          responsiveNavbar[values[i]] = {};
        }
        if (plugins.rdNavbar.attr('data' + aliaces[i] + 'layout')) {
          responsiveNavbar[values[i]].layout = plugins.rdNavbar.attr('data' + aliaces[i] + 'layout');
        }
        if (plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout')) {
          responsiveNavbar[values[i]]['deviceLayout'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout');
        }
        if (plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on')) {
          responsiveNavbar[values[i]]['focusOnHover'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on') === 'true';
        }
        if (plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height')) {
          responsiveNavbar[values[i]]['autoHeight'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height') === 'true';
        }

        if (isNoviBuilder) {
          responsiveNavbar[values[i]]['stickUp'] = false;
        } else if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up')) {
          responsiveNavbar[values[i]]['stickUp'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up') === 'true';
        }

        if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset')) {
          responsiveNavbar[values[i]]['stickUpOffset'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset');
        }
      }


      plugins.rdNavbar.RDNavbar({
        anchorNav: !isNoviBuilder,
        stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
        responsive: responsiveNavbar,
        callbacks: {
          onStuck: function () {
            var navbarSearch = this.$element.find('.rd-search input');

            if (navbarSearch) {
              navbarSearch.val('').trigger('propertychange');
            }
          },
          onDropdownOver: function () {
            return !isNoviBuilder;
          },
          onUnstuck: function () {
            if (this.$clone === null)
              return;

            var navbarSearch = this.$clone.find('.rd-search input');

            if (navbarSearch) {
              navbarSearch.val('').trigger('propertychange');
              navbarSearch.trigger('blur');
            }

          }
        }
      });


      if (plugins.rdNavbar.attr("data-body-class")) {
        document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class");
      }
    }


    /**
     * Swiper
     * @description  Enable Swiper Slider
     */
    if (plugins.swiper.length) {
      for (var i = 0; i < plugins.swiper.length; i++) {
        var s = $(plugins.swiper[i]);
        var pag = s.find(".swiper-pagination"),
          next = s.find(".swiper-button-next"),
          prev = s.find(".swiper-button-prev"),
          bar = s.find(".swiper-scrollbar"),
          swiperSlide = s.find(".swiper-slide"),
          autoplay = false;

        for (var j = 0; j < swiperSlide.length; j++) {
          var $this = $(swiperSlide[j]),
            url;

          if (url = $this.attr("data-slide-bg")) {
            $this.css({
              "background-image": "url(" + url + ")",
              "background-size": "cover"
            })
          }
        }

        swiperSlide.end()
          .find("[data-caption-animate]")
          .addClass("not-animated")
          .end();

        s.swiper({
          autoplay: s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
          direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
          effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
          speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
          keyboardControl: s.attr('data-keyboard') === "true",
          mousewheelControl: s.attr('data-mousewheel') === "true",
          mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
          nextButton: next.length ? next.get(0) : null,
          prevButton: prev.length ? prev.get(0) : null,
          pagination: pag.length ? pag.get(0) : null,
          paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
          paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          } : null : null,
          scrollbar: bar.length ? bar.get(0) : null,
          scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
          scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
          loop: isNoviBuilder ? false : s.attr('data-loop') !== "false",
          simulateTouch: s.attr('data-simulate-touch') && !isNoviBuilder ? s.attr('data-simulate-touch') === "true" : false,
          onTransitionStart: function (swiper) {
            toggleSwiperInnerVideos(swiper);
          },
          onTransitionEnd: function (swiper) {
            toggleSwiperCaptionAnimation(swiper);
          },
          onInit: function (swiper) {
            toggleSwiperInnerVideos(swiper);
            toggleSwiperCaptionAnimation(swiper);

            if (!isRtl) {
              $window.on('resize', function () {
                swiper.update(true);
              });
            }
          }
        });

        $window.on("resize", (function (s) {
          return function () {
            var mh = getSwiperHeight(s, "min-height"),
              h = getSwiperHeight(s, "height");
            if (h) {
              s.css("height", mh ? mh > h ? mh : h : h);
            }
          }
        })(s)).trigger("resize");
      }
    }

    /**
     * WOW
     * @description Enables Wow animation plugin
     */
    if ($html.hasClass("wow-animation") && plugins.wow.length && !isNoviBuilder && isDesktop) {
      new WOW().init();
    }


    /**
     * RD Input Label
     * @description Enables RD Input Label Plugin
     */
    if (plugins.rdInputLabel.length) {
      plugins.rdInputLabel.RDInputLabel();
    }

    /**
     * Regula
     * @description Enables Regula plugin
     */
    if (plugins.regula.length) {
      attachFormValidator(plugins.regula);
    }


    /**
     * MailChimp Ajax subscription
     */
    if (plugins.mailchimp.length) {
      for (i = 0; i < plugins.mailchimp.length; i++) {
        var $mailchimpItem = $(plugins.mailchimp[i]),
          $email = $mailchimpItem.find('input[type="email"]');

        // Required by MailChimp
        $mailchimpItem.attr('novalidate', 'true');
        $email.attr('name', 'EMAIL');

        $mailchimpItem.on('submit', $.proxy(function (e) {
          e.preventDefault();

          var $this = this;

          var data = {},
            url = $this.attr('action').replace('/post?', '/post-json?').concat('&c=?'),
            dataArray = $this.serializeArray(),
            $output = $("#" + $this.attr("data-form-output"));

          for (i = 0; i < dataArray.length; i++) {
            data[dataArray[i].name] = dataArray[i].value;
          }

          $.ajax({
            data: data,
            url: url,
            dataType: 'jsonp',
            error: function (resp, text) {
              $output.html('Server error: ' + text);

              setTimeout(function () {
                $output.removeClass("active");
              }, 4000);
            },
            success: function (resp) {
              $output.html(resp.msg).addClass('active');

              setTimeout(function () {
                $output.removeClass("active");
              }, 6000);
            },
            beforeSend: function (data) {
              // Stop request if builder or inputs are invalide
              if (isNoviBuilder || !isValidated($this.find('[data-constraints]')))
                return false;

              $output.html('Submitting...').addClass('active');
            }
          });

          return false;
        }, $mailchimpItem));
      }
    }


    /**
     * Campaign Monitor ajax subscription
     */
    if (plugins.campaignMonitor.length) {
      for (i = 0; i < plugins.campaignMonitor.length; i++) {
        var $campaignItem = $(plugins.campaignMonitor[i]);

        $campaignItem.on('submit', $.proxy(function (e) {
          var data = {},
            url = this.attr('action'),
            dataArray = this.serializeArray(),
            $output = $("#" + plugins.campaignMonitor.attr("data-form-output")),
            $this = $(this);

          for (i = 0; i < dataArray.length; i++) {
            data[dataArray[i].name] = dataArray[i].value;
          }

          $.ajax({
            data: data,
            url: url,
            dataType: 'jsonp',
            error: function (resp, text) {
              $output.html('Server error: ' + text);

              setTimeout(function () {
                $output.removeClass("active");
              }, 4000);
            },
            success: function (resp) {
              $output.html(resp.Message).addClass('active');

              setTimeout(function () {
                $output.removeClass("active");
              }, 6000);
            },
            beforeSend: function (data) {
              // Stop request if builder or inputs are invalide
              if (isNoviBuilder || !isValidated($this.find('[data-constraints]')))
                return false;

              $output.html('Submitting...').addClass('active');
            }
          });

          return false;
        }, $campaignItem));
      }
    }


    /**
     * RD Mailform
     * @version      3.2.0
     */
    if (plugins.rdMailForm.length) {
      var i, j, k,
        msg = {
          'MF000': 'Successfully sent!',
          'MF001': 'Recipients are not set!',
          'MF002': 'Form will not work locally!',
          'MF003': 'Please, define email field in your form!',
          'MF004': 'Please, define type of your form!',
          'MF254': 'Something went wrong with PHPMailer!',
          'MF255': 'Aw, snap! Something went wrong.'
        };

      for (i = 0; i < plugins.rdMailForm.length; i++) {
        var $form = $(plugins.rdMailForm[i]),
          formHasCaptcha = false;

        $form.attr('novalidate', 'novalidate').ajaxForm({
          data: {
            "form-type": $form.attr("data-form-type") || "contact",
            "counter": i
          },
          beforeSubmit: function (arr, $form, options) {
            if (isNoviBuilder)
              return;

            var form = $(plugins.rdMailForm[this.extraData.counter]),
              inputs = form.find("[data-constraints]"),
              output = $("#" + form.attr("data-form-output")),
              captcha = form.find('.recaptcha'),
              captchaFlag = true;

            output.removeClass("active error success");

            if (isValidated(inputs, captcha)) {

              // veify reCaptcha
              if (captcha.length) {
                var captchaToken = captcha.find('.g-recaptcha-response').val(),
                  captchaMsg = {
                    'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
                    'CPT002': 'Something wrong with google reCaptcha'
                  };

                formHasCaptcha = true;

                $.ajax({
                  method: "POST",
                  url: "bat/reCaptcha.php",
                  data: {'g-recaptcha-response': captchaToken},
                  async: false
                })
                  .done(function (responceCode) {
                    if (responceCode !== 'CPT000') {
                      if (output.hasClass("snackbars")) {
                        output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')

                        setTimeout(function () {
                          output.removeClass("active");
                        }, 3500);

                        captchaFlag = false;
                      } else {
                        output.html(captchaMsg[responceCode]);
                      }

                      output.addClass("active");
                    }
                  });
              }

              if (!captchaFlag) {
                return false;
              }

              form.addClass('form-in-process');

              if (output.hasClass("snackbars")) {
                output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
                output.addClass("active");
              }
            } else {
              return false;
            }
          },
          error: function (result) {
            if (isNoviBuilder)
              return;

            var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output")),
              form = $(plugins.rdMailForm[this.extraData.counter]);

            output.text(msg[result]);
            form.removeClass('form-in-process');

            if (formHasCaptcha) {
              grecaptcha.reset();
            }
          },
          success: function (result) {
            if (isNoviBuilder)
              return;

            var form = $(plugins.rdMailForm[this.extraData.counter]),
              output = $("#" + form.attr("data-form-output")),
              select = form.find('select');

            form
              .addClass('success')
              .removeClass('form-in-process');

            if (formHasCaptcha) {
              grecaptcha.reset();
            }

            result = result.length === 5 ? result : 'MF255';
            output.text(msg[result]);

            if (result === "MF000") {
              if (output.hasClass("snackbars")) {
                output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
              } else {
                output.addClass("active success");
              }
            } else {
              if (output.hasClass("snackbars")) {
                output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
              } else {
                output.addClass("active error");
              }
            }

            form.clearForm();

            if (select.length) {
              select.select2("val", "");
            }

            form.find('input, textarea').trigger('blur');

            setTimeout(function () {
              output.removeClass("active error success");
              form.removeClass('success');
            }, 3500);
          }
        });
      }
    }


    
    /**
     * Custom Toggles
     */
    if (plugins.customToggle.length) {
      for (var i = 0; i < plugins.customToggle.length; i++) {
        var $this = $(plugins.customToggle[i]);

        $this.on('click', $.proxy(function (event) {
          event.preventDefault();

          var $ctx = $(this);
          $($ctx.attr('data-custom-toggle')).add(this).toggleClass('active');
        }, $this));

        if ($this.attr("data-custom-toggle-hide-on-blur") === "true") {
          $body.on("click", $this, function (e) {
            if (e.target !== e.data[0]
              && $(e.data.attr('data-custom-toggle')).find($(e.target)).length
              && e.data.find($(e.target)).length === 0) {
              $(e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
            }
          })
        }

        if ($this.attr("data-custom-toggle-disable-on-blur") === "true") {
          $body.on("click", $this, function (e) {
            if (e.target !== e.data[0] && $(e.data.attr('data-custom-toggle')).find($(e.target)).length === 0 && e.data.find($(e.target)).length === 0) {
              $(e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
            }
          })
        }
      }
    }


    /**
     * jQuery Count To
     * @description Enables Count To plugin
     */
    if (plugins.counter.length) {
      for (var i = 0; i < plugins.counter.length; i++) {
        var $counterNotAnimated = $(plugins.counter[i]).not('.animated');
        $document.on("scroll", $.proxy(function () {
          var $this = this;

          if ((!$this.hasClass("animated")) && (isScrolledIntoView($this))) {
            $this.countTo({
              refreshInterval: 40,
              from: 0,
              to: parseInt($this.text(), 10),
              speed: $this.attr("data-speed") || 1000
            });
            $this.addClass('animated');
          }
        }, $counterNotAnimated))
          .trigger("scroll");
      }
    }


    /**
     * Material Parallax
     * @description Enables Material Parallax plugin
     */
    if (plugins.materialParallax.length) {
      if (!isNoviBuilder && !isIE && !isMobile) {
        plugins.materialParallax.parallax();
      } else {
        for (var i = 0; i < plugins.materialParallax.length; i++) {
          var parallax = $(plugins.materialParallax[i]),
            imgPath = parallax.data("parallax-img");

          parallax.css({
            "background-image": 'url(' + imgPath + ')',
            "background-attachment": "fixed",
            "background-size": "cover"
          });
        }
      }
    }

    /**
     * Select2
     * @description Enables select2 plugin
     */
    if (plugins.selectFilter.length) {
      var i;
      for (i = 0; i < plugins.selectFilter.length; i++) {
        var select = $(plugins.selectFilter[i]);

        select.select2({
          theme: "bootstrap"
        }).next().addClass(select.attr("class").match(/(input-sm)|(input-lg)|($)/i).toString().replace(new RegExp(",", 'g'), " "));
      }
    }

  
    /**
     * Bootstrap collapse
     *
     */
    var bootstrapCollapse = $('.calendar-box-list-view');
    bootstrapCollapse.collapse({
      toggle: false
    });

    $body.on("click", bootstrapCollapse, function (e) {
      bootstrapCollapse.collapse('hide');
    });

    /**
     * Stepper
     * @description Enables Stepper Plugin
     */
    if (plugins.stepper.length) {
      plugins.stepper.stepper({
        labels: {
          up: "",
          down: ""
        }
      });
    }

    /**
     * Custom Waypoints
     */
    if (plugins.customWaypoints.length) {
      var i;
      for (i = 0; i < plugins.customWaypoints.length; i++) {
        var $this = $(plugins.customWaypoints[i]);
        makeWaypointScroll($this);
      }
    }

    /**
     * JQuery mousewheel plugin
     * @description  Enables jquery mousewheel plugin
     */
    if (plugins.scroller.length) {
      for (var i = 0; i < plugins.scroller.length; i++) {
        var scrollerItem = $(plugins.scroller[i]);

        scrollerItem.mCustomScrollbar({
          theme: scrollerItem.attr('data-theme') ? scrollerItem.attr('data-theme') : 'minimal',
          scrollInertia: 100,
          scrollButtons: {enable: false}
        });
      }
    }

  });

  /**
   * Page loader
   * @description Enables Page loader
   */
  if (plugins.pageLoader.length) {
    $window.on("load", function () {
      setTimeout(function () {
        plugins.pageLoader.addClass("loaded");
        $window.trigger("resize");
      }, 50);
    });
  }

}());
