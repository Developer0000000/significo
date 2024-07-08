export const splitText = (text) => {
    let clutter = '';
    text.split('').forEach((char) => {
        clutter += `<span>${char}</span>`;
    })
    return clutter;
};

export const splitText2 = (text, ref) => {
    text.split('').forEach((letter) => {
        if (letter === '\n') {
            ref.innerHTML += '<br>';
        } else {
            ref.innerHTML += `<span>${letter}</span>`;
        }
    });
};