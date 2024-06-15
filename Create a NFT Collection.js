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