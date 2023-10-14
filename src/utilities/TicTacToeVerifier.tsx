const possibilites = [
    [1,2,3], [4,5,6], [7,8,9],
    [7,4,1], [8,5,2], [9,6,3],
    [1,5,9], [7,5,3]
];

const allEqual = (arr: Array<any>) => arr.every(val => val === arr[0]);

const TicTacToeVerifier = {
    verify (table: Array<any>) {
        for (const possibility of possibilites) {
            const reduced = possibility.map(i => table[i - 1]);
            if (!reduced.includes(null) && allEqual(reduced)) return true;
        }
        return false;
    }
};

export default TicTacToeVerifier;