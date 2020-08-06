
        function updateOutput() {
                
            $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#csspanel").val() + "</style></head><body>" + $("#htmlpanel").val() + "</body></html>");
            
            document.getElementById("outputpanel").contentWindow.eval($("#jspanel").val());
            
            
            
        }
        

        $(".buttons").hover(function() {

            $(this).addClass("highlighted");
        },function() {

            $(this).removeClass("highlighted");
        });

        $(".buttons").click(function() {

            $(this).toggleClass("active");
            $(this).removeClass("highlighted"); 

        var panelid = $(this).attr("id")+"panel";

        $("#" + panelid).toggleClass("hidden");

        var numberofactivepanels= (4-$(".hidden").length);
        //alert(numberofactivepanels);
            
        $(".panel").width(($(window).width()/numberofactivepanels)-10);


        });
        
        $(".panel").height($(window).height()-$("#header").height()-20);
        $(".panel").width(($(window).width()/2)-10);
        
    
        updateOutput();
        
        $("textarea").on('change keyup paste', function() {

            updateOutput();
            
            
        });