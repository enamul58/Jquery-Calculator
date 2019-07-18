
    $('#addition').click( function (){
        var firstNumber = Number($('#firstNumber').val());
        var secondNumber = Number($('#secondNumber').val());
        var result = firstNumber + secondNumber;
        $('#result').val(result);
    });

    $('#subtraction').click( function (){
        var firstNumber = Number($('#firstNumber').val());
        var secondNumber = Number($('#secondNumber').val());
        var result = firstNumber - secondNumber;
        $('#result').val(result);
    });

    $('#multiplication').click( function (){
        var firstNumber = Number($('#firstNumber').val());
        var secondNumber = Number($('#secondNumber').val());
        var result = firstNumber * secondNumber;
        $('#result').val(result);
    });

    $('#division').click( function (){
        var firstNumber = Number($('#firstNumber').val());
        var secondNumber = Number($('#secondNumber').val());
        var result = firstNumber / secondNumber;
        $('#result').val(result);
    });

    $('#remainder').click( function (){
        var firstNumber = Number($('#firstNumber').val());
        var secondNumber = Number($('#secondNumber').val());
        var result = firstNumber % secondNumber;
        $('#result').val(result);
    });

    function myFunction(){
        $('input[type=text]').val('');
    }
    // alert($('#h1').text());

     // $('#btn').click( function () {
     //    var firstName = $('#firstName').val();
     //    var lastName = $('#lastName').val();
     //    var fullName = firstName+' '+lastName;
     //    $('#fullName').val(fullName);
     // });

