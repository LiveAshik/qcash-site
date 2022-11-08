$(function () {

    /******************************************************************/
    //Start Login Form Validation
    /********************************************************************/

    $(document).ready(function () {
        
        $('#login-form').bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The email is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required and cannot be empty'
                        },
                        different: {
                            field: 'username',
                            message: 'The password cannot be the same as username'
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters'
                        }
                    }
                }
            }
        });
    });

    /******************************************************************/
//End Login Form Validation
    /******************************************************************/

    /******************************************************************/
    //Start Registration Form Validation
    /******************************************************************/

    $(document).ready(function () {

        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        ;

        function generateCaptcha() {
            $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));
        }
        ;

        generateCaptcha();

        $('#registerform').bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                firstname: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required and cannot be empty'
                        },
                        stringLength: {
                            min: 1,
                            max: 30,
                            message: 'The first name must be more than 6 and less than 30 characters long'
                       }
//                      ,
//                        regexp: {
//                            regexp: /^[a-zA-Z]+$/,
//                            message: 'The first name can only consist of alphabetical'
//                        }
                    }
                },
                lastname: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required and cannot be empty'
                        },
                        stringLength: {
                            min: 1,
                            max: 30,
                            message: 'The last name must be more than 1 and less than 30 characters long'
                       }
//                        ,
//                        regexp: {
//                            regexp: /^[a-zA-Z]+$/,
//                            message: 'The last name can only consist of alphabetical'
//                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required and cannot be empty'
                        },
                        different: {
                            field: 'username',
                            message: 'The password cannot be the same as username'
                        },
                        identical: {
                            field: 'vpassword',
                            message: 'Not match'
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters'
                        }
                    }
                },
                vpassword: {
                    validators: {
                        notEmpty: {
                            message: 'The Password is required and cannot be empty'
                        },
                        identical: {
                            field: 'password',
                            message: 'Not match'
                        }
                    }
                },
                datepicker: {
                    validators: {
                        notEmpty: {
                            message: 'The date of birth is required'
                        },
                        date: {
                            format: 'YYYY/MM/DD',
                            message: 'The date of birth is not valid'
                        }
                    }
                },
                zip: {
                    validators: {
                        regexp: {
                            regexp: /^\d{4}$/,
                            message: 'The Bangladesh zipcode must contain 4 digits'
                        }
                    }
                },
                address: {
                    validators: {
                        notEmpty: {
                            message: 'The Address is required and cannot be empty'
                        },
                        stringLength: {
                            min: 10,
                            message: 'The Address must be more than 10 characters long'
                        }
                    }
                },
                city: {
                    validators: {
                        notEmpty: {
                            message: 'The city is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z]+$/,
                            message: 'The city can only consist of alphabetical'
                        }
                    }
                },
                mobile: {
                    validators: {
                        notEmpty: {
                            message: 'The mobile number is required and cannot be empty'
                        },
                        stringLength: {
                            min: 11,
                            max: 11,
                            message: 'The Bangladesh mobile number must contain 11 digits'
                        },
                        regexp: {
                            regexp: /^[0-9]+$/,
                            message: 'The Bangladesh mobile number only consist of numeric'
                        }
                    }
                },
//                phone: {
//                    validators: {
//                        notEmpty: {
//                            message: 'The last name is required and cannot be empty'
//                        },
//                        stringLength: {
//                            min: 1,
//                            max: 30,
//                            message: 'The last name must be more than 1 and less than 30 characters long'
//                        },
//                        regexp: {
//                            regexp: /^[a-zA-Z]+$/,
//                            message: 'The last name can only consist of alphabetical'
//                        }
//                    }
//                },
//                captcha_code: {
//                    validators: {
//                        notEmpty: {
//                            message: 'The captcha code is required and cannot be empty'
//                        }
//                    }
//                },
//                captcha_code: {
//                    validators: {
//                        notEmpty: {
//                            message: 'The captcha code is required and cannot be empty'
//                        }
//                    }
//                },
                captcha: {
                    validators: {
                        callback: {
                            message: 'Wrong answer',
                            callback: function (value, validator, $field) {
                                // Determine the numbers which are generated in captchaOperation
                                var items = $('#captchaOperation').html().split(' '),
                                        sum = parseInt(items[0]) + parseInt(items[2]);
                                return value == sum;
                            }
                        }
                    }
                },
                terms: {
                    validators: {
                        notEmpty: {
                            message: 'This is required'
                        }
                    }
                }
            }
        })
                .on('error.form.bv', function (e) {
                    generateCaptcha();
                });
    });

    /******************************************************************/
    //End Registration Form Validation
    /******************************************************************/


    /******************************************************************/
    //Start Merchant Registration Form Validation
    /******************************************************************/
    $(document).ready(function () {

        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        ;

        function generateCaptcha() {
            $('#mcaptchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));
        }
        ;

        generateCaptcha();

        $('#Merchantregisterform').bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required and cannot be empty'
                        },
                        stringLength: {
                            min: 3,
                            max: 50,
                            message: 'The full name must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'The full name can consist of alphabetical characters and spaces only'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required and cannot be empty'
                        },
                        different: {
                            field: 'username',
                            message: 'The password cannot be the same as username'
                        },
                        identical: {
                            field: 'vpassword',
                            message: 'Not match'
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters'
                        }
                    }
                },
                vpassword: {
                    validators: {
                        notEmpty: {
                            message: 'The Password is required and cannot be empty'
                        },
                        identical: {
                            field: 'password',
                            message: 'Not match'
                        }
                    }
                },
                zip: {
                    validators: {
                        regexp: {
                            regexp: /^\d{4}$/,
                            message: 'The Bangladesh zipcode must contain 4 digits'
                        }
                    }
                },
                address: {
                    validators: {
                        notEmpty: {
                            message: 'The Address is required and cannot be empty'
                        },
                        stringLength: {
                            min: 10,
                            message: 'The Address must be more than 10 characters long'
                        }
                    }
                },
                city: {
                    validators: {
                        notEmpty: {
                            message: 'The city is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z]+$/,
                            message: 'The city can only consist of alphabetical'
                        }
                    }
                },
                mobile: {
                    validators: {
                        notEmpty: {
                            message: 'The mobile number is required and cannot be empty'
                        },
                        stringLength: {
                            min: 11,
                            max: 11,
                            message: 'The Bangladesh mobile number must contain 11 digits'
                        },
                        regexp: {
                            regexp: /^[0-9]+$/,
                            message: 'The Bangladesh mobile number only consist of numeric'
                        }
                    }
                },
                captcha: {
                    validators: {
                        callback: {
                            message: 'Wrong answer',
                            callback: function (value, validator, $field) {
                                // Determine the numbers which are generated in captchaOperation
                                var items = $('#mcaptchaOperation').html().split(' '),
                                        sum = parseInt(items[0]) + parseInt(items[2]);
                                return value == sum;
                            }
                        }
                    }
                },
                terms: {
                    validators: {
                        notEmpty: {
                            message: 'This is required'
                        }
                    }
                }
            }
        })
                .on('error.form.bv', function (e) {
                    generateCaptcha();
                });
    });





	//make menus drop automatically
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//hover




    // Toggle Left Menu
   jQuery('.menu-list > a').click(function() {
      
      var parent = jQuery(this).parent();
      var sub = parent.find('> ul');
      
      if(!jQuery('body').hasClass('left-side-collapsed')) {
         if(sub.is(':visible')) {
            sub.slideUp(200, function(){
               parent.removeClass('nav-active');
               jQuery('.main-content').css({height: ''});
               mainContentHeightAdjust();
            });
         } else {
            visibleSubMenuClose();
            parent.addClass('nav-active');
            sub.slideDown(200, function(){
                mainContentHeightAdjust();
            });
         }
      }
      return false;
   });

   function visibleSubMenuClose() {
      jQuery('.menu-list').each(function() {
         var t = jQuery(this);
         if(t.hasClass('nav-active')) {
            t.find('> ul').slideUp(200, function(){
               t.removeClass('nav-active');
            });
         }
      });
   }

   function mainContentHeightAdjust() {
      // Adjust main content height
      var docHeight = jQuery(document).height();
      if(docHeight > jQuery('.main-content').height())
         jQuery('.main-content').height(docHeight);
   }

   //  class add mouse hover
   jQuery('.custom-nav > li').hover(function(){
      jQuery(this).addClass('nav-hover');
   }, function(){
      jQuery(this).removeClass('nav-hover');
   });


   // Menu Toggle
   jQuery('.toggle-btn').click(function(){
       $(".left-side").getNiceScroll().hide();
       
       if ($('body').hasClass('left-side-collapsed')) {
           $(".left-side").getNiceScroll().hide();
       }
      var body = jQuery('body');
      var bodyposition = body.css('position');

      if(bodyposition != 'relative') {

         if(!body.hasClass('left-side-collapsed')) {
            body.addClass('left-side-collapsed');
            jQuery('.custom-nav ul').attr('style','');

            jQuery(this).addClass('menu-collapsed');

         } else {
            body.removeClass('left-side-collapsed chat-view');
            jQuery('.custom-nav li.active ul').css({display: 'block'});

            jQuery(this).removeClass('menu-collapsed');

         }
      } else {

         if(body.hasClass('left-side-show'))
            body.removeClass('left-side-show');
         else
            body.addClass('left-side-show');

         mainContentHeightAdjust();
      }

   });
   

   searchform_reposition();

   jQuery(window).resize(function(){

      if(jQuery('body').css('position') == 'relative') {

         jQuery('body').removeClass('left-side-collapsed');

      } else {

         jQuery('body').css({left: '', marginRight: ''});
      }

      searchform_reposition();

   });

   function searchform_reposition() {
      if(jQuery('.searchform').css('position') == 'relative') {
         jQuery('.searchform').insertBefore('.left-side-inner .logged-user');
      } else {
         jQuery('.searchform').insertBefore('.menu-right');
      }
   }




    /******************************************************************/
    //End Merchant Registration Form Validation
    /******************************************************************/


});
