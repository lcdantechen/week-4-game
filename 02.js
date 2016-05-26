

$(document).ready(function(){
  //var obi = $('.obi')
  //var luke = $('.luke') 
  //var sidious = $('.sidious') 
  //var maul = $('.maul') 
  //console.log(obi);
  //console.log(luke);
  //console.log(sidious);
  //console.log(maul);
  //var divs = [obi, luke, sidious, maul];
  //console.log(divs)
   
  //for (var i = 0; i<divs.length; i++){
  //	var divChange = $('<div>');
  //	divChange.attr('data-let', divChange[i]);
  //}
  //console.log(divChange);
  var lockPics = false;
  var characterSelected = false;
  var heroAttack = $('p').parents('.characterPick').find('.health').attr('value')
  var heroHealth = $('p').parents('.characterPick').find('.health').data('num')
  var enemyAttack = $('p').parents('.defender').find('.health').attr('value')
  var enemyHealth = $('p').parents('.defender').find('.health').data('num')
  $('.profile').on('click', function(){

   if (characterSelected == false){
  // var firstPick = $(this).data('let');
	   $('.characterPick').append(this);
	   $('.enemies').append($('.images'));
	   $('img').parents('.enemies').find('.profile').addClass('redBack');

	   console.log(this);
	   characterSelected = true;
   }
     else if(characterSelected == true) {
   	
   	$('.defender').append(this);
   	$('img').parents('.defender').find('.profile').removeClass('redBack');

   }
   //console.log(firstPick);
    
   // firstPick = $(this).attr('src','');
   
    //$('.characterPick').append(firstPick);

  })

    $('.btn').on('click', function(){
      console.log('button click');
      heroHealth = heroHealth - enemyAttack;
      $('p').parents('.characterPick').find('.health').text(heroHealth);
      console.log(heroHealth);


    
  });














})