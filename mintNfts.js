/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs.
    The metadata values will be passed to the function as parameters. When the NFT is ready,
    you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.

function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an object to hold the metadata for the NFT
    let nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };

    // Store the created NFT object in our array
    nfts.push(nft);
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    // Loop through each NFT in our array
    nfts.forEach(function(nft, index) {
        // Print the metadata of the current NFT
        console.log(`NFT ${index + 1}: Name: ${nft.name}, Eye Color: ${nft.eyeColor}, Shirt Type: ${nft.shirtType}, Bling: ${nft.bling}`);
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line

mintNFT("NFT1", "blue", "hoodie", "diamond");
mintNFT("NFT2", "green", "t-shirt", "gold");

listNFTs();

console.log("Total NFTs minted:", getTotalSupply());
