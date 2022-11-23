const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

(async function () {
    const a = await Scene.root.findFirst('letter_a')
    const b = await Scene.root.findFirst('letter_b')
    const c = await Scene.root.findFirst('letter_c')
    const textObject = await Scene.root.findFirst('3dText0')

    let string1;
    string1 = "";

    await TouchGestures.onTap(a).subscribe(() => {
        string1 = string1 + "a"
        textObject.text = string1
    });

    await TouchGestures.onTap(b).subscribe(() => {
        string1 = string1 + "b"
        textObject.text = string1
    });

    await TouchGestures.onTap(c).subscribe(() => {
        string1 = string1 + "c"
        textObject.text = string1
    });
})();