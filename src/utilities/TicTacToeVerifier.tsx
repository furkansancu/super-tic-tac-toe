const TicTacToeVerifier = {
    verify (table: Array<any>, size: number = 9) {
        const algorithm = this.algorithm(size);
        for (const possibility of algorithm) {
            const reduced = possibility.map(i => table[i - 1]);
            if (!reduced.includes(null) && this.allEqual(reduced)) return true;
        }
        return false;
    },

    algorithm (size: number = 9) {
        const n = Math.sqrt(size);
        let possibilites = [];
        
        // Vertical rows
        for (let i = 0; i < n; i++) {
            let possibility = [];
            for (let k = i * n; k < (i + 1) * n; k++) possibility.push(k + 1);
            possibilites.push(possibility);
        }
    
        // Horizontal columns
        for (let i = 0; i < n; i++) {
            let possibility = [];
            for (let k = 0; k < n; k++) possibility.push(i + n * k + 1);
            possibilites.push(possibility);
        }
    
        // Cross lines
        let cross1_possibility = new Array(n).fill(null).map((v, i) => i * n + i + 1);
        possibilites.push(cross1_possibility);
    
        let cross2_possibility = new Array(n).fill(null).map((v, i) => size - (i + 1) * n + (i + 1));
        possibilites.push(cross2_possibility);
    
        return possibilites;
    },

    allEqual (arr: Array<any>) {
        return arr.every(val => val === arr[0])
    }
};

export default TicTacToeVerifier;