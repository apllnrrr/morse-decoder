const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbols = []
    let symAmount = expr.length/10
    let counter = 0
    for(let i =0; i<symAmount; i++){
      symbols.push(expr.slice(counter,counter+10))
      counter +=10
    }
    let morseLetters = []
    for(let k=0; k<symbols.length;k++){
        let letterInBin = ''
        letterInBin = symbols[k].replace(/^0+|0+$/, '')
        if(letterInBin.length%2 !=0){
            letterInBin += '0'
        }
        let letterInMorse =''
        for(let q=0; q<letterInBin.length-1; q=q+2){
            if(letterInBin.slice(q,q+2)==='10'){
              letterInMorse +='.'
            }
            else if(letterInBin.slice(q,q+2)==='11'){
                letterInMorse += '-'
            } else if(letterInBin.slice(q,q+2)==='**********'){
                letterInMorse += ' '
            }
        }
        morseLetters.push(letterInMorse)
    }
    let letters =''
    for(let w=0; w<morseLetters.length; w++){
      if(morseLetters[w] === ''){
        letters += ' '
      }
      else if(morseLetters[w] != ' '){
            letters += (MORSE_TABLE[morseLetters[w]])
      }
    }
    return letters
}

module.exports = {
    decode
}
