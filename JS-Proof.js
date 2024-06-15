/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

/*  create a variable to hold your NFT's
    this function will take in some values as parameters, create an
    NFT object using the parameters passed to it for its metadata, 
    and store it in the variable above.
*/

function mintNFT(nftName, nftDescription, nftImage, otherMetadata = {}) {
    // Create an NFT object with the provided metadata
    const nft = {
      nftName,
      nftDescription,
      nftImage,
      ...otherMetadata // Spread operator for additional properties
    };
  
    // Add the newly minted NFT to the nftStorage array
    nftStorage.push(nft);
    return nft; // Optionally return the created NFT object
  }
  
  // create a "loop" that will go through an "array" of NFT's
  // and print their metadata with console.log()
  function listNFTs() {
    if (nftStorage.length === 0) {
      console.log("No NFTs minted yet.");
      return;
    }
  
    for (const nft of nftStorage) {
      console.log("--- NFT Metadata ---");
      console.log("Name:", nft.nftName);
      console.log("Description:", nft.nftDescription);
      console.log("Image:", nft.nftImage);
      // Print other metadata properties as needed
      for (const key in nft) {
        if (key !== 'nftName' && key !== 'nftDescription' && key !== 'nftImage') {
          console.log(`${key}:`, nft[key]);
        }
      }
      console.log(""); // Add a blank line after each NFT's metadata
    }
  }  
  
  // print the total number of NFTs we have minted to the console
  function getTotalSupply() {
    return nftStorage.length;
  }
  
  // Create an array to store your NFTs
  let nftStorage = [];
  
  // Example usage:
  const nft1 = mintNFT("Cool Crypto Cat", "A rare and adorable cat NFT", "https://.../cat.png", { owner: "John Doe" });
  const nft2 = mintNFT("Space Ape Odyssey", "An ape astronaut exploring the cosmos", "https://.../ape.jpg");
  
  listNFTs(); // Print all minted NFTs
  console.log("Total NFTs:", getTotalSupply());
  