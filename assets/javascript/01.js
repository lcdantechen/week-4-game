

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
  //var heroAttack = $('p').parents('.characterPick').find('.health').attr('value')
  //var heroHealth = $('p').parents('.characterPick').find('.health').data('num')
  //var enemyAttack = $('p').parents('.defender').find('.health').attr('value')
  //var enemyHealth = $('p').parents('.defender').find('.health').data('num')
  var counterHattack = 0;
  var counterEattack = 0;
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
      //heroHealth = parseInt(heroHealth);
      //enemyAttack = parseInt(enemyAttack);
      console.log('button click');
      counterEattack = parseInt($('p').parents('.defender').find('.health').attr('value'));
      console.log("enemy attack power" + counterEattack);
      heroHealth = $('p').parents('.characterPick').find('.health').data('num') - counterEattack;
      //heroHealth = heroHealth - enemyAttack; doesn't work
      $('p').parents('.characterPick').find('.health').text(heroHealth);
      console.log("hero health " + heroHealth);

      counterHattack = counterHattack + parseInt($('p').parents('.characterPick').find('.health').attr('value'));
      console.log("hero attack power" + counterHattack);
      enemyHealth = $('p').parents('.defender').find('.health').data('num') - counterHattack;
      $('p').parents('.characterPick').find('.health').text(enemyHealth);
      console.log("enemy health" + enemyHealth);
    

      if (enemyHealth <= 0 ){
        console.log("enemy die");
      }



  });














})