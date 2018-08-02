function countCode(string) {
    var found = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "c") {
            if (string[i + 1] === "o") {
                if (string[i + 3] === "e") {
                    found += 1;
                }
            }
        }
    }
    console.log(found);
}

// sting.match(/..../gi).length



countCode("aaacodebbb");  //-> 1 
countCode("codexxcode");  //-> 2 
countCode("cozexxcope");  //-> 2
countCode("pigcodecodecooecope"); //-> 4