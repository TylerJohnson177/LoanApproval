$(document).ready(function ()
{
    $("form").on("submit",calculation);
});

function calculation()
{
    event.preventDefault();

    //Gather information from the user

    let salary = parseInt( $("#salary").val() );
    let creditScore = parseInt( $("#creditScore").val() );
    let months = parseInt( $("#months").val() );

    //Determine the users salary

    if(salary >= 40000)
    {
        //determine the users credit score

        if(creditScore >= 600)
        {
            $("p#output").text("Loan Approved!");
        }
        else
        {
            //determine the amount of months the user has worked at current job

            if(months > 12)
            {
                $("p#output").text("Loan Approved!");
            }
            else
            {
                $("p#output").text("Loan Denied!");
            }
        }

    }
    else
    {
        //determine the users credit score

        if(creditScore >= 600)
        {
            //determine the amount of months the user has worked at current job

            if(months > 12)
            {
                $("p#output").text("Loan Approved!");
            }
            else
            {
                $("p#output").text("Loan Denied!");
            }
        }
        else
        {
            $("p#output").text("Loan Denied!");
        }
    }


}