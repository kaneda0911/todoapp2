$(function(){
 var $list = $('.todoList');
 var $input = $('.todoInput');

 
 function addTodo(text){
  var $li = $('<li>');
  var $text = $('<span class="text">').text(text);
  var $checkbox = $('<input type="checkbox">');
  var $remove =$('<span class="remove">削除</span>');
  $li.append($checkbox).append($text).append($remove);

  $checkbox.click(function(){
    if($(this).is(':checked')){
      $li.addClass('complete');
    }
    else{
      $li.removeClass('complete');
    }
  });

  $remove.click(function(){
    if(windows.confirm('削除してよろしいですか？')){
      $li.remove();
      }
    });

  $list.append($li);
 }

 $('.todoForm').bind('submit',function(event){
   event.preventDefault();

   var text = $input.val();

   addTodo(text);

   $input.val('');
 });
});
