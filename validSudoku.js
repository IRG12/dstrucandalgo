{
  /*

    ---Brute Force   
        Time complexity: O(1) ---> "Constant" because the borad has fixed dimensions
        Space complexity: O(1) ---> "Constant" because the borad has fixed dimensions
        
        // validate rows----> iterate through rows first(which is each array)
        for (let i = 0; i < board.length; i++) {
            const set = new Set();
            //iterate through columns(which is each value in each array)
            for(let j = 0; j < board[i].length; j++) {
                const cell = board[i][j];
                if(cell === '.') continue;
                // set checks for duplicates and returns false if so
                if(set.has(cell)) return false;
                set.add(cell);
            }
        }
        
        
        for (let i = 0; i < board.length; i++) {
            const set = new Set();
            for(let j = 0; j < board[i].length; j++) {
                // validate columns next---->we do the same iteration but we switch [i]for[j] and [j]for[i] to traverse columns first then rows 
                const cell = board[j][i];
                if(cell === '.') continue;
                if(set.has(cell)) return false;
                set.add(cell);
            }
        }
        // Lastly, validate sub-boxes
        // We break down the 9*9 by grouping into 3*3 and travering them
        for (let i =0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                // iterate through each sub-box and to get values of small 3*3 
                const set = new Set();
                for (let k = 0; k < 3; k++) {
                        for(let l = 0; l < 3; l++) {
                            // formula to gain access to each cell
                            const cell = board[3 * i + k][3 * j + l]
                            if(cell === '.') continue;
                            if(set.has(cell)) return false;
                            set.add(cell);
                    }
                }
            }
        }
        return true
    };

    -------       -------

    const isValidSudoku = (board) => {
    
    Time complexity: O(1) ---> Still "Constant" because the borad has fixed dimensions
    Space complexity: O(1) ---> Still "Constant" because the borad has fixed dimensions

        More creative way. We are only going to iterate once
        For that matter , we are going to create three different Sets() to keep track of validated numbers
        formula to turn a 2D array into a 1D array ---> 3* j + i
        We combined that formula witha new one ---> (Math.floor(i/3) + Math.floor(j/3)) and get
        ---> const subBox = 3 * Math.floor(i/3) + Math.floor(j/3) ---> we get access to the small 3*3s
    
    const rows = [], cols = [], subBoxes = [];
    for (let i = 0; i < board.length; i++) {
        rows.push(new Set());
        cols.push(new Set());
        subBoxes.push(new Set());
    }
    
    for (let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            const traversedcCellBox = board[i][j];
            if(traversedcCellBox === '.') continue;
            const subBox = 3 * Math.floor(i/3) + Math.floor(j/3);
            if(rows[i].has(traversedcCellBox) || cols[j].has(traversedcCellBox) || subBoxes[subBox].has(traversedcCellBox) )
               return false;
            rows[i].add(traversedcCellBox);
            cols[j].add(traversedcCellBox);
            subBoxes[subBox].add(traversedcCellBox);
        }
    }
    
    return true
    
};

*/
}
