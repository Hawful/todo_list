//Check off todos by clicking

//When using .on() recognize that it can only be applied to new elements
// if the elements are children of a selected parent element.

//For instance, this statement shows an example of a ul element as the parent
// who then in turns gives a function to every li under her.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i> </span>" + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});