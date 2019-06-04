
$(document).ready(function () {

    //Hide the div math div
    $("#divSum, #divFactorial, #divFizz-Buzz, #divReverse, #hrSum, #hrFactorial").hide();

    $("#btnCodeSum").click(function () {
        $("#divSum, #hrSum").toggle();
    });

    $("#btnCodeFactorial").click(function () {
        $("#divFactorial, #hrFactorial").toggle();
    });

    $("#btnCodeFizz-Buzz").click(function () {
        $("#divFizz-Buzz").toggle();
    });

    $("#btnCodeReverse").click(function () {
        $("#divReverse").toggle();
    });

    $("#Sumhide").click(function () {
        $("#divSum, #hrSum").hide();
    });

    $("#Factorialhide").click(function () {
        $("#divFactorial").hide();
    });

    $("#Fizz-Buzzhide").click(function () {
        $("#divFizz-Buzz").hide();
    });

    $("#Reversehide").click(function () {
        $("#divReverse").hide();
    });

    //Sum

    //step 1: Acquire the user input
    $("#btnMath").click(function () {

        var number1 = Number($("#number1").val());
        var number2 = Number($("#number2").val());
        var number3 = Number($("#number3").val());
        var number4 = Number($("#number4").val());
        var number5 = Number($("#number5").val());

        //step 2: Do somthing with it
        var sum = number1 + number2 + number3 + number4 + number5;

        var min = Math.min(number1, number2, number3, number4, number5);

        var max = Math.max(number1, number2, number3, number4, number5);

        var number = [number1, number2, number3, number4, number5];
        var total = 0;
        for (var i = 0; i < number.length; i++) {
            total += number[i];
        }
        var mean = total / number.length;

        var numbera = Number($("#number1").val());
        var numberb = Number($("#number2").val());
        var numberc = Number($("#number3").val());
        var numberd = Number($("#number4").val());
        var numbere = Number($("#number5").val());

        var multi = numbera * numberb * numberc * numberd * numbere;


        //step 3: Out the results to the screen
        $("#sum").text("Sum = " + sum);
        $("#min").text("Minimum number is " + min);
        $("#max").text("Maximum number is " + max);
        $("#mean").text("Mean is " + mean);
        $("#multi").text("Multiplied total is " + multi);

    });


    $("#btnClear").click(function () {
        $("#sum, #min, #max, #mean, #multi").text("");
        $("#number1, #number2, #number3, #number4, #number5").val("");
    });


    //Factorial

    $("#btnClear1").click(function () {
        $("#input").val("");
        $("#output").text("");
    });

    $("#btnCalc").click(function () {
        //Step 1: Get the user data
        var input = Number($("#input").val());

        //Step 2: Do something with it
        var output = input;

        if (input > 0) {
            for (var loop = input - 1; loop > 1; loop--) {
                output *= loop;
            }
        }
        else if (input == 0) {
            output = 1;
        }
        else {
            output = "undefined";
        }


        //Step 3: Inform the user
        $("#output").text("The factorial of " + input + " is " + output);

    });

    //FizzBuzz

    $("#btnMath1").click(function () {
        var input1 = +$("#num1").val();
        var input2 = +$("#num2").val();
        var output = "";

        for (var loop = 1; loop <= 100; loop++) {
            output += FizzBuzz(input1, input2, loop) + ", ";
        }

        //Lop off the trailing comma
        output = output.substr(0, output.length - 2);

        //Step 3: Output
        $("#output1").html(output);

    });


    $("#btnClear2").click(function () {
        $("#num1").val("");
        $("#num2").val("");
        $("#output1").text("");
    });


    function FizzBuzz(input1, input2, counter) {

        var fizzCondition = counter % input1 == 0 ? true : false;
        var buzzCondition = counter % input2 == 0 ? true : false;

        if (fizzCondition && buzzCondition) {
            return "<span class='Fizz-Buzz'>Fizz-Buzz</span>";
        }
        else if (fizzCondition) {
            return "<span class='Fizz'>Fizz</span>";
        }
        else if (buzzCondition) {
            return "<span class='Buzz'>Buzz</span>";
        }
        else {
            return counter;
        }
    }


    //Palindrome


    $("#btnCalc1").click(function () {
        let reversed = "";
        let nospaces_str = "";
        let nospaces_rev = "";

        //get value
        let str = document.getElementById('input1').value;
        nospaces_str = str.replace(/\s+/g, '').toLowerCase();
        nospaces_rev = Reverse(nospaces_str).toLowerCase();

        //compare values
        if (nospaces_str == nospaces_rev) {
            document.getElementById('output2').innerText = nospaces_str + " reversed = " + nospaces_rev + ", therefore " + nospaces_str + " is a palindrome.";
        }
        else {
            document.getElementById('output2').innerText = nospaces_str + " reversed = " + nospaces_rev + ", therefore " + nospaces_str + " is not a palindrome.";
        }



        function Reverse(str) {
            let reversed = "";
            for (var i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            return reversed;
        }

    });

    $("#btnClear4").click(function () {
        $("#input1").val("");
        $("#output2").text("");
        $("#IsPalindrome").prop("checked", false);
    });



    $('#myModal').on('hidden.bs.modal', function () {
        //use jquery to set the sum tab back to active
        $("#Factorial, #Fizz-Buzz, #Reverse").removeClass("active");
        $("#Sum").addClass("active");
    })



    $("#input, #num1, #num2, #number1, #number2, #number3, #number4, #number5").keypress(function (key) {
        var char = key.which;
        if (char >= 48 && char <= 57 || char === 45 && $(this).val() === "") {
            return true;
        }

        return false;
    });



});
