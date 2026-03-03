// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

// Factory function to create a pAequor organism
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,

    // Randomly mutates one base in the DNA
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randIndex];
      const dnaBases = ['A', 'T', 'C', 'G'];
      const newBases = dnaBases.filter(base => base !== currentBase);
      const newBase = newBases[Math.floor(Math.random() * newBases.length)];
      this.dna[randIndex] = newBase;
      return this.dna;
    },

    // Compares DNA with another pAequor object
    compareDNA(otherPAequor) {
      let matchCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          matchCount++;
        }
      }
      const percent = ((matchCount / this.dna.length) * 100).toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percent}% DNA in common`);
    },

    // Returns true if DNA has at least 60% C or G
    willLikelySurvive() {
      const count = this.dna.filter(base => base === 'C' || base === 'G').length;
      return (count / this.dna.length) >= 0.6;
    },

    // Returns the complementary DNA strand
    complementStrand() {
      return this.dna.map(base => {
        if (base === 'A') return 'T';
        if (base === 'T') return 'A';
        if (base === 'C') return 'G';
        if (base === 'G') return 'C';
      });
    }
  };
}

// Example: Create a single pAequor organism
const examplePA = pAequorFactory(1, mockUpStrand());
console.log(examplePA);
console.log("Complementary Strand:", examplePA.complementStrand());
console.log("Will likely survive?", examplePA.willLikelySurvive());
examplePA.mutate();
console.log("After mutation:", examplePA.dna);





