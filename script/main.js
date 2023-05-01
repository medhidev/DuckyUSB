function ConvertToArduino()
{
    var userInsert = document.querySelector("#userContent").value;
    var output = document.querySelector("#code").value;
    switch (userInsert)
    {
        case "hello":
            output = "salut";
            break;
    }
}