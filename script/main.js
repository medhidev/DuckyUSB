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
    `;

    code += line(userInsert, code);

    code += `
        // Ending stream
        Keyboard.end();
    }
    
    /* Unused endless loop */
    void loop() {}
    `;

    document.querySelector("#code").value = code;
}

function line(user, code)
{
    word = '';
    code += '\t';
    for(let i = 0; i < user.length; i++)
    {
        if(user[i] == '\n')
        {
            code += convert(word) + ';\n\t';
            word = '';
        }
        else
        {
            word += user[i];
        }
    }

    return code;
}

function convert(value)
{
    let commands = {
        'STRING': 'Keyboard.print(F(""))',
        'DELAY': 'delay()',
        'WHILE': `while ()
        {`,
        'END_WHILE': `
        }`,
        'IF': `if ()
        {`,
        'END_IF': `
        }`,
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
        'DEL' : 'typeKey(KEY_DELETE)',
        'CMD' : `
        Keyboard.press(KEY_LEFT_GUI);
        Keyboard.press('r');
        Keyboard.releaseAll();

        delay(500);
        Keyboard.print(F("c;d"));`
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
        let timeoutID = setTimeout(function() {
            document.querySelector("#copy").value = 'Copier';
        }, 2000);

    })
    .catch(err => {
        console.error("Erreur lors de la copie dans le presse-papier : ", err);
    });
}
  