var pageSize = 10;
var page = 0;
var tag = 'all';
var btnLoadMoreClick = false;
var tagsClick = false;
var keyword = '';
var noRecordText = '';
var allResultsText = '';
var culture = 'en';
$(document).ready(function() {
    if ($('.searchbar-sec').length > 0) {
        $('#btnLoadMore').hide();
        culture = $('#culture').val();
        pageSize = $('#pageSize').val();
        noRecordText = $('#hdnNoRecordText').val();
        allResultsText = $('#hdnAllResultsText').val();
        $('.filter-loader').hide();
        keyword = getParameterByName('searchQuery');
        $('.labelKeyword').text(keyword);
        $('#txtSearchResult').val(keyword);
        $('#btnSearchResult').click(function() {
            $('.filter-loader').show();
            keyword = $('#txtSearchResult').val();
            page = 0;
            tag = "all";
            tagsClick = false;
            btnLoadMoreClick = false;
            getSearchResult(keyword, pageSize, page, "all", culture);
        });
        $('#btnSearchResult').trigger('click');
        $('#txtSearchResult').on("keypress", function(e) {
            if (e.keyCode == 13) {
                $('#btnSearchResult').trigger('click');
            }
        });
        $('#mobileDropDown').change(function() {
            $('.filter-loader').show();
            tag = $(this).val();
            tagsClick = true;
            page = 0;
            btnLoadMoreClick = false;
            getSearchResult($('#txtSearchResult').val(), pageSize, 0, tag, culture);
        });
    }
    $('#btnSearch').click(function() {
        var url = $('#hdnUrl').val();
        var searchIndex = $('#hdnIndex').val();
        url += '?indexCatalogue=' + searchIndex + '&searchQuery=' + $('#txtSearch').val() + '&wordsMode=AllWords';
        window.location.href = url;
    });
    $('#txtSearch').on("keypress", function(e) {
        if (e.keyCode == 13) {
            $('#btnSearch').trigger('click');
        }
    });
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getSearchResult(keyword, pageSize, page, tags, culture) {
    $('.filter-loader').show();
    $('.labelKeyword').text(keyword);
    $.ajax({
        url: '/classic/Search/GetSearchResult?keyword=' + keyword + '&pageSize=' + pageSize + '&page=' + page + '&tags=' + tags + '&targetCulture=' + culture,
        type: 'get',
        dataType: "json",
        success: function(data) {
            var html = "",
                mblHtml = "";
            if (btnLoadMoreClick == false && tagsClick == false) {
                $('#searchResultContainer').html('');
                $('.tagsContainer').html('');
                $('#mobileDropDown').html('');
            }
            if (tagsClick) {
                $('#searchResultContainer').html('');
            }
            data = JSON.parse(data);
            if (data != null && data != undefined) {
                $('.labelKeyword').text(keyword);
                if (btnLoadMoreClick == false && tagsClick == false) {
                    html += '<li data-tags="all" class="tagList animate" data-animation="fadeInDown" data-duration="300"><a id = "all" data-filter="*" class="active" href = "javascript:;" > ' + allResultsText + '(' + data.totalCount + ')</a></li>';
                    mblHtml += '<option value="all">' + allResultsText + ' (' + data.totalCount + ')</option>';
                    $(data.lstTags).each(function(i, e) {
                        html += '<li data-tags="' + e + '" class="tagList animate" data-animation="fadeInDown" data-duration="400">';
                        html += ' <a data-filter=".productservice" href="javascript:;">' + e + '</a>';
                        html += '</li>';
                        mblHtml += '<option data-tags="' + e + '" value="' + e + '">' + e + '</option>';
                    });
                    $('.tagsContainer').append(html);
                    $('#mobileDropDown').append(mblHtml);
                    $('#mobileDropDown').selectpicker('refresh');
                }
                html = "";
                mblHtml = "";
                $(data.lstSearchObj).each(function(i, e) {
                    html += '<li class="element-item productservice">';
                    if (e.Link != "") {
                        html += '<a href="' + e.Link + '">';
                    } else {
                        html += '<a href="javascript:;">';
                    }
                    html += '<h5>' + e.Title + '</h5>';
                    if (e.Link != "") {
                        html += '<span class="link">' + e.Link;
                        html += '</span>';
                    }
                    html += '</a>';
                    html += '<p>' + e.Content + '</p>';
                    html += '</li>';
                });
                if (data.lstSearchObj == null) {
                    html += '<h5 class="font-weight-bold mt-5 text-1 text-center">' + noRecordText + '</h5>';
                }
                $('#searchResultContainer').append(html);
                animateElements();
                $('.tagList').unbind("click");
                $('.tagList').click(function() {
                    tag = $(this).data('tags');
                    tagsClick = true;
                    page = 0;
                    $(this).siblings().find('a').removeClass('active');
                    $(this).find('a').addClass('active');
                    btnLoadMoreClick = false;
                    getSearchResult($('#txtSearchResult').val(), pageSize, 0, tag, culture);
                });
                $('#searchResultContainer').css('height', '');
                if (data.nextCount > 0) {
                    $('#btnLoadMore').show();
                    $('#btnLoadMore').data('pageno', page);
                    $('#btnLoadMore').unbind('click');
                    $('#btnLoadMore').click(function() {
                        page = page + 1;
                        btnLoadMoreClick = true;
                        tagsClick = false;
                        getSearchResult($('#txtSearchResult').val(), pageSize, page, tag, culture);
                    });
                } else {
                    $('#btnLoadMore').hide();
                }
            }
            $('.filter-loader').hide();
        },
        error: function(err) {
            $('.filter-loader').hide();
        }
    });
}