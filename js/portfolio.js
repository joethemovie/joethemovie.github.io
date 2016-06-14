      $(document).ready(function(){
        //nav scroll functionality
        $('a[href^="#"]').click(function(){
          var target = $(this).attr('href');
          var strip = target.slice(1);
          var anchor = $("a[name='" + strip + "']");

          event.preventDefault();

          $('html, body').animate({
            scrollTop: anchor.offset().top

          }, 'slow');
        });

        //this happens when page loads
        $('#multiMediaContent').hide();
        $('#graphicDesignContent').hide();

        $('button#web').click(function(){
          $('#graphicDesignContent').hide();
          $('#multiMediaContent').hide();
          $('#webContent').show();
        });
        $('button#mm').click(function(){
          $('#graphicDesignContent').hide();
          $('#webContent').hide();
          $('#multiMediaContent').show();
        });
        $('button#gfx').click(function(){
          $('#webContent').hide();
          $('#multiMediaContent').hide();
          $('#graphicDesignContent').show();
        });

      });
