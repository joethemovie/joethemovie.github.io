$(document).ready(function(){$('a[href^="#"]').click(function(){var t=$(this).attr("href"),e=t.slice(1),n=$("a[name='"+e+"']");event.preventDefault(),$("html, body").animate({scrollTop:n.offset().top},"slow")}),$("#multiMediaContent").hide(),$("#graphicDesignContent").hide(),$("button#web").click(function(){$("#graphicDesignContent").hide(),$("#multiMediaContent").hide(),$("#webContent").show()}),$("button#mm").click(function(){$("#graphicDesignContent").hide(),$("#webContent").hide(),$("#multiMediaContent").show()}),$("button#gfx").click(function(){$("#webContent").hide(),$("#multiMediaContent").hide(),$("#graphicDesignContent").show()})});