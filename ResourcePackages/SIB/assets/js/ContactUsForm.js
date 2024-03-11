$(document).ready(function() {
    $("#generalRadio").prop('checked', true);
    var selectedFormType = "";
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var onlyLetters = /^[A-Za-z _]*[A-Za-z][A-Za-z _]*$/;
    var textAreaAlphaNumeric = /^[a-zA-Z0-9\s-.,'"?]*$/i;
    var textAreaAlphaNumericAR = /^[\u0621-\u064A\0-9 \s-.,'"?]*$/i;
    var phoneNumberRegex = /(^(05){1,2}(\d{8})$)/;
    var lettersAr = /^[\u0621-\u064A ]+$/;
    var alphaNumericAr = /^[\u0621-\u064A\0-9 ]+$/;
    var culture = $("#hdnCulture").val();
    if (culture === "ar") {
        onlyLetters = lettersAr;
        alphaNumeric = alphaNumericAr;
        textAreaAlphaNumeric = textAreaAlphaNumericAR;
    }
    var contactUsForm = $('#contact-form')
    if (contactUsForm.length > 0) {
        var key = $("#hdnSiteKey").val();
        var response = '';
        contactUsForm.formValidation({
            fields: {
                Fname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: onlyLetters,
                            message: ' '
                        }
                    }
                },
                Lname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: onlyLetters,
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
                mobile_number: {
                    validators: {
                        stringLength: {
                            max: 12,
                            message: ' '
                        },
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: /^\971[0-9]{9}/,
                            message: ' '
                        }
                    }
                },
                feedback: {
                    validators: {
                        regexp: {
                            regexp: textAreaAlphaNumeric,
                            message: ' '
                        },
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                CategoryType: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                agreement: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                }
            },
            onSuccess: function(e) {
                e.preventDefault();
                if (typeof(grecaptcha) != "undefined") {
                    response = grecaptcha.getResponse();
                }
                if (response.length == 0) {
                    $("#captcha-Container").next().remove();
                    $('<p style="color:red !important" class=error-captcha"><span class="glyphicon glyphicon-remove " ></span> Please fill up the captcha.</p>" ').insertAfter("#captcha-Container");
                    return false;
                } else {
                    $("#captcha-Container").next().remove();
                }
                var $form = $(e.target),
                    formId = '#' + $form[0].id;
                $(formId).addClass('loading').append('<div class="loader"></div>');
                var formData = $(formId).serialize() + "&response=" + response;
                $.ajax({
                    type: 'post',
                    url: "/classic/contactusform/contactusform",
                    data: formData,
                    success: function(response) {
                        $('.thanks').show();
                        $('html,body').animate({
                            scrollTop: $(".thanks").offset().top
                        }, 'slow');
                        if (response.message == "true") {
                            var fields = $(formId).data('formValidation').getOptions().fields,
                                $parent, $icon;
                            for (var field in fields) {
                                $parent = $('[name="' + field + '"]').parents('.form-group');
                            }
                            $('.alert-success').addClass('in');
                            $(formId).data('formValidation').resetForm(true);
                            $("input[type=text], textarea").val("");
                            $('.file-input-name').hide();
                            $('.selectpicker').prop('selectedIndex', 0);
                            $('.selectpicker').selectpicker('refresh');
                            $("#complainsRadio").prop('checked', true);
                            var agree = document.getElementsByName("agreement");
                            for (var i = 0; i < agree.length; i++)
                                agree[i].checked = false;
                            $(formId).data('formValidation').resetForm(true);
                            $(".thanks-div").show();
                            $(".error-div").hide();
                            $(".invalid-captcha-div").hide();
                        } else if (response.message == "invalid captcha") {
                            $(".thanks-div").hide();
                            $(".error-div").hide();
                            $(".invalid-captcha-div").show();
                        } else if (response.message == "Invalid mobile number") {
                            $(".thanks-div").hide();
                            $(".error-div").hide();
                            $(".invalid-captcha-div").hide();
                            alert("Invalid mobile number")
                        } else {
                            $(".thanks-div").hide();
                            $(".error-div").show();
                            $(".invalid-captcha-div").hide();
                        }
                        setTimeout(function() {
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            $('.thanks').hide();
                        }, 5000);
                        if (typeof(grecaptcha) != "undefined")
                            grecaptcha.reset();
                    },
                    failure: function(err) {
                        $(formId).removeClass('loading');
                        $(formId).find('.loader').remove();
                        if (typeof(grecaptcha) != "undefined")
                            grecaptcha.reset();
                    },
                    error: function(err) {
                        $(formId).removeClass('loading');
                        $(formId).find('.loader').remove();
                        if (typeof(grecaptcha) != "undefined")
                            grecaptcha.reset();
                    }
                });
            }
        });
    }
});