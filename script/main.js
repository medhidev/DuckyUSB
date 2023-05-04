// window.addEventListener('load', function() {
//     // votre code ici, y compris l'appel à main()
//     main();
// });

function main() {
    let userInsert = document.querySelector("#userContent").value;

    let code =
    `
    // Script created by medhidev
    // beta v1.0

    #include "Keyboard.h"
    void typeKey(uint8_t key)
    {
        Keyboard.press(key);
        delay(50);
        Keyboard.release(key);
    }

    void setup()
    {
        // Begining the Keyboard stream
        Keyboard.begin();

        //Delay
        delay(500);

        ${convert(userInsert)}

        // Ending stream
        Keyboard.end();
    }
    
    /* Unused endless loop */
    void loop() {}
    `;

    // let converted = '';
    // for (let i = 0; i < userInsert.length; i++)
    // {
    //     if(userInsert[i] == '\n')
    //     {
    //         code += convert(converted) + ';\n';
    //         // reset
    //         converted = '';
    //     }
    //     else if(i < userInsert.length)
    //     {
    //         code += convert(converted) + ';\n';
    //     }

    //     converted += userInsert[i];
    // }

    document.querySelector("#code").value = code;
}

function convert(value)
{
    let commands = {
        'STRING': 'Keyboard.print(F(""))',
        'DELAY': 'delay()',
        'ENTER': 'typeKey(KEY_RETURN)',
        'CTRL': 'typeKey(KEY_CTRL)',
        'GUI': 'Keyboard.press(KEY_LEFT_GUI)',
        'ALT': 'typeKey(KEY_ALT)',
        'CAPSLOCK': 'typeKey(KEY_CAPSLOCK)',
        'TAB': 'typeKey(KEY_TAB)',
        'SPACE': 'typeKey(KEY_SPACE)',
        'ESC': 'typeKey(KEY_ESCAPE)',
        'DOWN': 'typeKey(KEY_DOWN_ARROW)',
        'UP': 'typeKey(KEY_UP_ARROW)',
        'RIGHT': 'typeKey(KEY_RIGHT_ARROW)',
        'LEFT': 'typeKey(KEY_LEFT_ARROW)',
        'DEL' : 'typeKey(KEY_DELETE)'
      };
      
      return commands[value] || value;
}

function qwerty(value)
{
    let mapping = {
      'a': 'q',
      'z': 'w',
      'e': 'e',
      'r': 'r',
      't': 't',
      'y': 'y',
      'u': 'u',
      'i': 'i',
      'o': 'o',
      'p': 'p',
      'q': 'a',
      's': 's',
      'd': 'd',
      'f': 'f',
      'g': 'g',
      'h': 'h',
      'j': 'j',
      'k': 'k',
      'l': 'l',
      'm': 'z',
      'w': 'x',
      'x': 'c',
      'c': 'v',
      'v': 'b',
      'b': 'n',
      'n': 'n',
      ',': 'm'
    };
    
    return mapping[value] || value;
}

function copier()
{
    let payload = document.querySelector("#code").value;

    const textToCopy = payload;
    navigator.clipboard.writeText(textToCopy)
    .then(() => {
        document.querySelector("#copy").value = 'Coller';
    })
    .catch(err => {
        console.error("Erreur lors de la copie dans le presse-papier : ", err);
    });
}
  