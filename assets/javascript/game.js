

$(document).ready(function(){
  
  var lockButton = false;
  var characterSelected = false;
  var characterToAttack = false;
  var allEnemyDead = false;
  var heroDead = false;
  var counterHattack = 0;




  var obi = {
    name: "Obi",
    health:120,
    attack: 8
  }
  var luke = {
    name: "Luke",
    health:100,
    attack: 5
  } 
  var sidious = {
    name: "Sidious",
    health:150,
    attack: 20
  } 
  var maul = {
    name: "Maul",
    health:180,
    attack: 25
  } 


  $(".attack").click(function(){
     if (characterSelected !== false && characterToAttack !== false){

        
        counterHattack = counterHattack + characterSelected.attack;
        characterToAttack.health -= counterHattack;
        
        if (characterToAttack.health > 0){
        characterSelected.health -= characterToAttack.attack;
        console.log(characterSelected.health);
        console.log(characterToAttack.health);
        console.log("my power increse/" + counterHattack);
        $('p').parents('.characterPick').find('.health').html(characterSelected.health);
        $('p').parents('.defender').find('.health').html(characterToAttack.health);
        $('.discription').html("You attacked &nbsp; " + characterToAttack.name + "&nbsp;for&nbsp;" + counterHattack + "&nbsp;damage.<br/>" + characterToAttack.name + "&nbsp;attacked you back for &nbsp;" + characterToAttack.attack)
        

      } else if (characterToAttack.health <= 0 && allEnemyDead === false){
          console.log("characterToAttack is dead");
          $('.defender').html("You have defeated &nbsp;" + characterToAttack.name + "&nbsp; Please select your next enemy!" );
          characterToAttack = false;
          $('.discription').html('')

        }

        if (characterSelected.health <= 0){
            heroDead = true;
            /*var b = $('<button>');
            b.addClass('restart');
            b.text("Restart");*/

          $('.discription').html("You been defeated...GAME OVER!!! ")
          $('.discription').append('</br><button class="restart">Restart</button>')
          //$('.discription').append(b)

        } 

        if (heroDead !== false){
          alert("Sorry Game is Over! Please restart the game!")
        }
        

     } 


     else{
      alert("Please pick your Character and Defender")
     }


  })
// this is very new, the dynamically created button need function below to make it work
  $('.discription').on('click','.restart',function(){
    //if($(this).hasClass('restart')){
        /*lockButton = false;
        characterSelected = false;
        characterToAttack = false;
        allEnemyDead = false;
        heroDead = false;
        counterHattack = 0;
        $(".characterPick, .enemies, .defender").empty();*/
        location.reload();
        // reload the page;
  });

 


  $(".obi").click(function(){
      if (characterSelected === false){
        characterSelected = obi;

        $('.characterPick').append(this);
        $('.enemies').append($('.images'));
        $('img').parents('.enemies').find('.profile').addClass('redBack');

         console.log("characterSelected/" + characterSelected)
         console.log("characterToAttack/" + characterToAttack)
        //characterSelected = true;
      } else if (characterSelected !== false && characterSelected !== obi) {
        characterToAttack = obi
         console.log("characterSelected/" + characterSelected)
         console.log("characterToAttack/" + characterToAttack)
        $('.defender').html(this);
        $('img').parents('.defender').find('.profile').removeClass('redBack');

      }
    })

  $(".luke").click(function(){
    if (characterSelected === false){
      characterSelected = luke;

      $('.characterPick').append(this);
      $('.enemies').append($('.images'));
      $('img').parents('.enemies').find('.profile').addClass('redBack');

        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
    } else if (characterSelected !== false && characterSelected !== luke) {
      characterToAttack = luke
        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
      $('.defender').html(this);
      $('img').parents('.defender').find('.profile').removeClass('redBack');

    }
  })

  $(".sidious").click(function(){
    if (characterSelected === false){
      characterSelected = sidious;

      $('.characterPick').append(this);
      $('.enemies').append($('.images'));
      $('img').parents('.enemies').find('.profile').addClass('redBack');

        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
    } else if (characterSelected !== false && characterSelected !== sidious) {
      characterToAttack = sidious
        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
      $('.defender').html(this);
      $('img').parents('.defender').find('.profile').removeClass('redBack');

    }
  })

  $(".maul").click(function(){
    if (characterSelected === false){
      characterSelected = maul;

      $('.characterPick').append(this);
      $('.enemies').append($('.images'));
      $('img').parents('.enemies').find('.profile').addClass('redBack');

        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
    } else if (characterSelected !== false && characterSelected !== maul) {
      characterToAttack = maul
        console.log("characterSelected/" + characterSelected)
        console.log("characterToAttack/" + characterToAttack)
      $('.defender').html(this);
      $('img').parents('.defender').find('.profile').removeClass('redBack');

    }
  })
     



})