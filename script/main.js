window.addEventListener('load', function() {
    // votre code ici, y compris l'appel à main()
    main();
});

function main() {
    // let userInsert = document.querySelector("#userContent").value;
    code =
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
    // let converted = '';
    // for (let i = 0; i < userInsert.length; i++) {
    //   converted += qwerty(userInsert[i]);
    // }

    code += 
    `
        // Ending stream
        Keyboard.end();
    }
    
    /* Unused endless loop */
    void loop() {}
    `;

    document.querySelector("#code").value = code;
}

function qwerty(value) {
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
  