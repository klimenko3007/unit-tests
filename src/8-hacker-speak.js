export const hackerSpeak = (words) => {
  const newWords = words
    .replace(/[a]/gi, '4')
    .replace(/[e]/gi, '3')
    .replace(/[i]/gi, '1')
    .replace(/[o]/gi, '0')
    .replace(/[s]/gi, '5')
    return newWords
}


// export const hackerSpeak = (words) => {
//   const chars = {'a':'4', 'e':'3', 'i':'1', 'o':'0', 's':'5'}
//   const newWords = words.replace(/[aeios]/gi, m => chars[m])
//     return newWords
// }

// export const hackerSpeak = (words) => {
//   let newWords
//   for (let i = 0; i < words.length; i ++) {
//     if (words[i] === "a" || words[i] === "A"){
//       newWords[i] = "4";
//     } else if (words[i] === "e" || words[i] === "E"){
//       newWords[i] = "3";
//     } else if(words[i] === "i" || words[i] === "I"){
//       newWords[i] = "1";
//     } else if(words[i] === "o" || words[i] === "O"){
//       newWords[i] = "0";
//     } else if(words[i] === "s" || words[i] === "S"){
//         newWords[i] = "5";
//       }else {
//       newWords[i] = words[i]
//     }
//     return newWords
//   }
// }
