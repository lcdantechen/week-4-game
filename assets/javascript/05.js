

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
  //  var divChange = $('<div>');
  //  divChange.attr('data-let', divChange[i]);
  //}
  //console.log(divChange);
  var lockPics = false;
  var characterSelected = false;
  var characterToAttack = false;


  var obiWan = {
    health:120,
    attack: 8
  }
  var luke = {
    health:100,
    attack: 5
  } 
  var sidious = {
    health:150,
    attack: 20
  } 
  var maul = {
    health:180,
    attack: 25
  } 

  (".attack").click(function(){
     if (characterSelected !== false && characterToAttack !== false){

      

     }else{
      alert("Please pick your Character and Defender")
     }


  })

  /*$(".attack").click(function(){
    if (characterSelected === false){
      characterSelected = "obiWan";
       console.log(characterSelected)
      console.log(characterToAttack)
    } else if (characterSelected !== false && characterSelected !== "obiWan" ) {
      characterToAttack = "obiwan"
      obiWan.health -= luke.attack;
      console.log(obiWan);
      console.log(characterSelected)
      console.log(characterToAttack)
    }

  })*/


  $(".obi").click(function(){
      if (characterSelected === false){
        characterSelected = "obi";

        $('.characterPick').append(this);
        $('.enemies').append($('.images'));
        $('img').parents('.enemies').find('.profile').addClass('redBack');

         console.log("characterSelected/" + characterSelected)
         console.log("characterToAttack/" + characterToAttack)
        //characterSelected = true;
      } else if (characterSelected !== false && characterSelected !== "obi") {
        characterToAttack = "obi"
         console.log("characterSelected/" + characterSelected)
         console.log("characterToAttack/" + characterToAttack)
        $('.defender').append(this);
        $('img').parents('.defender').find('.profile').removeClass('redBack');

      }
    })

  $(".luke").click(function(){
    if (characterSelected === false){
      characterSelected = "luke";

      $('.characterPick').append(this);
      $('.enemies').append($('.images'));
      $('img').parents('.enemies').find('.profile').addClass('redBack');

        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
    } else if (characterSelected !== false && characterSelected !== "luke") {
      characterToAttack = "luke"
        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
      $('.defender').append(this);
      $('img').parents('.defender').find('.profile').removeClass('redBack');

    }
  })

  $(".sidious").click(function(){
    if (characterSelected === false){
      characterSelected = "sidious";

      $('.characterPick').append(this);
      $('.enemies').append($('.images'));
      $('img').parents('.enemies').find('.profile').addClass('redBack');

        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
    } else if (characterSelected !== false && characterSelected !== "sidious") {
      characterToAttack = "sidious"
        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
      $('.defender').append(this);
      $('img').parents('.defender').find('.profile').removeClass('redBack');

    }
  })

  $(".maul").click(function(){
    if (characterSelected === false){
      characterSelected = "maul";

      $('.characterPick').append(this);
      $('.enemies').append($('.images'));
      $('img').parents('.enemies').find('.profile').addClass('redBack');

        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
    } else if (characterSelected !== false && characterSelected !== "maul") {
      characterToAttack = "maul"
        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
      $('.defender').append(this);
      $('img').parents('.defender').find('.profile').removeClass('redBack');

    }
  })
     
  //var enemyHealth = 0;
  // var heroAttack = $('p').parents('.characterPick').find('.health').attr('value');
  //var heroHealth = $('p').parents('.characterPick').find('.health').data('num')
  //var enemyAttack = $('p').parents('.defender').find('.health').attr('value')
  //var enemyHealth = $('p').parents('.defender').find('.health').data('num')
  //console.log(heroAttack);
 /* var counterHattack = 0;
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

   }*/
   //console.log(firstPick);
    
   // firstPick = $(this).attr('src','');
   
    //$('.characterPick').append(firstPick);

  //})

  //   $('.btn').on('click', function(){
  //     //heroHealth = parseInt(heroHealth);
  //     //enemyAttack = parseInt(enemyAttack);
  //     console.log('button click');
  //     counterEattack = parseInt($('p').parents('.defender').find('.health').attr('value'));
  //     console.log("enemy attack power" + counterEattack);
  //     heroHealth = parseInt($('p').parents('.characterPick').find('.health').data('num'))
  //     heroHealth = heroHealth - counterEattack;
  //     //heroHealth = heroHealth - enemyAttack; doesn't work
  //     $('p').parents('.characterPick').find('.health').text(heroHealth);
  //     console.log("hero health " + heroHealth);
  //     console.log('-------------')

  //     counterHattack = counterHattack + parseInt($('p').parents('.characterPick').find('.health').attr('value'));
  //     console.log("hero attack power" + counterHattack);
  //     enemyHealth = parseInt($('p').parents('.defender').find('.health').data('num'))
  //     enemyHealth = enemyHealth - counterHattack;
  //     $('p').parents('.defender').find('.health').text(enemyHealth);
  //     console.log("enemy health" + enemyHealth);
  //     console.log('-------------')
    
    
  //     if (enemyHealth <= 0 ){
  //       console.log("enemy die");
  //     }

      

  // });
      
       













})