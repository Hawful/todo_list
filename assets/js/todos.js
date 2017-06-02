//Check off todos by clicking

$("li").on("click", function(){
	$(this).toggleClass("completed")
});

$("span").on("click", function(){
	$(this).closest("li").remove();
})