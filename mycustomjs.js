 $(document).ready(function(){
                //bring sidebar
           $("#side").click(function(){
              // $(".flex-sm-column").remove();
             // $(".d-flex").addClass("flex-sm-column");
              $(".d-flex").removeClass("flex-sm-column");
              $(".adminimg").removeClass("adminimgromve");

           });

           //bring sidebar to top
           $("#top").click(function(){
              // $(".flex-sm-column").remove();
           //  $(".d-flex").addClass("flex-sm-column");
           $(".my-row").removeClass('row');
            $(".mysidebar").addClass("container");
             $(".mysidebar").removeClass('col-md-2');
              $("#sidebar").removeClass('mysidebardesign');
              $(".my-main-content").addClass("container-fluid");
              $(".my-main-content").removeClass('col-md-10');
              $("#adminimg").removeClass('imgsidebar');
              $("#adminimg").addClass('imgsidebartop');
              
           });

           //hide sidebar
           $("#hide").click(function(){

            $(".my-row").removeClass('row');
            $(".mysidebar").addClass("container");
             $(".mysidebar").removeClass('col-md-2');
              //$("#sidebar").removeClass('mysidebardesign');
             // $(".my-main-content").addClass("container-fluid");
             // $(".my-main-content").removeClass('col-md-10');
             $(".mysidebar").hide();
             
           });
            $("#bringsidebarbtn").click(function(){
            //$(".mysidebar").addClass("colors2");
            //$(".shows").show();
             $(".my-row").addClass('row');
            $(".mysidebar").removeClass("container");
             $(".mysidebar").addClass('col-md-2');
              $(".my-main-content").removeClass("container-fluid");
              $(".my-main-content").addClass('col-md-10');
               $("#sidebar").addClass('mysidebardesign');
                $("#adminimg").removeClass('imgsidebartop');
                $("#adminimg").addClass('imgsidebar');
             

            });
            $("#show").click(function(){
           $(".my-row").addClass('row');
            $(".mysidebar").removeClass("container");
             $(".mysidebar").addClass('col-md-2');
              $(".my-main-content").removeClass("container-fluid");
              $(".my-main-content").addClass('col-md-10');
              $("#sidebar").addClass('mysidebardesign');
               $("#adminimg").removeClass('imgsidebartop');
               $("#adminimg").addClass('imgsidebar');
               $(".mysidebar").show();
            });

           
        });