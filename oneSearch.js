$(document).ready(function(){
	var text_list=['OneSearch Articles, Books & More',
                       'Articles',
                       'Books & Media (CSUF)',
                       'Books & Media (all CSU)',
                       'Course Reserves (CSUF)']    
        
    var url="https://csuf-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,"
    var tab=['everything','articles','books_local','books_csu','course_reserves']
    var search_scope=['EVERYTHING','articles','01CALS_FUL','01CALS','01CALS_FUL_CR']
    
    function submitSearch() {
            var currentText = document.getElementById("searchBox").value;

            var search = url+encodeURIComponent(currentText)+"&tab="+tab[0]+
                "&search_scope="+search_scope[0]+
                "&sortby=rank&vid=01CALS_FUL&lang=en_US&offset=0";
            window.location.href=search;  

      }
    function openAdvanced() {

        var search = "https://csuf-primo.hosted.exlibrisgroup.com/primo-explore/search?tab=everything&search_scope=EVERYTHING&sortby=rank&vid=01CALS_FUL&lang=en_US&mode=advanced&offset=0";
        window.location.href=search;

    }
    $("#searchBox").keyup(function(event){
        // Getting the current value of textarea
        var currentText = $(this).val(); 
        
        //detect enter key and submit url
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            submitSearch();
        }

        //add scoped links to dropdown
		$("#primoSearch").append('<div id="scopeLinks" ></div>')		
		if(currentText==null || currentText==undefined || currentText==""){
			$('#scopeLinks').remove();
			return
		}
        var list_of_urls=[];
        for ( var i = 0; i <tab.length; i++ ) {
            var temp=url+encodeURIComponent(currentText)+"&tab="+tab[i]+
                "&search_scope="+search_scope[i]+
                "&sortby=rank&vid=01CALS_FUL&lang=en_US&offset=0"
            list_of_urls.push(temp);
        } 
		$("#scopeLinks").empty("");
		for ( var i = 0; i <tab.length; i++ ) {
         $("#scopeLinks").append("<ul><li><a href="+list_of_urls[i]+">"+currentText+' <span _ngcontent-c0="" class="tinyMagnify"><svg _ngcontent-c0="" class="tinyMagnify" fit="" focusable="false" height="100%" preserveAspectRatio="xMidYMid meet" style="transform:scale(-1,1)" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg" y="264">              <path _ngcontent-c0="" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg></span> ' +text_list[i]+"</li></ul>");
		}
    });
    $("#advancedSearch").keyup(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            openAdvanced()
        }
    });
    $("#advancedSearch").click(function(){

        openAdvanced()

    });
    $("#primoSearchButton").keyup(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            submitSearch();
        }
    });
    $("#primoSearchButton").click(function(){

        submitSearch();

    });
});
